"use client"

import { Form } from "react-bootstrap";

function ArticleModifier({modifier}) {

    return (
        <div>
            <p>
                {`${modifier.name} : `}
            </p>
            <Form.Select className="article-modifier-select" onChange={(event) => { setModifiers(modifiers => { return { ...modifiers, [modifier.name]: event.target.value } }) }} style={{ width: "min-content" }} aria-label="Default select example">
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