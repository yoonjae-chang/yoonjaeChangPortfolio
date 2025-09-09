const TechnicalSkills = () => {
  return (
    <div className="py-10 text-center bg-secondary-foreground/10">
  <h3 className="text-3xl font-bold mb-12 tracking-tight text-foreground">
    Technical Skills and Technologies
  </h3>

  <div className="flex 2xl:flex-row flex-col gap-10 max-w-7xl mx-auto">
    <div className="w-full">
      <h4 className="text-xl font-semibold mb-4 text-foreground/90">Languages</h4>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {[
          "Python",
          "Java",
          "JavaScript",
          "TypeScript",
          "Golang",
          "SQL",
          "HTML",
          "CSS (Tailwind CSS)",
          "R"
        ].map((s) => (
          <span
            key={s}
            className="px-2 py-1.5 bg-background border border-foreground/20 rounded-full 
                       text-foreground/80 text-xs sm:text-sm 
                       hover:border-foreground/40 hover:bg-foreground/5 
                       transition-all duration-200 shadow-sm hover:shadow-md"
          >
            {s}
          </span>
        ))}
      </div>
    </div>

    <div className="w-full">
      <h4 className="text-xl font-semibold mb-4 text-foreground/90">Frameworks</h4>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {[
          "FastAPI",
          "Flask",
          "React.js",
          "Next.js",
          "Node.js",
          "Express.js"
        ].map((s) => (
          <span
            key={s}
            className="px-2 py-1.5 bg-background border border-foreground/20 rounded-full 
                       text-foreground/80 text-sm sm:text-base 
                       hover:border-foreground/40 hover:bg-foreground/5 
                       transition-all duration-200 shadow-sm hover:shadow-md"
          >
            {s}
          </span>
        ))}
      </div>
    </div>

    <div className="w-full">
      <h4 className="text-xl font-semibold mb-4 text-foreground/90">Developer Tools & Libraries</h4>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {[
          "LangChain",
          "Langfuse",
          "NumPy",
          "Pandas",
          "Scikit-learn",
          "Matplotlib",
          "PostgreSQL",
          "MongoDB",
          "Supabase",
          "Docker",
          "Git",
          "GitHub"
        ].map((s) => (
          <span
            key={s}
            className="px-2 py-1.5 bg-background border border-foreground/20 rounded-full 
                       text-foreground/80 text-sm sm:text-base 
                       hover:border-foreground/40 hover:bg-foreground/5 
                       transition-all duration-200 shadow-sm hover:shadow-md"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  </div>
</div>
  );
};

export default TechnicalSkills;