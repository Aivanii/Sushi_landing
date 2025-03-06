import { FullGoodInfo } from "../app";
import { useState } from "react";
import { SetVisibilityForMultiplyShownMenus } from "../app/index";

interface ButtonProps {
  goodInfo: {
    name: string;
    goodDescription: string;
    imgs: string[];
  };
}

const ShowFullInfoButton: React.FC<ButtonProps> = ({ goodInfo }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimZoomOut, setIsAnimZoomOut] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          SetVisibilityForMultiplyShownMenus();
          setIsVisible(!isVisible);
        }}
        className="bg-amber-500 py-4 px-6 rounded-sm m-4 text-white 
    hover:bg-amber-600 transition active:bg-amber-700 cursor-pointer h-fit relative"
      >
        Подробнее
      </button>
      <FullGoodInfo
        isVisible={isVisible}
        goodInfo={goodInfo}
        setIsVisible={setIsVisible}
        isAnimZoomOut={isAnimZoomOut}
        setIsAnimZoomOut={setIsAnimZoomOut}
      />
    </>
  );
};

export default ShowFullInfoButton;
