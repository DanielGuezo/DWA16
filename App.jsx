import MainContent from "./components/Maincontent";
import Navbar from "./components/Navbar";
import "./style.css";

function App(){
  return(
    <div className="container">
      <Navbar />;
      <MainContent />;
    </div>
  );
}

export default App;
