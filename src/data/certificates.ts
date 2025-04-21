
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
    image: "/lovable-uploads/ec999bcd-e87c-4364-8966-58f21f32176f.png",
    url: "https://www.coursera.org/account/accomplishments/specialization/RB9YX6DKFGMN",
    skills: ["C++ Basics", "Object-Oriented Programming", "Data Structures", "Algorithms"]
  },
  {
    id: "r-programming",
    title: "R Programming",
    issuer: "Coursera - Johns Hopkins University",
    date: "February 2024",
    image: "/lovable-uploads/28eb12a7-9dad-49ed-9964-7c39aec00af2.png",
    url: "https://www.coursera.org/account/accomplishments/verify/KV9PYMUVD7YC",
    skills: ["R Programming", "Statistical Analysis", "Data Visualization", "Data Manipulation"]
  },
  {
    id: "excel-skills",
    title: "Excel Skills for Business",
    issuer: "Coursera - Macquarie University",
    date: "April 2024",
    image: "/lovable-uploads/64222a57-e317-4653-8ff7-d5814eebfafe.png",
    url: "https://www.coursera.org/account/accomplishments/specialization/PL8B9LMCBK8K",
    skills: ["Advanced Excel", "Data Analysis", "Dashboard Creation", "Automation"]
  },
  {
    id: "data-science-foundations",
    title: "Data Science: Foundations Using R",
    issuer: "Coursera - Johns Hopkins University",
    date: "March 2024",
    image: "/lovable-uploads/28eb12a7-9dad-49ed-9964-7c39aec00af2.png",
    url: "https://www.coursera.org/account/accomplishments/verify/KV9PYMUVD7YC",
    skills: ["R Programming", "Data Analysis", "Statistical Inference", "Machine Learning Foundations"]
  }
];
