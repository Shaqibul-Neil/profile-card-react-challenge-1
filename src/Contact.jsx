const Contact = ({ mobile, link, email }) => {
  return (
    <ol>
      <li>{mobile}</li>
      <li>{link}</li>
      <li>{email}</li>
    </ol>
  );
};
export default Contact;
