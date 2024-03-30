import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black "
    >
      <Title title="Features" des="What I Do"/>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Web Development"
          des="I demonstrate my ability to create dynamic, 
          responsive websites using modern frameworks and technologies, ensuring user-friendly experiences."
         
        />
        <Card
          title="App Development"
          des="
          I specialize in creating polished mobile apps with a focus on user experience and performance optimization."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Software Development"
          des="I'm a software developer i use languages like java,js,python.."
          icon={<SiProgress />}
        />
        <Card
          title="Mobile Development"
          des="I exhibit proficiency in building sleek, functional mobile applications with a focus on user experience and performance optimization."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="I showcase my ability to create intuitive, visually appealing interfaces that prioritize user satisfaction and engagement."
          icon={<SiAntdesign />}
        />
        
      </div>
    </section>
  );
}

export default Features