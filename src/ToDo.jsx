const ToDo = ({ task, isDone, time = 0 }) => {
  return isDone ? (
    <li>
      {' '}
      ✅ {task} Duration: {time} hour
    </li>
  ) : (
    <li>❌ {task}</li>
  );
};
export default ToDo;
