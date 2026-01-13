import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import EmailIcon from "@mui/icons-material/Email";

function Bio() {
  return (
    <div className="Bio">
      <div className="profile">
        <h1> Otunba-Marcus Oluwademilade </h1>
        <p> Frontend Developer | Learning React ⚛️ </p>
      </div>
      <div className="links">
        <a href="">
          {" "}
          <GitHubIcon />{" "}
        </a>
        <a href="">
          {" "}
          <XIcon />{" "}
        </a>
        <a href="mailto:oluwademilademarcus@gmail.com">
          {" "}
          <EmailIcon />{" "}
        </a>
      </div>
    </div>
  );
}

export default Bio;
