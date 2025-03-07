const createEvent = () => {
  const event = new Event("shopKitUpdated");
  window.dispatchEvent(event);
};

const AddToShopKit = (id: number): void => {
  let orders = JSON.parse(localStorage.getItem("orders")) || {};
  orders[id] = { count: 1 };
  localStorage.setItem("orders", JSON.stringify(orders));
  createEvent();
};

const CheckIsGoodInShopKit = (id: string): boolean => {
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
  createEvent();
};

const ChangeCountInShopKit = (id: number, count: number): void => {
  console.log("i was activated");
  let orders = JSON.parse(localStorage.getItem("orders")) || {};
  orders[id].count += count;
  if (count === 0) delete orders[id];
  if (orders[id] + count > 99) orders[id] = 99;
  localStorage.setItem("orders", JSON.stringify(orders));
  createEvent();
};

export {
  AddToShopKit,
  CheckIsGoodInShopKit,
  RemoveFromShopKit,
  ChangeCountInShopKit,
};
