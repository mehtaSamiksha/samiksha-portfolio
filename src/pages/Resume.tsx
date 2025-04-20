
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin } from "lucide-react";

const Resume = () => {
  return (
    <Layout>
      <section className="section-container">
        <h1 className="section-title">Resume</h1>

        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <p className="text-lg text-slate-600 mb-6">
              Download my resume to view my complete professional background,
              skills, education, and experience.
            </p>
            <Button asChild className="btn-primary mx-auto">
              <a href="/Samiksha_Resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume (PDF)
              </a>
            </Button>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-display font-bold">Samiksha</h2>
                <p className="text-xl text-portfolio-primary">Data Analyst</p>
                <p className="text-slate-500 mt-2">Sirsa, Haryana 125055</p>
                <div className="flex justify-center gap-4 mt-3">
                  <a
                    href="mailto:samiksha14087@gmail.com"
                    className="text-portfolio-primary hover:text-portfolio-secondary transition-colors"
                  >
                    samiksha14087@gmail.com
                  </a>
                  <span className="text-slate-300">|</span>
                  <a
                    href="tel:+917497828529"
                    className="text-portfolio-primary hover:text-portfolio-secondary transition-colors"
                  >
                    +91 7497828529
                  </a>
                </div>
                <div className="flex justify-center gap-4 mt-2">
                  <a
                    href="https://github.com/mehtaSamiksha"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-portfolio-primary hover:text-portfolio-secondary transition-colors"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/samiksha04"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-portfolio-primary hover:text-portfolio-secondary transition-colors"
                  >
                    <Linkedin className="h-4 w-4 mr-1" />
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-xl font-display font-semibold mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Bachelor of Technology - Computer Science and Engineering</h4>
                    <p className="text-portfolio-primary">Lovely Professional University, Punjab</p>
                    <p className="text-sm text-slate-500">2022 - 2026</p>
                    <p className="text-sm">CGPA: 7.73</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-xl font-display font-semibold mb-4">Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Programming Languages</h4>
                    <p>C++, Java, C, Python, R</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Data Analysis Tools</h4>
                    <p>Excel, Power BI, Tableau, Informatica</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Other Skills</h4>
                    <p>Git, GitHub, Problem-Solving, Analytics, Data Mining</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Soft Skills</h4>
                    <p>Analytical thinking, Decision-Making, Communication</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-xl font-display font-semibold mb-4">Projects</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Blogging Platform</h4>
                    <p className="text-sm text-slate-500">October 2024</p>
                    <p>A full-stack blogging platform with Flask and SQLite database where users can add, delete, and comment on blogs.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Snake Game</h4>
                    <p className="text-sm text-slate-500">September 2024</p>
                    <p>A classic Snake game with smooth movement, food consumption, and score tracking implemented with Java/Swing/JavaFX.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">SuperSale Dashboard</h4>
                    <p className="text-sm text-slate-500">July 2024</p>
                    <p>An interactive SuperSale dashboard in Excel leveraging advanced formulas, PivotTables, and charts to visualize sales performance.</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-xl font-display font-semibold mb-4">Certifications</h3>
                <div className="space-y-2">
                  <p>• Programming in C++: A Hands-on Introduction - Coursera</p>
                  <p>• R Programming - Johns Hopkins University (Coursera)</p>
                  <p>• Excel Skills for Business - Macquarie University (Coursera)</p>
                  <p>• Data Science: Foundations Using R - Johns Hopkins University (Coursera)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
