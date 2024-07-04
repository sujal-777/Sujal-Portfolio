import React from "react";
import { useState, useEffect, useRef } from "react";
import "../App.css";
import { motion } from "framer-motion";
import Background from "./Background";
import { services } from "../constants";
import ButtonLink from "./ButtonLink";
import Footer from "./Footer";

const ServiceCard = ({ service }) => (
  <div className="sm:w-[250px] w-full">
    <div className="w-full green-pink-gradient p-[1px] rounded-[20px]">
      <div
        className="rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        style={{ background: "#151030" }}
      >
        <img
          src={service.icon}
          alt="some_icon"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div className="area relative z-0 bg-black w-screen h-screen">
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

      <div
        className="bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden"
        id="about"
      >
        <div className="flex flex-col justify-around">
          <div className="sm:px-16 px-2">
            <br />
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-2">
              Introduction
            </h2>
            <p className="mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]">
              Hello everyone! 👋 My name is Sujal Pal, and I am a final-year
              student 🎓 pursuing a B.Tech in Computer Science and Engineering
              at G.H. Raisoni College of Engineering, Nagpur. I have a great
              passion for{" "}
              <a
                className="text-green-300 hover:text-green-500 duration-300"
                href="https://www.linkedin.com/in/sujal-pal/"
                target="_blank"
              >
                Software developer
              </a>{" "}
              , Full Stack Development 🌐, and System Designing 🛠️.
              <br />
              ✍️ I am proficient in Java, Python, C++, and JavaScript, and have
              experience working with frameworks such as Spring, Node.js,
              Django, ReactJS, and Android.
              <br />
              Additionally, I bring a creative touch 🎨 using NextJS for visual
              appeal. I enjoy pursuing new skills 📚 and integrating them with
              existing tools to stay at the forefront of technology 🚀.
            </p>
            <br />

            <ButtonLink
              url="https://docs.google.com/document/d/14H0FDivvmYsD8k9MIAPx4qi-9l4JXS4HrrlmE0gYGE4/edit?usp=sharing"
              text="View Resume →"
              padding={`p-3`}
            />
          </div>
          <div className="mt-20 flex justify-center flex-wrap gap-7">
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
