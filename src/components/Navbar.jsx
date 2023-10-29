import { Link, useMatch, useResolvedPath } from "react-router-dom";

import productImage from "../assets/down-arrow.png";
import product from "../assets/logo-min.png";
import main from "../assets/homepage-min.png";
export default function Navbar() {
  return (
    <div>
    <nav className="nav">
      <div className="nav-left">
        <Link to="/" className="site-title">
        <img src={product} alt="Site Image"  style={{ width: '30px', height: '30px'}}/>
        </Link>
        </div>
        <ul className="nav-links">
          <CustomLink to="/pricing">Products <img src={productImage} alt="Product Image"  style={{ width: '20px', height: '20px'}}/> </CustomLink>
          
          <CustomLink to="/pricing">Solutions <img src={productImage} alt="Product Image"  style={{ width: '20px', height: '20px'}}/> </CustomLink>
          <CustomLink to="/pricing">Developers</CustomLink>
          <CustomLink to="/pricing">Resources <img src={productImage} alt="Product Image"  style={{ width: '20px', height: '20px'}}/> </CustomLink>
          <CustomLink to="/pricing">Pricing</CustomLink>
        </ul>
     
      <div className="nav-right">
        <button className="blue-button">Sign In</button>
        <button  className="gray-button">Contact Sales</button>
      </div>
    </nav>
    
    <div>
    <img src={main} alt="Main Image"  style={{ width: '100%', height: 'auto',paddingTop:'10px'}}/>
    </div>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
