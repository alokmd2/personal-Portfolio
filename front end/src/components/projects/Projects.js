import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive,projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {/* Project One */}
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des="I created a replica of a social media platform with similar features and functionality. It mimics the user experience of popular social media sites."
          src={projectOne}
        />
        {/*  Project Two */}
        <ProjectsCard
          title="E-commerce Website"
          des="I developed an e-commerce website specializing in footwear, offering a range of brands and styles. Users can browse, purchase, and track their orders seamlessly on the platform."
          src={projectTwo}
        />
        {/*  Project Three */}
        <ProjectsCard
          title="Cloud Point-APIs bases Weather Application"
          des=" I created a weather forecasting application that provides accurate and timely 
          updates on current and future weather conditions. Users can access detailed forecasts."
          src={projectThree}
        />
        {/* project fOUR */}
        <ProjectsCard
          title="Mapty"
          des=" Mapty is a workout tracker application that helps users log various workouts and visualize them on an 
          interactive map"
          src={projectFour}
        />
        {/* Project Five */}
        <ProjectsCard
          title="Interactive Banking Platform"
          des="Engineered a user-centric banking platform with an intuitive interface and cutting-edge technology, streamlining financial endeavors for confident navigation of financial goals."
          src={projectFive}
        />
        {/* Project Six */}
        <ProjectsCard
          title="Online Quiz Platform"
          des=" 
          I built an online quiz platform where users can create, share, and participate in quizzes on various topics." 
          src={projectSix}
        />
      </div>
    </section>
  );
}
export default Projects