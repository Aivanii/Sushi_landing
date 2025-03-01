const Header = () => {
  return (
    <header>
      <nav className="flex justify-around text-white py-8 text-2xl bg-black z-20">
        <div>
          <a href="/">
            Roll Realms
          </a>
        </div>
        <div>
          <a href="/#menu">
            Меню
          </a>
        </div>
        <div>
          <a href="/dostavka">
            Доставка
          </a>
        </div>
        <div>88005553535</div>
        <div>Заказать звонок</div>
      </nav>
    </header>
  );
};

export default Header;
