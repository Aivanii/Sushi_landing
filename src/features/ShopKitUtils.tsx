const AddToShopKit = (id: number): void => {
  let orders = JSON.parse(localStorage.getItem("orders")) || {};
  orders[id] = { count: 1 };
  localStorage.setItem("orders", JSON.stringify(orders));
};

const CheckIsGoodInShopKit = (id: string): boolean => {
    console.log(JSON.parse(localStorage.getItem("orders")), id);
  if (localStorage.getItem("orders") == null) return false;
  const isGoodInOrderList: number =
    JSON.parse(localStorage.getItem("orders"))[id]?.count || 0;
  if (isGoodInOrderList > 0) {
    return true;
  }
  return false;
};

const RemoveFromShopKit = (id: number): void => {
    let orders = JSON.parse(localStorage.getItem("orders")) || {};
    delete orders[id];
    localStorage.setItem("orders", JSON.stringify(orders));
};

export { AddToShopKit, CheckIsGoodInShopKit, RemoveFromShopKit };
