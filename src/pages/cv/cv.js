import "./cv.css";
import { work } from "../../data/work";
import { education } from "../../data/education";
import { contact } from "../../data/contact";
import { competences } from "../../data/competences";
import { languages } from "../../data/languages";
import photo from "../../assets/photo.jpg";

const Separator = (color) => {
  return (
    <div
      className="separator"
      style={color && { backgroundColor: color }}
    ></div>
  );
};
const Photo = () => {
  return (
    <div className="photoContainer">
      <img src={photo} alt="Profile" />
    </div>
  );
};
const Work = ({ work }) => {
  return (
    <div className="workContainer">
      <div className="row-space-between">
        <h3>{work.job}</h3>
        <h5>{work.duration}</h5>
      </div>
      <h4>{work.company}</h4>
      {work.description && <p>{work.description}</p>}
    </div>
  );
};
const Education = ({ edu }) => {
  return (
    <div className="eduContainer">
      <div className="row-space-between">
        <h3>{edu.study}</h3>
        <h5>{edu.duration}</h5>
      </div>
      <div className="row-space-between">
        <h4>{edu.school}</h4>
        <h6>{edu.grade}</h6>
      </div>
      {edu.description && <p>{edu.description}</p>}
    </div>
  );
};
const Contact = ({ contact }) => {
  return contact.icon ? (
    <div className="row vertical-center-align">
      {contact.icon}
      {contact.href ? (
        <a href={contact.href}>{contact.value}</a>
      ) : (
        <h4>{contact.value}</h4>
      )}
    </div>
  ) : (
    <div className="row">
      {contact.icon && contact.icon}
      {contact.key && <h3>{contact.key}</h3>}
      {contact.href ? (
        <a href={contact.href}>{contact.value}</a>
      ) : (
        <h4>{contact.value}</h4>
      )}
    </div>
  );
};

const Slider = ({ data }) => {
  return (
    <div className="slider">
      <h4>{data.title}</h4>
      <div className="sliderContainer">
        <div className="sliderBar"></div>
        <div
          className="sliderCircle"
          style={{ left: `calc(${data.percentage}% - 5px)` }}
        ></div>
      </div>
      {data.description && <p>{data.description}</p>}
    </div>
  );
};

const CV = () => {
  return (
    <div className="container">
      <main>
        <h1>Robin van Gestel</h1>
        <Photo />

        <Separator />
        <h2>Werkervaring</h2>
        {work.map((w) => (
          <Work work={w} />
        ))}
        <Separator />
        <h2>Opleidingen</h2>
        {education.map((e) => (
          <Education edu={e} />
        ))}
      </main>
      <aside>
        {contact.map((c) => (
          <Contact contact={c} />
        ))}
        <Separator color={"#fff"} />
        <h2>Competenties</h2>
        {competences.map((c) => (
          <Slider data={c} />
        ))}
        <Separator color={"#fff"} />
        <h2>Taalvaardigheden</h2>
        {languages.map((l) => (
          <Slider data={l} />
        ))}
      </aside>
    </div>
  );
};

export default CV;
