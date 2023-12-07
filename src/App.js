import "./App.css";
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import { ContextAPIProvider } from "./contextAPI";

const App = () => {
  return (
    <ContextAPIProvider>
      <div className="app">
        <Sidebar></Sidebar>
        <Home></Home>
      </div>
    </ContextAPIProvider>
  );
};

export default App;
