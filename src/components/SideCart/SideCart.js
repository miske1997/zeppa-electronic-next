import { Button, Image, ListGroup, Offcanvas, Table } from "react-bootstrap";
import "./SideCart.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import ArticleItemRow from "../Helpers/ArticleItemRow/ArticleItemRow";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

function SideCart({ show = false, handleClose = () => { } }) {

    const router = useRouter()
    const [articlesInCart, setItems] = useState([]);

    useEffect(() => {
        readCartItems()
        const interval = setInterval(() => {
            readCartItems()
        }, 500);
        return () => clearInterval(interval)
    }, []);

    function readCartItems(){
        const cartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (cartItems) {
            setItems([...cartItems]);
        }
        else {
            setItems([])
        }
    }

    function onCartItemRemoveClick(itemId) {
        articlesInCart.splice(articlesInCart.findIndex(i => i.id === itemId), 1)
        localStorage.setItem('cartItems', JSON.stringify(articlesInCart));
        setItems([...articlesInCart])
    }

    function RenderArticles() {
        // return articlesInCart.map(article => {

        //     return (
        //         <ListGroup.Item>
        //             <CartItem onClickX={onCartItemRemoveClick} item={article}></CartItem>
        //         </ListGroup.Item>
        //     )

        // })
    }
    function RenderRow() {
        return articlesInCart.map(article => {
            return (
                <ArticleItemRow key={article.id} article={article} onCartItemRemoveClick={onCartItemRemoveClick}></ArticleItemRow>
            )

        })
    }
    return (

        <Offcanvas className="side-cart" placement={"end"} show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className="fs-2">Korpa</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Table >
                    <thead>
                        <tr>
                            <th>Produkt</th>
                            <th>Ime</th>
                            <th>Kolicina</th>
                            <th>Cena</th>
                        </tr>
                    </thead>
                    <tbody>

                        {RenderRow()}

                    </tbody>
                </Table>
                <ListGroup className="gap-3 ">

                </ListGroup>
                <Button onClick={() => { router.push("/cart"); handleClose() }} size="lg" className="mt-3">Order</Button>
            </Offcanvas.Body>
        </Offcanvas>

    );
}

export default SideCart;