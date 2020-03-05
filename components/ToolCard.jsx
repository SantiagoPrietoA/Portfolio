const ToolCard = ({
  classCard,
  classImage,
  source,
  altText,
  title,
  classBasic = ""
}) => {
  return (
    <li className={classCard}>
      {classBasic === "" ? (
        <>
          <img className={classImage} src={source} alt={altText} />
          <h1>{title}</h1>
        </>
      ) : (
        <>
          <div className={classBasic}>
            <img className={classImage} src={source} alt={altText} />
          </div>
          <h1>{title}</h1>
        </>
      )}
      <style jsx>{`
        .angularCard {
          width: calc(40% - 5px);
          height: 200px;
          margin-right: 5px;
          background-image: url("/static/images/tools/Angular_Bg.png");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .reactCard {
          width: calc(60% - 5px);
          height: 200px;
          margin-left: 5px;
          background-image: url("/static/images/tools/React_Bg.png");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .cssCard,
        .jsCard,
        .htmlCard {
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .cssCard {
          width: calc((100% / 3) - 5px);
          height: 200px;
          margin-top: 10px;
          margin-right: 5px;
          background-image: url("/static/images/tools/CSS_Bg.png");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .angularCard,
        .reactCard {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .angularCard h1,
        .reactCard h1 {
          margin-left: 16px;
        }

        .cssContent,
        .jsContent,
        .htmlContent {
          height: 60%;
        }

        .jsCard {
          width: calc((100% / 3) - 10px);
          height: 200px;
          margin-top: 10px;
          margin-right: 5px;
          margin-left: 5px;
          background-image: url("/static/images/tools/js_Bg.png");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .htmlCard {
          width: calc((100% / 3) - 5px);
          height: 200px;
          margin-top: 10px;
          margin-left: 5px;
          background-image: url("/static/images/tools/HTML_Bg.png");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .angularImage,
        .reactImage {
          height: 60%;
        }

        .cssImage,
        .jsImage,
        .htmlImage {
          height: 100%;
        }

        h1 {
          font-size: 2.5em;
        }
        @media screen and (max-width: 768px) {
          .angularCard,
          .reactCard,
          .cssCard,
          .jsCard,
          .htmlCard {
            justify-content: center;
            width: 100%;
            height: 120px;
            justify-content: flex-start;
            padding-left: 20%;
          }
          .cssCard,
          .jsCard,
          .htmlCard {
            flex-direction: initial;
          }

          .angularCard {
            margin-right: 0;
            margin-top: 10px;
          }

          .reactCard {
            margin-left: 0;
            margin-top: 10px;
          }

          .htmlCard {
            margin-left: 0;
            margin-top: 10px;
          }

          .jsCard {
            margin-left: 0;
            margin-right: 0;
          }
          h1 {
            font-size: 1.5em;
            margin-left: 16px;
          }
        }
        @media screen and (max-width: 480px) {
          h1 {
            font-size: 1.2em;
            margin-left: 16px;
          }
          .angularCard,
          .reactCard,
          .cssCard,
          .jsCard,
          .htmlCard {
            width: 100%;
            height: 80px;
          }
        }
      `}</style>
    </li>
  );
};

export default ToolCard;
