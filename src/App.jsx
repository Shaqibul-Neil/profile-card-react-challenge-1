import './App.css';
import { Image, Information, SkillList, Learn } from './Profile';
import Contact from './Contact';
import ToDo from './ToDo';

const info = {
  mobile: '01798043534',
  link: 'www.dsd.com',
  email: 'adaw@gmail.com',
};

function App() {
  const time = 50;
  return (
    <div className="container">
      <div className="img-div">
        <Image />
      </div>
      <div className="content-div">
        <Information />
      </div>
      <div className="content-div">
        <SkillList />
      </div>
      <div>
        <Learn />
      </div>
      <div className="borders">
        <h3 className="h3">Contact Information</h3>
        <Contact {...info} />
      </div>
      <div className="borders">
        <h3 className="h3">Task List</h3>
        <ul className="ul">
          <ToDo task="Learn React" isDone={true} time={time} />
          <ToDo task="Learn Node" isDone={false} />
          <ToDo task="Learn C#" isDone={false} />
        </ul>
      </div>
    </div>
  );
}

export default App;
