import { Layout } from "@/components/layout/Layout";
import { skillCategories } from "@/data/skills";
import { 
  Award, 
  FlaskRound, 
  FileCode, 
  Code, 
  Terminal, 
  Database, 
  GitBranch, 
  BarChart,
  Table,
  Brain,
  LineChart,
  Binary,
  Laptop 
} from "lucide-react";
import { motion } from "framer-motion";

const getSkillIcon = (skillName: string) => {
  const name = skillName.toLowerCase();
  
  // Programming Languages
  if (name.includes('python')) {
    return <FileCode className="w-5 h-5 text-portfolio-primary mr-2" />;
  } else if (name.includes('java')) {
    return <Binary className="w-5 h-5 text-portfolio-primary mr-2" />;
  } else if (name.includes('c++') || name.includes('c')) {
    return <Code className="w-5 h-5 text-portfolio-primary mr-2" />;
  }
  
  // Data Analysis Tools
  else if (name.includes('sql')) {
    return <Database className="w-5 h-5 text-portfolio-primary mr-2" />;
  } else if (name.includes('excel')) {
    return <Table className="w-5 h-5 text-portfolio-primary mr-2" />;
  } else if (name.includes('power bi') || name.includes('tableau')) {
    return <BarChart className="w-5 h-5 text-portfolio-primary mr-2" />;
  } else if (name.includes('informatica')) {
    return <LineChart className="w-5 h-5 text-portfolio-primary mr-2" />;
  }
  
  // Other Skills
  else if (name.includes('git')) {
    return <GitBranch className="w-5 h-5 text-portfolio-primary mr-2" />;
  } else if (name.includes('problem-solving')) {
    return <Brain className="w-5 h-5 text-portfolio-primary mr-2" />;
  } else if (name.includes('analytics')) {
    return <LineChart className="w-5 h-5 text-portfolio-primary mr-2" />;
  }
  
  // Default icon for other skills
  return <Code className="w-5 h-5 text-portfolio-primary mr-2" />;
};

const Skills = () => {
  return (
    <Layout>
      <section className="section-container">
        <h1 className="section-title">Skills & Tools</h1>
        
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-center text-lg text-slate-600">
            I transform complex data into actionable insights that drive informed decision-making.
          </p>
        </div>
        
        <div className="space-y-16">
          {skillCategories.map((category, index) => (
            <div key={category.id} className="skill-category">
              <div className="flex items-center mb-8">
                <div className="bg-portfolio-accent p-3 rounded-full mr-4">
                  <category.icon className="h-6 w-6 text-portfolio-primary" />
                </div>
                <h2 className="text-2xl font-display font-semibold">{category.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="skill-card"
                  >
                    <div className="flex items-center mb-3">
                      {getSkillIcon(skill.name)}
                      <h3 className="font-medium text-lg">{skill.name}</h3>
                    </div>
                    {skill.level && (
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-portfolio-primary h-2.5 rounded-full" 
                          style={{ width: `${(skill.level / 5) * 100}%` }}
                        ></div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Skills Section */}
        <div className="mt-16 bg-slate-50 p-8 rounded-lg">
          <h2 className="text-2xl font-display font-semibold mb-6">Additional Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-lg mb-3 flex items-center">
                <Award className="w-5 h-5 mr-2 text-portfolio-primary" />
                Data Analysis
              </h3>
              <ul className="list-disc list-inside space-y-1 text-slate-700 pl-5">
                <li>Data Cleaning and Preprocessing</li>
                <li>Statistical Analysis</li>
                <li>Data Visualization</li>
                <li>Dashboard Creation</li>
                <li>Reporting and Insights Generation</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-lg mb-3 flex items-center">
                <FlaskRound className="w-5 h-5 mr-2 text-portfolio-primary" />
                Problem Solving
              </h3>
              <ul className="list-disc list-inside space-y-1 text-slate-700 pl-5">
                <li>Algorithmic Thinking</li>
                <li>Logical Reasoning</li>
                <li>Data Structures Implementation</li>
                <li>Optimization Techniques</li>
                <li>Debugging and Troubleshooting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
