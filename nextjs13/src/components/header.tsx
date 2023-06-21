import Link from 'next/link';

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
      <li><Link href="/">Home</Link></li>
      <li><Link href="/product">Contact Us</Link></li>
    </ul>
  </header>)
}