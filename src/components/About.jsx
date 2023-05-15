import React from "react";
import aboutImg from "../assets/Untitled design.png";
import { Button } from "react-bootstrap";
const About = () => {
  const info = [
    { text: "experience", count: "Fresher" },
    { text: "Completed Projects", count: "5" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-red-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                I graduated at Polytechnic university of the Philippines Pup lopez branch 
                I build a website for student council and this is my capstone Project it's took 
                me a 12 months to build that website including the adjustment of features and function and 
                adding new features and this is my first Project I made with a client side and server side.
              </p>
              <div className="flex mt-10 items-center justify-center">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white ">
                      {content.count}
                      <span className="text-cyan-600"></span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href="./src/assets/Salvatus CV.pdf" download>
                <Button className="btn-primary">Download CV</Button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;