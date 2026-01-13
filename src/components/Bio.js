import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Bio.css";

function Bio() {
  const linkButtons = [
    {
      title: "GitHub",
      url: "https://github.com/Demilade-ella",
      icon: <GitHubIcon />,
      buttonText: "My Code (GitHub)",
      subText: "Day-to-day updates on #100DaysOfCode.",
    },
    {
      title: "Twitter / X",
      url: "https://twitter.com",
      icon: <XIcon />,
      buttonText: "Follow My Journey",
      subText: "Check out my repositories and contributions.",
    },
    {
      title: "Email",
      url: "mailto:oluwademilademarcus@gmail.com",
      icon: <EmailIcon />,
      buttonText: "Get In Touch",
      subText: "Open for collaborations or work inquiries.",
    },
  ];

  return (
    <div className="Bio">
      <div className="profile">
        <h1> Otunba-Marcus Oluwademilade </h1>
        <p> Frontend Developer | Learning React ⚛️ </p>
      </div>

      <div className="links-button">
        {linkButtons.map((link, index) => {
          return (
            <a
              key={index}
              href={link.url}
              className={`btn ${link.isFeatured ? "pulse-effect" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="btn-container">
                <span className="icons"> {link.icon} </span> {link.buttonText}
              </div>
              <p> {link.subText} </p>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Bio;
