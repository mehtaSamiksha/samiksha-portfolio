
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "../projects/ProjectCard";

export function FeaturedProjects() {
  const featuredProjects = [
    {
      id: "blogging-platform",
      title: "Blogging Platform",
      description: "A full-stack blogging platform with Django and SQLite database where users can add, delete, and comment on blogs.",
      technologies: ["Flask", "SQLite", "Python", "RESTful API"],
      githubUrl: "https://github.com/mehtaSamiksha/blogging-platform",
    },
    {
      id: "snake-game",
      title: "Snake Game",
      description: "A classic Snake game with smooth movement, food consumption, and score tracking implemented with Java/Swing/JavaFX.",
      technologies: ["Java", "Swing", "JavaFX", "Game Development"],
      githubUrl: "https://github.com/mehtaSamiksha/snake-game",
    },
    {
      id: "supersale-dashboard",
      title: "SuperSale Dashboard",
      description: "An interactive SuperSale dashboard in Excel leveraging advanced formulas, PivotTables, and charts to visualize sales performance.",
      technologies: ["Excel", "Informatica", "Data Visualization"],
    },
  ];

  return (
    <section className="section-container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-display font-bold mb-4">Featured Projects</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Browse through some of my recent projects showcasing my technical skills and problem-solving abilities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Button asChild className="btn-primary">
          <Link to="/projects">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
