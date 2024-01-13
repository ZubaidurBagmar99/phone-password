
import { Link } from 'react-router-dom'; // Import Link if you're using React Router
import './SideNav.css'; // Import your CSS file for styling

const SideNav = () => {
  return (
    <div className="sidenav">
      <h2>Navigation</h2>
      <ul>
        <li>
          <Link to="">Shop</Link>
        </li>
        <li>
          <Link to="">Category</Link>
        </li>
        <li>
          <Link to="">Brand</Link>
        </li>
        <li>
          <Link to="">Variant</Link>
        </li>
        <li>
          <Link to="">Shorting</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
