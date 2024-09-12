"use client"
import { auth } from "@/configs/firebase";
import { useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth"

function LoginModal({onClose = () => {}, show = false}) {
    const submitBtnRef = useRef()
    const [createUser] = useCreateUserWithEmailAndPassword(auth)
    function triggrSubmit() {
        submitBtnRef.current.click()
    }
    function CreateUser(form){

    }

    return (
        <Modal backdrop="static" show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={CreateUser}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" placeholder="example@mail.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDescription">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"  />
                    </Form.Group>
                    <button ref={submitBtnRef} style={{ display: "none" }} variant="primary" type="submit" />
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={triggrSubmit}>
                    Login
                </Button>

            </Modal.Footer>
        </Modal>
     );
}

export default LoginModal;