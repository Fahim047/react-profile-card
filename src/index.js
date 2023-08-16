import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="img/fahim.jpg" alt="fahimul islam" />;
}

function Intro() {
  return (
    <div>
      <h1>Fahimul Islam</h1>
      <p>
        I'm a student of BSMRSTU_CSE. Currently learning MERN Stack. I'm also
        familier with Golang, Python, C++.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="Javascript" emoji="😍" color="yellow" />
      <Skill skill="HTML+CSS" emoji="💪" color="limegreen" />
      <Skill skill="C++" emoji="😘" color="pink" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
