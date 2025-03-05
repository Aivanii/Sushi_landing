const Footer = () => {
  return (
    <footer className="mt-16 py-6 bg-white">
      <div className="flex justify-center gap-8">
        <div>
          <div>
            <h5 className="text-5xl">Roll Realms</h5>
            <div className="flex">
              <a href="#">
                <img
                  src="https://img.icons8.com/?size=100&id=37325&format=png&color=000000"
                  alt="Ссылка на youtube канал"
                />
              </a>
              <a href="#">
                <img
                  src="https://img.icons8.com/?size=100&id=60453&format=png&color=000000"
                  alt="Ссылка на группу VK"
                />
              </a>
              <a href="#">
                <img
                  src="https://img.icons8.com/?size=100&id=9R1sV3QvY18K&format=png&color=000000"
                  alt="Ссылка на группу Telegram"
                />
              </a>
              <a href="#">
                <img
                  src="https://img.icons8.com/?size=100&id=32292&format=png&color=000000"
                  alt="Ссылка на профиль Instagram"
                />
              </a>
            </div>
            <div className="mt-4">
              <span>Напишите нам sushiLanding@gmail.com</span>
            </div>
            <div className="mt-2">
              <span>© Roll Realms 2023-2025г. Все права защищены.</span>
            </div>
          </div>
        </div>
        <div>
          <h5>Категории:</h5>
          <ul className="flex flex-col h-full justify-evenly text-2xl">
            <div>
              <a href = "/#HomeImgContainer">Главная</a>
            </div>
            <div>
              <a href = "/#menu">Меню</a>
            </div>
            <div>
              <a href = "/#delivery">Доставка</a>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
