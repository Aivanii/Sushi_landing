import { useState, useEffect } from "react";
const ShopKitComponent = () => {
  const [goodsInShopKit, setGoodsInShopKit] = useState([]);

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
    </>
  );
};

export default ShopKitComponent;
