const DeliveryComponent = () => {
  return (
    <div className="mt-16 py-6 bg-white" id = "delivery">
      <h2 className="text-6xl text-center">Доставка</h2>
      <div className="flex justify-center items-center gap-8 flex-col md:flex-row p-4">
        <div>
          <h4 className="text-3xl mb-2">Время работы: </h4>
          <h5>Понедельник-Пятница с 9:00 до 21:00</h5>
          <h5>Суббота-Воскресенье с 9:00 до 17:00</h5>
          <div className="h-1 w-3xs bg-amber-500 mx-auto my-4"></div>
          <h4 className="text-3xl mb-2">Принимаем заказы:</h4>
          <h5>Понедельник-Пятница с 9:00 до 22:00</h5>
          <h5>Суббота-Воскресенье с 9:00 до 18:00</h5>
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRInAbCYSI0MBzTktL5GhMg4vgySRw53vXPQ&s"
            alt="Доставка"
            className="h-full w-auto shadow-md rounded-md"
          />
        </div>
      </div>
    </div>
  );
};
export default DeliveryComponent;
