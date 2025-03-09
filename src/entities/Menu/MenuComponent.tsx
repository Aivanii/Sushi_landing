import { useState, useEffect } from "react";
import { Menu } from "../../app/index";
import { ShowFullInfoButton } from "../../app/index";
import { Button } from "../../app/index";
import {
  AddToShopKit,
  CheckIsGoodInShopKit,
  RemoveFromShopKit,
  ChangeCountInShopKit,
} from "../../app/index";
const MenuComponent = () => {
  const [goodsCountInOrderList, setGoodsCountInOrderList] = useState<number[]>(
    []
  );

  useEffect(() => {
    const newArray: number[] = Menu.map((item) => {
      const isGood = CheckIsGoodInShopKit(`${item.id}`);
      return isGood ? 1 : 0; // Assuming you want to return 1 if good, otherwise 0
    });

    setGoodsCountInOrderList(newArray);
}, []);


  const changeStateGoodsInOrderList = (index: number, count: number): void => {
    let newArray = [...goodsCountInOrderList];
    newArray[index] = count;
    setGoodsCountInOrderList([...newArray]);
  };

  return (
    <div className="mt-16 bg-white py-8" id="menu">
      <h2 className="text-2xl sm:text-4xl md:text-5xl  lg:text-6xl text-center">
        Наше меню
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {Menu.map((elem, index) => (
          <div key={elem.name}>
            <div className="w-80 lg:w-96 h-auto flex flex-col justify-center items-center shadow-md rounded-sm  p-5 gap-y-2 mt-6 relative">
              <img
                src={elem.imgs[0]}
                alt={elem.name}
                className="w-64 h-64 object-cover "
              />
              <h4 className=" text-2xl md:text-3xl text-center">{elem.name}</h4>
              <p className="text-left line-clamp-2">{elem.goodDescription}</p>
              <span className="pt-6">Количество: {elem.count}</span>
              <span>Цена: {elem.price} рублей</span>
              <div className="flex justify-between w-auto relative">
                {goodsCountInOrderList[index] ? (
                  <Button
                    text="Удалить из корзины"
                    fn={() => {
                      RemoveFromShopKit(elem.id);
                      changeStateGoodsInOrderList(index, 0);
                    }}
                  />
                ) : (
                  <Button
                    text="Добавить в корзину"
                    fn={() => {
                      AddToShopKit(elem.id);
                      changeStateGoodsInOrderList(index, 1);
                    }}
                  />
                )}
                <ShowFullInfoButton goodInfo={elem} />
              </div>
              {goodsCountInOrderList[index] > 0 && (
                <div>
                  <div className="flex justify-around items-center">
                    <Button
                      text="-"
                      fn={() => {
                        ChangeCountInShopKit(elem.id, -1);
                        changeStateGoodsInOrderList(
                          index,
                          goodsCountInOrderList[index] - 1 < 0
                            ? 0
                            : goodsCountInOrderList[index] - 1
                        );
                      }}
                    />
                    <span>{goodsCountInOrderList[index]}</span>
                    <Button
                      text="+"
                      fn={() => {
                        ChangeCountInShopKit(elem.id, 1);
                        changeStateGoodsInOrderList(
                          index,
                          goodsCountInOrderList[index] + 1 > 99
                            ? 99
                            : goodsCountInOrderList[index] + 1
                        );
                      }}
                    />
                  </div>
                  <span className="text-center">{`${(
                    goodsCountInOrderList[index] * elem.price
                  ).toFixed(2)} рублей`}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuComponent;
