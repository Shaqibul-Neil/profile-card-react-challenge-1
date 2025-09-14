const Contact = ({ mobile, link, email }) => {
  return (
    <ul className="ul">
      <li>{mobile}</li>
      <li>{link}</li>
      <li>{email}</li>
    </ul>
  );
};
export default Contact;
