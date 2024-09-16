import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"

import { Navbar, Container, Offcanvas, Nav, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import { GetMainCategorys } from "@/services/categoryService";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ZeppaElectronic",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {

  const categories = await GetMainCategorys();

  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar categories={categories} onLogIn></NavBar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
