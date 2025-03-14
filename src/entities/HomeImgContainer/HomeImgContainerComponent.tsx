const HomeImgContainerComponent = () => {
  return (
    <div
      className="h-screen mt-[-96px] z-10 flex items-center bg-linear-to-r from-black to-inherit
    w-2xs sm:w-xl md:w-3xl lg:w-6xl pl-6 md:pl-20"
      id="HomeImgContainer"
    >
      <h1
        className="text-white text-2xl sm:text-4xl md:text-5xl  lg:text-6xl 
        bg-ingerit text-center
      "
      >
        Доставка
        <div className="h-1 w-3xs bg-amber-500 mx-auto my-4"></div>
        премиальных роллов
      </h1>
    </div>
  );
};

export default HomeImgContainerComponent;
