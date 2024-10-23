"use client"
import Link from "next/link"
import "./ExpandingGalery.css"


const cardsData = [
    {
        img: "/PopKategorije/Multimer.jpg",
        title: "Unimari",
        url : "8V03YkVybTd1vudBmgIH",
    },
    {
        img: "/PopKategorije/Razvojni_Sistemi.jpg",
        title: "Razvojni Sistemi",
        url : "CXpIGuO37btTH0CyItxv",
    },
    {
        img: "/PopKategorije/Kondenzator.jpg",
        title: "Kondenzatori",
        url : "yW4pTVbk6ol9ZVEw45B6",
    },
    {
        img: "/PopKategorije/Relej.webp",
        title: "Releji",
        url : "frfXdrpTj7YQB5MJFwWm",
    },
    {
        img: "/PopKategorije/Otpornici.jpg",
        title: "Otpornici",
        url : "wUUdZbvihdFHRq2YZX0e",
    },
]

function ExpandingGalery({}) {

    function RenderCards() {
        return cardsData.map(card => {
            return (
                <Link href={`browse/${card.url}`} key={card.img} className="galery-card">
                    <img src={card.img}></img>
                    <h3>{card.title}</h3>
                </Link>
            )
        })
    }

    return (
        <div className="galery">
            {RenderCards()}
        </div>
    );
}

export default ExpandingGalery;