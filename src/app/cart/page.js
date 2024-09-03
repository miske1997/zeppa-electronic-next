"use server"
import { Container, ListGroup, Row, Col, Table } from "react-bootstrap";
import "./CartPage.css"
import ArticleItemRow from "../../components/Helpers/ArticleItemRow/ArticleItemRow";
import BuyForm from "@/components/BuyForm/BuyForm";
import { IncrementArticleSalesOfCart, OrderArticles } from "@/services/articleService";
import { IncrementCategorySalesForCart } from "@/services/categoryService";
import { Timestamp } from "@firebase/firestore";
import CartArticleList from "@/components/CartArticleList/CartArticleList";

function CartPage() {

    const PlaceOrder = async (articlesInCart, orderData) => {
        "use server"
        OrderArticles(articlesInCart, { ...orderData, orderTime: Timestamp.fromDate(new Date()) })
        IncrementCategorySalesForCart(articlesInCart)
        IncrementArticleSalesOfCart(articlesInCart)
    
    }
    
    function RenderArticles() {
        // return articlesInCart.map(article => {
        //     return (
        //         <ListGroup.Item>
        //             <CartItem onClickX={onCartItemRemoveClick} item={article}></CartItem>
        //         </ListGroup.Item>
        //     )

        // })
    }



    return (
        <Container className="cart-page " >

            <Row className='justify-content-center  gap-5 gap-lg-2' >
                <Col xs={{ span: 12, order: 2 }} lg={{ span: 5, order: 1 }}>
                    <BuyForm PlaceOrder={PlaceOrder}></BuyForm>
                </Col>
                <Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }}>
                    <CartArticleList></CartArticleList>
                </Col>
                {/*TODO try get data from local storage */}

            </Row>
        </Container>
    );
}

export default CartPage;