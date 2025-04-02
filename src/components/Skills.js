import React from "react";
import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt,FaAngular } from "react-icons/fa6";
import { SiMysql, SiTailwindcss, SiNodedotjs,SiTypescript,SiPython, } from "react-icons/si";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-track">
        <div className="skills-slide">
          <div className="skill">
            <FaHtml5 />
            <span>HTML</span>
          </div>
          <div className="skill">
            <FaCss3Alt />
            <span>CSS</span>
          </div>
          <div className="skill">
            <FaJs />
            <span>JavaScript</span>
          </div>
          <div className="skill">
            <SiPython  />
            <span>Python</span>
          </div>
          <div className="skill">
            <SiTypescript />
            <span>Typescript</span>
          </div>
          <div className="skill">
            <FaReact />
            <span>React</span>
          </div>
          <div className="skill">
            <SiNodedotjs />
            <span>Node.js</span>
          </div>
          <div className="skill">
            <FaAngular />
            <span>Angular</span>
          </div>
          <div className="skill">
            <SiMysql />
            <span>MySQL</span>
          </div>
          <div className="skill">
            <SiTailwindcss />
            <span>Tailwind</span>
          </div>
          <div className="skill">
            <FaGitAlt />
            <span>Git</span>
          </div>

          {/* Repetimos para efecto infinito */}
          <div className="skill">
            <FaHtml5 />
            <span>HTML</span>
          </div>
          <div className="skill">
            <FaCss3Alt />
            <span>CSS</span>
          </div>
          <div className="skill">
            <FaJs />
            <span>JavaScript</span>
          </div>
          <div className="skill">
            <FaReact />
            <span>React</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
