"use client"
import Card from 'react-bootstrap/Card';
import './ArticleCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation'

function ArticleCard({articleInCart = false, categoryId = "", article = {id: 0, name: '', cost: 0}, imageSrc = 'chip.jpg'}) {

    // const dispatch = useDispatch()
    // const { categoryId } = useParams("categoryId")
    const router = useRouter()

    function AddToCart(event){
        // event.stopPropagation();
        // dispatch(addArticleToCart({...article, amount: 1, categoryId: categoryId}))
    }

    function OnArticleClick() {
        router.push(`/article/${categoryId}/${article.id}`)
        // setArticle(article)
        // navigate("/article/" + categoryId + "/" + article.id ?? 0)
    }

    return (
            <div onClick={() => OnArticleClick()} className="article-card card" >
                {articleInCart === true ? (<div className='in-cart-icon'>
                    <FontAwesomeIcon className='icon' icon={faCartShopping}/>
                </div>) : ""} 
                <img className='card-img-top' src={`/${imageSrc}`} />
                <div style={{backgroundColor: "black", height: "1px", width: "98%", margin: "auto"}}></div>
                <div className='card-body'>
                    <div className='card-titlee card-title h5'>{article.name}</div>
                    <div className='card-info'>
                        <div>
                            <span className='article-cost'>{article.cost}</span>
                            .00 RSD
                        </div>
                        
                        <div style={{flexGrow: "1"}}></div>
                        <FontAwesomeIcon className='article-cart' onClick={AddToCart} icon={faCartShopping}/>
                    </div>

                </div>
            </div>
    );
}

export default ArticleCard;