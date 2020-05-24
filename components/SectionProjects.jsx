import ProjectsContent from "./ProjectsContent.jsx";
import ProjectCard from "./ProjectCard.jsx";
import ProjectView from "./ProjectView.jsx";
import { useState } from "react";

import PROJECTS from "../projects";

const SectionIntro = () => {
  // const [active, setactive] = useState("");
  const [project, setProject] = useState("tery");
  // const [close, setclose] = useState("");
  // const [ProjectShow, setProjectShow] = useState("");

  // const handlerActive = () => {
  //   if (active === "") {
  //     setactive("active");
  //   } else {
  //     setactive("");
  //   }
  // };

  const handlerProjectRight = () => {
    if (project === "tery") {
      setProject("izi");
    }
    if (project === "izi") {
      setProject("petgram");
    }
    if (project === "petgram") {
      setProject("spotiapp");
    }
    if (project === "spotiapp") {
      setProject("tery");
    }
  };

  const handlerProjectLeft = () => {
    if (project === "spotiapp") {
      setProject("petgram");
    }
    if (project === "petgram") {
      setProject("izi");
    }
    if (project === "izi") {
      setProject("tery");
    }
    if (project === "tery") {
      setProject("spotiapp");
    }
  };

  // const handlerClose = () => {
  //   if (close === "") {
  //     setclose("is-article-visible");
  //   } else {
  //     setclose("");
  //     setProjectShow("");
  //   }
  // };

  // const handlerAricleProject = (aricle) => {
  //   switch (aricle) {
  //     case "tery":
  //       setProjectShow(PROJECTS[0]);
  //       break;
  //     case "izi":
  //       setProjectShow(PROJECTS[1]);
  //       break;
  //     case "pet":
  //       setProjectShow(PROJECTS[2]);
  //       break;
  //     case "spoty":
  //       setProjectShow(PROJECTS[3]);
  //       break;

  //     default:
  //       break;
  //   }
  // };

  // const handlerAriclevisible = () => {
  //   handlerActive();
  //   handlerClose();
  // };

  return (
    <section className="sectionProjects section">
      <h1 className="title title-projects">PROJECTS</h1>
      {/* <ProjectsContent
        aricleProject={(aricle) => handlerAricleProject(aricle)}
        aricleVisisble={handlerAriclevisible}
        isVisible={close}
      ></ProjectsContent>
      <ProjectCard
        active={active}
        onClose={handlerAriclevisible}
        project={ProjectShow}
      ></ProjectCard> */}
      <button aria-label="left" className="left" onClick={handlerProjectLeft}>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="chevron-left"
          className="svg-inline--fa fa-chevron-left fa-w-10"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
          ></path>
        </svg>
      </button>
      <ProjectView projectClass={project}></ProjectView>
      <button
        aria-label="right"
        className="right"
        onClick={handlerProjectRight}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="chevron-right"
          className="svg-inline--fa fa-chevron-right fa-w-10"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
          ></path>
        </svg>
      </button>

      <style jsx>{`
        .left,
        .right {
          position: absolute;
          height: 100px;
          width: 100px;
          top: calc(50% - 50px);
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0);
          border: none;
          z-index: 999;
          transition: background-color 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .left:hover,
        .right:hover {
          background-color: rgba(0, 0, 0, 0.5);
        }

        .left svg,
        .right svg {
          height: 70%;
          width: auto;
        }

        button svg path {
          fill: #fff;
        }

        .right {
          right: 20px;
        }

        .left {
          left: 20px;
        }
        .sectionProjects {
          max-width: 1366px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          margin-left: auto;
          margin-right: auto;
          position: relative;
        }

        .title-projects {
          top: 20px;
          position: absolute;
          z-index: 200;
        }
        @media screen and (max-width: 768px),
          screen and (min-width: 1024px) and (min-height: 1366px) {
          .sectionProjects {
            width: 100%;
          }
          .title-projects {
            top: 5%;
          }

          .left,
          .right {
            top: auto;
            bottom: 0;
            height: 9%;
          }

          .left:hover,
          .right:hover {
            background-color: rgba(0, 0, 0, 0);
          }
        }
        @media screen and (max-width: 480px) {
        }
      `}</style>
    </section>
  );
};

export default SectionIntro;
