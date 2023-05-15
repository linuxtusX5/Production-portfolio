import React from "react";

const Skills = () => {

  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-red-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="row flex items-center justify-center">
            <div className="col-md-4 border-2 group border-cyan-600 m-3 min-w-[10rem] max-w-[16rem] bg-gray-900 p-5 rounded-xl">
              <b className="text-xl mt-3">Frontend</b>
            <div className="col-md-4 p-5">
              <p className="mt-3">Reactjs</p>
              <p className="mt-3">Javascript</p>
              <p className="mt-3">Tailwindcss</p>
              <p className="mt-3">html5</p>
              <p className="mt-3">css3</p>
              <p className="mt-3">figma</p>
            </div>
            </div>

            <div className="col-md-4 border-2 group border-cyan-600 m-3 min-w-[10rem] max-w-[16rem] bg-gray-900 p-5 rounded-xl">
              <b className="text-xl mt-3">Backend</b>
            <div className="col-md-4 p-5">
              <p className="mt-3">Expressjs</p>
              <p className="mt-3">Javascript</p>
              <p className="mt-3">Typescript</p>
              <p className="mt-3">nodejs</p>
              <p className="mt-3">MongoDB</p>
              <p className="mt-3">MySql</p>
              <p className="mt-3">MSserverSql</p>
            </div>
            </div>

            <div className="col-md-4 border-2 group border-cyan-600 m-3 min-w-[10rem] max-w-[16rem] bg-gray-900 p-5 rounded-xl">
              <b className="text-xl mt-3">others</b>
            <div className="col-md-4 p-5">
              <p className="mt-3">java</p>
              <p className="mt-3">c++</p>
              <p className="mt-3">firebase</p>
              <p className="mt-3">ReactNative</p>
              <p className="mt-3">Postman</p>
              <p className="mt-3">Netlify</p>
              <p className="mt-3">Render</p>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;