import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2023</p>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BE in Electrical & Electronics Engineering"
            subTitle="Visvesvaraiah Technological University"
            result="8.02/10"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Pre -University"
            subTitle="Independent PU College"
            result="70%"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Nalanda Vidya Niketan"
            result="84%"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold">Internships</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Developer"
            subTitle="Wipro - (2022 - 2023)"
            result="India"
            des="Developed a REST API using Fast API and PostgreSQL to store data from learning management systems	Developed a full-stack web application using  React, Appwrite .
            Acquired proficiency in Core Java, demonstrating a solid understanding of fundamental programming concepts.
            "
          />
          <ResumeCard
            title="Web Developer"
            subTitle="J&Q Spiders - (2023)"
            result="India"
            des="Acquired proficiency in HTML, CSS, and JavaScript, React JS during the internship, showcasing a strong foundation in front-end technologies.
            	Collaborate with designers and backend developers to seamlessly integrate front-end and back-end functionalities
            "
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
