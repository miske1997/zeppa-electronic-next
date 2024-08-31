"use client"
import { ListGroup } from "react-bootstrap";
import "./CategorySelectHover.css"
import Link from "next/link";

function CategorySelectHover({categories = [] }) {

    function RenderCategoriy(category) {
        if (!category.categoryNames)
            return ""
        return category.categoryNames.map((categoryName, index) => {
            return (<ListGroup.Item>
                <Link href={`/browse/${category.categorys[index]}`}>
                    {categoryName}
                </Link>
            </ListGroup.Item>)
        })
    }

    function RenderCategories() {
        return categories.map(categorie => {
            return (
                <ListGroup.Item className="category-main-name">
                    {categorie.name}
                    <div className="hover-drawer">
                        {RenderCategoriy(categorie)}    
                    </div>    
                </ListGroup.Item>
            )
        })
    }

    return (
        <div className="category-select-hover">
            <ListGroup>
                {RenderCategories()}
            </ListGroup>
        </div>
    );
}

export default CategorySelectHover;