"use client";

import { experiences } from "@/lib/data";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Experience
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            My professional journey as a software developer, building impactful solutions 
            and growing with amazing teams.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-foreground/20"></div>

          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative mb-12 last:mb-0">
              {/* Timeline Dot */}
              <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-foreground rounded-full border-4 border-background"></div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <div className="bg-background rounded-xl p-6 shadow-sm border border-foreground/10 hover:shadow-md transition-shadow">
                  {/* Duration Badge */}
                  <div className="inline-block bg-foreground/10 text-foreground/80 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {experience.duration}
                  </div>

                  {/* Position and Company */}
                  <h3 className="text-xl font-bold mb-1">{experience.position}</h3>
                  <h4 className="text-lg text-foreground/80 mb-4">{experience.company}</h4>

                  {/* Description */}
                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h5 className="font-semibold mb-2 text-foreground/90">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-2 text-foreground/70">
                          <svg className="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python",
              "PostgreSQL", "MongoDB", "AWS", "Docker", "Git", "Tailwind CSS"
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-background border border-foreground/20 rounded-full text-foreground/80 hover:border-foreground/40 hover:bg-foreground/5 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-lg text-foreground/70 mb-6">
            Interested in working together?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-foreground text-background px-8 py-3 rounded-full hover:opacity-90 transition-opacity font-medium text-lg"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
