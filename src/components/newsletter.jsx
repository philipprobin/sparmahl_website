import React from "react";

const Newsletter = () => {
  return (
    <div class="2xl:mx-auto 2xl:container mx-4 ">
      <div class="w-full relative flex items-center justify-center">
        <div class="bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
          <h1 class="text-4xl font-semibold leading-9  text-center">
            Nichts verpassen!
          </h1>
          <p class="text-base leading-normal text-center  mt-6">
            Abonnieren Sie Ihren Newsletter, um auf dem Laufenden zu bleiben.
          </p>
          <div class="sm:border border-white flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
            <input
              class="border border-white sm:border-transparent text-base w-full font-medium leading-none  p-4 focus:outline-none bg-transparent placeholder-white"
              placeholder="Email Addresse"
            />
            <button class="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-white py-4 px-6 hover:bg-opacity-75">
              Abonnieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
