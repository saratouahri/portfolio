import projects from "../../public/project.json";

const baseUrl = "https://www.sara-touahri.com";

export default function sitemap() {
  const pages = [
    { path: "", changeFrequency: "monthly", priority: 1 },
    { path: "/pages/Projects", changeFrequency: "monthly", priority: 0.9 },
    { path: "/pages/Contact", changeFrequency: "yearly", priority: 0.6 },
  ];

  const pageEntries = pages.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    changeFrequency,
    priority,
  }));

  const projectEntries = projects.map(({ id }) => ({
    url: `${baseUrl}/pages/ProjectDetails?id=${id}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...pageEntries, ...projectEntries];
}
