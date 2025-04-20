
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);

  const filteredProjects = filter
    ? projects.filter((project) => project.technologies.includes(filter))
    : projects;

  const allTechnologies = Array.from(
    new Set(projects.flatMap((project) => project.technologies))
  ).sort();

  return (
    <Layout>
      <section className="section-container">
        <h1 className="section-title">My Projects</h1>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-center text-lg text-slate-600">
            Browse through my projects showcasing my technical skills and
            problem-solving abilities in various domains.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              filter === null
                ? "bg-portfolio-primary text-white"
                : "bg-slate-100 hover:bg-slate-200"
            }`}
          >
            All
          </button>
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                filter === tech
                  ? "bg-portfolio-primary text-white"
                  : "bg-slate-100 hover:bg-slate-200"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-slate-600">
              No projects found with the selected technology.
            </p>
            <button
              onClick={() => setFilter(null)}
              className="mt-4 btn-outline inline-block"
            >
              Show All Projects
            </button>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Projects;
