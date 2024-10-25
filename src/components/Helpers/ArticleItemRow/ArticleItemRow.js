"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "react-bootstrap";
import './ArticleItemRow.css'
import { faX } from "@fortawesome/free-solid-svg-icons";
import BadgeWithTooltip from "@/components/BadgeWithTooltip/BadgeWithTooltip";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

function ArticleItemRow({onCartItemRemoveClick = () => {}, onItemClick = () => {},  article = {id: "", categoryId: "", name: '', imageUrl: '', amount: 1, cost: 0, modifiers: {}}}) {

    const router = useRouter()
    const itemRef = useRef()
    useEffect(() => {
        const handler = itemRef.current?.querySelector(".cart-kolicina").addEventListener("change", (ev) => {
                if (ev.target.value == ""){
                    ev.target.value = 1
                }
                UpdateItemInCart(ev.target.value)
        })
        return () => {itemRef.current?.querySelector(".cart-kolicina")?.removeEventListener("change", handler)}

    }, []);

    function UpdateItemInCart(newAmount) {
        const cartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (!cartItems)
            return;
        let item = null
        for (const cartItem of cartItems) {
            if (cartItem.id == article.id){
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

    function renderModifiers(){
        let chips = []
        for (const key in article.modifiers) {
            if (Object.hasOwnProperty.call(article.modifiers, key)) {
                chips.push((
                    <BadgeWithTooltip tooltip={key} text={article.modifiers[key]}></BadgeWithTooltip>
                ))
                
            }
        }
        return chips
    }
    return (
        <tr ref={itemRef} onClick={() => {router.push(`/article/${article.categoryId}/${article.id}`); onItemClick(article)}} className="article-row">
            <td>
                <Image className='cart-image' src={`${article.imageUrl !== "" ? article.imageUrl : "/chip.jpg"}`}></Image>
            </td>
            <td>
                <div style={{display: "flex", flexDirection: "column", gap: "0.2rem"}}>
                    {article.name}
                    <div style={{overflowX: "auto"}}>
                        {renderModifiers()}
                    </div>
                    

                </div>
            </td>
            <td>
                <input onClick={(ev) => ev.stopPropagation()} className="cart-kolicina" style={{width: "3rem"}} min={1} type="number" defaultValue={article.amount}/>
            </td>
            <td>
                {`${article.cost},00 RSD`}
            </td>
            <FontAwesomeIcon onClick={() => onCartItemRemoveClick(article.id)} className='item-cross-icon' size='sm' icon={faX}></FontAwesomeIcon>
        </tr>
    );
}

export default ArticleItemRow;