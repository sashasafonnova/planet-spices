import Banners from "../components/BannersBlock";
import Promo from "../components/PromoBlock";
import Tabs from "../components/TabsBlock";
import WelcomeBlock from "../components/WelcomeBlock";

function Main () {

    window.scrollTo(0, 0);

    return (
        <>
            <Promo/>
            <WelcomeBlock/>
            <Banners/>
            <Tabs/>
        </>
    );
}

export default Main;