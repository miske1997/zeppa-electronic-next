import { Accordion, ListGroup } from "react-bootstrap";

import "./CategorySelect.css"
import Link from "next/link";

function CategorySelect({ activeCategory = '', categories = [] }) {
    
    function GetActiveCategoryIndex() {
        let index = 0;
        for (const categorie in categories) {
            if (categorie?.categoryNames?.includes(activeCategory))
                return index;
            index++;
        }
        return 0
    }
    function IsCategoryActive(category) {
        return activeCategory === category
    }

    function RenderCategoriy(category) {
        if (!category.categoryNames)
            return ""
        return category.categoryNames.map((categoryName, index) => {
            return (
            <ListGroup.Item active={IsCategoryActive(categoryName)}>
                <Link style={{color: "inherit"}} href={`/browse/${category.categorys[index]}`}>
                    {categoryName}
                </Link>
            </ListGroup.Item>)
        })
    }

    function RenderAllCategories() {
        return categories.map((category, index) => {
            return (
                <Accordion.Item eventKey={index}>
                    <Accordion.Header>{category.name}</Accordion.Header>
                    <Accordion.Body>
                        <ListGroup variant="flush">
                            {RenderCategoriy(category)}
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            )
        })
    }

    return (
        <Accordion className="category-select" defaultActiveKey={GetActiveCategoryIndex()}>
            {RenderAllCategories()}
        </Accordion>
    );
}

export default CategorySelect;