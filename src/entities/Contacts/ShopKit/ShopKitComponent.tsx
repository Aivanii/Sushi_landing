import { useState, useEffect, useRef } from "react";
import classNames from "classnames";
const ShopKitComponent = () => {
  const [goodsInShopKit, setGoodsInShopKit] = useState([]);
  const [isAnimZoomOut, setIsAnimZoomOut] = useState<boolean>(false);
  const [isSKVisible, setIsSKVisible] = useState<boolean>(false);

  const getOrdersFromStorage = () => {
    let newArray = [];
    const ordersInLocalStorage =
      JSON.parse(localStorage.getItem("orders")) || {};
    for (const property in ordersInLocalStorage) {
      newArray.push({
        id: property,
        count: ordersInLocalStorage[property].count,
      });
    }
    setGoodsInShopKit(newArray);
  };

  useEffect(() => {
    getOrdersFromStorage();
    window.addEventListener("shopKitUpdated", () => {
      getOrdersFromStorage();
    });
  }, []);


  const startZoomOutAnim = () => {
    setIsAnimZoomOut(true);
    setTimeout(() => {
      setIsSKVisible(false);
      setIsAnimZoomOut(false);
    }, 250);
  };

  const totalGoodsInShopKit: number = goodsInShopKit.reduce(function (
    sum,
    current
  ) {
    return sum + current.count;
  },
  0);

  return (
    <>
      <div className="fixed bottom-2 right-2 ">
        <button
          className="rounded-full
      w-20 h-20 bg-white flex justify-center items-center border-2 z-10 cursor-pointer"
          onClick={() => {setIsSKVisible(true)}}
        >
          <img
            className="w-16 h-16"
            src="https://img.icons8.com/?size=100&id=0DBkCUANmgoQ&format=png&color=000000"
            alt="Корзина"
          />
          <span
            className="absolute top-0 right-0 z-20 bg-amber-600 w-8 h-8 rounded-full
        flex justify-center  items-center text-center text-white border-2 border-black"
          >
            {totalGoodsInShopKit > 0 &&
              (totalGoodsInShopKit > 99 ? "99+" : totalGoodsInShopKit)}
          </span>
        </button>
      </div>
      {isSKVisible && (
        <div
          className={classNames("fixed left-0 top-0 w-full h-full p-8 transition", {
            "zoom-in": !isAnimZoomOut,
            "zoom-out": isAnimZoomOut
          })}
        >

<button
                  className="cursor-pointer opacity-50 w-12 h-12 z-10 bg-black rounded-sm flex justify-center
                  items-center flex-col hover:opacity-75 transition absolute right-6 top-6"
                  onClick={startZoomOutAnim}
                >
                  <div className="w-4 h-0.5 bg-white rotate-45 rounded-sm z-20"></div>
                  <div className="w-4 h-0.5 bg-white rotate-135 rounded-sm z-20 -mt-0.5"></div>
                </button>
          <div className="bg-white max-w-7xl rounded-sm shadow-lg h-full w-full">
            shopkit
          </div>
        </div>
      )}
    </>
  );
};

export default ShopKitComponent;
