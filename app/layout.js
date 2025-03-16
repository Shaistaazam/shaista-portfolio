import './globals.css'
import { Outfit, Ovo } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], 
  weight: ["400"]
});

export const metadata = {
  title: "Portfolio - Shaista Azam",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.className} ${ovo.className} antialiased leading-6 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
