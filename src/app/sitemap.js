import { GetAllArticlesForCategory } from "@/services/articleService"
import { GetAllCategorys } from "@/services/categoryService"

export default async function sitemap() {

    const baseUrl = "https://zeppaelektronika.com"
    const categoryes = await GetAllCategorys()
    
    const categorySiteMap = categoryes?.map( category => {
        return {
            url: `${baseUrl}/browse/${category.id}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
        }
    })
    let articleSiteMaps = []
    for (const category of categoryes) {
        const articles = GetAllArticlesForCategory(category.id)
        const articlesSiteMap = articles?.map( article => {
            return {
                url: `${baseUrl}/article/${category.id}/${article.id}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
            }
        })
        articleSiteMaps = [...articlesSiteMap, ...articleSiteMaps]
    }
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
      {
        url: 'https://acme.com/about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://acme.com/blog',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      ...categorySiteMap,
      ...articleSiteMaps,
    ]
  }