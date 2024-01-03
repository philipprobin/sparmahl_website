import { useState } from "react";
import HeaderDescription from "./components/header-description";
import iphones from "./assets/iphones.png";

function App() {
  return (
    <div className="bg-customBlack  min-h-screen p-20">
      <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
        <div className="col-span-1">
          <HeaderDescription />
        </div>
        <div >
          <img src={iphones} alt="iphones" className="w-96 h-auto"/>
        </div>
      </div>
    </div>
  );
}

export default App;
