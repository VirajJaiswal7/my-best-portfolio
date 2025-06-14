import React from "react";
import project from "../assets/project.png";

const Projects = () => {
  const myProject = [
    {
      image: project,
      link: "https://blog-app-one-black-86.vercel.app/",
    },
    {
      image: project,
      link: "https://blog-app-one-black-86.vercel.app/",
    },
    {
      image: project,
      link: "https://blog-app-one-black-86.vercel.app/",
    },
    {
      image: project,
      link: "https://blog-app-one-black-86.vercel.app/",
    },
    {
      image: project,
      link: "https://blog-app-one-black-86.vercel.app/",
    },
    {
      image: project,
      link: "https://blog-app-one-black-86.vercel.app/",
    },
    {
      image: project,
      link: "https://blog-app-one-black-86.vercel.app/",
    },
    {
      image: project,
      link: "https://blog-app-one-black-86.vercel.app/",
    },
    {
      image: project,
      link: "https://blog-app-one-black-86.vercel.app/",
    },
    {
      image: project,
      link: "https://blog-app-one-black-86.vercel.app/",
    },
  ];
  return (
    <div
      id="projects"
      className="h-screen py-20 max-w-7xl mx-auto space-y-20 px-4 md:px-0"
    >
      {/* create a project image and this image hidden link click than open project */}
      <div className="space-y-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
          My Projects
        </h1>
        <p className="text-center">
          I have built several exciting and high-quality projects that showcase
          my skills as a MERN Stack developer. <br /> From a real-time chat app
          like WhatsApp, to a full-featured Job Portal,
          <br /> to an Uber-style ride booking platform—each project
          demonstrates my ability to create dynamic,
          <br />
          responsive, and user-friendly web applications. Explore some of my
          best work below.
        </p>
      </div>
      <div className="space-y-14">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
          Click and Open Project
        </h1>
        <div className="flex gap-8 overflow-x-auto scroll-smooth scroll-container p-6 rounded-md">
          {myProject.map((project) => (
            <a href={project.link} target="_blank">
              <img
                src={project.image}
                alt=""
                className="min-w-80 h-50 object-cover rounded-md border border-gray-700 hover:scale-105 transition-all duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
