const OrderConditionsComponent = () => {
  return (
    <div className="bg-white text-black flex justify-center py-8 gap-16 text-2xl">
      <div className="w-4xs flex justify-center flex-col">
        <h3>Принимаем заказы:</h3>
        <img
          src="https://img.icons8.com/?size=100&id=16838&format=png&color=000000"
          alt="Часы работы"
          className="icon"
        />
        <span>пн-пт 9:00-21:00</span>
        <span>сб-вс 9:00-17:00</span>
      </div>
      <div className="w-0.5 h-3xs bg-black opacity-10"/>
      <div className="w-4xs flex justify-center flex-col">
        <h3>Бесплатная доставка:</h3>
        <img
          src="https://img.icons8.com/?size=100&id=3562&format=png&color=000000"
          alt="Скорость доставки"
          className="icon"
        />
        <span>В центре при заказе от 2000 рублей</span>
        <span>В районы от 3500 рублей</span>
      </div>
    </div>
  );
};

export default OrderConditionsComponent;
