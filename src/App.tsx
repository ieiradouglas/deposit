import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense, PropsWithChildren } from "react";

//Importação das páginas...
const MenuBar = lazy(() => import("./components/MenuBar"));
const Inicio = lazy(() => import("./pages/Inicio"));

const LayoutComMenu = ({ children }: PropsWithChildren) => (
  <>
    <MenuBar />
    <div>{children}</div>
  </>
);

const LayoutSemMenu = ({ children }: PropsWithChildren) => (
  <div>{children}</div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Carregando...</div>}>
        <LayoutComMenu>
          <Inicio />
        </LayoutComMenu>
      </Suspense>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
