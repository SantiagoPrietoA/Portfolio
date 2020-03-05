const ProfileCard = () => (
  <div className="sectionIntro__profileHeader">
    <img
      src="/static/images/ImageProfile.png"
      className="img-fluid sectionIntro__profileHeader-image"
      alt="Santiago prieto image"
    />
    <div className="sectionIntro__profile-card">
      <h1 className="sectionIntro__profile-title">SANTIAGO PRIETO</h1>
      <h3 className="sectionIntro__profile-subtitle ">Frontend Developer</h3>
      <p className="sectionIntro__profile-story">
        Imagine that a young football enthusiast and music lover one day writes
        his first "hello world", well, that's my story.
      </p>
    </div>

    <style jsx>{`
      .sectionIntro__profileHeader {
        font-size: 16px;
        text-align: center;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      .sectionIntro__profile-card {
        background-color: #0d171d;
        border-radius: 20px;
        padding: 116px 16px 16px 16px;
        max-width: 1000px;
      }

      .sectionIntro__profile-title {
        font-size: 2em;
        color: white;
        margin-bottom: 0.5rem;
      }

      .sectionIntro__profile-subtitle {
        font-size: 1.5em;
        color: white;
        font-weight: normal;
        margin-bottom: 1rem;
      }

      .sectionIntro__profile-story {
        font-size: 1em;
        color: #a9a9a9;
        width: 70%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 1rem;
        letter-spacing: 0.1rem;
      }

      .sectionIntro__profileHeader-image {
        margin-bottom: -100px;
        position: relative;
        z-index: 100;
      }

      @media screen and (max-width: 768px) {
        .sectionIntro__profileHeader {
          width: 80%;
          margin: 0 auto;
        }
      }

      @media screen and (max-width: 480px) {
        .sectionIntro__profileHeader {
          width: 90%;
          font-size: 12px;
        }

        .sectionIntro__profile-story {
          width: 90%;
        }
        .sectionIntro__profile-card {
          padding: 86px 16px 16px 16px;
        }
        .sectionIntro__profileHeader-image {
          width: 150px;
          height: 150px;
          margin-bottom: -75px;
        }
      }
    `}</style>
  </div>
);

export default ProfileCard;
