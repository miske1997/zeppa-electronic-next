import { ListGroup } from "react-bootstrap";


function CategorySelectSide({categories = []}) {

    function RenderItems(){
        return categories.map(category => {
            return (
                <ListGroup.Item>
                    {category}
                </ListGroup.Item>
            )
        })
    }

    return ( 
        <div>
            <ListGroup>

            </ListGroup>
        </div>
     );
}

export default CategorySelectSide;