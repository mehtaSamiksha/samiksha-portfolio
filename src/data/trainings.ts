
export interface Training {
  id: string;
  title: string;
  organization: string;
  description: string;
  date: string;
  skills: string[];
}

export const trainings: Training[] = [
  {
    id: "cipherschools-dsa",
    title: "Data Structure and Algorithm",
    organization: "CipherSchools",
    description: "Online summer training to learn Data Structure and Algorithm. Gained proficiency in key concepts like arrays, linked lists, stack, queues, trees and hash tables. Developed problem-solving skills by practicing algorithm design and optimization techniques. Enhanced knowledge of recursion and sorting/searching techniques.",
    date: "June 2024 - July 2024",
    skills: [
      "Data Structures",
      "Algorithms",
      "Problem Solving",
      "Arrays",
      "Linked Lists",
      "Stack",
      "Queues",
      "Trees",
      "Hash Tables",
      "Recursion",
      "Sorting",
      "Searching"
    ]
  }
];
