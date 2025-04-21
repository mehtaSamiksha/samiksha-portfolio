
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { projects } from "@/data/projects";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <Layout>
        <div className="section-container text-center">
          <h1 className="text-3xl font-display font-bold mb-6">Project Not Found</h1>
          <p className="text-xl text-slate-600 mb-8">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild className="btn-primary">
            <Link to="/projects">Back to Projects</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-container">
        <div className="mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center text-portfolio-primary hover:text-portfolio-secondary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row items-start gap-8">
              {/* Text and description on the left */}
              <div className="flex-1 min-w-0">
                <h1 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  {project.title}
                </h1>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-portfolio-accent text-portfolio-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="prose prose-slate max-w-none">
                  <h2 className="text-2xl font-display font-semibold mb-4">
                    Project Overview
                  </h2>
                  <p className="text-lg text-slate-600 mb-6">
                    {project.longDescription || project.description}
                  </p>
                  {project.features && (
                    <>
                      <h2 className="text-2xl font-display font-semibold mb-4 mt-8">
                        Key Features
                      </h2>
                      <ul className="space-y-2 list-disc pl-5 text-slate-600">
                        {project.features.map((feature, index) => (
                          <li key={index} className="text-lg">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  <div className="flex flex-wrap gap-4 mt-12">
                    {project.githubUrl && (
                      <Button asChild className="btn-primary">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          View on GitHub
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button asChild variant="outline" className="btn-outline">
                        <a href={project.liveUrl} target="_blank" rel="noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              {/* Project image on the right with border and hover */}
              {project.image && (
                <div className="md:w-1/2 w-full flex justify-center items-start">
                  <div className="w-full max-w-sm border-2 border-portfolio-primary rounded-md overflow-hidden shadow transition-transform duration-300 hover:scale-105 hover:shadow-xl group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
