interface OrderInterface { id: number; count: number };

const createEvent = () => {
  const event = new Event("shopKitUpdated");
  window.dispatchEvent(event);
};

const AddToShopKit = (id: number): void => {
  const ordersString = localStorage.getItem("orders");
  if (!ordersString) return;
  const orders: OrderInterface[] = JSON.parse(ordersString);
  const existingOrder = orders.find(order => order.id === id);

  if (existingOrder) {
    existingOrder.count += 1;
  } else {
    orders.push({ id, count: 1 });
  }

  localStorage.setItem("orders", JSON.stringify(orders));
  createEvent();
};

const CheckIsGoodInShopKit = (id: string): boolean => {
  const ordersString = localStorage.getItem("orders");
  if (!ordersString) return false;

  const isGoodInOrderList: number =
    JSON.parse(ordersString)[id]?.count || 0;
  if (isGoodInOrderList > 0) {
    return true;
  }
  return false;
};

const RemoveFromShopKit = (id: number): void => {
  const ordersString = localStorage.getItem("orders");
  
  if (!ordersString) return;

  const orders: OrderInterface[] = JSON.parse(ordersString);

  const orderIndex = orders.findIndex(order => order.id === id);

  if (orderIndex !== -1) {
    orders.splice(orderIndex, 1);
  }

  localStorage.setItem("orders", JSON.stringify(orders));
  createEvent();
};



const ChangeCountInShopKit = (id: number, count: number): void => {
  const ordersString = localStorage.getItem("orders");
  if (!ordersString) return;

  const orders: OrderInterface[] = JSON.parse(ordersString);

  const orderIndex = orders.findIndex(order => order.id === id);

  if (orderIndex === -1) return;

  orders[orderIndex].count += count;

  if (orders[orderIndex].count <= 0) {
    orders.splice(orderIndex, 1);
  }

  if (orders[orderIndex].count > 99) {
    orders[orderIndex].count = 99;
  }

  localStorage.setItem("orders", JSON.stringify(orders));
  createEvent();
};

export {
  AddToShopKit,
  CheckIsGoodInShopKit,
  RemoveFromShopKit,
  ChangeCountInShopKit,
};
