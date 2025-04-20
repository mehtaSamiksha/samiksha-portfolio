
import { Link } from "react-router-dom";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none animated-bg opacity-5" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight animate-fade-in">
              <span className="text-portfolio-primary">Hi, I'm Samiksha</span>
              <br />
              <span className="text-slate-800">Data Analyst</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mt-6 animate-fade-in [animation-delay:200ms]">
              Turning Data into Decisions, Ideas into Impact.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8 animate-fade-in [animation-delay:400ms]">
              <Button asChild className="btn-primary">
                <Link to="/projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="btn-outline">
                <a href="/Samiksha_Resume.pdf" download>
                  Download CV <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            
            <div className="mt-10 flex items-center gap-4 animate-fade-in [animation-delay:600ms]">
              <a
                href="https://github.com/mehtaSamiksha"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-100 p-3 rounded-full hover:bg-slate-200 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/samiksha04"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-100 p-3 rounded-full hover:bg-slate-200 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:samiksha14087@gmail.com"
                className="bg-slate-100 p-3 rounded-full hover:bg-slate-200 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="w-full max-w-md relative">
              <div className="absolute inset-0 rounded-full bg-portfolio-primary opacity-20 blur-xl animate-pulse"></div>
              <div className="relative rounded-full overflow-hidden border-4 border-white shadow-xl aspect-square">
                <img
                  src="/lovable-uploads/2976d132-1151-47f4-975b-2b56aec82015.png"
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
