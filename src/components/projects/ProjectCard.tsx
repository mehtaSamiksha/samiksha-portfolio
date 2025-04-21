
import { Link } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
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
        "project-card h-full flex flex-col justify-between hover:shadow-xl transition-shadow duration-300",
        className
      )}
    >
      <div className="flex flex-row gap-4 p-6 items-center">
        {/* Description and technology section on left */}
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="bg-portfolio-accent text-portfolio-primary px-2 py-1 rounded text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-3 mt-2">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm text-portfolio-primary hover:text-portfolio-secondary transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm text-portfolio-primary hover:text-portfolio-secondary transition-colors ml-4"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
            <Link
              to={`/projects/${id}`}
              className="ml-auto story-link text-sm text-portfolio-primary"
            >
              Read More
            </Link>
          </div>
        </div>
        {/* Image on the right */}
        {image && (
          <div className="ml-4 flex-shrink-0">
            <div className="aspect-video w-40 h-28 border-2 border-portfolio-primary rounded-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg group">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
