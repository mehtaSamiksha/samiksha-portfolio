
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  date: string;
  features?: string[];
}

export const projects: Project[] = [
  {
    id: "blogging-platform",
    title: "Blogging Platform",
    description: "A full-stack blogging platform with Flask and SQLite database where users can add, delete, and comment on blogs.",
    longDescription: "Developed a blogging platform where users can add, delete, and comments on blogs. Developed a full-stack application with dynamic data retrieval from Django, featuring a responsive design and dynamic pagination. Implemented RESTful APIs for data insertion, retrieval, and comments. Applied Python knowledge successfully to create a fully functional website.",
    image: "/lovable-uploads/5a416070-945b-47b1-b36d-ce2caceeeec4.png",
    technologies: ["Flask", "SQLite", "Python", "Django", "RESTful API", "HTML/CSS"],
    githubUrl: "https://github.com/mehtaSamiksha/Blog-mate",
    date: "October 2024",
    features: [
      "User authentication and individual user data storage",
      "Dynamic content loading with pagination",
      "Comment system with threaded replies",
      "Mobile-responsive design",
      "RESTful API for data operations"
    ]
  },
  {
    id: "snake-game",
    title: "Snake Game",
    description: "A classic Snake game with smooth movement, food consumption, and score tracking implemented with Java/Swing/JavaFX.",
    longDescription: "Developed a classic Snake game with smooth movement, food consumption, and score tracking. Implemented game-over screen for enhanced user experience using Java/Swing/JavaFX. Showcased skills in logic building, event handling, and basic game development.",
    image: "/lovable-uploads/ae2c0e7c-925e-45cf-b9d8-4cf925017c4d.png",
    technologies: ["Java", "Swing", "JavaFX", "Game Development"],
    githubUrl: "https://github.com/mehtaSamiksha/Java-Snake-Game-master",
    date: "September 2024",
    features: [
      "Smooth snake movement with keyboard controls",
      "Food generation and consumption mechanics",
      "Score tracking and display",
      "Game-over detection",
      "Restart functionality"
    ]
  },
  {
    id: "supersale-dashboard",
    title: "SuperSale Dashboard",
    description: "An interactive SuperSale dashboard in Excel leveraging advanced formulas, PivotTables, and charts to visualize sales performance.",
    longDescription: "Developed an interactive SuperSale dashboard in Excel, leveraging advanced formulas, PivotTables, and charts to visualize sales performance. Optimized data analysis by implementing dynamic filtering and conditional formatting, enhancing decision-making efficiency. Automated key reporting tasks using macros and data validation, reducing manual workload and improving accuracy.",
    image: "/lovable-uploads/5d0fa3d1-9080-460f-9c40-ce1fc17bd35f.png",
    technologies: ["Excel", "Informatica", "Data Visualization", "Data Analysis"],
    date: "July 2024",
    features: [
      "Interactive dashboard with dynamic filters",
      "Advanced Excel formulas for data analysis",
      "PivotTables for summarizing large datasets",
      "Custom charts for visualizing sales trends",
      "Automated reporting with macros"
    ]
  },
  {
    id: "abbreviation-program",
    title: "Abbreviation Generator",
    description: "A Python-based abbreviation program to efficiently generate and interpret abbreviations.",
    longDescription: "Designed a Python-based abbreviation program to efficiently generate and interpret abbreviations. Integrated string manipulation and data structures to improve abbreviation accuracy and retrieval speed. Enhanced user experience by incorporating input validation and a user-friendly interface for seamless interaction.",
    image: "/lovable-uploads/f2821ea4-17b4-4666-a2f9-7e3f414691d9.png",
    technologies: ["Python", "Data Structures", "String Manipulation"],
    githubUrl: "https://github.com/mehtaSamiksha/abbreviation_generator",
    date: "September 2023",
    features: [
      "Efficient abbreviation generation algorithm",
      "Abbreviation lookup and interpretation",
      "Custom user input validation",
      "User-friendly command-line interface",
      "Export functionality for generated abbreviations"
    ]
  }
];
