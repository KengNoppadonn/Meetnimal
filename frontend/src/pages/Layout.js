import { Outlet, Link } from "react-router-dom";
import logo from '../image/logo.jpeg'
import '../css/Layout.css'
const Layout = () => {
   
  return (
    <>
      <nav>
        <img src={logo} alt="Logo" />
        <span>
          <Link to="/">Home  </Link>
        </span>
        <span>
          <Link to="/blogs">Blogs  </Link>
        </span>

        <span>
          <Link to="/contact">Contact us  </Link>
        </span>
        <span>
          <Link to="/login">Login </Link>
        </span>
        
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
