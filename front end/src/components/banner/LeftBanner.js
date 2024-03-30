import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer.", " Application Developer."],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 3000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20 bg" >
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-5xl font-bold text-white" id="about">
          Hi, I'm <span className="text-designColor capitalize">Alok </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
           <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide text-justify">
          As a full stack developer, I adeptly create intuitive UIs with
          React.js and Vue.js, complemented by backend expertise in Node.js and
          Python. My design skills allow me to craft visually appealing user.
          interfaces using Tailwind CSS and Next.js. 
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/Alok2001MD">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/alok-mattihalli-047854221/">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiSpringboot />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <FaAws />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
