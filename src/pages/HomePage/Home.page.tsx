import { Header } from "../../app/index";
import { HomeImgContainerComponent } from "../../app/index";
import { OrderConditionsComponent } from "../../app/index";
import { MenuComponent } from "../../app/index";
import { DeliveryComponent } from "../../app/index";
import { ContactsComponent } from "../../app/index";
const HomePage = () => {
  return (
    <>
      <Header />
      <HomeImgContainerComponent />
      <OrderConditionsComponent />
      <MenuComponent />
      <DeliveryComponent />
      <ContactsComponent />
    </>
  );
};

export default HomePage;
