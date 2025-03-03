import { useState } from "react";
interface Props {
  isVisible: boolean;
  goodInfo: {
    name: string;
    goodDescription: string;
    imgs: string[];
  };
}

const FullGoodInfo: React.FC<Props> = ({ isVisible, goodInfo }) => {
 
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const changeSlide = (value : number) =>{
        if(currentSlide + value > goodInfo.imgs.length -1){
            setCurrentSlide(0);
        }else if(currentSlide + value < 0){
            setCurrentSlide(goodInfo.imgs.length - 1);
        }else{
            setCurrentSlide(currentSlide + value);
        }
    };
    

    return (
    <div>
      {isVisible ? (
        <div
          className="fixed top-1/2 left-1/2 -translate-1/2 bg-white text-black p-6 rounded-sm w-[clamp(300px,80vw,1200px)] z-50
        shadow-2xl"
        >
          <div className="flex row justify-center items-center">
            <div>
              <div className="w-[clamp(200px,50vw,600px)] h-[clamp(150px,37.5vw,450px)] flex overflow-hidden">
                  <img
                    src={goodInfo.imgs[currentSlide]}
                    key={goodInfo.imgs[currentSlide]}
                    alt={goodInfo.name}
                    className="w-[clamp(200px,50vw,600px)] h-[clamp(150px,37.5vw,450px)] object-cover my-auto rounded-sm shadow-lg"
                  />
              </div>
              <div className="absolute left-(50$) top-8 w-[clamp(200px,50vw,600px)] h-[clamp(150px,37.5vw,450px)]">
                <div className="flex items-center justify-between h-full p-4">
                  <button
                  onClick={() => changeSlide(1)}
                    className="cursor-pointer opacity-50 w-12 h-12 z-10 bg-black rounded-full flex
                justify-center items-center flex-col hover:opacity-75 transition"
                  >
                    <div className="w-4 h-0.5 bg-white rotate-135 rounded-sm z-20"></div>
                    <div className="w-4 h-0.5 bg-white rotate-45 rounded-sm mt-2 z-20"></div>
                  </button>

                  <button
                  onClick={() => changeSlide(-1)}
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
          <p>{goodInfo.goodDescription}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FullGoodInfo;
