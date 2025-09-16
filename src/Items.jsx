import Item from './Item';

const Items = ({ skillsList }) => {
  //console.log(skills);
  return (
    <div className="SkillList">
      {skillsList.map((skills, index) => (
        <Item skills={skills} key={index} />
      ))}
    </div>
  );
};
export default Items;
