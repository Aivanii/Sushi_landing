const ContactsComponent = () => {
  return (
    <div className="mt-16 py-6 bg-white">
      <h2 className="text-6xl text-center">Контакты</h2>
      <div>
        <div className="flex justify-around">
          <div className="w-1/5 flex flex-col text-center justify-center items-center">
            <img
              src="https://img.icons8.com/?size=100&id=9659&format=png&color=000000"
              alt="Телефон"
            />
            <h4>Позвоните нам!</h4>
            <span className="text-amber-500">+7 (923) 123-45-67</span>
          </div>
          <div className="w-1/5 flex flex-col text-center justify-center items-center">
            <img
              src="https://img.icons8.com/?size=100&id=12388&format=png&color=000000"
              alt="Геолокация"
            />
            <h4>Придите лично!</h4>
            <span>Москва, ул. Примерная, 01 офис 01</span>
          </div>
          <div className="w-1/5 flex flex-col text-center justify-center items-center">
            <img
              src="https://img.icons8.com/?size=100&id=SaUMpeyy7rHl&format=png&color=000000"
              alt="Почта"
            />
            <h4>Напишите нам!</h4>
            <span className="text-amber-500">sushiLanding@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsComponent;
