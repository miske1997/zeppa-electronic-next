"use client"
import Link from "next/link"
import "./ExpandingGalery.css"


const cardsData = [
    {
        img: "https://elektroleum.rs/wp-content/uploads/2024/01/universal-multimeter-voltcraft-vc-440-e-2-e1704546584200.webp",
        title: "Merni Instrumenti",
        url : "8V03YkVybTd1vudBmgIH",
    },
    {
        img: "https://elektroleum.rs/wp-content/uploads/2021/11/ERSA-e1704546708198.jpg",
        title: "Alati i Pribor",
        url : "",
    },
    {
        img: "https://elektroleum.rs/wp-content/uploads/2023/03/Laboratorijsko-napajanje-3.jpg",
        title: "",
        url : "",
    },
    {
        img: "https://elektroleum.rs/wp-content/uploads/2022/03/MicroBit-ploca-e1704545783894.png",
        title: "",
        url : "",
    },
    {
        img: "https://elektroleum.rs/wp-content/uploads/2024/01/Alat-i-pribor-e1704545849200.jpg",
        title: "",
        url : "",
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