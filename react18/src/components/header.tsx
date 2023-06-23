import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
    return (<header className="sticky mb-8">
    <ul className="flex space-x-4">
      <li>
        <img
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
        />
      </li>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/product">Contact Us</Link></li>
    </ul>
  </header>)
}