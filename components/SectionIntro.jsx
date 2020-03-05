import ProfileCard from "../components/ProfileCard";

const SectionIntro = () => (
  <section className="sectionIntro section">
    <div className="sectionIntro__profileWallpaper"></div>
    <ProfileCard></ProfileCard>

    <style jsx>{`
      .sectionIntro {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .sectionIntro__profileWallpaper {
        background-image: url("/static/portada.png");
        position: absolute;
        top: 0;
        width: 100%;
        height: 50vh;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: bottom;
        z-index: -1;
      }
    `}</style>
  </section>
);

export default SectionIntro;
