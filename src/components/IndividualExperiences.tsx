import { experiences } from "@/lib/data";

const IndividualExperiences = () => {

  const height = "h-25";
return (  
  <>  
  <div className="hidden md:flex md:flex-col gap-y-24 relative">
    <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-foreground/20" />
  <div className="flex flex-col gap-y-24">
        <div className="grid grid-cols-2 gap-12">
             <div key={experiences[0]!.id} className="5 relative">
                {/* Timeline dot */}
                <div className="absolute left-full top-6 w-4 h-4 bg-foreground/80 rounded-full border-4 border-background shadow-md translate-x-[-50%] z-10" />
                <article className="bg-card-foreground rounded-2xl p-6 shadow-md border border-foreground/10 hover:shadow-lg transition-shadow">
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
                <div className="absolute right-full top-[132px] w-4 h-4 bg-foreground/80 rounded-full border-4 border-background shadow-md translate-x-[50%] z-10" />
                <div className={height} />
                <article className="bg-card-foreground rounded-2xl p-6 shadow-md border border-foreground/10 hover:shadow-lg transition-shadow">
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
                <div className="absolute left-full top-6 w-4 h-4 bg-foreground/80 rounded-full border-4 border-background shadow-md translate-x-[-50%] z-10" />
                <article className="bg-card-foreground rounded-2xl p-6 shadow-md border border-foreground/10 hover:shadow-lg transition-shadow">
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
                <div className="absolute right-full top-[132px] w-4 h-4 bg-foreground/80 rounded-full border-4 border-background shadow-md translate-x-[50%] z-10" />
                <div className={height} />
                <article className="bg-card-foreground rounded-2xl p-6 shadow-md border border-foreground/10 hover:shadow-lg transition-shadow">
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

        <div className="relative md:hidden">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-foreground/20" />
          <div className="space-y-10">
            {experiences.map((e) => (
              <div key={e.id} className="relative pl-12">
                <div className="absolute left-2 top-6 w-4 h-4 bg-foreground rounded-full border-4 border-background" />
                <article className="bg-card-foreground rounded-xl p-6 shadow-sm border border-foreground/10">
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


        </>
    )
    
};

export default IndividualExperiences;


