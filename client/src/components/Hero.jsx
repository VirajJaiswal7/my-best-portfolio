import { BsChatLeftText } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { setNavbar } from "../redux/navbarSlice";
import { useEffect } from "react";
import img3 from "../assets/img3.jpg"

const Hero = () => {
  const mySkills = [
    { skill: "React" },
    { skill: "Node Js" },
    { skill: "Express Js" },
    { skill: "Mongodb" },
    { skill: "Socket.io" },
    {skill:"Shadcn Ui"}
  ];

  return (
    <div
      id="hero"
      className=" h-full md:h-screen  max-w-7xl mx-auto flex flex-col items-center pt-20 gap-8"
    >
      <img
        src={img3}
        alt=""
        className="w-40 h-40 object-cover rounded-full"
      />
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide">Viraj Jaiswal</h1>
      <p className="text-center text-black text-[16px]">
        I am a Full Stack Developer specializing in creating fully responsive
        and visually <br /> engaging designs tailored to client preferences.I
        focus on delivering smooth animations
        <br /> and seamless user experiences across all devices.
      </p>
      <div className="flex gap-6">
        {/* <NavLink to="/chat">
          <button className="flex items-center gap-2 px-6 py-2 border border-gray-700 rounded-full">
            <BsChatLeftText />
            Chat
          </button>
        </NavLink> */}
        <a
          href="./src/assets/certificate-pw.pdf"
          download
          className="flex items-center gap-2 px-6 py-2 border border-gray-700 rounded-full"
        >
          Resume
          <FiDownload />
        </a>
      </div>
      <div className="mt-4 md:mt-8 space-y-8">
        <p className="font-semibold tracking-wide text-2xl text-center">
          Top Skills
        </p>
        <ul className="gap-8 grid grid-cols-2 md:grid-cols-4">
          {mySkills.map((skill) => (
            <li className="shadow-md px-6 py-1.5 rounded-full border border-gray-200">
              {skill.skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
