const List = ({ favor }) => {
  return <li>Activity: {favor}</li>;
};

const ProfilesFavorites = ({ profileFavoriteObj }) => {
  //console.log(profileFavoriteObj);
  return (
    <li>
      Name: {profileFavoriteObj.name} <br />
      Activity-
      <ul>
        {profileFavoriteObj.favoritePassTime.map(fav => (
          <Activity activity={fav} key={fav} />
        ))}
      </ul>
    </li>
  );
};

const Activity = props => {
  //   console.log(props);
  return <li>{props.activity}</li>;
};
export { List, ProfilesFavorites };
