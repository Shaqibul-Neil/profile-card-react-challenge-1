import "./App.css";
import { Image, Information, Learn } from "./Profile";
import Contact from "./Contact";

const info = {
  mobile: "01798043534",
  link: "www.dsd.com",
  email: "adaw@gmail.com",
};

function App() {
  return (
    <div className="container">
      <div className="img-div">
        <Image />
      </div>
      <div className="content-div">
        <Information />
      </div>
      <div>
        <Learn />
      </div>
      <div>
        <Contact {...info} />
      </div>
    </div>
  );
}

export default App;
