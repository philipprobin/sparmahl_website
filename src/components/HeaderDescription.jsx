import React from "react";
import AppleAppStoreButton from "./AppleAppStoreButton.jsx";
import GooglePlayStoreButton from "./GooglePlayStoreButtonn.jsx";
// racfe

const HeaderDescription = () => {
  return (
      <div className="flex flex-col items-left col-span-1 m-2">
          <h1 className="block antialiased tracking-normal font-sans text-4xl sm:text-5xl font-semibold leading-tight"
              style={{fontFamily: 'Montserrat', color: '#8F2F1A'}}>
              SparMahl - Schnell, Einfach, Günstig …
          </h1>

          {/* this is a comment*/}
          <div>
              <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mb-7 mt-2 md:pr-16 xl:pr-28"
              style={{color: '#8F2F1A'}}>
                  Die Einkaufs-App für alle Supermärkte
              </p>
          </div>

          <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">

          </h6>
          <div className="flex flex-col sm:flex-row">
              <AppleAppStoreButton/>
              <GooglePlayStoreButton/>
          </div>
      </div>
  );
};

export default HeaderDescription;
