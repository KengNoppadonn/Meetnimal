import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contactt from "./pages/Contactt";
import Layout from "./pages/Layout";
import Login from'./pages/Login'
import Register from "./pages/Register";
import Footer from "./pages/Footer"
function App() {

  return (
    <div>
      <h1>
        <span>
          
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="blogs" element={<Home />} />
                <Route path="contact" element={<Contactt />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="*" element={<Home />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </span>
      </h1>
      <Footer/>
    </div>
  );
}

export default App;
