export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <h2>
          Contact <span>Me</span>
        </h2>
        <p>
          Have a project in your mind or want to say hello?
          <br />I&rsquo;d love to hear from you.
        </p>
      </div>
      <div className="contact-container">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">
            Send Message
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </form>
        <div className="contact-info">
          <a href="mailto:halimameherzad7077@gmail.com" className="contact-card">
            <div className="contact-icon">
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div>
              <h3>Email</h3>
              <p>halimameherzad7077@gmail.com</p>
            </div>
          </a>
          <a href="tel:+93794569612" className="contact-card">
            <div className="contact-icon">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div>
              <h3>Phone</h3>
              <p>+937945696912</p>
            </div>
          </a>
          <div className="contact-card">
            <div className="contact-icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div>
              <h3>Location</h3>
              <p>Kabul, Afghanistan</p>
            </div>
          </div>
          <a href="#" className="contact-card">
            <div className="contact-icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
            <div>
              <h3>LinkedIn</h3>
              <p>Halima Mehrzad</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
