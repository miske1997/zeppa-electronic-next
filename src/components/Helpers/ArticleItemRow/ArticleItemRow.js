"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "react-bootstrap";
import './ArticleItemRow.css'
import { faX } from "@fortawesome/free-solid-svg-icons";
import BadgeWithTooltip from "@/components/BadgeWithTooltip/BadgeWithTooltip";
import { useRouter } from "next/navigation";

function ArticleItemRow({onCartItemRemoveClick = () => {},  article = {id: "", categoryId: "", name: '', imageSrc: '', amount: 1, cost: 0, modifiers: {}}}) {

    const router = useRouter()

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
        <tr onClick={() => router.push(`/article/${article.categoryId}/${article.id}`)} className="article-row">
            <td>
                <Image className='cart-image' src={article.imageSrc ?? "/chip.jpg"}></Image>
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
                {article.amount}
            </td>
            <td>
                {`${article.cost},00 RSD`}
            </td>
            <FontAwesomeIcon onClick={() => onCartItemRemoveClick(article.id)} className='item-cross-icon' size='sm' icon={faX}></FontAwesomeIcon>
        </tr>
    );
}

export default ArticleItemRow;