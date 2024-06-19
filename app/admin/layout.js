import { Poppins } from "next/font/google";

const inter = Poppins({weight:['100','300'], subsets: ["latin"] });

export const metadata = {
    title: "Test Next App",
    description: "Learning new features of the next.js",
};

export default function RootLayout({ children }) {
    return (
        <div className={inter.className}>
            <nav className="max-w-[1280px] mx-auto ">halo Iam the admin nav</nav>
            <section className="">
                {children}
            </section>
            <footer className="max-w-[1280px] mx-auto ">
                I am the admin footer apart
            </footer>
        </div>
    );
}
