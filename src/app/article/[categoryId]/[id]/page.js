import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import './ArticlePage.css'
import PopularCard from "@/components/PopularCard/PopularCard";
import Carousel from "@/components/Carousel/Carousel";
import { GetArticleById } from "@/services/articleService";
import Image from 'next/image';
import ArticleTabs from '@/components/ArticleTabs/ArticleTabs';


async function ArticlePage({ params }) {
    // const [amount, setAmmount] = useState(1)
    // const [modifiers, setModifiers] = useState({})
    let categoryId = params.categoryId //useParams();
    const article = await GetArticleById(categoryId, params.id)//useSelector(selectArticle)
    console.log(article);
    const cart = [] //useSelector(selectArticlesInCart)




    // useEffect(() => {
    //     dispatch(fetchArticleById(categoryId, params))
    // }, [id, dispatch]);
    // useEffect(() => {
    //     getModifiers().forEach(modifier => {
    //         setModifiers(modifiers => { return { ...modifiers, [modifier.name]: modifier.values[0] } })
    //     });
    //     console.log(modifiers);
    // }, [article]);

    function ChangeAmount(change) {
        // setAmmount(amount => {
        //     amount += change
        //     return Math.max(1, amount)
        // })
    }

    function addToCart() {
        // dispatch(addArticleToCart({ ...article, imageSrc: "/chip.jpg", amount: amount, modifiers: modifiers }))
    }
    function removeFromCart() {
        // dispatch(removeArticleFromCart(article.id ?? 0))
    }
    function getModifiers() {
        // let modifierArray = []
        // for (const key in article) {
        //     if (Object.hasOwnProperty.call(article, key) && Array.isArray(article[key])) {
        //         modifierArray.push({ name: key, values: article[key] })
        //     }
        // }
        // return modifierArray
    }
    function renderArticleModifiers() {
        // return getModifiers().map(modifier => {

        //     return (
        //         <div>
        //             <p>
        //                 {`${modifier.name} : `}
        //             </p>
        //             <Form.Select onChange={(event) => { setModifiers(modifiers => { return { ...modifiers, [modifier.name]: event.target.value } }) }} style={{ width: "min-content" }} aria-label="Default select example">
        //                 {modifier.values.map(value => {
        //                     return (
        //                         <option>{value}</option>
        //                     )
        //                 })}

        //             </Form.Select>
        //         </div>
        //     )
        // })
    }

    function renderSpecifications() {
        // let specs = article.specification.split("\n")
        // specs = specs.map(spec => spec.split(":"))
        // console.log(specs);
        // return specs.map(spec => {
        //     return (
        //         <tr>
        //             <td>{spec[0]}</td>
        //             <td>{spec[1]}</td>
        //         </tr>
        //     )
        // })
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
                    </div>
                </div>
                <div className="row article-top justify-content-center">
                    <div className="col article-image-con col-md-6 col-sm-10 col-10">
                        <img src={article.imageUrl ?? "/chip.jpg"} alt="/chip.jpg" rounded></img>
                    </div>
                    <div className="col article-description col-md-4 col-10 article-description">
                        <h2 className="fs-1">
                            {article.name}
                        </h2>
                        <p>TR2N109</p>
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
                            <input style={{ margin: 0, width: "5rem", textAlign: 'center' }} defaultValue={1} min={1} type="number"></input>
                        </div>
                        <div>
                            <button type='button' className="m-1 btn btn-primary">Naruci</button>
                            {renderAddToCartButton()}
                        </div>
                    </div>
                </div>

                <div className="row article-tabs justify-content-center">
                    <div class="col col-md-10 col-10">
                        <ArticleTabs specification={article.specification} description={article.description}></ArticleTabs>
                    </div>
                </div>
                <div className="row mt-5 justify-content-center">
                    <div className="col">
                        <h2>Preporuceni Artikli</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col">
                        <Carousel>
                            <PopularCard article={{ name: 'Intel', description: "asdjkln jkdnbsa jkdbnjk", cost: "500" }}></PopularCard>
                            <PopularCard article={{ name: 'Intel', description: "asdjkln jkdnbsa jkdbnjk", cost: "500" }}></PopularCard>
                            <PopularCard article={{ name: 'Intel', description: "asdjkln jkdnbsa jkdbnjk", cost: "500" }}></PopularCard>
                            <PopularCard article={{ name: 'Intel', description: "asdjkln jkdnbsa jkdbnjk", cost: "500" }}></PopularCard>
                            <PopularCard article={{ name: 'Intel', description: "asdjkln jkdnbsa jkdbnjk", cost: "500" }}></PopularCard>
                            <PopularCard article={{ name: 'Intel', description: "asdjkln jkdnbsa jkdbnjk", cost: "500" }}></PopularCard>
                            <PopularCard article={{ name: 'Intel', description: "asdjkln jkdnbsa jkdbnjk", cost: "500" }}></PopularCard>
                            <PopularCard article={{ name: 'Intel', description: "asdjkln jkdnbsa jkdbnjk", cost: "500" }}></PopularCard>
                            <PopularCard article={{ name: 'Intel', description: "asdjkln jkdnbsa jkdbnjk", cost: "500" }}></PopularCard>
                            <PopularCard article={{ name: 'Intel', description: "asdjkln jkdnbsa jkdbnjk", cost: "500" }}></PopularCard>
                            <PopularCard article={{ name: 'Intel', description: "asdjkln jkdnbsa jkdbnjk", cost: "500" }}></PopularCard>
                        </Carousel>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default ArticlePage;