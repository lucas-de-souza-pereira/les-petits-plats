import { Anton, Manrope } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";



const anton = Anton({
  subsets: ["latin"],
  weight: "400",                 
  variable: "--font-anton",      
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
  variable: "--font-manrope",
});

export const metadata = {
  title: "Les Petits Plats",
  description: "Site de recette en ligne",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${manrope.variable} ${anton.variable}`}>
        {children}
        <Footer/>
      </body>
      
    </html>
  );
}
