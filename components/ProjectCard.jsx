import GoWebButton from "./GoWebButton.jsx";

const ProjectCard = ({ active, onClose, project }) => {
  return (
    <div id="main" className={`main${active}`}>
      <article id="intro" className={active}>
        <h1>{project.name}</h1>
        <span className="image main">
          <img src={project.cover} alt="project image" />
        </span>
        {project.descriptions &&
          project.descriptions.map((description, index) => {
            return <p key={index}>{description}</p>;
          })}

        <h2>Images</h2>

        <div className="imagesContainer">
          {project.images &&
            project.images.map((image, index) => {
              return <img key={index} src={image.url} alt={image.alt} />;
            })}
        </div>

        <GoWebButton url={project.websiteUrl}></GoWebButton>

        <button className="close" onClick={onClose}></button>
      </article>

      <style jsx>{`
        ::-webkit-scrollbar {
          display: none;
        }
        #main {
          flex-grow: 1;
          flex-shrink: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          position: absolute;
          max-width: 100%;
          z-index: -1;
          font-size: 16px;
        }

        #main h1 {
          font-size: 2em;
          color: white;
          text-align: center;
        }

        #main h2 {
          font-size: 1.5em;
          color: white;
          text-align: center;
        }

        #main p {
          font-size: 1em;
          color: #a9a9a9;
          margin-bottom: 0.5em;
        }

        #main.mainactive {
          z-index: 3;
        }

        #main article {
          transform: translateY(0.25rem);
          transition: opacity 0.325s ease-in-out, transform 0.325s ease-in-out;
          padding: 4.5rem 2.5rem 1.5rem 2.5rem;
          position: relative;
          max-width: 1000px;
          background-color: rgb(13, 23, 29);
          border-radius: 4px;
          opacity: 0;
          height: 90vh;
          overflow-y: scroll;
        }

        #main article .imagesContainer {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }

        #main article .imagesContainer img {
          width: auto;
          height: 200px;
          margin-top: 1em;
        }

        .image.main img {
          width: auto;
          height: 300px;
        }

        .image.main {
          display: block;
          margin: 2.5rem 0;
          width: 100%;
          text-align: center;
        }

        #main article.active {
          transform: translateY(0);
          opacity: 1;
        }

        #main article .close {
          display: block;
          position: absolute;
          top: 0;
          right: 0;
          width: 4rem;
          height: 4rem;
          cursor: pointer;
          text-indent: 4rem;
          overflow: hidden;
          white-space: nowrap;
        }

        #main article .close:before {
          transition: background-color 0.2s ease-in-out;
          content: "";
          display: block;
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 100%;
          background-position: center;
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='20px' height='20px' viewBox='0 0 20 20' zoomAndPan='disable'%3E%3Cstyle%3Eline %7B stroke: %23ffffff%3B stroke-width: 1%3B %7D%3C/style%3E%3Cline x1='2' y1='2' x2='18' y2='18' /%3E%3Cline x1='18' y1='2' x2='2' y2='18' /%3E%3C/svg%3E");
          background-size: 20px 20px;
          background-repeat: no-repeat;
        }

        #main article .close:hover:before {
          background-color: rgba(255, 255, 255, 0.075);
        }

        #main article .close:active:before {
          background-color: rgba(255, 255, 255, 0.175);
        }

        @media screen and (max-width: 768px) {
          #main article {
            width: auto;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
          }
          #main article {
            padding: 3.5rem 2rem 0.5rem 2rem;
          }

          #main article .close:before {
            top: 0.875rem;
            left: 0.875rem;
            width: 2.25rem;
            height: 2.25rem;
            background-size: 14px 14px;
          }
        }

        @media screen and (max-width: 480px) {
          #main article {
            padding: 3rem 1.5rem 0.5rem 1.5rem;
          }

          .image.main img {
            width: 90%;
            height: auto;
          }
        
        

        #main article .imagesContainer img {
          width: 80%;
          height: auto;
        }
          .image.main {
            margin: 1.5rem 0;
          }

        @media screen and (max-width: 736px) {
          .image.main {
            margin: 2rem 0;
          }
        }

      `}</style>
    </div>
  );
};

export default ProjectCard;
