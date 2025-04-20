
import { Code, Database, FileText } from "lucide-react";

export interface SkillCategory {
  id: string;
  title: string;
  icon: any;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level?: number; // 1-5 for proficiency level
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "C++", level: 4 },
      { name: "Java", level: 3 },
      { name: "Python", level: 4 },
      { name: "R", level: 3 },
      { name: "C", level: 3 },
    ],
  },
  {
    id: "data-analysis",
    title: "Data Analysis Tools",
    icon: Database,
    skills: [
      { name: "Excel", level: 5 },
      { name: "Power BI", level: 4 },
      { name: "Tableau", level: 4 },
      { name: "SQL", level: 3 },
      { name: "Informatica", level: 3 },
    ],
  },
  {
    id: "other-skills",
    title: "Other Skills",
    icon: FileText,
    skills: [
      { name: "Git", level: 3 },
      { name: "GitHub", level: 3 },
      { name: "Problem-Solving", level: 4 },
      { name: "Analytics", level: 4 },
      { name: "Data Mining", level: 3 },
      { name: "Business Intelligence", level: 3 },
      { name: "Decision-Making", level: 4 },
    ],
  },
];
