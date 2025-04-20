
export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image?: string;
  url?: string;
  skills?: string[];
}

export const certificates: Certificate[] = [
  {
    id: "cpp-programming",
    title: "Programming in C++: A Hands-on Introduction",
    issuer: "Coursera - Codio",
    date: "May 2024",
    image: "/lovable-uploads/ceae0505-6720-4618-bd80-7d65a3ba31a8.png",
    url: "https://coursera.org/verify/specialization/P8YX6DKGMP",
    skills: ["C++ Basics", "Object-Oriented Programming", "Data Structures", "Algorithms"]
  },
  {
    id: "r-programming",
    title: "R Programming",
    issuer: "Coursera - Johns Hopkins University",
    date: "February 2024",
    image: "/lovable-uploads/2d311a6e-da53-45f0-b934-505d283a52bd.png",
    url: "https://coursera.org/verify/KV9PYMULQ7TC",
    skills: ["R Programming", "Statistical Analysis", "Data Visualization", "Data Manipulation"]
  },
  {
    id: "excel-skills",
    title: "Excel Skills for Business",
    issuer: "Coursera - Macquarie University",
    date: "April 2024",
    image: "/lovable-uploads/2b55ebc1-a2a7-4149-ad59-d9df4779db85.png",
    url: "https://coursera.org/verify/specialization/ZPL98PMLBC8KJK",
    skills: ["Advanced Excel", "Data Analysis", "Dashboard Creation", "Automation"]
  },
  {
    id: "data-science-foundations",
    title: "Data Science: Foundations Using R",
    issuer: "Coursera - Johns Hopkins University",
    date: "March 2024",
    url: "https://coursera.org/verify/specialization/data-science-foundations",
    skills: ["R Programming", "Data Analysis", "Statistical Inference", "Machine Learning Foundations"]
  }
];
