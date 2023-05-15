import React from "react";
import hireMe from "../assets/IMG_3849_5R_AND_WS-removebg-preview.png";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-red-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Career objective
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
                To obtain a challenging career in the IT industry and put
                all my efforts into the growth of the organization and have
                a great working environment
                <br/><br/>
                To obtain a challenging position in the IT industry that utilizes 
                my technical skills and expertise to contribute towards the growth 
                and success of the organization. My objective is to constantly improve 
                and expand my knowledge in the latest technologies and tools in order 
                to develop innovative solutions and deliver exceptional results.
          </p>
          <button className="btn-primary mt-10">Say Hello</button>
        </div>
        <img
          src={hireMe}
          alt=""
          className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;