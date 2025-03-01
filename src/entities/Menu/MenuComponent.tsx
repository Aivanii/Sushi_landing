import { Menu } from "../../app/index";

const MenuComponent = () => {
  return (
    <div className="mt-16 bg-white py-8" id = "menu">
      <h2 className="text-6xl text-center">Наше меню</h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {Menu.map((elem) => (
          <div key={elem.name} className="w-1/5 h-auto flex flex-col justify-center items-center shadow-lg rounded-sm  p-5 gap-y-2 mt-6">
            <img
              src={elem.img}
              alt={elem.name}
              className="w-64 h-64 object-cover "
            />
            <h4 className="text-3xl text-center">{elem.name}</h4>
            <p className="text-left">{elem.description}</p>
            <span className="pt-6">Количество: {elem.count}</span>
            <span>Цена: {elem.price} рублей</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuComponent;
