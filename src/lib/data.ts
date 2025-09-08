export const personalInfo = {
  name: "Yoon Jae Chang",
  title: "Software Developer",
  bio: "Hey, I&apos;m Yoon Jae Chang. Here, you can check out what I&apos;m working on. I try my best to create things with ❤",
  email: "yoonjaechang244@gmail.com",
  github: "https://github.com/yoonjae-chang",
  linkedin: "https://linkedin.com/in/yoonjaechang",
};


export type ProjectProps = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  achievement: string;
  demoUrl: string;
  githubUrl: string;
}

export const projects = [
  {
    id: 1,
    title: "ShadowU",
    description: "A peer-to-peer marketplace connecting high school students with college hosts to experience authentic campus life.",
    image: "/projects/shadowu.png",
    technologies: ["Next.js", "TypeScript", "Supabase", "Supabase Auth and Edge Functions", "Stripe", "Tailwind CSS"],
    achievement: "",
    demoUrl: "https://shadowu.org",
    githubUrl: "N/A",
  },
  {
    id: 2,
    title: "Viralysis",
    description: "AI and LLM research on understanding virality and recreating viral content on social media.",
    image: "/projects/viralysis.png",
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    achievement: "",
    demoUrl: "N/A",
    githubUrl: "N/A",
  },
  {
    id: 3,
    title: "OncoVAF",
    description: "Developed computational antisense sense RNA differential tool that integrates into the neoantigen selection pipeline, improving bioinformatics workflows for cancer.",
    image: "/projects/oncovaf.png",
    technologies: ["Python", "Docker"],
    achievement: "",
    demoUrl: "N/A",
    githubUrl: "N/A",
  },
  {
    id: 4,
    title: "mFISHQuant",
    description: "Developed and validated methods for multiplex RNA mFISH imaging and qPCR expression analysis by creating R-based analysis pipelines.",
    image: "/projects/mfishquant.png",
    technologies: ["Python", "R", "QuPath"],
    achievement: "",
    demoUrl: "N/A",
    githubUrl: "N/A",
  },

];

export const experiences = [
  {
    id: 1,
    company: "Tech Innovations Inc.",
    position: "Senior Software Developer",
    duration: "2022 - Present",
    description: "Lead development of scalable web applications using React and Node.js. Mentored junior developers and implemented CI/CD pipelines.",
    achievements: [
      "Increased application performance by 40%",
      "Led a team of 5 developers",
      "Implemented automated testing reducing bugs by 60%",
    ],
  },
  {
    id: 2,
    company: "StartupXYZ",
    position: "Full Stack Developer",
    duration: "2020 - 2022",
    description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create user-friendly interfaces.",
    achievements: [
      "Built 10+ client websites from scratch",
      "Improved code review process",
      "Reduced deployment time by 50%",
    ],
  },
  {
    id: 3,
    company: "Digital Solutions Co.",
    position: "Junior Developer",
    duration: "2019 - 2020",
    description: "Started career developing responsive websites and learning modern development practices. Gained experience in agile development methodologies.",
    achievements: [
      "Completed 20+ projects successfully",
      "Learned React, Node.js, and cloud deployment",
      "Contributed to open source projects",
    ],
  },
];

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "Git",
  "Tailwind CSS",
];
