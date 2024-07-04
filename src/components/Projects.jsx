import React from "react";
import AiOdyssey from "../assets/AiOdyssey24.png";
import ECommerce from "../assets/E-commerce.png";
import Portfolio from "../assets/MyPortfolio.png";
import { motion } from "framer-motion";
import Background from "./Background";
import Footer from "./Footer";

const ProjectCard = ({ image, title, description, git, technologies }) => {
  return (
    <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {title == "E-Commerce Website" && (
        <a href="#">
          <img
            className="w-full rounded-t-lg h-auto object-cover "
            src={ECommerce}
            alt=""
          />
        </a>
      )}
      {title == "AiOdyssey'24" && (
        <a href="#">
          <img
            className="w-full rounded-t-lg h-auto object-cover "
            src={AiOdyssey}
            alt=""
          />
        </a>
      )}
      {title == "My Portfolio" && (
        <a href="#">
          <img
            className="w-full rounded-t-lg h-auto object-cover "
            src={Portfolio}
            alt=""
          />
        </a>
      )}

      <div className="p-4 sm:p-6">
        <a href="#">
          <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
            {title}
          </h5>
        </a>
        <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">
          {description}
        </p>
      </div>

      <div className="m-2 sm:m-4 lg:m-6 flex justify-between">
        <div className="flex flex-wrap gap-2 pl-2">
          {technologies.map((tag, index) => (
            <p key={`${index}-${tag}`} className="text-[14px] text-blue-500">
              #{tag}
            </p>
          ))}
        </div>
        <a
          href={git}
          className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="area relative z-0 bg-black w-screen h-screen mt-8">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="flex flex-wrap gap-7 justify-center align-middle items-center m-12 p-12">
        {project.map((item, index) => (
          <ProjectCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            links={item.links}
            git={item.git}
            technologies={item.technologies}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export const project = [
  {
    title: "E-Commerce Website",
    description:
      "An e-commerce website is a web application that facilitates online shopping, allowing users to browse and purchase products or services over the internet. These websites were built using HTML, CSS, JavaScript, Bootstrap, and back-end frameworks.",
    image: { ECommerce },
    git: "https://github.com/sujal-777/E-Commerce-Website",
    technologies: ["HTML+CSS", "JavaScript"],
  },
  {
    title: "AiOdyssey'24",
    description:
      "A website made for a tech event serves as the central hub for all information related to the event.It typically include feature like Event Description,Schedule and Agenda,Speaker Profile,Sponsorship and Partners etc.",
    image: { AiOdyssey },
    git: "https://github.com/nithingooud/vpn_studios",
    technologies: ["React JS", "tailwind CSS", "NodeJs"],
  },
  {
    title: "My Portfolio",
    description:
      "A personal portfolio website is a fully responsive online platform showcasing my skills, projects, and professional experiences. Built using ReactJs ,TailWindCSS ,NodeJS this portfolio provide detailed overview of my background, expertise, and accomplishments",
    image: { Portfolio },
    git: "",
    technologies: ["React JS", "tailwind CSS"],
  }
];

export default Projects;
