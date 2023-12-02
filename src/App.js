import "./App.css";
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="app">
      <Sidebar></Sidebar>
      <Home></Home>
    </div>
  );
};

export default App;
