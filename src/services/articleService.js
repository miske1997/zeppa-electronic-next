import db from "@/configs/firebase";
import {  addDoc, collection, deleteDoc, doc, getDoc, getDocs, increment, limit, orderBy, query, setDoc, updateDoc } from "firebase/firestore";


    
export async function GetAllArticlesForCategory(categoryId){
    const querySnapshot  = await getDocs(collection(db, "category", categoryId, "articles"));
    let data = []
    querySnapshot.forEach(doc => data.push({...doc.data(), id: doc.id}))
    return data
}

export async function GetArticleById(categoryId, articleId){
    const querySnapshot = await getDoc(doc(db, "category", categoryId, "articles", articleId))
    return {...querySnapshot.data(), id: querySnapshot.id}
}

export async function CreateArticle(categoryId, article){
    const collectionRef = collection(db, "category", categoryId, "articles")
    return await addDoc(collectionRef, article)
}

export async function DeleteArticle(categoryId, articleId){
    const articleRef = doc(db, "category", categoryId, "articles", articleId)
    return await deleteDoc(articleRef)
}

export async function UpdateArticle(article,categoryId, articleId){
    const articleRef = doc(db, "category", categoryId, "articles", articleId)
    return await setDoc(articleRef, article)
}

export async function OrderArticles(articles, orderDetails){
    const orderCollection = collection(db, "orders")
    return await addDoc(orderCollection, {...orderDetails, articles: articles})
}

export async function IncrementArticleSalesOfCart(articlesInCart){
    for (const article of articlesInCart) {
        const ref = doc(db, "category", article.categoryId, "articles", article.id);
    
        await updateDoc(ref, {
            buys: increment(1)
        });
    }
}

export async function AddArticleAssosiations(articlesInCart){
    for (const article of articlesInCart) {
        articlesInCart.forEach(cartArticle => {
            if (article.id != cartArticle.id){
                AddArticleAssosiation(article, cartArticle)
            }
        });
    }
}


export async function AddArticleAssosiation(article, assosiatedArticle){
    const articleRef = doc(db ,"articleAssociations", article.id)
    await setDoc(articleRef, {name: article.name})
    const assosiationRef = doc(db, "articleAssociations", article.id, "assosiations", assosiatedArticle.id)
    updateDoc(assosiationRef, {
        buys: increment(1)
    }).catch(err => {
        if (err.code === "not-found"){
            setDoc(assosiationRef, {buys: 1, categoryId: assosiatedArticle.categoryId})
        }
    })
}

export async function GetPopularArticlesInCategory(categoryId, count){
    const articlesRef = collection(db, "category", categoryId, "articles")
    const queryResult = query(articlesRef, orderBy("buys", "desc"), limit(count))
    const querySnapshot = await getDocs(queryResult)
    let data = []
    querySnapshot.forEach(doc => data.push({...doc.data(), id: doc.id}))
    return data
}

export async function GetArticleassosiations(categoryId ,articleId){
    const assosiationRef = collection(db, "articleAssociations", articleId, "assosiations")

    const queryResult = query(assosiationRef, orderBy("buys", "desc"), limit(10))
    const querySnapshot = await getDocs(queryResult)
    let data = []
    for (const snapShot of querySnapshot.docs) {
        const article = await GetArticleById(snapShot.data().categoryId, snapShot.id)
        if (typeof article !== "object"){
            continue
        }
        data.push({... article, categoryId: snapShot.data().categoryId})
    }
    if (data.length < 10){
        data = data.concat(await GetPopularArticlesInCategory(categoryId, 10 - data.length))
    }
    //TODO REMOVE DUPLICATES
    return data
}