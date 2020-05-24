import AboutCard from "../components/AboutCard";

const SectionAbout = () => {
  const messages = [
    {
      title: "Will you wonder who I am?",
      message:
        "Definitely the best question, the answer?, my name is Santiago and I am a systems engineer graduated at Universidad Tecnologica de Pereira",
    },
    {
      title: "Never stop learning",
      message:
        "That is my philosophy. There is always something to learn and I always want to do it",
    },
    {
      title: "Something is not right here",
      message:
        "How did a music lover end up writing lines of code instead of playing his guitar all day? It's complicated but I like it and that's what matters",
    },
  ];

  const renderCards = () => {
    return messages.map((message, index) => {
      return <AboutCard message={message} key={index}></AboutCard>;
    });
  };

  return (
    <section className="sectionAbout section">
      <h1 className="title">ABOUT</h1>
      <div className="boxContainer">{renderCards()}</div>

      <style jsx>{`
        .sectionAbout {
          max-width: 1366px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .boxContainer {
          display: flex;
          justify-content: space-around;
          width: 100%;
          margin-top: 30px;
          flex-wrap: wrap;
        }
        @media screen and (max-width: 768px) {
          .sectionAbout {
            width: 80%;
          }
        }
        @media screen and (max-width: 480px) {
          .sectionAbout {
            width: 90%;
          }
        }
      `}</style>
    </section>
  );
};

export default SectionAbout;
