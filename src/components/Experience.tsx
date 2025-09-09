"use client";

import { experiences } from "@/lib/data";
import IndividualExperiences from "./IndividualExperiences";

function chunk<T>(arr: T[], size = 2): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

const Experience = () => {
  const pairs = chunk(experiences, 2); // [ [e0,e1], [e2,e3], ... ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            My professional journey as a software developer, building impactful solutions and growing with amazing teams.
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

        {/* Skills */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["JavaScript","TypeScript","React","Next.js","Node.js","Python","PostgreSQL","MongoDB","AWS","Docker","Git","Tailwind CSS"].map((s) => (
              <span
                key={s}
                className="px-4 py-2 bg-background border border-foreground/20 rounded-full text-foreground/80 hover:border-foreground/40 hover:bg-foreground/5 transition-all"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
