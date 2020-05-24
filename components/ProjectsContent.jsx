import { useState } from "react";

const ProjectsContent = ({ aricleVisisble, isVisible, aricleProject }) => {
  const handlerAricleClick = (aricle) => {
    aricleProject(aricle);
    aricleVisisble();
  };

  return (
    <header className={`header ${isVisible}`}>
      <h1 className="title">PROJECTS</h1>
      <div className="content">
        <div className="inner">
          <p>
            Here you can find some projects that i've done like frontend
            developer
            <br />
            Some projects are personal, others was released in my job
          </p>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <button onClick={(e) => handlerAricleClick("tery")}>TeryBit</button>
          </li>
          <li>
            <button onClick={(e) => handlerAricleClick("izi")}>IZI</button>
          </li>
          <li>
            <button onClick={(e) => handlerAricleClick("pet")}>Petgram</button>
          </li>
          <li>
            <button onClick={(e) => handlerAricleClick("spoty")}>
              SpotiApp
            </button>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        .header {
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.325s ease-in-out, filter 0.325s ease-in-out,
            opacity 0.325s ease-in-out;
          background-image: radial-gradient(
            rgba(0, 0, 0, 0.25) 25%,
            rgba(0, 0, 0, 0) 55%
          );
          max-width: 100%;
          text-align: center;
        }

        .header > * {
          transition: opacity 0.325s ease-in-out;
          position: relative;
          margin-top: 3.5rem;
        }

        .header > *:before {
          content: "";
          display: block;
          position: absolute;
          top: calc(-3.5rem - 1px);
          left: calc(50% - 1px);
          width: 1px;
          height: calc(3.5rem + 1px);
          background: #ffffff;
        }

        .header > :first-child {
          margin-top: 0;
        }

        .header > :first-child:before {
          display: none;
        }

        .header .logo {
          width: 5.5rem;
          height: 5.5rem;
          line-height: 5.5rem;
          border: solid 1px #ffffff;
          border-radius: 100%;
        }

        .header .logo .icon:before {
          font-size: 2rem;
        }

        .header .content {
          border-style: solid;
          border-color: #ffffff;
          border-top-width: 1px;
          border-bottom-width: 1px;
          max-width: 100%;
          font-size: 16px;
        }

        .header .content .inner {
          transition: max-height 0.75s ease, padding 0.75s ease,
            opacity 0.325s ease-in-out;
          transition-delay: 0.25s;
          padding: 3rem 2rem;
          max-height: 40rem;
          overflow: hidden;
        }

        .header .content .inner > :last-child {
          margin-bottom: 0;
        }

        .header .content p {
          text-transform: uppercase;
          letter-spacing: 0.2rem;
          font-size: 0.8rem;
          line-height: 2;
          color: #fff;
        }

        .header nav ul {
          display: flex;
          margin-bottom: 0;
          list-style: none;
          padding-left: 0;
          border: solid 1px #ffffff;
          border-radius: 4px;
        }

        .header nav ul li {
          padding-left: 0;
          border-left: solid 1px #ffffff;
        }

        .header nav ul li:first-child {
          border-left: 0;
        }

        .header nav ul li button {
          display: block;
          min-width: 7.5rem;
          height: 2.75rem;
          line-height: 2.75rem;
          padding: 0 1.25rem 0 1.45rem;
          text-transform: uppercase;
          letter-spacing: 0.2rem;
          font-size: 0.8rem;
          border-bottom: 0;
          color: #fff;
          cursor: pointer;
          background-color: transparent;
          border: none;
        }

        .header nav ul li button:hover {
          background-color: rgba(255, 255, 255, 0.075);
        }

        .header nav ul li button:active {
          background-color: rgba(255, 255, 255, 0.175);
        }

        .header nav.use-middle:after {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: calc(50% - 1px);
          width: 1px;
          height: 100%;
          background: #ffffff;
        }

        .header nav.use-middle ul li.is-middle {
          border-left: 0;
        }

        .is-article-visible {
          transform: scale(0.95);
          filter: blur(0.1rem);
          opacity: 0;
        }

        @media screen and (max-width: 980px) {
          .header .content p br {
            display: none;
          }
        }

        @media screen and (max-width: 736px) {
          .header > * {
            margin-top: 2rem;
          }

          .header > *:before {
            top: calc(-2rem - 1px);
            height: calc(2rem + 1px);
          }

          .header .logo {
            width: 4.75rem;
            height: 4.75rem;
            line-height: 4.75rem;
          }

          .header .logo .icon:before {
            font-size: 1.75rem;
          }

          .header .content .inner {
            padding: 2.5rem 1rem;
          }

          .header .content p {
            line-height: 1.875;
          }
        }

        @media screen and (max-width: 480px) {
          .header {
            padding: 1.5rem 0;
          }

          .header .content .inner {
            padding: 2.5rem 0;
          }

          .header nav ul {
            flex-direction: column;
            min-width: 10rem;
            max-width: 100%;
          }

          .header nav ul li {
            border-left: 0;
            border-top: solid 1px #ffffff;
          }

          .header nav ul li:first-child {
            border-top: 0;
          }

          .header nav ul li button {
            height: 3rem;
            line-height: 3rem;
            min-width: 0;
            width: 100%;
          }

          .header nav.use-middle:after {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default ProjectsContent;
