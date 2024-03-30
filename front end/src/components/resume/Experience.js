import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >

      {/* part One */}

      <div>
        <div className="py-4 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[3px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[990px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Developer"
            subTitle="Wipro - (2022 - 2023)"
            result="India"
            des="Wipro certification as a full stack developer signifies proficiency in both front-end and back-end development technologies, enabling you to design and implement complete web solutions..
            "
          />
          <ResumeCard
            title="Web Developer"
            subTitle="J&Q Spiders - (2023)"
            result="India"
            des="J&Q Spiders certification as a web developer acknowledges expertise in web development, encompassing skills in coding, designing, and maintaining websites to meet modern industry standards.
            "
          />
            <ResumeCard
            title="AWS Certifed Cloud Practitioner"
            subTitle="Amazon Web Services - (2024)"
            result="India"
            des="The AWS Certified Cloud Practitioner certification, provided by Amazon Web Services (AWS), recognizes proficiency in foundational cloud computing concepts. It encompasses skills in understanding AWS Cloud services, architecture, security, and compliance, aligning with contemporary industry standards for cloud computing expertise.
            "
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
