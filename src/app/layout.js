import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"

import SSRProvider from 'react-bootstrap/SSRProvider';
import { Navbar, Container, Offcanvas, Nav, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import NavBar from "@/components/NavBar/NavBar";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ZeppaElectronic",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
