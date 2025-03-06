import { useRef } from "react";
import ReactMarkdown from "react-markdown";
import classNames from "classnames";
interface Props {
  isVisible: boolean;
  goodInfo: {
    name: string;
    goodDescription: string;
    imgs: string[];
  };
  setIsVisible: (value: boolean) => void;
  isAnimZoomOut: boolean;
  setIsAnimZoomOut: (value: boolean) => void;
}

const FullGoodInfo: React.FC<Props> = ({
  isVisible,
  goodInfo,
  setIsVisible,
  isAnimZoomOut,
  setIsAnimZoomOut,
}) => {
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
    if (carousel) {
      const firstChild = carousel.firstElementChild as HTMLElement;

      if (firstChild) {
        const width = firstChild.offsetWidth;
        console.log("Ширина первого дочернего элемента:", width);
        carousel.scrollTo({
          top: 0,
          left: width * currentSlide.current,
          behavior: "smooth",
        });
      } else {
        console.log("У элемента #carousel нет дочерних элементов.");
      }
    } else {
      console.log("Элемент с ID #carousel не найден.");
    }
  };

  const startZoomOutAnim = () => {
    setIsAnimZoomOut(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsAnimZoomOut(false);
    }, 250);
  };

  return (
    <div>
      {isVisible ? (
        <div>
          <div
            className={classNames(
              "fixed top-1/2 left-1/2 -translate-1/2 bg-white text-black p-6 rounded-sm w-[clamp(300px,80vw,1200px)] z-50 shadow-2xl scroll-auto h-4/5",
              {
                "zoom-in": !isAnimZoomOut, // Применяется, если isAnimZoomOut false
                "zoom-out": isAnimZoomOut, // Применяется, если isAnimZoomOut true
              }
            )}
          >
            <div className="flex row justify-center items-center">
              <div>
                <button
                  className="cursor-pointer opacity-50 w-12 h-12 z-10 bg-black rounded-sm flex justify-center
                  items-center flex-col hover:opacity-75 transition absolute right-6 top-6"
                  onClick={startZoomOutAnim}
                >
                  <div className="w-4 h-0.5 bg-white rotate-45 rounded-sm z-20"></div>
                  <div className="w-4 h-0.5 bg-white rotate-135 rounded-sm z-20 -mt-0.5"></div>
                </button>
                <div
                  className="w-[clamp(180px,75vw,560px)] h-[clamp(150px,60vw,450px)] flex overflow-hidden shadow-2xl"
                  id="carousel"
                >
                  {goodInfo.imgs.map((elem, index) => {
                    return (
                      <img
                        key={index}
                        src={elem}
                        alt={`${goodInfo.name} Фото #${index + 1}`}
                        className="w-[clamp(180px,75vw,560px)] h-[clamp(150px,60vw,450px)] object-cover 
                      my-auto rounded-sm shadow-2xl"
                      />
                    );
                  })}
                </div>
                <div className="absolute left-(50$) top-8 w-[clamp(180px,75vw,560px)] h-[clamp(150px,60vw,450px)]">
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
            <div className="overflow-y-auto h-3/5 lg:h-2/5 mt-4 markdown-container">
              <h3 className="text-2xl text-center">{goodInfo.name}</h3>
              <ReactMarkdown>{goodInfo.goodDescription}</ReactMarkdown>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FullGoodInfo;
