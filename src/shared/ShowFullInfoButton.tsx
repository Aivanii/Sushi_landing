import { FullGoodInfo } from "../app";
import { useState } from "react";

interface ButtonProps {
    goodInfo: {
        name: string;
        goodDescription: string;
        imgs: string[];
    };
}

const ShowFullInfoButton: React.FC<ButtonProps> = ({ goodInfo }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <button
        onClick={() => {setIsVisible(!isVisible)}}
        className="bg-amber-500 py-4 px-6 rounded-sm m-4 text-white 
    hover:bg-amber-600 transition active:bg-amber-700 cursor-pointer h-fit relative"
      >
        Подробнее {isVisible ? "true" : "false"}
      </button>
      <FullGoodInfo isVisible={isVisible} goodInfo = {goodInfo}/>
    </>
  );
};

export default ShowFullInfoButton;
