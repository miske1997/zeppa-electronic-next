import db from "@/configs/firebase";
import { GetAllArticlesForCategory } from "./articleService";
import { doc, writeBatch } from "@firebase/firestore";


function getModifiers(article) {
    let modifierArray = []
    for (const key in article) {
        if (Object.hasOwnProperty.call(article, key) && Array.isArray(article[key])) {
            modifierArray.push({ name: key, values: article[key] })
        }
    }
    return modifierArray
}

function spreadArticles(articles){
    let spread = []
    for (const article of articles) {
        const modifiers = getModifiers(article)
        if (modifiers.length === 0){
            spread.push(article)
            continue
        }
        const modifier = modifiers[0]

        for (const value of modifier.values) {
            spread.push({...article, [modifier.name] : value})
        }
    }
    return spread
}

const nonUniqueKeys = ["name", "imageUrl", "cost", "specification", "description", "buys", "id"]
function getUniqueAtributes(article){
    let atributes = {}
    for (const key in article) {
        if (nonUniqueKeys.includes(key)){
            continue
        }
        atributes[key] = article[key]
    }
    return atributes
}

export async function MakeArticleRecords(categories) {

    let allArticles = []
    for (const category of categories) {
        
        if (!category.categorys){
            continue
        }
        for (const categoryId of category.categorys) {
            let articles = await GetAllArticlesForCategory(categoryId)
            articles = articles.map(a => {
                return {...a, categoryId: categoryId}
            })
            allArticles = [...allArticles, ...articles]
        }
    }

    const records = allArticles.map(article => {
        return {
            name: article.name,
            imageUrl: article.imageUrl,
            cost: article.cost,
            categoryId: article.categoryId,
            id: article.id,
            ...getUniqueAtributes(article)
        }
    })

    console.log(records[0]);

    const batch = writeBatch(db);

    for (const record of records) {
        const recordRef = doc(db, "articleRecords", record.id)
        batch.set(recordRef, record)
    }

    batch.commit()
    
}