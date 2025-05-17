
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./First";
import Next from "./Next";
import Photo from "./Photo";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<First/>} />
        <Route path="/next" element={<Next/>} />
        <Route path="/photo" element={<Photo/>} />
      </Routes>
    </Router>
  );
}

export default App;
