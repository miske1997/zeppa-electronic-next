"use server"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ArticleCard from '../ArticleCard/ArticleCard';
import './ArticleGrid.css'
import { GetAllArticlesForCategory } from '@/services/articleService';

async function ArticleGrid({articlesInCart = [],categoryId, articleList }) {

    function IsArticleInCart(article){
        // for (const articleInCart of articlesInCart) {
        //     if (articleInCart.id === article.id){
        //         return true
        //     }
        // }
        return false
    }

    function RenderRow(articleSubList) {
        return articleSubList.map(article => {
            return (
                <Col key={article.id}  xs={{span: 8}} sm={{span: 8}} lg={{span: 4}}  xl={{span: 3}}>
                    <ArticleCard categoryId={categoryId} articleInCart={IsArticleInCart(article)} article={article} imageSrc={article.imageSrc} ></ArticleCard>
                </Col>
            )
        })
    }

    function RenderArticles(){
        
        const itemsInRow = 4
        const listClone = [...articleList] 
        const rows = []
        while(listClone.length > 0){
            if(listClone.length < itemsInRow){
                rows.push((<Row  className="top-buffer justify-content-center" > {RenderRow(listClone.splice(0, listClone.length))} </Row>))
            }
            else{
                rows.push((<Row   className="top-buffer justify-content-center" > {RenderRow(listClone.splice(0, itemsInRow))} </Row>))
            }
        }
        return rows
    }

    return (
        <Container fluid>
            {RenderArticles()}
        </Container>
    );
}

export default ArticleGrid;