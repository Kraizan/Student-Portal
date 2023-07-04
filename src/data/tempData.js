const data = {
  fullName: "John Doe",
  email: "johndoe@example.com",
  contact: "+1 123-456-7890",
  profileImage: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png ",
  resume: "https://example.com/resume.pdf",
  hyperlinks: {
    portfolioWebsite: "https://example.com/portfolio",
    linkedIn: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    other: ["https://example.com/other1", "https://example.com/other2"],
  },
  workingExperience: [
    {
      company: "ABC Corp",
      from: "2020-01-01",
      to: "2022-03-15",
      position: "Software Engineer",
      description:
        "Worked on developing web applications using modern technologies.",
    },
    {
      company: "XYZ Inc",
      from: "2018-05-01",
      to: "2019-12-31",
      position: "Intern",
      description: "Assisted in testing and debugging software products.",
    },
  ],
  projects: [
    {
      title: "Project A",
      link: "https://example.com/project-a",
      startedOn: "2021-02-15",
      description: "Built a web application for managing tasks and deadlines.",
      techStack: ["JavaScript", "React", "Node.js", "MongoDB"],
    },
    {
      title: "Project B",
      link: "https://example.com/project-b",
      startedOn: "2020-07-01",
      description: "Developed a mobile app for tracking fitness activities.",
      techStack: ["Flutter", "Firebase"],
    },
  ],
  researchPapers: [
    {
      title: "Machine Learning Techniques for Image Recognition",
      publisher: "IEEE",
      publishedOn: "2021-04-10",
      abstract:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique nulla non mollis ultrices. Nullam orci turpis, volutpat eu nisi non, laoreet ullamcorper enim. Vivamus enim nisi, lacinia ut ligula feugiat, mollis tincidunt leo. Cras odio sapien, pretium et odio vel, pulvinar rhoncus orci. Mauris augue leo, efficitur luctus erat et, imperdiet suscipit felis. Fusce faucibus, erat convallis semper vulputate, felis ligula gravida mauris, quis faucibus libero eros quis odio. Nullam vitae risus id diam tristique placerat ut vel libero. Aliquam vel accumsan dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque libero purus, elementum vitae finibus.",
      docLink: "https://example.com/research-paper1.pdf",
    },
    {
      title: "Advancements in Natural Language Processing",
      publisher: "ACM",
      publishedOn: "2020-09-20",
      abstract:
        "Discusses recent advancements in natural language processing and their applications.",
      docLink: "https://example.com/research-paper2.pdf",
    },
  ],
};

export default data;
