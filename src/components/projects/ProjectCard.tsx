
import { Link } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  className?: string;
}

export function ProjectCard({
  id,
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  className,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "project-card h-full flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300",
        className
      )}
    >
      {image && (
        <div className="w-full aspect-video border-2 border-portfolio-primary rounded-b-none rounded-t-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg group">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      )}
      <div className="flex-1 flex flex-col items-start justify-center p-6 text-left">
        <h3 className="font-display text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-portfolio-accent text-portfolio-primary px-3 py-1 rounded text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-6 mt-2 items-center">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-base text-portfolio-primary hover:text-portfolio-secondary transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-base text-portfolio-primary hover:text-portfolio-secondary transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Live Demo</span>
            </a>
          )}
          <Link
            to={`/projects/${id}`}
            className="story-link text-base text-portfolio-primary"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
