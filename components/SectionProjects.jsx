import ProjectsContent from "./ProjectsContent.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { useState } from "react";

import PROJECTS from "../projects";

const SectionIntro = () => {
  const [active, setactive] = useState("");
  const [close, setclose] = useState("");
  const [ProjectShow, setProjectShow] = useState("");

  const handlerActive = () => {
    if (active === "") {
      setactive("active");
    } else {
      setactive("");
    }
  };

  const handlerClose = () => {
    if (close === "") {
      setclose("is-article-visible");
    } else {
      setclose("");
      setProjectShow("");
    }
  };

  const handlerAricleProject = aricle => {
    switch (aricle) {
      case "tery":
        setProjectShow(PROJECTS[0]);
        break;
      case "izi":
        setProjectShow(PROJECTS[1]);
        break;
      case "pet":
        setProjectShow(PROJECTS[2]);
        break;
      case "spoty":
        setProjectShow(PROJECTS[3]);
        break;

      default:
        break;
    }
  };

  const handlerAriclevisible = () => {
    handlerActive();
    handlerClose();
  };
  return (
    <section className="sectionProjects section">
      <ProjectsContent
        aricleProject={aricle => handlerAricleProject(aricle)}
        aricleVisisble={handlerAriclevisible}
        isVisible={close}
      ></ProjectsContent>
      <ProjectCard
        active={active}
        onClose={handlerAriclevisible}
        project={ProjectShow}
      ></ProjectCard>

      <style jsx>{`
        .sectionProjects {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          margin-left: auto;
          margin-right: auto;
        }
        @media screen and (max-width: 768px) {
          .sectionProjects {
            width: 80%;
          }
        }
        @media screen and (max-width: 480px) {
          .sectionProjects {
            width: 90%;
          }
        }
      `}</style>
    </section>
  );
};

export default SectionIntro;
