"use client";

import { experiences, aboutMe } from "@/lib/data";
import IndividualExperiences from "./IndividualExperiences";


const Experience = () => {

  return (
    <section id="experience" className="pt-20 pb-15 px-4 sm:px-6 lg:px-8 bg-foreground/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-5 ">Professional Experience</h2>
          <p className="md:text-[19px] text-[17px] text-primary-foreground max-w-3xl mx-auto">
            {aboutMe}
          </p>
        </div>

        <IndividualExperiences />
      </div>
    </section>
  );
};

export default Experience;
