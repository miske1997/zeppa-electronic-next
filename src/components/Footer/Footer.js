
import "./Footer.css"
import Link from "next/link";


function Footer() {

    return (
        <div className="footer">
            <div className="info">

                <div>
                    <h4>Pomoć</h4>
                    <Link href="/instructions">Uputstvo za kupovinu</Link>
                    <p className="hilight-text">Način isporuke</p>
                    <p className="hilight-text">Način plaćanja</p>
                    <p className="hilight-text">Garancija kvaliteta</p>
                    <p className="hilight-text">Reklamacija</p>
                    <p className="hilight-text">Otkazivanje narudžbine</p>
                </div>
                <div className="kontakt-info-con">
                    <div>
                        <h4>Info</h4>
                        <Link className="block" href="/about">O nama</Link>
                        <Link className="block" href="/privacy">Privatnost podataka</Link>
                    </div>
                    <div>
                        <h4>Kontakt</h4>
                        <p className="hilight-text">069/228-0770</p>
                        <p className="hilight-text">069/228-1790</p>
                        <p className="hilight-text">zeppaelektronika@gmail.com</p>
                    </div>
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