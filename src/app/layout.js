import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"

import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import { GetMainCategorys } from "@/services/categoryService";
import ToastModal from "@/components/ToastModal/ToastModal";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://zeppaelektronika.com"),
  keywords: ["elektronika", "senzori", "otpornik", "komponente", "elektronske komponente"],
  title: {
    default: "ZeppaElektronika",
    template: `%s | ZeppaElektronika`
  },
  openGraph: {
    description: "",
    images: ['']
  }
  ,
  description: "",
};

export default async function RootLayout({ children }) {

  const categories = await GetMainCategorys();

  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar categories={categories} onLogIn></NavBar>
        {children}
        <Footer></Footer>
        <ToastModal></ToastModal>
        {/* <h1 style={{position: "fixed", left: "50%", top: "50%", transform: "translateX(-50%)"}}>Stize Uskoro</h1> */}
      </body>
    </html>
  );
}
