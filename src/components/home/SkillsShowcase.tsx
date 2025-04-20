
import { Code, Database, FileText, FlaskRound } from "lucide-react";
import { SkillCard } from "../skills/SkillCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function SkillsShowcase() {
  const skillGroups = [
    {
      icon: <Code className="w-10 h-10" />,
      title: "Programming",
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Data Analysis",
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Reporting",
    },
    {
      icon: <FlaskRound className="w-10 h-10" />,
      title: "Problem Solving",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">My Skills</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            With expertise in multiple programming languages and data analysis tools,
            I transform complex data into actionable insights.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {skillGroups.map((skill) => (
            <SkillCard
              key={skill.title}
              icon={skill.icon}
              title={skill.title}
            />
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="btn-outline">
            <Link to="/skills">View All Skills</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
