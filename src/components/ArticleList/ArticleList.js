"use client"
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import "./ArticleList.css"
function ArticleList({categoryId, articleList = []}) {

    function RenderListItems(){
        return articleList.map(article => {
            return (
                <ArticleListItem categoryId={categoryId} article={article}></ArticleListItem>
            )
        })
    }

    return ( 
        <div className="article-list">
            {RenderListItems()}
        </div>
     );
}

export default ArticleList;