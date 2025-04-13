export default function MenuBar() {
  return (
    <>
      <header className="flex justify-between p-2 w-full">
        <div className="flex  gap-6">
          <a>Logo</a>

          <nav className="flex gap-4">
            <a href="/">Inicio</a>
            <a href="">Produtos</a>
          </nav>
        </div>
        <div className="flex gap-4">
          <button>Entrar</button>
          <button>Registrar</button>
        </div>
      </header>
    </>
  );
}
