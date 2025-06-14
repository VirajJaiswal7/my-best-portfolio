import { FaCode } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import { GoFileCode } from "react-icons/go";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import img3 from "../assets/img3.jpg"

const About = () => {
  const myKnowledge = [
    {
      img: <FaCode className="text-3xl" />,
      heading: "Languages",
      description:
        "HTML, CSS, JavaScript, Node Js, React Js, Express Js, MongoDb, Socket.io",
    },
    {
      img: <FaGraduationCap className="text-3xl" />,
      heading: "Education",
      description: "I am a 12th Passout.",
    },
    {
      img: <GoFileCode className="text-3xl" />,
      heading: "Projects",
      description: "Job Portal, User Authentication, LMS, Chat App",
    },
  ];
  return (
    <div
      id="about"
      className="h-full lg:h-screen  max-w-7xl mx-auto px-4 md:px-8 xl:px-16 flex flex-col md:flex-row gap-8 pt-16 md:pt-0"
    >
      <div className="flex items-center h-full md:h-screen w-full md:w-[35%] justify-center">
        <img
          src={img3}
          alt=""
          className=" md:w-80 h-100 object-cover rounded-xl"
        />
      </div>
      <div className="flex-1 space-y-8 md:space-y-16 pt-20">
        <div className="w-full md:w-[50%] md:mx-16 flex flex-col items-center space-y-4">
          <p className="text-xl">Introduction</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">About Me</h1>
        </div>
        <p className="text-center md:text-start text-black md:text-[17px]">
          I am a Full Stack Developer specializing in creating fully responsive
          and visuallyengaging designs tailored to client preferences.I focus on
          delivering smooth animations and seamless user experiences across all
          devices.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:mx-0 mx-8">
          {myKnowledge.map((item) => (
            <div className="border border-gray-700 px-4 py-8 rounded-xl space-y-2 hover:scale-110 transition-all duration-300">
              <div className="mb-4">
                <span className="">{item.img}</span>
              </div>
              <h1 className="text-[18px] font-semibold">{item.heading}</h1>
              <p className="text-xs font-serif tracking-wide text-black ">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex gap-8 -mt-4 justify-center md:justify-start">
          <a
            href="https://www.instagram.com/viraj.codes/"
            target="_blank"
            className="shadow-md p-3 rounded-full border border-gray-200 hover:scale-110 transition-all duration-100 hover:bg-gray-50"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/in/viraj-jaiswal-67872036a/"
            target="_blank"
            className="shadow-md p-3 rounded-full border border-gray-200 hover:scale-110 transition-all duration-100 hover:bg-gray-50"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01133c79baaef91f4d?mp_source=share"
            target="_blank"
            className="shadow-md p-3 rounded-full border border-gray-200 hover:scale-110 transition-all duration-100 hover:bg-gray-50"
          >
            <FaUpwork />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
