import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
      <div >
          <h3 className="headingText">STAR WARS</h3>
        <nav className="navbar">
          <div className="links">
            <Link to="/" className="link button2" >
              Home
            </Link>
            <Link to="/about" className="link button2" >
              About
            </Link>
          </div>
        </nav>
      </div>
    );
}
 
export default Navbar;