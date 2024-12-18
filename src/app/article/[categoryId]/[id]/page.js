import './ArticlePage.css'
import PopularCard from "@/components/PopularCard/PopularCard";
import Carousel from "@/components/Carousel/Carousel";
import { GetAllArticlesForCategory, GetArticleById, GetArticleassosiations } from "@/services/articleService";
import ArticleTabs from '@/components/ArticleTabs/ArticleTabs';
import ArticleModifier from '@/components/ArticleModifier/ArticleModifier';
import AddToCartButton from '@/components/AddToCartButton/AddToCartButton';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import { GetAllCategorys, GetCategory } from '@/services/categoryService';

export const revalidate = 3600

export async function generateStaticParams() {
    try {
        const categorys = await GetAllCategorys()
        if (!categorys || categorys.length === 0){
            throw new Error(`No categotys found`)
        }
        let params = []
        for (const category of categorys) {
            const articles = await GetAllArticlesForCategory(category.id)
            const partialParams = articles.map(article => {
                return {
                    id: article.id,
                    categoryId: category.id
                }
            })
            params = [...params, ...partialParams]
        }
        
        return params

    } catch (error) {
        console.error("Error fetching categorys: ", error)
        return []
    }
}

export async function generateMetadata({params}) {
    try {
        const article = await GetArticleById(params.categoryId, params.id)
        if (!article){
            return {
                title: "Nije Pronadjen Artikl",
                description: "Artikl ne postoji"
            }
        }

        return{
            openGraph: {
                title: article.name ?? "",
                images: article.imageUrl ?? "",
            }
        }
    } catch (error) {
        console.error(error)
        return {
            title: "Nije Pronadjen Artikl",
            description: "Artikl ne postoji"
        }
    }
}

async function ArticlePage({ params }) {
    let categoryId = params.categoryId
    const article = await GetArticleById(categoryId, params.id)//useSelector(selectArticle)
    const relatedArticles = await GetArticleassosiations(categoryId, params.id)
    const category = await GetCategory(categoryId)
    
    function ChangeAmount(change) {
        // setAmmount(amount => {
        //     amount += change
        //     return Math.max(1, amount)
        // })
    }
    function getModifiers() {
        let modifierArray = []
        for (const key in article) {
            if (Object.hasOwnProperty.call(article, key) && Array.isArray(article[key])) {
                modifierArray.push({ name: key, values: article[key] })
            }
        }
        return modifierArray
    }
    function renderArticleModifiers() {
        return getModifiers().map(modifier => {
            return(<ArticleModifier articleId={article.id} modifier={modifier}></ArticleModifier>)
        })
    }
    function RenderRelatedArticles(){

        return relatedArticles.map(relatedArticle => {
            return (<PopularCard categoryId={categoryId} article={relatedArticle}></PopularCard>)
        })
    }
    function renderAddToCartButton() {
        // if (!cart || !article)
        //     return;
        // if (cart.filter(articleInCart => articleInCart.id === article.id).length > 0)
        //     return (<Button onClick={removeFromCart} className="m-1">U korpi <FontAwesomeIcon icon={faTrashCan} /></Button>)
        // else
        //     return (<Button onClick={addToCart} className="m-1">Dodaj u korpu <FontAwesomeIcon icon={faShoppingCart} /></Button>)
    }
    return (
        <main className="article-page-main">
            <div className="container">
                <div className="row">
                    <div className='order-xl-3 order-lg-3 order-md-3 col'>
                        {/* <Breadcrumb className="bread-crumbs">
                            <Breadcrumb.Item>Pocetna</Breadcrumb.Item>
                            <Breadcrumb.Item>Merni Instrumenti</Breadcrumb.Item>
                            <Breadcrumb.Item>Digitalni multimeri</Breadcrumb.Item>
                            <Breadcrumb.Item>UNI-T UT622E LCR</Breadcrumb.Item>
                        </Breadcrumb> */}
                        <BreadCrumbs crumbs={[{text: "Pocetna", link: "/home"}, {text: category.name, link: `/browse/${categoryId}`}, {text: article.name, link: `/article/${categoryId}/${article.id}`}]}></BreadCrumbs>
                    </div>
                </div>
                <div className="row article-top justify-content-center">
                    <div className="col article-image-con col-md-6 col-sm-10 col-10">
                        <img src={article.imageUrl === "" ? "/chip.jpg" : article.imageUrl} alt="/chip.jpg" rounded="true"></img>
                    </div>
                    <div className="col article-description col-md-4 col-10 article-description">
                        <h2 className="fs-1">
                            {article.name}
                        </h2>
                        <div style={{ flexGrow: "1" }}></div>
                        {/* <div className="m-3">
                            <span>Kolicina</span>
                            <AmountSelect amount={amount} changeAmountBy={ChangeAmount}></AmountSelect>
                        </div> */}

                        <div className="modifiers">
                            {renderArticleModifiers()}

                        </div>
                        <div className="m-1" style={{ paddingBottom: "1rem", display: "flex", gap: "1rem", alignItems: "center" }}>
                            <h3 className="m-0">{`${article.cost} RSD`}</h3>
                            <input className='kolicina-input' style={{ margin: 0, width: "5rem", textAlign: 'center' }} defaultValue={1} min={1} type="number"></input>
                        </div>
                        <div>
                            <AddToCartButton categoryId={categoryId} articleData={article}></AddToCartButton>
                            {renderAddToCartButton()}
                        </div>
                    </div>
                </div>

                <div className="row article-tabs justify-content-center">
                    <div className="col col-md-10 col-10">
                        <ArticleTabs specification={article.specification} description={article.description}></ArticleTabs>
                    </div>
                </div>
                <div className="row mt-5 justify-content-center">
                    <div className="col text-center text-2xl">
                        <h2>Preporučeni Artikli</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col">
                        <Carousel>
                            {RenderRelatedArticles()}
                        </Carousel>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default ArticlePage;