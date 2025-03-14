import "./styles.css";

// pages
import HomePage from "../pages/HomePage/Home.page";
export { HomePage };

//components
import Header from "../entities/Header/HeaderComponent";
export { Header };

import HomeImgContainerComponent from "../entities/HomeImgContainer/HomeImgContainerComponent";
export { HomeImgContainerComponent };

import OrderConditionsComponent from "../entities/OrderConditions/OrderConditionsComponent";
export { OrderConditionsComponent };

import MenuComponent from "../entities/Menu/MenuComponent";
export { MenuComponent };

import { Menu } from "../entities/Menu/Menu";
export { Menu };

import ShopKitComponent from "../entities/ShopKit/ShopKitComponent";
export { ShopKitComponent };

import DeliveryComponent from "../entities/Delivery/DeliveryComponent";
export { DeliveryComponent };

import ContactsComponent from "../entities/Contacts/ContactsComponent";
export { ContactsComponent };

import Footer from "../entities/Footer/FooterComponent";
export { Footer };

//UI
import Button from "../shared/Button";
export { Button };

import ShowFullInfoButton from "../shared/ShowFullInfoButton";
export { ShowFullInfoButton };

//features
import FullGoodInfo from "../features/FullGoodInfo";
export { FullGoodInfo };

import {
  AddToShopKit,
  CheckIsGoodInShopKit,
  RemoveFromShopKit,
  ChangeCountInShopKit,
} from "../features/ShopKitUtils";
export {
  AddToShopKit,
  CheckIsGoodInShopKit,
  RemoveFromShopKit,
  ChangeCountInShopKit,
};

import SetVisibilityForMultiplyShownMenus from "../features/SetVisibilityForMultiplyShownMenus";
export { SetVisibilityForMultiplyShownMenus };
