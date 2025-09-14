import "./App.css";
import { Image, Information, Learn } from "./Profile";

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
    </div>
  );
}

export default App;
