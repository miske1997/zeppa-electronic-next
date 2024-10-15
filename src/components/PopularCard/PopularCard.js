"use client"
import Card from 'react-bootstrap/Card';
import './PopularCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

function PopularCard({categoryId = "", article = {id: 0, name: '', cost: 0}, imageSrc = 'chip.jpg'}) {

    const router = useRouter()

    function GoToArticle(){
        router.push(`/article/${article.categoryId ?? categoryId}/${article.id}`)
    }

    console.log(article);
    return (
            <Card onClick={GoToArticle} className="popular-card" >
                <Card.Img variant="top" src={`/${imageSrc}`} />
                <div style={{backgroundColor: "black", height: "1px", width: "98%", margin: "auto"}}></div>
                <Card.Body>
                    <Card.Title>{article.name}</Card.Title>
                    <div className='card-info'>
                        <div>
                            <span className='article-cost'>{article.cost}</span>
                            .00 RSD
                        </div>
                        
                        <div style={{flexGrow: "1"}}></div>
                        {/* <FontAwesomeIcon className='article-cart' onClick={AddToCart} icon={faCartShopping}/> */}
                    </div>

                </Card.Body>
            </Card>
    );
}

export default PopularCard;