import ContactCard from "./contactCard.jsx";

const SectionContact = () => {
  return (
    <section className="sectionContact section">
      <h1 className="title">CONTACT ME</h1>
      <div className="cardContainer">
        <ContactCard
          title="LINKEDIN"
          url="https://www.linkedin.com/in/santiago-prieto-181809188"
          description="You can see my skills and could send me a message in Linkedin"
          srcImage="/static/images/networks/linkedin.png"
        ></ContactCard>
        <ContactCard
          title="Gmail"
          srcImage="/static/images/networks/gmail.png"
          description="You can start a conversation seending me an e-mail to this mail"
          email={true}
        ></ContactCard>
        <ContactCard
          title="GITHUB"
          url="https://github.com/SantiagoPrietoA"
          description="You can see all my personal projects in Github"
          srcImage="/static/images/networks/github.png"
        ></ContactCard>
      </div>

      <style jsx>{`
        .sectionContact {
          max-width: 1366px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-bottom: 2rem;
        }
        .cardContainer {
          margin-top: 2rem;
          display: flex;
          justify-content: space-around;
          width: 100%;
          flex-wrap: wrap;
        }
      `}</style>
    </section>
  );
};

export default SectionContact;
