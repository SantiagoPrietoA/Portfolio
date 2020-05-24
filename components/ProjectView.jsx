import React from "react";
import GoWebButton from "./GoWebButton.jsx";

const ProjectView = ({ projectClass }) => {
  return (
    <>
      <div className="project-tery">
        <div className={`ProjectView-tery ${projectClass}`}>
          <div className="container">
            <h3 className="container-title title-tery ">TERYBIT</h3>
            <p className="description">
              Tery Bit is an app where you can get bitcoins. Tery Bit web is a
              web presentation of app and i was part of the develop team.
            </p>
            <p className="description">
              This web aplication was creater with ReactJS.
            </p>
            <a href="https://tery-bit.com/" target="_blank" className="boton">
              GO TO WEB
            </a>
          </div>
          <div className="ProjectView-line tery-color"></div>
        </div>
        <img
          className={`project-image tery-image ${projectClass}`}
          src="/static/images/projectsImages/tery-bit/TypeD.png"
          alt="tery bit icon image"
        />
      </div>

      <div className="project-izi">
        <div className={`ProjectView-izi ${projectClass}`}>
          <div className="container">
            <h3 className="container-title title-izi ">IZI ANUNCIOS</h3>
            <p className="description">
              IZI anuncios is an app where you can advertise advertising. Here
              you can buy plans to advertise and this app have a landing when is
              explain it.
            </p>
            <p className="description">
              This Landing or intro page was creared with a design similar to
              the design of the Apple website.
            </p>
            <p className="description">
              Created with react, this application is fast and reactive with the
              user interactions.
            </p>
            <a
              href="https://izianuncio.com/plans/diamond"
              target="_blank"
              className="boton"
            >
              GO TO WEB
            </a>
          </div>
          <div className="ProjectView-line izi-color"></div>
        </div>
        <img
          className={`project-image izi-image ${projectClass}`}
          src="/static/images/projectsImages/izi/rune_diamond_1.png"
          alt="izi anuncios icon image"
        />
      </div>
      <div className="project-petgram">
        <div className={`ProjectView-petgram ${projectClass}`}>
          <div className="container">
            <h3 className="container-title title-petgram ">PETGRAM</h3>
            <p className="description">
              Petgram is an app where you can see the instagram for the pets.
              Created like a personal project, this web aplication is a PWA with
              an 'Firts mobile' design.
            </p>
            <p className="description">
              React have the power to create web apps that can be see like app
              native mobile apps, this is called PWAs and this app is an
              example.
            </p>
            <p className="description">
              Is recommended open this project in a mobile device.
            </p>
            <a
              href="https://petgram.netlify.com/"
              target="_blank"
              className="boton"
            >
              GO TO WEB
            </a>
          </div>
          <div className="ProjectView-line petgram-color"></div>
        </div>
        <img
          className={`project-image petgram-image ${projectClass}`}
          src="/static/images/projectsImages/petgram/petgram_icon.png"
          alt="petgram icon image"
        />
      </div>

      <div className="project-spotiapp">
        <div className={`ProjectView-spotiapp ${projectClass}`}>
          <div className="container">
            <h3 className="container-title title-spotiapp ">SPOTIAPP</h3>
            <p className="description">
              SpotiApp is a Spotify Clon. Created like a personal project, this
              aplicacion use the spotify database and permit listen songs like
              spotify app.
            </p>
            <p className="description">
              Welcome to the Angular world, this aplication was created with
              angular and bootstrap.
            </p>
            <p className="description">
              You can listen music, but, you can search also your favorite
              artist.
            </p>
            <a
              href="https://github.com/SantiagoPrietoA/spotiApp"
              target="_blank"
              className="boton"
            >
              GO TO WEB
            </a>
          </div>
          <div className="ProjectView-line spotiapp-color"></div>
        </div>
        <img
          className={`project-image spotiapp-image ${projectClass}`}
          src="/static/images/projectsImages/spotiApp/headphones.png"
          alt="spotyapp icon image"
        />
      </div>
      <style jsx>{`
        a {
          text-decoration: none;
        }
        .ProjectView-tery,
        .ProjectView-izi,
        .ProjectView-petgram,
        .ProjectView-spotiapp {
          opacity: 0;
          height: 75vh;
          width: 80%;
          margin: auto;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-position: right;
          background-repeat: no-repeat;
          background-size: cover;
          position: absolute;
          transition: all 0.5s;

          display: flex;
          align-items: center;
          z-index: 10;
          color: #fff;
        }

        .ProjectView-tery {
          background-image: linear-gradient(
              to right,
              rgba(0, 0, 0, 0.9) 0%,
              rgba(0, 0, 0, 0.9) 100%
            ),
            url("/static/images/projectsImages/tery-bit/tery-bit.png");
        }

        .ProjectView-izi {
          background-image: linear-gradient(
              to right,
              rgba(0, 0, 0, 0.9) 0%,
              rgba(0, 0, 0, 0.9) 100%
            ),
            url("/static/images/projectsImages/izi/izi.png");
        }

        .ProjectView-petgram {
          background-image: linear-gradient(
              to right,
              rgba(0, 0, 0, 0.9) 0%,
              rgba(0, 0, 0, 0.9) 100%
            ),
            url("/static/images/projectsImages/petgram/cats.png");
        }

        .ProjectView-spotiapp {
          background-image: linear-gradient(
              to right,
              rgba(0, 0, 0, 0.9) 0%,
              rgba(0, 0, 0, 0.9) 100%
            ),
            url("/static/images/projectsImages/spotiapp/listening.png");
        }

        .ProjectView-line {
          position: absolute;
          right: 0;
          top: 0;
          height: 100%;
          width: 200px;
          transform-origin: top;
          transform: skewX(-25deg);
        }
        .tery-color {
          background-color: #cdaa48;
        }

        .izi-color {
          background-color: #690482;
        }

        .petgram-color {
          background-color: #f87f0d;
        }

        .spotiapp-color {
          background-color: #1db954;
        }

        .project-image {
          opacity: 0;
          position: absolute;
          right: 15%;
          bottom: 30%;
          height: 40%;
          transition: opacity 0.5s;
          z-index: 20;
        }

        .project-tery .tery,
        .project-izi .izi,
        .project-petgram .petgram,
        .project-spotiapp .spotiapp {
          opacity: 1;
          z-index: 20;
        }

        .container {
          width: 90%;
          margin: auto;
        }

        .container-title {
          font-weight: 600;
          font-size: 3.12em;
          margin-bottom: 0.4em;
        }
        .title-tery {
          color: #cdaa48;
        }

        .title-izi {
          color: #690482;
        }

        .title-petgram {
          color: #f87f0d;
        }

        .title-spotiapp {
          color: #1db954;
        }

        .description {
          font-weight: normal;
          font-size: 1em;
          line-height: 1.75em;
          max-width: 60%;
          margin-bottom: 1.25em;
        }

        .boton {
          background: rgba(0, 0, 0, 0.5);
          border: none;
          border-radius: 0.31em;
          padding: 0.93em 1.87em;
          color: #fff;
          margin-right: 1.25em;
          cursor: pointer;
          transition: 0.3s ease all;
          font-size: 1.12em;
        }

        .boton:hover {
          background: #fff;
          color: #000;
        }

        @media screen and (max-width: 768px),
          screen and (min-width: 1024px) and (min-height: 1366px) {
          .ProjectView-tery,
          .ProjectView-izi,
          .ProjectView-petgram,
          .ProjectView-spotiapp {
            width: 100%;
            margin: 15vh 0% 0% 0%;
            height: 85vh;
          }

          .ProjectView-line {
            transform: none;
            top: auto;
            bottom: 0;
            height: 10%;
            width: 100%;
          }

          .project-image {
            display: none;
          }

          .container-title {
            font-size: 1.5em;
            margin-bottom: 1rem;
          }

          .description {
            font-size: 0.8em;
            max-width: 100%;
          }
        }

        @media screen and (max-width: 320px) {
          .description {
            font-size: 0.7em;
            max-width: 100%;
            line-height: 1.5em;
          }
        }
      `}</style>
    </>
  );
};

export default ProjectView;
