import { useState, useEffect } from "react";
import classNames from "classnames";
import { Button } from "../../app/index";
import { Menu } from "../../app/index";
import { ChangeCountInShopKit, RemoveFromShopKit } from "../../app/index";

interface MenuItemInterface {
  id: number;
  name: string;
  imgs: string[];
  price: number;
  count: number;
  goodDescription: string;
}
const ShopKitComponent = () => {
  const [goodsInShopKit, setGoodsInShopKit] = useState<{id: string, count: number}[]>([]);
  const [isAnimZoomOut, setIsAnimZoomOut] = useState<boolean>(false);
  const [isSKVisible, setIsSKVisible] = useState<boolean>(false);

  const getOrdersFromStorage = () => {
    const newArray: { id: string; count: number }[] = [];
    const ordersString = localStorage.getItem("orders");
    const ordersInLocalStorage = ordersString ? JSON.parse(ordersString) : {};
    for (const property in ordersInLocalStorage) {
      newArray.push({
        id: property,
        count: ordersInLocalStorage[property].count,
      });
    }
    setGoodsInShopKit(newArray);
  };

  const getCountOfGoodsInShopKit = (id: string): number => {
    const ordersString = localStorage.getItem("orders");
    if (!ordersString) return 0;
    return JSON.parse(ordersString)[id]?.count || 0;
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
          onClick={() => {
            if (totalGoodsInShopKit > 0) setIsSKVisible(true);
          }}
        >
          <img
            className="w-16 h-16"
            src="https://img.icons8.com/?size=100&id=0DBkCUANmgoQ&format=png&color=000000"
            alt="Корзина"
          />
          {totalGoodsInShopKit > 0 && (
            <span
              className="absolute top-0 right-0 z-20 bg-amber-600 w-8 h-8 rounded-full
        flex justify-center  items-center text-center text-white border-2 border-black"
            >
              {totalGoodsInShopKit > 0 &&
                (totalGoodsInShopKit > 99 ? "99+" : totalGoodsInShopKit)}
            </span>
          )}
        </button>
      </div>

      {isSKVisible && (
        <div
          className={classNames(
            "fixed left-0 top-0 w-full h-full p-8 transition flex flex-col justify-center items-center shadow-2xl",
            {
              "zoom-in": !isAnimZoomOut,
              "zoom-out": isAnimZoomOut,
            }
          )}
        >
          <div className="bg-white rounded-sm shadow-lg h-full w-80 md:w-2xl flex flex-col">
            <button
              className="cursor-pointer opacity-50 w-12 h-12 z-10 bg-black rounded-sm flex justify-center
                  items-center flex-col hover:opacity-75 transition ml-auto"
              onClick={startZoomOutAnim}
            >
              <div className="w-4 h-0.5 bg-white rotate-45 rounded-sm z-20"></div>
              <div className="w-4 h-0.5 bg-white rotate-135 rounded-sm z-20 -mt-0.5"></div>
            </button>
            <div className=" px-8 max-h-3/5 overflow-y-auto">
              <h4 className="text-2xl sm:text-3xl md:text-4xl text-center">
                Заказы
              </h4>
              <div className="w-[90%] border-[1px] border-black mx-auto opacity-25"></div>
              {goodsInShopKit.map((elem) => {
                const menuItem : MenuItemInterface 
                = Menu[elem.id as keyof typeof Menu];
                return (
                  <div
                    key={elem.id}
                    className="w-full h-24 flex justify-center items-center"
                  >
                    <div>
                      <img
                        src={menuItem.imgs[0]}
                        alt={menuItem.name}
                        className="h-20 w-20 rounded-sm  object-cover"
                      />
                    </div>
                    <div className="w-full ">
                      <div className="flex justify-between w-full px-8">
                        <span className=" text-2xl">{menuItem.name}</span>
                        <span>
                          {getCountOfGoodsInShopKit(elem.id) && (
                          (menuItem.price * getCountOfGoodsInShopKit(elem.id)).toFixed(2)
                          )}
                          рублей
                        </span>
                      </div>
                      <div className="px-4">
                        <Button
                          text="-"
                          fn={() => {
                            if (getCountOfGoodsInShopKit(elem.id) <= 1) {
                              RemoveFromShopKit(Number(elem.id));
                            } else {
                              ChangeCountInShopKit(Number(elem.id), -1);
                            }
                          }}
                        />
                        <span>{getCountOfGoodsInShopKit(elem.id)}</span>
                        <Button
                          text="+"
                          fn={() => {
                            if (getCountOfGoodsInShopKit(elem.id) <= 98) {
                              ChangeCountInShopKit(Number(elem.id), 1);
                            }
                          }}
                        />
                        <Button
                          text="Удалить"
                          fn={() => {
                            RemoveFromShopKit(Number(elem.id));
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-right px-8 mt-4">
              <span>
                Сумма:{" "}
                {goodsInShopKit
                  .reduce(function (sum, currentElem) {
                    const menuItem = Menu[currentElem.id as keyof typeof Menu] as MenuItemInterface;
                    return (
                      sum +
                      getCountOfGoodsInShopKit(currentElem.id) *
                        menuItem.price
                    );
                  }, 0)
                  .toFixed(2)}{" "}
                рублей
              </span>
            </div>
            <div className="w-[90%] border-[1px] border-black mx-auto opacity-25 mt-4" />
            <div className="h-1/5 mt-4 px-8">
              <h4 className="text-2xl sm:text-3xl md:text-4xl text-center">
                Данные для заказа
              </h4>
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  className="border-0 bg-amber-500 opacity-80 text-white rounded-sm w-full h-10 shadow-lg  px-4"
                  placeholder="Ваше имя"
                  required
                />
                <input
                  type="tel"
                  className="border-0 bg-amber-500 opacity-80 text-white rounded-sm w-full h-10 shadow-lg  px-4"
                  placeholder="Ваше телефон"
                  required
                />
                <input
                  type="email"
                  className="border-0 bg-amber-500 opacity-80 text-white rounded-sm w-full h-10 shadow-lg  px-4"
                  placeholder="Ваш email"
                  required
                />
              </form>
            </div>
            <div className="w-[90%] border-[1px] border-black mx-auto opacity-25 mt-4" />
            <div className="flex justify-center items-center">
              <button
                className="bg-amber-500 rounded-sm m-4 text-white 
    hover:bg-amber-600 transition active:bg-amber-700 cursor-pointer w-full px-8 h-10"
                type="submit"
                onSubmit={() => {
                  location.reload();
                  localStorage.removeItem("orders");
                }}
              >
                Оформить заказ
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShopKitComponent;
