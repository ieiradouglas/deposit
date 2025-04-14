import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "@/components/ui/provider";
import { lazy, Suspense, PropsWithChildren } from "react";

//Importação das páginas...
const MenuBar = lazy(() => import("./components/MenuBar"));
const Login = lazy(() => import("./pages/Login"));
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
      <LayoutSemMenu>
        <Login />
      </LayoutSemMenu>
    ),
  },
  {
    path: "/inicio",
    element: (
      <LayoutComMenu>
        <Inicio />
      </LayoutComMenu>
    ),
  },
]);

function App() {
  return (
    <>
      <Provider>
        <Suspense fallback={<div>Carregando...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </Provider>
    </>
  );
}

export default App;
