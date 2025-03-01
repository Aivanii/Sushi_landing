import { NavLink } from "react-router";

const Header = () => {
  return (
    <header>
      <nav className="flex justify-around text-white py-8 text-2xl bg-black z-20">
        <div>
          <NavLink to="/" end>
            Roll Realms
          </NavLink>
        </div>
        <div>
          <NavLink to="/menu" end>
            Меню
          </NavLink>
        </div>
        <div>
          <NavLink to="/dostavka" end>
            Доставка
          </NavLink>
        </div>
        <div>88005553535</div>
        <div>Заказать звонок</div>
      </nav>
    </header>
  );
};

export default Header;
