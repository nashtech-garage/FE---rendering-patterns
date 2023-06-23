import { Link } from "react-router-dom";

export default function Footer() {
    return (<footer>
        <ul className="flex space-x-4 my-8">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/product">Contact Us</Link></li>
        </ul>
      </footer>)
}