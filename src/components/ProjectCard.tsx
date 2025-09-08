import Image from "next/image";
import { ProjectProps } from "@/lib/data";
import { GithubIcon } from "lucide-react";


const ProjectCard = ({ title, description, image, technologies, demoUrl, githubUrl }: ProjectProps) => {
  return (
    <div className="block transition-transform duration-100 hover:scale-[1.02] relative ">
      <article
        className="h-150 rounded-lg overflow-hidden bg-white shadow-md border-5 border-foreground/85 hover:shadow-xl hover:bg-gray-50 transition duration-150 ease-out"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        <h3 className="pl-6 pt-3 pb-1 text-[27px] font-lato font-extrabold mb-1 text-primary-foreground/85">{title}</h3>

        
        {image !=="/projects/viralysis.png" ? <div className="relative h-56 mx-auto rounded-md w-[90%] bg-white">
          <Image
            src={image}
            alt={`${title}'s profile`}
            fill
            objectFit="contain"
            className="object-contain"
          />
        </div> : <div className="relative h-56 mx-auto rounded-md w-[90%] bg-f5f5f5">
          <Image
            src={image}
            alt={`${title}'s profile`}
            fill
            objectFit="contain"
            className="object-contain"
          />
        </div>}

        {/* Content */}
        <div className="px-6 py-5 space-y-4">
          
          {/* Description */}
          <p className="text-gray-700 text-base leading-relaxed font-medium h-23">
            {description}
          </p>

          {/* Technologies */}
          <div className="space-y-2">
            <h4 className="text-[17px] font-semibold text-gray-500 uppercase tracking-wide">Technologies</h4>
            <div className="flex flex-wrap gap-2 h-[72px] overflow-y-auto">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 h-8 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {githubUrl!=="N/A" && <GithubIcon
            className="w-4 h-4 cursor-pointer"
            onClick={() => window.open(githubUrl, "_blank")}
          />    
          }
        </div>
      </article>
    </div>

  );
};

export default ProjectCard;