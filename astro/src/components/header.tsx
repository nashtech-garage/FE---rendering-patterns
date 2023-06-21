import React from "react";

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
      <li><a href="/">Home</a></li>
      <li><a href="/product">Contact Us</a></li>
    </ul>
  </header>)
}