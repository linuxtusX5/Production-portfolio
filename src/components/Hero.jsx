import React from "react";
import hero from "../assets/bg.png";
import hero2 from "../assets/IMG_3849_5R_AND_WS-removebg-preview.png";
const Hero = () => {
  const social_media = [
    "logo-instagram",
    "logo-facebook",
    "logo-linkedin",
    "logo-twitter",
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="relative flex-1 flex items-center justify-center h-full p-5">
        <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
      <div className="absolute flex-1 flex items-center justify-center h-full p-5">
        <img src={hero2} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-red-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Joffrey Salvatus</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
          </h4>
          <div className="mt-8 text-3xl flex items-center justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;