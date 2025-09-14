import "./App.css";
import { Image, Information } from "./Profile";

function App() {
  return (
    <div className="container">
      <div className="img-div">
        <Image />
      </div>
      <div className="content-div">
        <Information />
      </div>
    </div>
  );
}

export default App;
