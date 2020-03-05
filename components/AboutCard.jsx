const AboutCard = ({ message }) => (
  <div className="box">
    <div className="content">
      <h1 className="card-title">{message.title}</h1>
      <p className="card-text">{message.message}</p>
    </div>

    <style jsx>{`
      .box {
        position: relative;
        width: 300px;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #060c21;
        margin-top: 32px;
      }

      .box:before {
        content: "";
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        background-color: #ffffff;
        z-index: -1;
      }

      .box:before {
        content: "";
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        background-color: #ffffff;
        z-index: -2;
        filter: blur(5px);
      }

      .box:before,
      .box::after {
        background: linear-gradient(235deg, #89ff00, #060c21, #00bcd4);
      }

      .content {
        padding: 20px;
        box-sizing: border-box;
        color: #fff;
        font-size: 16px;
      }

      .card-title {
        font-size: 2em;
      }
      .card-text {
        font-size: 1em;
        letter-spacing: 0.1rem;
      }
      @media screen and (max-width: 768px) {
        .box {
          width: 250px;
          height: 300px;
        }
      }
      @media screen and (max-width: 480px) {
        .box {
          width: 100%;
        }
        .content {
          font-size: 14px;
        }
      }
    `}</style>
  </div>
);

export default AboutCard;
