const Header = () => {
  const MoveAsidePanel = () => {
    document.querySelector("aside")?.classList.toggle("active");
    document.querySelector("#nav-icon2")?.classList.toggle("open");
    
    document.querySelector("#burgerBtnSpan1")?.classList.toggle("rotate-45");
    document.querySelector("#burgerBtnSpan1")?.classList.toggle("mt-6");

    document.querySelector("#burgerBtnSpan2")?.classList.toggle("w-1");

    document.querySelector("#burgerBtnSpan3")?.classList.toggle("rotate-135");
    document.querySelector("#burgerBtnSpan3")?.classList.toggle("-mt-8");
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
              id="nav-icon2"
              className="fixed right-1"
              onClick={MoveAsidePanel}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </header>
      <aside className="fixed top-0 left-full bg-blue w-dvw h-dvh z-40 transition">
        <nav
          className="flex justify-around p-4 md:justify-around text-white py-8 text-2xl bg-black z-20 items-center
          flex-col w-full h-full"
        >
          <div>
            <a href="/">Roll Realms</a>
          </div>
          <div className="">
            <a href="/#menu">Меню</a>
          </div>
          <div className="">
            <a href="/#delivery">Доставка</a>
          </div>
          <div className="">
            <a href="/#contacts">+7 (923) 123-45-67</a>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Header;
