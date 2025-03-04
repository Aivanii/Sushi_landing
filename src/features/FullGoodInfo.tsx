import { useRef } from "react";
interface Props {
  isVisible: boolean;
  goodInfo: {
    name: string;
    goodDescription: string;
    imgs: string[];
  };
  setIsVisible: (value: boolean) => void;
}

const FullGoodInfo: React.FC<Props> = ({ isVisible, goodInfo, setIsVisible }) => {
  const currentSlide = useRef<number>(1);

  const changeSlide = (value: number) => {
    if (currentSlide.current + value > goodInfo.imgs.length - 1) {
      currentSlide.current = 0;
    } else if (currentSlide.current + value < 0) {
      currentSlide.current = goodInfo.imgs.length - 1;
    } else {
      currentSlide.current += value;
    }

    const carousel = document.querySelector("#carousel") as HTMLElement;
    let left: number = window.innerWidth / 2;
    if (left < 200) left = 200;
    if (left > 600) left = 600;
    carousel.scrollTo({
      top: 0,
      left: left * currentSlide.current,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible ? (
        <div>
          <div
            className="fixed top-1/2 left-1/2 -translate-1/2 bg-white text-black p-6 rounded-sm w-[clamp(300px,80vw,1200px)] z-50
        shadow-2xl scroll-auto h-2/3 " 
          >
            <div className="flex row justify-center items-center">
              <div>
                  <button
                    className="cursor-pointer opacity-50 w-12 h-12 z-10 bg-black rounded-sm flex justify-center
                  items-center flex-col hover:opacity-75 transition absolute right-5 top-5"
                  onClick={() => setIsVisible(false)}
                  >
                    <div className="w-4 h-0.5 bg-white rotate-45 rounded-sm z-20"></div>
                    <div className="w-4 h-0.5 bg-white rotate-135 rounded-sm z-20 -mt-0.5"></div>
                  </button>
                <div
                  className="w-[clamp(200px,50vw,600px)] h-[clamp(150px,37.5vw,450px)] flex overflow-hidden shadow-2xl"
                  id="carousel"
                >
                  {goodInfo.imgs.map((elem, index) => {
                    return (
                      <img
                        key={index}
                        src={elem}
                        alt={`${goodInfo.name} Фото #${index + 1}`}
                        className="w-[clamp(200px,50vw,600px)] h-[clamp(150px,37.5vw,450px)] object-cover 
                      my-auto rounded-sm shadow-2xl"
                      />
                    );
                  })}
                </div>
                <div className="absolute left-(50$) top-8 w-[clamp(200px,50vw,600px)] h-[clamp(150px,37.5vw,450px)]">
                  <div className="flex items-center justify-between h-full p-4">
                    <button
                      onClick={() => changeSlide(-1)}
                      className="cursor-pointer opacity-50 w-12 h-12 z-10 bg-black rounded-full flex
                justify-center items-center flex-col hover:opacity-75 transition"
                    >
                      <div className="w-4 h-0.5 bg-white rotate-135 rounded-sm z-20"></div>
                      <div className="w-4 h-0.5 bg-white rotate-45 rounded-sm mt-2 z-20"></div>
                    </button>

                    <button
                      onClick={() => changeSlide(1)}
                      className="cursor-pointer opacity-50 w-12 h-12 z-10 bg-black rounded-full flex
                justify-center items-center flex-col hover:opacity-75 transition"
                    >
                      <div className="w-4 h-0.5 bg-white rotate-45 rounded-sm z-20"></div>
                      <div className="w-4 h-0.5 bg-white rotate-315 rounded-sm mt-2 z-20"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-center text-4xl p-4">{goodInfo.name}</h3>
            <p className="overflow-y-auto h-28">{goodInfo.goodDescription}</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FullGoodInfo;
