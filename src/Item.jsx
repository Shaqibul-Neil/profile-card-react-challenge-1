const Item = ({ skills }) => {
  //console.log(skills);
  const { skill, level, color } = skills;
  const emojiLevel = level => {
    //console.log(level);
    if (level === 'advanced') return '💪🏻';
    if (level === 'intermediate') return '☺️';
    if (level === 'beginner') return '😥';
    return '';
  };

  return (
    <div>
      <button className="skill" style={{ backgroundColor: color }}>
        {skill} {emojiLevel(level)}
      </button>
    </div>
  );
};

export default Item;
