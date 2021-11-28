import './App.css';
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import News from "./pages/News";
import { Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        {/* <Route path = "/" element = {Home}/> */}
        {/* Cái hôm kia đang được gọi là react component nhưng ở bạn v6 này chúng ta cần react-element nên phải
        viết như này */}
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
