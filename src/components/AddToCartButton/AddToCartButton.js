"use client"
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function AddToCartButton({ articleData }) {

    const [items, setItems] = useState(null);
    const [inCart, setInCart] = useState(false)

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems'));
        console.log(cartItems);
        
        if (cartItems) {
            setItems([...cartItems]);
        }
        else{
            setItems([])
        }
    }, []);

    useEffect(() => {
        if (items === null)
            return

        console.log(items);
        setInCart(items.find(item => item.id === articleData.id) !== undefined)
        localStorage.setItem('cartItems', JSON.stringify(items));
    }, [items]);


    function AddArticleToCart(){
        if (items.find(item => item.id === articleData.id)){
            items.splice(items.findIndex(i => i.id === articleData.id), 1)
        }
        else{
            items.push(articleData)
        }
        console.log(items);
        
        setItems([...items])
    }

    return (
        <Button onClick={AddArticleToCart}>{inCart ? "Ukloni iz korpe" : "Dodaj u korpu"}</Button>
    );
}

export default AddToCartButton;