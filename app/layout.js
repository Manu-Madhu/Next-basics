import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Test Next App",
  description: "Learning new features of the next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="max-w-[1280px] mx-auto w-full p-3">
          <h1 className="uppercase mb-2">halo Iam the common nav</h1>
          <ul className="flex gap-5">
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/admin'>Admin</Link>
            </li>
            <li>
              <Link href='/user'>User</Link>
            </li>
          </ul>
        </nav>
        <section className="p-3">
          {children}
        </section>
      </body>
    </html>
  );
}
