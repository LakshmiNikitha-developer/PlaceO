import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact-card glass">
        <h2 className="contact-title">📩 Contact Us</h2>
        <p className="contact-subtitle">
          Have questions about PlaceO? We’re here to help you grow 🚀
        </p>

        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </div>

          <textarea placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>

        {/* MEET OUR TEAM */}
<div className="team-section">
  <h2 className="team-title">👩‍💻 Meet Our Team</h2>

  <div className="team-slider">
    <div className="team-track">
      {[
        {
          name: "Velpula Lakshmi Nikitha",
          role: "Frontend Developer",
          img: "/team1.jpeg",
        },
        {
          name: "Kurugodu Megana",
          role: "AI & ML Engineer",
          img: "/team2.jpeg",
        },
        {
          name: "Nindrambakam Priyanka",
          role: "Backend Developer",
          img: "/team3.jpeg",
        },
        {
          name: "Magam Penchala Bhavana",
          role: "Database Administrator",
          img: "/team4.jpeg",
        },
      ].map((member, index) => (
        <div className="team-card" key={index}>
          <img src={member.img} alt={member.name} />
          <h3>{member.name}</h3>
          <p>{member.role}</p>
        </div>
      ))}

      {/* duplicate for smooth infinite scroll */}
      {[
        {
          name: "Velpula LakshmiNikitha",
          role: "Frontend Developer",
          img: "/team1.jpeg",
        },
        {
          name: "Kurugodu Megana",
          role: "AI & ML Engineer",
          img: "/team2.jpeg",
        },
        {
          name: "Nindrambakam Priyanka",
          role: "Backend Developer",
          img: "/team3.jpeg",
        },
        {
          name: "Magam Penchala Bhavana",
          role: "Database Administrator",
          img: "/team4.jpeg",
        },
      ].map((member, index) => (
        <div className="team-card" key={`dup-${index}`}>
          <img src={member.img} alt={member.name} />
          <h3>{member.name}</h3>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  </div>
</div>


      </div>
    </div>
  );
}

export default Contact;
