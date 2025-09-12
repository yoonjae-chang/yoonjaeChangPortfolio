import Image from "next/image";
import { ProjectProps } from "@/lib/data";
import Link from "next/link";
import { Link as LinkIcon, GlobeIcon, GithubIcon } from "lucide-react";

const ProjectCard = ({ title, description, image, technologies, links }: ProjectProps) => {
  return (
    <div className="block transition-transform duration-100 hover:scale-[1.02] relative [@media(min-width:554px)]:w-110 w-98">
      <article
        className="md:h-130 h-135 rounded-lg overflow-hidden bg-white shadow-md border-4 border-foreground/85 hover:shadow-xl hover:bg-gray-50 transition duration-150 ease-out"
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
        <div className="px-6 py-2 space-y-4 flex flex-col justify-end">
          
        
          <p className="text-gray-700 text-base md:text-[17px] text-[15px] leading-relaxed font-medium h-17">
            {description}
          </p>

          {/* Technologies */}
          <div className="space-y-2">
            <h4 className="md:text-[17px] text-[15px] font-semibold text-gray-500 uppercase tracking-wide">Technologies</h4>
            <div className="mt-[-8px] md:text-[17px] text-[15px]">
              {technologies}
            </div>
          </div>

        </div>
      </article>
      
      {links && links.length > 0 && (
          <div className="mt-[-8px] flex flex-wrap flex-row gap-2 absolute bottom-3 left-7 right-0">
          {links?.map((link, idx) => (
            <Link
              key={idx}
              href={link?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-primary-foreground bg-gray-100 px-3 py-1.5 text-sm text-foreground shadow-sm transition-all duration-200 hover:text-card hover:shadow-md"
            >
              <LinkIcon className="w-4 h-4" />
              <span className="capitalize">{link.type}</span>
            </Link>
          ))}
        </div>
      )}
    </div>

  );
};

export default ProjectCard;