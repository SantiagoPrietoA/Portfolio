import ToolCard from "./ToolCard.jsx";

const SectionTools = () => {
  return (
    <section className="sectionTools section">
      <h1 className="title">TECHNOLOGY TOOLS</h1>

      <ul className="cards-container">
        <ToolCard
          classCard="angularCard"
          classImage="angularImage"
          source="/static/images/tools/Angular.png"
          altText="angular logo"
          title="Angular"
        />
        <ToolCard
          classCard="reactCard"
          classImage="reactImage"
          source="/static/images/tools/React.png"
          altText="react logo"
          title="ReactJS"
        />
        <ToolCard
          classCard="cssCard"
          classImage="cssImage"
          classBasic="cssContent"
          source="/static/images/tools/css.png"
          altText="Css logo"
          title="Css"
        />
        <ToolCard
          classCard="jsCard"
          classImage="jsImage"
          classBasic="jsContent"
          source="/static/images/tools/javascript_logo.png"
          altText="javascript logo"
          title="Javascript"
        />
        <ToolCard
          classCard="htmlCard"
          classImage="htmlImage"
          classBasic="htmlContent"
          source="/static/images/tools/html5.png"
          altText="html logo"
          title="HTML"
        />
      </ul>

      <style jsx>{`
        .sectionTools {
          max-width: 1366px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .cards-container {
          width: 70%;
          margin-left: auto;
          margin-right: auto;
          display: flex;
          flex-wrap: wrap;
          color: #ffffff;
          margin-top: 20px;
          font-size: 16px;
        }

        @media screen and (max-width: 768px) {
          .sectionTools {
            width: 80%;
          }
          .cards-container {
            display: block;
            width: 100%;
          }
        }
        @media screen and (max-width: 480px) {
          .sectionTools {
            width: 90%;
          }
        }
      `}</style>
    </section>
  );
};

export default SectionTools;
