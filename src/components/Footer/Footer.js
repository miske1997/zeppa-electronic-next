
import "./Footer.css"
import Link from "next/link";


function Footer() {

    return (
        <div className="footer">
            <div className="info">

                <div>
                    <h4>Pomoć</h4>
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
                    <p>(018) 069/228-0770</p>
                    <p>(018) 069/228-1790</p>
                    <p>zeppaelektronika@gmail.com</p>
                </div>
                <div>
                    <h4>Radno Vreme</h4>
                    <p>Radnim danima od 08 -16h</p>
                    <p>Vikendom ne radimo</p>
                </div>
            </div>
            <div className="copyright">Copyright © ZeppaElektronika 2024. Sva prava zadržana.</div>
        </div>
    );
}

export default Footer;