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
        console.log(form[0].value);
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === true) {

            const name = form[0].value
            const lastName = form[1].value
            const email = form[2].value
            const address = form[3].value
            const phone = form[4].value
            const city = form[5].value
            const state = form[6].value
            const saveDetails = form[7].value
            PlaceOrder(JSON.parse(localStorage.getItem('cartItems')), { name, lastName, email, address, city, state, saveDetails })
            localStorage.setItem("tosts", JSON.stringify(JSON.parse(localStorage.getItem("tosts")).push({text: "Kupovina obavljena", duration: 2000})))
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
                        <Form.Label>First Name</Form.Label>
                        <Form.Control required placeholder="First Name" />
                        <Form.Control.Feedback type="invalid">
                            Please write first name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridLastname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control required placeholder="Last Name" />
                        <Form.Control.Feedback type="invalid">
                            Please write last name.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required type="email" placeholder="Enter email" />
                        <Form.Control.Feedback type="invalid">
                            Please write a valid email.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control required placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control required placeholder="064-558-412" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
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
                        Order
                    </Button>
                    <Button className='order-buton m-auto' variant="primary" type="reset">
                        reset
                    </Button>

                </div>

            </Form>
        </div>
    );
}

export default BuyForm;