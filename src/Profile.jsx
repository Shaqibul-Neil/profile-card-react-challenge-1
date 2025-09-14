import profileImg from "./assets/profileImg.jpg";

const Image = function () {
  return <img src={profileImg} alt="" />;
};

const Information = function () {
  return (
    <div>
      <h2 className="name">Md. Shakibul Islam</h2>
      <p>
        Full-stack web developer. I like to code. Even though I started late,
        I'm determined to make some stride in this sector.
      </p>
      <div>
        <h3>Techs I know so far</h3>
        <Button name="HTML + CSS 💪🏻" colorClass="blue" />
        <Button name="Tailwind 🪡" colorClass="maroon" />
        <Button name="Javascript 📜" colorClass="red" />
        <Button name="React ☺️" colorClass="tomato" />
        <Button name="Wordpress 📦" colorClass="green" />
      </div>
    </div>
  );
};

const Button = function ({ colorClass, name }) {
  return <button className={colorClass}>{name}</button>;
};

const Learn = function () {
  return (
    <div>
      <h3>Want to Learn</h3>
      <p>Technology: </p>
    </div>
  );
};

export { Image, Information, Learn };
