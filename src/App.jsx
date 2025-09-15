import './App.css';
import { Image, Information, SkillList, Learn } from './Profile';
import Contact from './Contact';
import ToDo from './ToDo';
import List from './List';

const info = {
  mobile: '01798043534',
  link: 'www.dsd.com',
  email: 'adaw@gmail.com',
};

const favorites = [
  'Reading',
  'Gaming',
  'Jogging',
  'Painting',
  'Watching Movies',
  'Cooking',
];

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
      <div className="borders">
        <h3 className="h3">Favorite Pass Time</h3>
        <ul>
          {favorites.map(favorite => (
            <List favor={favorite} key={favorite} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
