
import "./Footer.css"
import Link from "next/link";


function Footer() {

    return (
        <div className="footer">
            <div className="info">

                <div>
                    <h4>Pomoc</h4>
                    <Link href="/instructions">Uputstvo za kupovinu</Link>
                    <p>Način isporuke</p>
                    <p>Način plaćanja</p>
                    <p>Garancija kvaliteta</p>
                    <p>Reklamacija</p>
                    <p>Otkazivanje narudžbine</p>
                </div>
                <div>
                    <h4>Info</h4>
                    <p>O nama</p>
                    <Link href="/privacy">Privatnost podataka</Link>
                </div>
                <div>
                    <h4>Kontakt</h4>
                    <p>(018) 4520-455, 4522-814, 4522-965</p>
                    <p>(018) 4522-660</p>
                    <p>office@mgelectronic.rs</p>
                </div>
                <div>
                    <h4>Radno Vreme</h4>
                    <p>Radnim danom od 8:00 do 20:00</p>
                    <p>Subotom od 8:00 do 15:00</p>
                </div>
            </div>
            <div className="copyright">Copyright © ZeppaElektronika 2024. Sva prava zadržana.</div>
        </div>
    );
}

export default Footer;