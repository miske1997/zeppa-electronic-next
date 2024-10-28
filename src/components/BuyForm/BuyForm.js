"use client"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./BuyForm.css"

function BuyForm({ PlaceOrder }) {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;

        event.preventDefault();
        event.stopPropagation();
        const cartItems = JSON.parse(localStorage.getItem('cartItems'))
        if (!cartItems || cartItems.length === 0){
            const toasts = JSON.parse(localStorage.getItem("tosts"))
            toasts.push({text: "Nema artikla u korpi", duration: 2000})
            localStorage.setItem("tosts", JSON.stringify(toasts))
            return
        }
        if (form.checkValidity() === true) {

            const name = form[0].value
            const lastName = form[1].value
            const email = form[2].value
            const address = form[3].value
            const phone = form[4].value
            const city = form[5].value
            const state = form[6].value
            const saveDetails = form[7].value
            PlaceOrder(cartItems, { name, lastName, email, address, city, state, saveDetails })
            const toasts = JSON.parse(localStorage.getItem("tosts"))
            toasts.push({text: "Kupovina obavljena", duration: 2000})
            localStorage.setItem("tosts", JSON.stringify(toasts))
            localStorage.setItem("cartItems", JSON.stringify([]))
            
            setTimeout(() => {
                setValidated(false);
                form[0].value = ""
                form[1].value = ""
                form[2].value = ""
                form[3].value = ""
                form[4].value = ""
                form[5].value = ""
                form[6].value = "" 
            }, 500);
            

        }

        setValidated(true);

    };


    return (
        <div className='buy-form-con'>
            <Form className='p-4' noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className='mt-2 mb-5'>
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <h2 className='text-2xl'>Informacije.</h2>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>Ime</Form.Label>
                        <Form.Control required placeholder="Ime" />
                        <Form.Control.Feedback type="invalid">
                            Molimo unesite ime.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridLastname">
                        <Form.Label>Prezime</Form.Label>
                        <Form.Control required placeholder="Prezime" />
                        <Form.Control.Feedback type="invalid">
                            Molimo unesite prezime.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required type="email" placeholder="Unesite email" />
                        <Form.Control.Feedback type="invalid">
                            Molimo napisite vayeci email.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress">
                    <Form.Label>Adresa</Form.Label>
                    <Form.Control required placeholder="Bulevar 33" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridPhone">
                    <Form.Label>Telefon</Form.Label>
                    <Form.Control required placeholder="064-558-412" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Grad</Form.Label>
                        <Form.Control required />
                    </Form.Group>

                    {/* <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Serbia">
                            <option>Serbia</option>
                            <option>BiH</option>
                        </Form.Select>
                    </Form.Group> */}

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control required />
                    </Form.Group>
                </Row>

                {/* <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Save my details" />
            </Form.Group> */}
                <div className='flex justify-center mt-4'>
                    <Button className='order-buton m-auto' variant="primary" type="submit">
                        Naruči
                    </Button>
                </div>

            </Form>
        </div>
    );
}

export default BuyForm;