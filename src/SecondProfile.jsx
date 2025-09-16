import Content from './Content';
import Items from './Items';
import Image from './Image';

const skillsList = [
  {
    skill: 'HTML+CSS',
    level: 'advanced',
    color: '#2662EA',
  },
  {
    skill: 'JavaScript',
    level: 'advanced',
    color: '#EFD81D',
  },
  {
    skill: 'Web Design',
    level: 'advanced',
    color: '#C3DCAF',
  },
  {
    skill: 'Git and GitHub',
    level: 'intermediate',
    color: '#E84F33',
  },
  {
    skill: 'React',
    level: 'advanced',
    color: '#60DAFB',
  },
  {
    skill: 'Svelte',
    level: 'beginner',
    color: '#FF3B00',
  },
];

const SecondProfile = () => {
  return (
    <div className="container">
      <div className="img-div">
        <Image />
      </div>
      <div className="content-div">
        <Content />
        <Items skillsList={skillsList} />
      </div>
    </div>
  );
};
export default SecondProfile;
