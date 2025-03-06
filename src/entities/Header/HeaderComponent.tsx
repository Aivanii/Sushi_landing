const Header = () => {
  const MoveAsidePanel = () => {
    document.querySelector("aside")?.classList.toggle("active");
  };

  return (
    <>
      <header>
        <nav
          className="flex justify-between p-4 md:justify-around text-white py-8 text-2xl bg-black z-20 items-center

      "
        >
          <div>
            <a href="/">Roll Realms</a>
          </div>
          <div className="hidden md:visible">
            <a href="/#menu">Меню</a>
          </div>
          <div className="hidden md:visible">
            <a href="/#delivery">Доставка</a>
          </div>
          <div className="hidden md:visible">
            <a href="/#contacts">+7 (923) 123-45-67</a>
          </div>
          <div>
            <button
              id="burgerMenu"
              className="flex gap-2 flex-col p-4 bg-white rounded-sm md:hidden cursor-pointer z-50 relative"
              onClick={MoveAsidePanel}
            >
              <div className="w-8 h-1 bg-black rounded-sm"></div>
              <div className="w-8 h-1 bg-black rounded-sm"></div>
              <div className="w-8 h-1 bg-black rounded-sm"></div>
            </button>
          </div>
        </nav>
      </header>
      <aside className="fixed top-0 left-full bg-blue w-dvw h-dvh bg-blue-500 z-40 transition">
        <nav
          className="flex justify-between p-4 md:justify-around text-white py-8 text-2xl bg-black z-20 items-center
          flex-col"
        >
          <div>
            <a href="/">Roll Realms</a>
          </div>
          <div className="hidden md:visible">
            <a href="/#menu">Меню</a>
          </div>
          <div className="hidden md:visible">
            <a href="/#delivery">Доставка</a>
          </div>
          <div className="hidden md:visible">
            <a href="/#contacts">+7 (923) 123-45-67</a>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Header;
