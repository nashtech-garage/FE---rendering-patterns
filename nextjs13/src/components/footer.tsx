import Link from "next/link";

export default function Footer() {
    return (<footer>
        <ul className="flex space-x-4 my-8">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/product">Contact Us</Link></li>
        </ul>
      </footer>)
}