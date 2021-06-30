import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import "../styles/App.css";



const Navbar = () => {
    return (
      <div>
          <h3 className="headingText">STAR WARS</h3>
        <nav className="navbar">
          <div className="links">
            <Link to="/" className="link button2" >
              Home
            </Link>
            <Link to="/person" className="link button2">
              Person
            </Link>
          </div>
        </nav>
        
      </div>
    );
}
 
export default Navbar;