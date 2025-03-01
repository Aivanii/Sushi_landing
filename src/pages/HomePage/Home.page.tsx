import { Header } from "../../app/index";
import { HomeImgContainerComponent } from "../../app/index";
import { OrderConditionsComponent } from "../../app/index";
import { MenuComponent } from "../../app/index";

const HomePage = () => {
  return (
    <>
      <Header />
      <HomeImgContainerComponent />
      <OrderConditionsComponent />
      <MenuComponent />
    </>
  );
};

export default HomePage;
