"use client"
import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";

function AddToCartButton({categoryId = "", articleData }) {

    const [items, setItems] = useState(null);
    const [inCart, setInCart] = useState(false)
    const buttonRef = useRef()

    useEffect(() => {
        const interval = setInterval(() => {
            const cartItems = JSON.parse(localStorage.getItem('cartItems'));
            if (!cartItems){
                return
            }
            const item = cartItems.find(i => i.id === articleData.id)
            const input = document.querySelector(".kolicina-input")
            if (!item || document.activeElement === input){
                return
            }
            input.value = item.amount

        }, 500);
        return () => clearInterval(interval)
    });

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

    useEffect(() => {
        const handler = document.querySelector(".kolicina-input").addEventListener("change", (ev) => {
                if (ev.target.value == ""){
                    ev.target.value = 1
                }
                UpdateItemInCart(ev.target.value)
        })
        return () => {document.querySelector(".kolicina-input")?.removeEventListener("change", handler)}

    }, []);

    function UpdateItemInCart(newAmount) {
        const cartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (!cartItems)
            return;
        let item = null
        for (const cartItem of cartItems) {
            if (cartItem.id == articleData.id){
                item = cartItem
                break
            }
        }
        if (!item){
            return
        }
        item.amount = newAmount
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    function AddArticleToCart(){
        if (items.find(item => item.id === articleData.id)){
            items.splice(items.findIndex(i => i.id === articleData.id), 1)
        }
        else{
            items.push({categoryId: categoryId, cost: articleData.cost, name: articleData.name, id: articleData.id, imageUrl: articleData.imageUrl, modifiers: getModifiers(), amount: GetKolicina()})
        }
        console.log(items);
        setItems([...items])
    }

    function getModifiers() {
        const modifiersSelected = {}
        let modifierSelects = document.querySelectorAll(".article-modifier") //buttonRef.current.parentElement.
        modifierSelects.forEach(el => {
            modifiersSelected[el.querySelector("input").value] = el.querySelector(".article-modifier-select").value
        })

        return modifiersSelected
    }
    function GetKolicina(){
        return document.querySelector(".kolicina-input").value ?? 1
    }
    return (
        <Button ref={buttonRef} onClick={AddArticleToCart}>{inCart ? "Ukloni iz korpe" : "Dodaj u korpu"}</Button>
    );
}

export default AddToCartButton;