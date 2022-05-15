import "./styles/App.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { ChartBar, Signup } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/chartBar" element={<ChartBar />} />
      </Routes>
    </div>
  );
}

export default App;
