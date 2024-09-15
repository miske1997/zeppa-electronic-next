"use client"
import { Table } from "react-bootstrap";
import ArticleItemRow from "../Helpers/ArticleItemRow/ArticleItemRow";
import { useState, useEffect } from "react";


function CartArticleList() {

    const [articlesInCart, setItems] = useState([]);
    
    useEffect(() => {
        readCartItems()
        setInterval(() => {
            readCartItems()
        }, 500);
        // return () => removeEventListener("storage", storageEvent)
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
    function CalculatePriceSum() {
        let price = 0
        articlesInCart.forEach(article => {
            price += article.cost * (article.amount ?? 1)
        });
        return price
    }

    function RenderRow() {
        return articlesInCart.map(article => {
            return (
                <ArticleItemRow article={article} onCartItemRemoveClick={onCartItemRemoveClick}></ArticleItemRow>
            )

        })
    }
    function onCartItemRemoveClick(itemId) {
        articlesInCart.splice(articlesInCart.findIndex(i => i.id === itemId), 1)
        localStorage.setItem('cartItems', JSON.stringify(articlesInCart));
        setItems([...articlesInCart])
    }
    return (
        <>
            <Table className="m-0">
                <thead>
                    <tr style={{ verticalAlign: "middle" }}>
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
            <div className="cost-sum-con text-xl">
                <p>Cena:</p>
                <p className="cost-sum">{`${CalculatePriceSum()} RSD`}</p>
            </div>
        </>
    );
}

export default CartArticleList;