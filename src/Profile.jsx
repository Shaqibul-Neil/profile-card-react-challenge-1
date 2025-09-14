import profileImg from './assets/profileImg.jpg';

const Image = function () {
  return <img src={profileImg} alt="Shakibul Islam" />;
};

const Information = function () {
  return (
    <div>
      <h2 className="name">Md. Shakibul Islam</h2>
      <p>
        Full-stack web developer. I like to code. Even though I started late,
        I'm determined to make some stride in this sector.
      </p>
    </div>
  );
};

const SkillList = () => {
  return (
    <div className="SkillList">
      <Skill skill="HTML & Css" emoji="💪🏻" color="#0000ff42" />
      <Skill skill="Wordpress" emoji="📦" color="#80000063" />
      <Skill skill="Javascript" emoji="📜" color="#ff00008a" />
      <Skill skill="Tailwind" emoji="🪡" color="#ff634793" />
    </div>
  );
};

const Skill = props => {
  return (
    <div style={{ backgroundColor: props.color }} className="skill">
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
};

const Learn = function () {
  return (
    <div>
      <h3>Want to Learn</h3>
      <p>Technology: </p>
    </div>
  );
};

export { Image, Information, SkillList, Learn };
