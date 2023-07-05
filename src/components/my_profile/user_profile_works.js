import React, { useState } from "react";
import ProjectCard from "./project_card";
import WorkExperienceCard from "./work_experience_card";
import ResearchPaperCard from "./research_paper_card";
import { Card, CardContent, CardHeader } from "@mui/material";
import ToggleWorksButton from "./toggle_works_button";
import ExperienceForm from "./experience_form";
import ProjectForm from "./project_form";
import ResearchForm from "./research_form";

function UserProfileWorks({ tempData }) {
  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllPapers, setShowAllPapers] = useState(false);

  return (
    <div style={{ width: "70%" }}>
      <Card style={{ padding: "20px" }}>
        <CardHeader title="Work Experience" />
        <CardContent>
          {tempData.workingExperience
            .slice(
              0,
              showAllExperiences ? tempData.workingExperience.length : 1
            )
            .map((data, index) => {
              return (
                <div key={index}>
                  <WorkExperienceCard data={data} />
                </div>
              );
            })}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <ToggleWorksButton
              data={tempData.workingExperience}
              showAll={showAllExperiences}
              setShowAll={setShowAllExperiences}
            />
            <ExperienceForm />
          </div>
        </CardContent>
      </Card>
      <Card style={{ marginTop: "10px", padding: "20px" }}>
        <CardHeader title="Projects" />
        <CardContent>
          {tempData.projects
            .slice(0, showAllProjects ? tempData.projects.length : 1)
            .map((data, index) => {
              return (
                <div key={index}>
                  <ProjectCard project={data} />
                </div>
              );
            })}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <ToggleWorksButton
              data={tempData.projects}
              showAll={showAllProjects}
              setShowAll={setShowAllProjects}
            />
            <ProjectForm />
          </div>
        </CardContent>
      </Card>
      <Card style={{ marginTop: "10px", padding: "20px" }}>
        <CardHeader title="Research Papers" />
        <CardContent>
          {tempData.researchPapers
            .slice(0, showAllPapers ? tempData.researchPapers.length : 1)
            .map((data, index) => {
              return (
                <div key={index}>
                  <ResearchPaperCard paper={data} />
                </div>
              );
            })}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {" "}
            <ToggleWorksButton
              data={tempData.researchPapers}
              showAll={showAllPapers}
              setShowAll={setShowAllPapers}
            />
            <ResearchForm />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default UserProfileWorks;
