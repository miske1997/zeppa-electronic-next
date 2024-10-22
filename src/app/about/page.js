import { Col, Container, Row } from "react-bootstrap";
import "./AboutPage.css"

function AboutPage() {

    return (
        <main className="about-page">
            <div className="about-row" style={{ marginTop: "3rem" }}>
                <div >
                    <img className="img-to-mask" src="https://www.nextpcb.com/uploads/images/202303/20/1679303211-0734-cavktR.jpg" alt="none"></img>
                </div>
                <div style={{ textAlign: "left" }}>
                    <div></div>
                    <h1>Zeppa Elektronika</h1>
                    <h2>se bavi prodajom elektronskih komponenata i uvozom istih .Sve cene su iskazane u dinarima .PDV je uracunat u cenu .</h2>
                </div>
            </div>
        </main>
    )

}

export default AboutPage;