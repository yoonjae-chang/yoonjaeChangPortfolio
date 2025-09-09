import { experiences } from "@/lib/data";

const IndividualExperiences = () => {

  const height = "h-25";
return (    
  <div className="hidden md:flex md:flex-col gap-y-24 relative">
    <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-foreground/20" />
  <div className="flex flex-col gap-y-24">
        <div className="grid grid-cols-2 gap-12">
             <div key={experiences[0]!.id} className="5 relative">
                {/* Timeline dot */}
                <div className="absolute left-full top-6 w-4 h-4 bg-foreground/80 rounded-full border-4 border-background shadow-sm translate-x-[-50%] z-10" />
                <article className="bg-background rounded-2xl p-6 shadow-sm border border-foreground/10 hover:shadow-md transition-shadow">
                  <div className="inline-block bg-foreground/10 text-foreground/80 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {experiences[0]!.duration}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{experiences[0]!.position}</h3>
                  <h4 className="text-lg text-foreground/80 mb-4">{experiences[0]!.company}</h4>
                  <p className="text-foreground/70 leading-relaxed">{experiences[0]!.description}</p>
                </article>
                <div className={height} />
              </div>
              <div key={experiences[1]!.id} className="5 relative">
                {/* Timeline dot */}
                <div className="absolute right-full top-[132px] w-4 h-4 bg-foreground/80 rounded-full border-4 border-background shadow-sm translate-x-[50%] z-10" />
                <div className={height} />
                <article className="bg-background rounded-2xl p-6 shadow-sm border border-foreground/10 hover:shadow-md transition-shadow">
                  <div className="inline-block bg-foreground/10 text-foreground/80 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {experiences[1]!.duration}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{experiences[1]!.position}</h3>
                  <h4 className="text-lg text-foreground/80 mb-4">{experiences[1]!.company}</h4>
                  <p className="text-foreground/70 leading-relaxed">{experiences[1]!.description}</p>
                </article>
              </div>
           </div>
        </div>
        <div className="grid grid-cols-2 gap-12 mt-[-140px]">
             <div key={experiences[2]!.id} className="5 relative">
                {/* Timeline dot */}
                <div className="absolute left-full top-6 w-4 h-4 bg-foreground/80 rounded-full border-4 border-background shadow-sm translate-x-[-50%] z-10" />
                <article className="bg-background rounded-2xl p-6 shadow-sm border border-foreground/10 hover:shadow-md transition-shadow">
                  <div className="inline-block bg-foreground/10 text-foreground/80 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {experiences[2]!.duration}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{experiences[2]!.position}</h3>
                  <h4 className="text-lg text-foreground/80 mb-4">{experiences[2]!.company}</h4>
                  <p className="text-foreground/70 leading-relaxed">{experiences[2]!.description}</p>
                </article>
                <div className={height} />
              </div>
              <div key={experiences[3]!.id} className="5 relative">
                {/* Timeline dot */}
                <div className="absolute right-full top-[132px] w-4 h-4 bg-foreground/80 rounded-full border-4 border-background shadow-sm translate-x-[50%] z-10" />
                <div className={height} />
                <article className="bg-background rounded-2xl p-6 shadow-sm border border-foreground/10 hover:shadow-md transition-shadow">
                  <div className="inline-block bg-foreground/10 text-foreground/80 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {experiences[3]!.duration}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{experiences[3]!.position}</h3>
                  <h4 className="text-lg text-foreground/80 mb-4">{experiences[3]!.company}</h4>
                  <p className="text-foreground/70 leading-relaxed">{experiences[3]!.description}</p>
                </article>
              </div>
           </div>
        </div>
    )
};

export default IndividualExperiences;


