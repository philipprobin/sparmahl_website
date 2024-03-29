
import HeaderDescription from "./components/header-description";
import Newsletter from "./components/newsletter";
// import AppleAppStoreButton from "./components/apple-app-store-button";
// import GooglePlayStoreButton from "./components/google-play-store-button";
import home from "./assets/screenshots/home.png";
import recipe from "./assets/screenshots/recipe.png";
import search from "./assets/screenshots/list.png";

function App() {
  return (
    <div className="bg-secondary  min-h-screen p-2 md:p-20">
      <div className="container mx-auto grid h-full w-full grid-cols-1 place-items-center lg:grid-cols-2 ">
        {/*Block 1*/}
        <div className="col-span-1 m-4">
          <HeaderDescription />
        </div>
        <div>
          <img src={home} alt="home" className="w-80 h-auto m-8" />
        </div>
        {/*Block 2*/}
        <div>
          <img src={recipe} alt="recipe" className="w-80 h-auto m-8" />
        </div>
        <div className="col-span-1 m-4">
          <h1 className="block antialiased tracking-normal font-sans text-4xl sm:text-5xl font-semibold leading-tight text-primary ">
            Jedes Rezept ist deine Chance zu sparen.
          </h1>
        </div>
        {/*Block 3*/}
        <div className="col-span-1 m-4">
          <h1 className="block antialiased tracking-normal font-sans text-4xl sm:text-5xl font-semibold leading-tight text-primary ">
            Finde das günstigste Produkt aus allen Supermärkten
          </h1>
        </div>
        <div>
          <img src={search} alt="search" className="w-80 h-auto m-8" />
        </div>
      </div>

      <Newsletter />
      {/*<div className="flex flex-col sm:flex-row items-center justify-center">*/}
      {/*  <AppleAppStoreButton />*/}
      {/*  <GooglePlayStoreButton />*/}
      {/*</div>*/}

    </div>
  );
}

export default App;
