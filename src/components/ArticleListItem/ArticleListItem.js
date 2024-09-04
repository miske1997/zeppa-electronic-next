
import { Button } from "react-bootstrap";
import "./ArticleListItem.css"
import Link from "next/link";

function ArticleListItem({ articleInCart = false,categoryId, article = { id: 0, name: '', cost: 0 }, imageSrc = 'chip.jpg' }) {

    function OnArticleClick() {
        // setArticle(article)
        // navigate("/article/" + categoryId + "/" + article.id ?? 0)
    }

    return (
        <Link href={"/article/" + categoryId + "/" + article.id} className="">
            <div className="article-list-item">
                <img src={`/${imageSrc}`} alt="chip.jpg"></img>
                <div className="details">
                    <h5>{article.name}</h5>
                    <p>{`${article.cost} RSD`}</p>
                </div>
                <input defaultValue={1} type="number" className="kolicina"></input>
                <Button className="naruci">Naruci</Button>
            </div>
        </Link>
    );
}

export default ArticleListItem;