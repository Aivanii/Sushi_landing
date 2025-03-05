const Header = () => {
  return (
    <header>
      <nav className="flex justify-around text-white py-8 text-2xl bg-black z-20">
        <div>
          <a href="/">Roll Realms</a>
        </div>
        <div>
          <a href="/#menu">Меню</a>
        </div>
        <div>
          <a href="/#delivery">Доставка</a>
        </div>
        <div>
        <a href="/#contacts">+7 (923) 123-45-67</a>
          </div>
      </nav>
    </header>
  );
};

export default Header;
