import { Header } from "../../app/index";
import { HomeImgContainerComponent } from "../../app/index";
import { OrderConditionsComponent } from "../../app/index";
import { MenuComponent } from "../../app/index";
import { DeliveryComponent } from "../../app/index";
import { ContactsComponent } from "../../app/index";
import { Footer } from "../../app/index";
import {ShopKitComponent } from "../../app/index";
const HomePage = () => {
  return (
    <>
      <Header />
      <HomeImgContainerComponent />
      <OrderConditionsComponent />
      <MenuComponent />
      <ShopKitComponent />
      <DeliveryComponent />
      <ContactsComponent />
      <Footer />
    </>
  );
};

export default HomePage;
