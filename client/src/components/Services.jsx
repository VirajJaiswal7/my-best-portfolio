import { GrServices } from "react-icons/gr";
import webdesign from "./src/assets/web-design.png";
import backendcoding from "./src/assets/backend-coding.png";
import computer from "./src/assets/computer.png";
import design from "./src/assets/design.png";

const Services = () => {
  const myServices = [
    {
      image: webdesign,
      title: "Frontend",
      language:
        "HTML, CSS, JavaScript, Shadcn Ui, Tailwind Css, Bootstrap, Prebuilt Ui, React Js",
    },
    {
      image: backendcoding,
      title: "Backend",
      language: "Node Js, Express Js, JavaScript, MongoDb",
    },
    {
      image: computer,
      title: "Full Stack",
      language:
        "HTML, CSS, JavaScript, Shadcn Ui, Tailwind Css, Bootstrap, Prebuilt Ui, React Js, Node Js, Express Js, MongoDb",
    },
    {
      image: design,
      title: "Ui / Ux",
      language:
        "HTML, CSS, JavaScript, Shadcn Ui, Tailwind Css, Bootstrap, Prebuilt Ui, React Js",
    },
  ];
  return (
    <div
      id="services"
      className="px-0 sm:px-2 sm:h-screen h-full pt-20 max-w-7xl mx-auto space-y-8 md:space-y-16"
    >
      <div className="space-y-4 md:space-y-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide text-center">
          My Services
        </h1>
        <p className="text-center md:text-xl">
          I provide four types of Services If You want I help You, Please
          contact me.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-16">
        <div className="w-full sm:w-[30%] flex justify-center items-center">
          <GrServices className="w-50 h-50 md:w-60 md:h-60" />
        </div>
        <div className="grid grid-cols-2 flex-1 gap-8 px-5">
          {myServices.map((service) => (
            <div className="border border-gray-700 px-4 py-8 rounded-xl space-y-2 hover:scale-110 transition-all duration-300">
              <img src={service.image} alt="" className="w-6 h-6" />
              <h1 className="text-xl font-semibold">{service.title}</h1>
              <p className="text-xs font-serif tracking-wide text-black">
                {service.language}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
