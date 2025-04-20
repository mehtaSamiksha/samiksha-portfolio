
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { SkillsShowcase } from "@/components/home/SkillsShowcase";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <SkillsShowcase />
      <FeaturedProjects />
      
      {/* Call to Action Section */}
      <section className="py-20 bg-portfolio-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 hover:opacity-90 transition-opacity duration-300">
              Let's Work Together
            </h2>
            <p className="text-lg opacity-90 mb-8 hover:opacity-100 transition-opacity duration-300">
              Interested in collaborating or have a project in mind? I'm always open to
              discussing new opportunities and challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline" className="bg-white text-portfolio-primary border-white hover:bg-transparent hover:text-white transform hover:scale-105 transition-all duration-300">
                <Link to="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-portfolio-primary transform hover:scale-105 transition-all duration-300">
                <Link to="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
