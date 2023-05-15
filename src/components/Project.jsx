import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/p1.png";
import project2 from "../assets/p2.png";
import project3 from "../assets/p3.png";
import "swiper/css";
import "swiper/css/pagination";

const Project = () => {

  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-red-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className='items-center flex justify-center pb-2'>
      <p>My Github: <a href='https://github.com/linuxtusX5'>https://github.com/linuxtusX5</a></p>
      </div>
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center justify-center relative">
        <div className="lg:w-2/3 w-full">
            <div className="h-fit w-full p-4 bg-slate-700 rounded-xl mb-5">
              <img src={project1} alt="" className="rounded-lg" />
              <h3 className="text-xl my-4">Medical Appointment</h3>
              <h5 className="text-xl my-4">Email: <b>yoon@gmail.com</b></h5>
              <h5 className="text-xl my-4">Password: <b>123</b></h5>
              <div className="flex gap-3">
                <a
                  href='https://medical-appointment.onrender.com'
                  target="_blank"
                  className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                >
                  Live Demo
                </a>
              </div>
            </div>
            <div className="h-fit w-full p-4 bg-slate-700 rounded-xl mb-5">
              <img src={project2} alt="" className="rounded-lg" />
              <h3 className="text-xl my-4">student Council</h3>
              <h3>Student: </h3>
              <h5 className="text-xl my-4">ID: <b>2019-00735-Sample</b></h5>
              <h5 className="text-xl my-4">Email: <b>yoon@gmail.com</b></h5>
              <h5 className="text-xl my-4">Password: <b>P@ssw0rd</b></h5><br/>
              <h3>Admin: </h3>
              <h5 className="text-xl my-4">Email: <b>y2019-00735-lq-0admin21@gmail.com</b></h5>
              <h5 className="text-xl my-4">Password: <b>Passw0rd</b></h5><br/>
              <div className="flex gap-3">
                <a
                  href='https://main--studentcouncil.netlify.app/'
                  target="_blank"
                  className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                >
                  Live Demo
                </a>
              </div>
            </div>
            <div className="h-fit w-full p-4 bg-slate-700 rounded-xl mb-5">
              <img src={project3} alt="" className="rounded-lg" />
              <h3 className="text-xl my-4">Advance Care</h3>
              <div className="flex gap-3">
                <a
                  href='https://advancecare.netlify.app'
                  target="_blank"
                  className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                >
                  Live Demo
                </a>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Project;