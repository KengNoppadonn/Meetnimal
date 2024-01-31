import { Outlet, Link } from "react-router-dom";
import logo from '../image/logo.jpeg'
import '../css/Layout.css'
const Layout = () => {
   
  return (
    <>
      <nav >
        <img src={logo} alt="Logo" />
        <span>
          <Link to="/">หน้าหลัก  </Link>
        </span>
        <span>
          <Link to="/blogs">Blogs  </Link>
        </span>

        <span>
          <Link to="/contact">ติดต่อเรา  </Link>
        </span>
        <span>
          <Link to="/login">Login  </Link>
        </span>
        
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
