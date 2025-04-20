
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const resumeUrl = "https://drive.google.com/file/d/103wYzFrBYeZzICqZ_zeAOBaPb4n-OGlp/view?usp=drive_link";

  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none animated-bg opacity-5" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight animate-fade-in">
              <span className="text-portfolio-primary hover:text-portfolio-secondary transition-colors duration-300">Hello, I'm Samiksha</span>
              <br />
              <span className="text-slate-800 hover:text-portfolio-primary transition-colors duration-300">Future Innovator</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mt-6 animate-fade-in [animation-delay:200ms] hover:text-portfolio-primary transition-colors duration-300">
              Turning Data into Decisions, Ideas into Impact.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8 animate-fade-in [animation-delay:400ms]">
              <Button asChild className="btn-primary transform hover:scale-105 transition-transform duration-300">
                <Link to="/projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                className="btn-outline transform hover:scale-105 transition-transform duration-300"
                onClick={() => window.open(resumeUrl, '_blank')}
              >
                <div>
                  <FileText className="ml-2 h-4 w-4" />
                  View CV
                </div>
              </Button>
            </div>
            
            <div className="mt-10 flex items-center gap-4 animate-fade-in [animation-delay:600ms]">
              <a
                href="https://github.com/mehtaSamiksha"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-100 p-3 rounded-full hover:bg-portfolio-primary hover:text-white transform hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/samiksha04"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-100 p-3 rounded-full hover:bg-portfolio-primary hover:text-white transform hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:samiksha14087@gmail.com"
                className="bg-slate-100 p-3 rounded-full hover:bg-portfolio-primary hover:text-white transform hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="w-full max-w-md relative">
              <div className="absolute inset-0 rounded-full bg-portfolio-primary opacity-20 blur-xl animate-pulse"></div>
              <div className="relative rounded-full overflow-hidden border-4 border-white shadow-xl aspect-square transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/lovable-uploads/8b61ff36-7e90-4575-a570-46e9995664b0.png"
                  alt="Samiksha"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
