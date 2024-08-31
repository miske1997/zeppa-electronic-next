"use client"
import Card from 'react-bootstrap/Card';
import './ArticleCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function ArticleCard({articleInCart = false, article = {id: 0, name: '', cost: 0}, imageSrc = 'chip.jpg'}) {

    // const dispatch = useDispatch()
    // const { categoryId } = useParams("categoryId")

    function AddToCart(event){
        // event.stopPropagation();
        // dispatch(addArticleToCart({...article, amount: 1, categoryId: categoryId}))
    }

    function OnArticleClick() {
        // setArticle(article)
        // navigate("/article/" + categoryId + "/" + article.id ?? 0)
    }

    return (
            <Card onClick={() => OnArticleClick()} className="article-card" >
                {articleInCart === true ? (<div className='in-cart-icon'>
                    <FontAwesomeIcon className='icon' icon={faCartShopping}/>
                </div>) : ""} 
                <Card.Img variant="top" src={`/${imageSrc}`} />
                <div style={{backgroundColor: "black", height: "1px", width: "98%", margin: "auto"}}></div>
                <Card.Body>
                    <Card.Title className='card-title'>{article.name}</Card.Title>
                    <div className='card-info'>
                        <div>
                            <span className='article-cost'>{article.cost}</span>
                            .00 RSD
                        </div>
                        
                        <div style={{flexGrow: "1"}}></div>
                        <FontAwesomeIcon className='article-cart' onClick={AddToCart} icon={faCartShopping}/>
                    </div>

                </Card.Body>
            </Card>
    );
}

export default ArticleCard;