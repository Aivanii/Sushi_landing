interface Props {
    isVisible: boolean;
    goodInfo: {
        name: string;
        goodDescription: string;
        imgs: string[];
    };
}

const FullGoodInfo: React.FC<Props> = ({ isVisible, goodInfo }) => {
  return (
    <div>
      {isVisible ? (
        <div className="fixed top-1/2 left-1/2 -translate-1/2 bg-white text-black p-6 rounded-sm w-[clamp(300px,80vw,1200px)] z-50
        shadow-2xl">
                <div className="flex row justify-center items-center">
                    <img src={goodInfo.imgs[0]} alt={goodInfo.name} className="w-[clamp(200px,50vw,600px)] h-auto object-cover my-auto "/>
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
