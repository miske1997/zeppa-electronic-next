"use client"
import Card from 'react-bootstrap/Card';
import './ArticleCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import Link from 'next/link';

function ArticleCard({ categoryId = "", article = { id: 0, name: '', cost: 0 }, imageSrc = 'chip.jpg' }) {

    const router = useRouter()
    const [items, setItems] = useState(null);
    const [inCart, setInCart] = useState(false)

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems'));

        if (cartItems) {
            setItems([...cartItems]);
        }
        else {
            setItems([])
        }
    }, []);
    useEffect(() => {
        if (items === null)
            return

        setInCart(items.find(item => item.id === article.id) !== undefined)
        localStorage.setItem('cartItems', JSON.stringify(items));
        
    }, [items]);


    function AddArticleToCart(event) {
        event.stopPropagation()
        event.preventDefault()
        const cartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (cartItems.find(item => item.id === article.id) !== undefined) {
            cartItems.splice(items.findIndex(i => i.id === article.id), 1)
        }
        else {
            let modifiers = {} 
            for (const key in article) {
                if (Object.hasOwnProperty.call(article, key) && Array.isArray(article[key])) {
                    modifiers[key] = article[key][0]
                }
            }
            cartItems.push({cost: article.cost, name: article.name, id: article.id, imageUrl: article.imageUrl, modifiers: modifiers, amount: 1})
        }

        setItems([...cartItems])
    }

    return (
        <Link style={{display: "block"}} className='article-card' href={`/article/${categoryId}/${article.id}`} passHref>
            <div className="card" >
                {inCart === true ? (<div className='in-cart-icon'>
                    <FontAwesomeIcon className='icon' icon={faCartShopping} />
                </div>) : ""}
                <img className='card-img-top' src={`/${imageSrc}`} />
                <div style={{ backgroundColor: "black", height: "1px", width: "98%", margin: "auto" }}></div>
                <div className='card-body'>
                    <div className='card-titlee card-title h5'>{article.name}</div>
                    <div className='card-info'>
                        <div>
                            <span className='article-cost'>{article.cost}</span>
                            .00 RSD
                        </div>

                        <div style={{ flexGrow: "1" }}></div>
                        <FontAwesomeIcon className='article-cart' onClick={AddArticleToCart} icon={faCartShopping} />
                    </div>

                </div>
            </div>
        </Link>
    );
}

export default ArticleCard;