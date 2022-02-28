import "./App.css";
import Navbar from "./components/Navbar/NavBar";
import Greeting from "./components/Greeting";

function App() {

  return (
    <div className="App">
    
      <Navbar />
      <Greeting message = {"Welcome to the Jungle!"} />

    </div>
  );
}

export default App;


