
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">Samiksha</h3>
            <p className="text-slate-300 mb-4">
              Turning Data into Decisions, Ideas into Impact.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/mehtaSamiksha"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-portfolio-secondary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/samiksha04"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-portfolio-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:samiksha14087@gmail.com"
                className="text-white hover:text-portfolio-secondary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-slate-300 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="text-slate-300 hover:text-white transition-colors">About</Link>
              <Link to="/skills" className="text-slate-300 hover:text-white transition-colors">Skills</Link>
              <Link to="/projects" className="text-slate-300 hover:text-white transition-colors">Projects</Link>
              <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Contact</h3>
            <p className="text-slate-300 mb-2">Sirsa, Haryana 125055</p>
            <p className="text-slate-300 mb-2">
              <a href="mailto:samiksha14087@gmail.com" className="hover:text-white transition-colors">
                samiksha14087@gmail.com
              </a>
            </p>
            <p className="text-slate-300">
              <a href="tel:+917497828529" className="hover:text-white transition-colors">
                +91 7497828529
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 text-center text-slate-400">
          <p>© {currentYear} Samiksha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
