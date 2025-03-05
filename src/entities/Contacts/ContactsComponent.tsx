const ContactsComponent = () => {
  return (
    <div className="mt-16 py-6 bg-white">
      <h2 className="text-6xl text-center">Контакты</h2>
      <div className="flex justify-center items-center flex-col">
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
        <div className="mx-auto mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230467.43830979816!2d-9.36244083497454!3d53.546918960565606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48448fff30655681%3A0xb49ba57568fac0b6!2z0JfQsNC80L7QuiDQrdGI0YTQvtGA0LQ!5e0!3m2!1sru!2sru!4v1741146917770!5m2!1sru!2sru"
            style={{ border: 0 }}
            className="h-80 w-dvw"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactsComponent;
