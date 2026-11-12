export const profile = {
  name: "Sara Touahri",
  title: "Software Engineer",
  location: "Algeria",
  email: "touahri.sara.st@gmail.com",
  github: "https://github.com/saratouahri",
  linkedin: "https://www.linkedin.com/in/touahri",
  resume: "/CV_Sara_Touahri.pdf",
  introduction:
    "I build intelligent software at the intersection of full-stack engineering, machine learning, and semantic web technologies.",
  summary:
    "Software Engineer with experience turning research questions into practical systems. My work spans energy-aware machine learning for semantic web infrastructure, explainable AI applications, knowledge graphs, and modern full-stack products.",
};

export const experience = [
  {
    company: "LIAS Laboratory",
    role: "Research Software Engineer Intern",
    period: "Jan 2025 - Jul 2025",
    location: "Poitiers, France",
    type: "Research internship",
    description:
      "Investigated the energy efficiency of RDF triple stores and built predictive machine-learning models to estimate the energy consumption of SPARQL queries.",
    highlights: [
      "Designed empirical experiments around query processing and energy usage.",
      "Worked across semantic web infrastructure, data analysis, and predictive modelling.",
      "Documented reproducible workflows for research evaluation and comparison.",
    ],
    technologies: [
      "RDF",
      "SPARQL",
      "Virtuoso",
      "RDF3X",
      "Jena",
      "Python",
      "scikit-learn",
      "TensorFlow",
      "Docker",
      "MySQL",
      "Linux",
    ],
  },
  {
    company: "Sonelgaz",
    role: "Information Technology Intern",
    period: "Aug 2023 - Sep 2023",
    location: "Tiaret, Algeria",
    type: "Industry internship",
    description:
      "Gained hands-on exposure to enterprise IT infrastructure and the digital services supporting Algeria's national electricity and gas provider.",
    highlights: [
      "Supported users and helped document internal procedures.",
      "Learned how enterprise software and networks support energy-sector operations.",
    ],
    technologies: ["ERP", "IT support", "Networking fundamentals", "Documentation"],
  },
];

export const education = [
  {
    institution: "Higher School of Computer Science 08 May 1945 - Sidi Bel Abbes",
    qualification: "Engineering and Master's degree in Computer Science",
    period: "Sep 2022 - Jul 2025",
    location: "Algeria",
    detail: "Specialisation in Information Systems and Web Development.",
  },
  {
    institution: "Higher School of Computer Science and Digital Technologies (ESTIN)",
    qualification: "Engineering preparatory programme",
    period: "Oct 2020 - Jul 2022",
    location: "Algeria",
    detail: "Two-year intensive foundation in Mathematics and Computer Science.",
  },
  {
    institution: "Mouloud Kacem High School",
    qualification: "Mathematics Baccalaureate",
    period: "Sep 2019 - Jun 2020",
    location: "Algeria",
    detail: "Graduated with highest honours.",
  },
];

export const technologyGroups = [
  {
    title: "Languages",
    description: "Core programming and data languages",
    items: ["Python", "JavaScript", "Java", "SQL", "PL/SQL"],
  },
  {
    title: "Web engineering",
    description: "Interfaces, APIs, and application architecture",
    items: [
      "React.js",
      "Next.js",
      "NestJS",
      "Spring Boot",
      "FastAPI",
      "Redux",
      "Tailwind CSS",
    ],
  },
  {
    title: "Machine learning",
    description: "Training, evaluation, and explainability",
    items: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "LightGBM",
      "SHAP",
      "LangChain",
      "Streamlit",
    ],
  },
  {
    title: "Semantic systems",
    description: "Knowledge representation and graph queries",
    items: ["RDF", "SPARQL", "Virtuoso", "RDF3X", "Apache Jena", "Knowledge graphs"],
  },
  {
    title: "Platforms and data",
    description: "Delivery, operations, and persistence",
    items: [
      "Docker",
      "Kubernetes",
      "Linux",
      "Git & GitHub",
      "MySQL",
      "Oracle",
      "MongoDB",
      "Jupyter",
    ],
  },
  {
    title: "Ways of working",
    description: "Practices for maintainable delivery",
    items: ["Object-oriented design", "DevOps", "Agile", "Scrum", "Research workflows"],
  },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "French", level: "Fluent" },
];

export const volunteering = {
  organisation: "ByteCraft Club",
  role: "Active member",
  period: "2020 - 2022",
  description:
    "Supported technology events through logistics, coordination, marketing, and communication.",
};
