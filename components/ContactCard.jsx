import GoWebButton from "./GoWebButton.jsx";

const ContactCard = ({ title, url, srcImage, email = false, description }) => {
  return (
    <div className="ContactCard loquesea">
      <img src={srcImage} alt={`${title} logo`} />
      <h1>{title}</h1>
      <p>{description}</p>

      {!email && <GoWebButton url={url}></GoWebButton>}

      {email && <h2>santiagoprietoacero@gmail.com</h2>}

      <style jsx>{`
        .ContactCard {
          width: 300px;
          height: auto;
          background-color: #061f46;
          border-radius: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          font-size: 16px;
          padding: 20px;
          margin-top: 1em;
        }

        .ContactCard img {
          height: 50px;
          width: 50px;
        }

        .ContactCard h1 {
          color: #fff;
          font-size: 1.5em;
          margin-top: 0.5em;
        }

        .ContactCard h2 {
          color: #fff;
          font-size: 1em;
          margin-top: 0.8em;
          padding: 0.5em;
          background-color: #282936;
          border-radius: 16px;
        }

        p {
          color: #fff;
          text-align: center;
          margin-top: 1em;
        }
      `}</style>
    </div>
  );
};

export default ContactCard;
