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
  technologies: string;
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
    technologies: "Next.js, TypeScript, Supabase, Supabase Auth and Edge Functions, Stripe, Tailwind CSS",
    achievement: "",
    demoUrl: "https://shadowu.org",
    githubUrl: "N/A",
  },
  {
    id: 2,
    title: "Viralysis",
    description: "AI and LLM research on understanding virality and recreating viral content on social media.",
    image: "/projects/viralysis.png",
    technologies: "Next.js, Typescript, Python, FastAPI, Gemini (VEO 3), Langfuse, OpenAI (GPT-4o Mini, GPT-o3 Mini)",
    achievement: "",
    demoUrl: "N/A",
    githubUrl: "N/A",
  },

  {
    id: 3,
    title: "OncoVAF",
    description: "Developed computational antisense/sense RNA differential tool that integrates into bioinformatics workflows for cancer vaccines.",
    image: "/projects/oncovaf.png",
    technologies: "Python, Docker, Immuno.cwl \"Workflow\"",
    achievement: "",
    demoUrl: "N/A",
    githubUrl: "N/A",
  },
  {
    id: 4,
    title: "mFISHQuant",
    description: "Developed and validated methods for multiplex RNA mFISH imaging and qPCR expression analysis by creating R-based analysis pipelines.",
    image: "/projects/mfishquant.png",
    technologies: "Python, R, QuPath",
    achievement: "",
    demoUrl: "N/A",
    githubUrl: "N/A",
  },
  {
    id: 5,
    title: "More Coming Soon...",
    description: "Project on the best essay writing assistant in the world.",
    image: "/projects/morecomingsoon.png",
    technologies: "",
    achievement: "",
    demoUrl: "N/A",
    githubUrl: "N/A",
  },
  {
    id: 6,
    title: "More Coming Soon...",
    description: "Not really sure yet what I want to do here but want to incorporate AI agents...",
    image: "/projects/morecomingsoon.png",
    technologies: "",
    achievement: "",
    demoUrl: "N/A",
    githubUrl: "N/A",
  },

];

export const experiences = [
  {
    id: 1,
    company: "Computational Design Lab – Columbia University",
    position: "AI & LLM Researcher",
    duration: "Aug 2025 – Present",
    description:
      "Researching how large language models (LLMs) can replicate and augment human cognitive strategies, advancing the lab’s work on computational design for human-AI collaboration.",
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
