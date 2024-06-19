import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Test Next App",
  description: "Learning new features of the next.js",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <nav className="max-w-[1280px] mx-auto p-5">halo Iam the user nav</nav>
      <section className="p-5">
        {children}
      </section>
      <footer className="max-w-[1280px] mx-auto p-5">
        I am the user footer apart
      </footer>
    </div>
  );
}
