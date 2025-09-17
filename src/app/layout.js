import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sherif Emad",
  description: "I am Sherif Emad, front-end developer with more than one year of experience and have completed more than 20 projects. Skilled in HTML, CSS, JavaScript, Bootstrap, Tailwind, and React.js. Passionate about building modern, responsive websites and delivering high-quality code that enhances user experience.",
  keywords: [
    "Sherif Emad",
    "Sherif Emad Portfolio",
    "Front End Developer",
    "Web Developer",
    "React Developer",
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind",
    "Bootstrap",
    "Responsive Websites",
    "UI Developer",
    "Egypt Front End Developer",
  ],
  openGraph: {
    title: "Sherif Emad | Front-End Developer",
    description:
      "Professional front-end developer skilled in React.js, Tailwind, and building modern responsive websites.",
    // url: "https://yourdomain.com",
    siteName: "Sherif Emad",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col lg:flex-row min-h-screen w-[95%] mx-auto gap-5 lg:w-[85%] lg:my-10`}
      >
        {/* Navbar */}
        <div className="lg:w-[25%] lg:fixed  lg:left-[3%]">
          <Navbar />
        </div>

        {/* Page content */}
        <main className="flex-1 lg:ml-[28%] lg:relative lg:left-[10%]">{children}</main>
      </body>
    </html>
  );
}
