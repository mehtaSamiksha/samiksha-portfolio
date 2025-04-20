
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      <section className="section-container">
        <h1 className="section-title">About Me</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl font-display font-semibold mb-6">
              Passionate about transforming data into meaningful insights
            </h2>
            
            <div className="space-y-4 text-slate-700">
              <p>
                Hello! I'm Samiksha, a Computer Science and Engineering student at Lovely Professional University with a passion for data analysis and problem-solving. I'm on a journey to become a skilled data analyst who can turn complex data into actionable insights.
              </p>
              
              <p>
                Currently pursuing my Bachelor of Technology degree, I'm building a strong foundation in programming languages like C++, Java, Python, and R, while also developing expertise in data analysis tools such as Power BI, Tableau, and Excel.
              </p>
              
              <p>
                I enjoy working on projects that challenge me to think critically and find innovative solutions. Whether it's developing a blogging platform, creating interactive dashboards, or designing algorithms, I approach each task with enthusiasm and a commitment to excellence.
              </p>
              
              <p>
                My goal is to leverage my technical skills and analytical mindset to help organizations make data-driven decisions and unlock the full potential of their data.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <Button asChild className="btn-primary transform hover:scale-105 transition-transform duration-300">
                <Link to="/contact">
                  Contact Me <Mail className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="btn-outline transform hover:scale-105 transition-transform duration-300">
                <a href="/Samiksha_Resume.pdf" download>
                  Download CV <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-portfolio-primary to-portfolio-secondary opacity-50 blur transform hover:scale-105 transition-all duration-300"></div>
              <div className="relative rounded-lg overflow-hidden border-4 border-white shadow-xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/8b61ff36-7e90-4575-a570-46e9995664b0.png"
                  alt="Samiksha" 
                  className="w-full h-auto object-cover brightness-95 contrast-110 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-display font-semibold mb-6">Education</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-portfolio-primary pl-6 py-2">
              <h3 className="text-xl font-semibold">Bachelor of Technology - Computer Science and Engineering</h3>
              <p className="text-portfolio-primary font-medium">Lovely Professional University, Punjab</p>
              <p className="text-slate-600">2022 - 2026</p>
              <p className="mt-2">CGPA: 7.73</p>
            </div>
            
            <div className="border-l-4 border-portfolio-primary pl-6 py-2">
              <h3 className="text-xl font-semibold">Intermediate</h3>
              <p className="text-portfolio-primary font-medium">The Genius Sr. Secondary School, Ratia, Haryana</p>
              <p className="text-slate-600">2019 - 2021</p>
              <p className="mt-2">Percentage: 95.6%</p>
            </div>
            
            <div className="border-l-4 border-portfolio-primary pl-6 py-2">
              <h3 className="text-xl font-semibold">Matriculation</h3>
              <p className="text-portfolio-primary font-medium">The Genius Sr. Secondary School, Ratia, Haryana</p>
              <p className="text-slate-600">2017 - 2019</p>
              <p className="mt-2">Percentage: 92.2%</p>
            </div>
          </div>
        </div>

        {/* Contact Info Section */}
        <div>
          <h2 className="text-2xl font-display font-semibold mb-6">Contact Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-lg">
              <p className="text-slate-600 mb-2">Location</p>
              <p className="font-medium">Sirsa, Haryana 125055</p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg">
              <p className="text-slate-600 mb-2">Email</p>
              <a href="mailto:samiksha14087@gmail.com" className="font-medium hover:text-portfolio-primary transition-colors">
                samiksha14087@gmail.com
              </a>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg">
              <p className="text-slate-600 mb-2">Phone</p>
              <a href="tel:+917497828529" className="font-medium hover:text-portfolio-primary transition-colors">
                +91 7497828529
              </a>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg">
              <p className="text-slate-600 mb-2">Connect</p>
              <div className="flex gap-4 mt-2">
                <a
                  href="https://github.com/mehtaSamiksha"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 hover:text-portfolio-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/samiksha04"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 hover:text-portfolio-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

