import HeaderDescription from "./../components/HeaderDescription.jsx";
import Newsletter from "./../components/Newsletter.jsx";
import AppleAppStoreButton from "./../components/AppleAppStoreButton.jsx";
import GooglePlayStoreButton from "./../components/GooglePlayStoreButtonn.jsx";
import home from "./../assets/screenshots/Startseite.png";
import recipe from "./../assets/screenshots/Rezept.png";
import search from "./../assets/screenshots/Einkaufsliste.png";
import Header from "./../components/Header.jsx";


const Home = () => {
    return (
        <div>
            <Header/>
            <div className="bg-customBlack  min-h-screen p-2 md:p-20">
                <div className="container mx-auto grid h-full w-full grid-cols-1 place-items-center lg:grid-cols-2 ">
                    {/*Block 1*/}
                    <div className="col-span-1 m-4 order-1">
                        <HeaderDescription/>
                    </div>
                    <div className={"order-2"}>
                        <img src={home} alt="home" className="w-80 h-auto lg:m-8 m-1"/>
                    </div>
                    {/*Block 2*/}
                    <div className={"lg:order-3 order-4"}>
                        <img src={recipe} alt="recipe" className="w-80 h-auto lg:m-8 m-1"/>
                    </div>
                    <div className="col-span-1 lg:order-4 order-3">
                        <h1 className="lg:block antialiased tracking-normal font-sans text-4xl sm:text-5xl font-semibold
                        leading-tight text-primary text-center lg:text-left">
                            Jedes Rezept ist deine Chance zu sparen.
                        </h1>
                    </div>
                    {/*Block 3*/}
                    <div className="col-span-1 m-4 lg:order-5 order-4">
                        <h1 className="block antialiased tracking-normal font-sans text-4xl sm:text-5xl
                         font-semibold leading-tight text-white text-primary
                         text-center lg:text-right"
                            style={{color: "#8F2F1A"}}>
                            Finde das günstigste Produkt aus allen Supermärkten
                        </h1>
                    </div>
                    <div className={"lg:order-6 order-4"}>
                        <img src={search} alt="search" className="w-80 h-auto lg:m-8 m-1"/>
                    </div>
                </div>

                <Newsletter/>

                <div className="flex flex-col sm:flex-row items-center justify-center">
                    <AppleAppStoreButton/>
                    <GooglePlayStoreButton/>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center mt-12">
                    <a href="/impressum" className="hover:opacity-75 text-primary p-2">
                        Impressum
                    </a>
                    <a href="/datenschutzrichtlinien" className="hover:opacity-75 text-primary p-2">
                        Datenschutz
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;