import halimaMeherzad from "../images/Personal picture.png"

export default function Hero() {
  return (
    <div className="hero-section">
      <section className="hero">
        <div className="left-hero">
          <p>
            <span>Hi! I&rsquo;m Halima Meherzad </span>-Based in Afghanistan
          </p>
          <h1>
            UI/UX Designer &amp; <br />
            <span>Web Developer</span>
          </h1>
          <p>
            I build designs and websites that solve problems,
            <br />
            inspiring success.{' '}
          </p>
          <div className="btns">
            <a className="btn1" href="#projects">
              View My Work <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a className="btn2" href="#" download="CV">
              {' '}
              Download CV <i className="fa-solid fa-download"></i>
            </a>
          </div>
        </div>
        <div className="right-hero">
          <img src={halimaMeherzad} alt="UI/UX Desiner & Web Developer" />
        </div>
      </section>
    </div>
  )
}
