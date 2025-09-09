"use client";

import { experiences, aboutMe } from "@/lib/data";
import IndividualExperiences from "./IndividualExperiences";


const Experience = () => {

  return (
    <section id="experience" className="pt-20 pb-10 px-4 sm:px-6 lg:px-8 bg-foreground/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-5 ">Professional Experience</h2>
          <p className="md:text-[19px] text-[17px] text-foreground/70 max-w-3xl mx-auto">
            {aboutMe}
          </p>
        </div>

        {/* Mobile: single column with left rail */}
        <div className="relative md:hidden">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-foreground/20" />
          <div className="space-y-10">
            {experiences.map((e) => (
              <div key={e.id} className="relative pl-12">
                <div className="absolute left-2 top-6 w-4 h-4 bg-foreground rounded-full border-4 border-background" />
                <article className="bg-background rounded-xl p-6 shadow-sm border border-foreground/10">
                  <div className="inline-block bg-foreground/10 text-foreground/80 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {e.duration}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{e.position}</h3>
                  <h4 className="text-lg text-foreground/80 mb-4">{e.company}</h4>
                  <p className="text-foreground/70 leading-relaxed">{e.description}</p>
                </article>
              </div>
            ))}
          </div>
        </div>

        <IndividualExperiences />
      </div>
    </section>
  );
};

export default Experience;
