const ContactsComponent = () => {
  return (
    <div className="mt-16 py-6 bg-white" id="contacts">
      <h2 className="text-2xl sm:text-4xl md:text-5xl  lg:text-6xl text-center">
        Контакты
      </h2>
      <div className="flex justify-center items-center flex-col">
        <div className="flex justify-around flex-col sm:flex-row items-center sm:gap-8">
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
        <div className="mx-auto mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442660.3192696706!2d-13.214806696659675!3d53.28218185123267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4859bae45c4027fb%3A0xcf7c1234cedbf408!2sIreland!5e0!3m2!1sen!2sru!4v1741523079751!5m2!1sen!2sru"
            className="w-3xs md:w-lg lg:max-w-3xl"
            height="300"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactsComponent;
