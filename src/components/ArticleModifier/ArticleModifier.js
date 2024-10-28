"use client"

import { Form } from "react-bootstrap";

function ArticleModifier({articleId = "", modifier}) {

    function UpdateItemInCart(event) {
        const cartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (!cartItems)
            return;
        let item = null
        for (const cartItem of cartItems) {
            if (cartItem.id == articleId){
                item = cartItem
                break
            }
        }
        if (!item || !item.modifiers){
            return
        }
        item.modifiers[modifier.name] = event.target.value
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    return (
        <div className="article-modifier">
            <p>
                {`${modifier.name} : `}
            </p>
            <input type="hiden" style={{display: "none"}} value={modifier.name}></input>
            <Form.Select className="article-modifier-select" onChange={UpdateItemInCart} style={{ width: "min-content" }} aria-label="Default select example">
                {modifier.values.map(value => {
                    return (
                        <option>{value}</option>
                    )
                })}

            </Form.Select>
        </div>
    );
}

export default ArticleModifier;