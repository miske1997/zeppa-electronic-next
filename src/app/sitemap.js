import { GetAllArticlesForCategory } from "@/services/articleService"
import { GetAllCategorys } from "@/services/categoryService"


export default async function sitemap(){

    const baseUrl = "https://zeppaelektronika.com"
    const categorys = await GetAllCategorys()
    const categoryMap = categorys?.map(category => {
        return {
            url: `${baseUrl}/browse/${category.id}`,
            changeFrequency: 'weekly',
            priority: 1,
            lastModified: new Date()
        }
    })
    let articleMap = []
    for (const category of categorys) {
        const articles = await GetAllArticlesForCategory(category.id)
        const articlesSubMap = articles?.map(article => {
            return {
                url: `${baseUrl}/article/${category.id}/${article.id}`,
                changeFrequency: 'weekly',
                priority: 1,
                lastModified: new Date()
            }
        })
        articleMap = [...articleMap, ...articlesSubMap]
    }
    return [
        {
          url: baseUrl,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 1,
        },
        ...categoryMap,
        ...articleMap
    ]
}