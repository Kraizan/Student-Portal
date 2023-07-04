import React from "react";
import ProjectCard from "./project_card";
import WorkExperienceCard from "./work_experience_card";
import ResearchPaperCard from "./research_paper_card";

function UserProfileWorks({ tempData }) {
  return (
    <div style={{ width: "70%" }}>
      <div>
        {tempData.workingExperience.map((data, index) => {
          return <WorkExperienceCard key={index} data={data} />;
        })}
      </div>
      <div>
        {tempData.projects.map((data, index) => {
          return <ProjectCard key={index} data={data} />;
        })}
      </div>
      <div>
        {tempData.researchPapers.map((data, index) => {
          return <ResearchPaperCard key={index} data={data} />;
        })}
      </div>
    </div>
  );
}

export default UserProfileWorks;
