export const personalInfo = {
  name: "Yoon Jae Chang",
  title: "Software Developer",
  bio: "Hey, I&apos;m Yoon Jae Chang. Here, you can check out what I&apos;m working on. I try my best to create things with ❤",
  email: "yoonjaechang244@gmail.com",
  github: "https://github.com/yoonjae-chang",
  linkedin: "https://linkedin.com/in/yoonjaechang",
};


export const aboutMe = "I am a Computer Science student at Columbia University (the School of Engineering and Applied Science). My interests include AI/ML/Software engineering. Listed below is a timeline of my experiences that I have been involved in.";

export type ProjectProps = {
  id: number;
  title: string;
  description: string;
  image: string;
  video?: string;
  technologies: string;
  links?: readonly {
    type: string;
    href: string;
  }[];

}

export const projects = [
  {
    id: 1,
    title: "ShadowU",
    description: "A peer-to-peer marketplace connecting high school students with college hosts to experience authentic campus life.",
    image: "/projects/shadowu.png",
    technologies: "Next.js, TypeScript, Supabase, Supabase Auth and Edge Functions, Stripe, Tailwind CSS",
    links: [{
      type: "Website",
      href: "https://shadowu.org",
    },
    ],
  },
  {
    id: 2,
    title: "Ideation",
    description: "AI-powered idea generation tool that helps users prototype their ideas at the speed of light: hack creativity with AI.",
    image: "/projects/prototypingideas.png",
    technologies: "Next.js, Typescript, Supabase, Supabase Auth and Edge Functions, OpenAI (GPT-4o Mini, GPT-4o)",
    links: [
      {
        type: "Website",
        href: "https://prototypingideas.com",
      },
      { 
        type: "GitHub",
        href: "https://github.com/yoonjae-chang/ideation",
      },
      // {
      //   type: "Video",
      //   href: "",
      // }
    ],
  },
  {
    id: 3,
    title: "Viralysis",
    description: "AI and LLM research on understanding virality and recreating viral content on social media.",
    image: "/projects/viralysis.png",
    technologies: "Next.js, Typescript, Python, FastAPI, Gemini (VEO 3), Langfuse, OpenAI (GPT-4o Mini, GPT-o3 Mini)",
    links: [
      {
        type: "Columbia Lab Work",
        href: "https://www.cs.columbia.edu/~chilton/",
      }
    ],
  },

  {
    id: 4,
    title: "OncoVAF",
    description: "Developed computational antisense/sense RNA differential tool that integrates into bioinformatics workflows for cancer vaccines.",
    image: "/projects/oncovaf.png",
    technologies: "Python, Docker, Immuno.cwl \"Workflow\", SAM/BAM/CRAM, MIT IGV",
    links: [
      {
        type: "Resarch Paper",
        href: "https://drive.google.com/file/d/1RoVytcrvrAHT9TBag1J-kS7fiONLoeRg/view?usp=sharing",
      },
      {
        type: "Research Poster",
        href: "https://drive.google.com/file/d/1vMwWI4zhyVNy2_SjET6RjeVEgiruNH1v/view?usp=sharing",
      }
    ],
  },
  {
    id: 5,
    title: "mFISHQuant",
    description: "Developed and validated methods for multiplex RNA mFISH imaging and qPCR expression analysis by creating R-based analysis pipelines.",
    image: "/projects/mfishquant.png",
    technologies: "Python, R, QuPath",
    links: [
      {
        type: "Research Abstract",
        href: "https://drive.google.com/file/d/1N5onsClpL9xB55QTTbxZQGxUgBonE0Xh/view?usp=sharing",
      }
    ],
  },
];

export const experiences = [
  {
    id: 1,
    company: "Computational Design Lab – Columbia University",
    position: "AI & LLM Researcher",
    duration: "Aug 2025 – Present",
    description:
      "Researching how large language models (LLMs) and AI can replicate and augment human cognitive strategies, advancing the lab’s human-AI collaboration work.",
  },
  {
    id: 2,
    company: "PointOne (YC W24)",
    position: "Software Engineer & AI Intern",
    duration: "Jun 2025 – Aug 2025",
    description:
      "Worked on AI-powered client-facing tools, optimizing LLM pipelines (with Langfuse) and retrieval-augmented generation (RAG) systems for enterprise users.",
  },
  {
    id: 3,
    company: "Omen – Agentic Investing for All",
    position: "Software Engineer Intern",
    duration: "Jan 2025 – Apr 2025",
    description:
      "Developed low-latency trading systems for AI-driven retail investing, and built a mobile UI/UX in React.js with Supabase authentication and database integration.",
  },
  {
    id: 4,
    company: "Washington University School of Medicine",
    position: "Data Scientist Intern",
    duration: "May 2023 – Aug 2023",
    description:
      "Developed computational pipelines for RNA imaging analysis and contributed to published cancer research on Nature journal.",
  },
];


export const skills = [
  "JavaScript",,
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
