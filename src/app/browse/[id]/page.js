import CustomToggle from "@/components/CustomToggle/CustomeToggle";
import "./BrowsePage.css"
import GridStyleSelect from "@/components/Helpers/GridStyleSelect/GridStyleSelect";
import FilterSideBar from "@/components/FilterSideBar/FilterSideBar";
import FilterChips from "@/components/FilterChips/FilterChips";
import ArticleGrid from "@/components/ArticleGrid/ArticleGrid";
import ArticleList from "@/components/ArticleList/ArticleList";
import TablePagination from "@/components/TablePagination/TablePagination";
import { GetAllCategorys, GetCategory, GetFiltersForCategory } from "@/services/categoryService";
import { GetAllArticlesForCategory } from "@/services/articleService";
import MobileFIlterButton from "@/components/MobileFIlterButton/MobileFIlterButton";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";

export const revalidate = 3600

export async function generateStaticParams() {
    try {
        const categorys = await GetAllCategorys()
        if (!categorys || categorys.length === 0){
            throw new Error(`No categotys found`)
        }

        return categorys.map(category => {
            return {
                id: category.id
            }
        })

    } catch (error) {
        console.error("Error fetching categorys: ", error)
        return []
    }
}

export async function generateMetadata(params) {
    try {
        const category = await GetCategory(params.id)
        if (!category){
            return {
                title: "Nije Pronadjena",
                description: "Stranica ne postoji"
            }
        }

        return{
            openGraph: {
                title: category.name ?? ""
            }
        }
    } catch (error) {
        console.error(error)
        return {
            title: "Nije Pronadjena",
            description: "Stranica ne postoji"
        }
    }
}

const filterMap = {
    NameAsc: (a, b) => a.name > b.name ? 1 : -1,
    NameDesc: (a, b) => a.name < b.name ? 1 : -1,
    Popularity: (a, b) => parseInt(a.buys)  < parseInt(b.buys) ? 1 : -1,
    PriceAsc: (a, b) => parseFloat(a.cost) > parseFloat(b.cost) ? 1 : -1,
    PriceDesc: (a, b) => parseFloat(a.cost) < parseFloat(b.cost) ? 1 : -1,
}

const BrowsePage = async ({ params, searchParams }) => {

    const showFilters = true
    // const categories = useSelector(selectCategories) OVI GLAVNI ZBOG BREAD CRUMBS
    const filters = await GetFiltersForCategory(params.id)
    let articlesList = await GetAllArticlesForCategory(params.id)
    const category = await GetCategory(params.id)
    
    const urlParams = new URLSearchParams(searchParams)
    const gridDisplayType = urlParams.get("display") ?? "grid"
    const sortType = urlParams.get("sort") !== null ? urlParams.get("sort") : "Popularity"
    const currentPage = urlParams.get("page") !== null ? parseInt(urlParams.get("page")) : 1
    const pageSize = 16

    const filterParams = new URLSearchParams(searchParams);
    const filterToApplay = []

    for (const param of filterParams.entries()) {
        filterToApplay.push({ name: param[0], options: param[1].split("_") })
    }

    filterToApplay.forEach(filter => {
        articlesList = articlesList.filter(article => {
            if (filter.name === "page" || filter.name === "sort" || filter.name === "display")
                return true
            if (!Object.hasOwn(article, filter.name))
                return false
            return filter.options.includes(article[filter.name])
        })
    });
    
    articlesList = articlesList.sort(filterMap[sortType])

    function RenderFilters() {
        // return filters.map(filter => {
        //     return (<FilterSelect filterName={filter.name}  options={filter.options} paramName={filter.propName}></FilterSelect>)
        // })
    }
    function GetMainCategory() {
        // for (const categoryData of categories) {
        //     if (categoryData.categoryNames?.includes(category.name)){
        //         return categoryData.name
        //     }
        // }
        // return ""
    }

    return (
        <main className='browse-page-main'>
            {/* <Breadcrumb className='bread-crumbs'>
                <Breadcrumb.Item>Pocetna</Breadcrumb.Item>
                <Breadcrumb.Item>{GetMainCategory()}</Breadcrumb.Item>
                <Breadcrumb.Item>{category.name}</Breadcrumb.Item>
            </Breadcrumb> */}
            <BreadCrumbs crumbs={[{text: "Pocetna", link: "/home"}, {text: category.name, link: `/browse/${params.id}`}]}></BreadCrumbs>
            <div className='name-container'>
                <p className='category-name'>
                    {category.name}
                </p>
                <div style={{ flexGrow: '1' }}></div>
                <GridStyleSelect></GridStyleSelect>
                <CustomToggle></CustomToggle>
            </div>
            <div className="mobile-buttons">
                <MobileFIlterButton filters={filters}></MobileFIlterButton>
                <CustomToggle></CustomToggle>
            </div>
            <div className='grid-container'>
                <FilterSideBar filters={filters}></FilterSideBar>
                <div style={{ width: "100%" }}>
                    <FilterChips></FilterChips>
                    {gridDisplayType === "grid" ?
                        <ArticleGrid categoryId={params.id} articleList={articlesList.slice((currentPage - 1) * pageSize, Math.min(articlesList.length, (currentPage - 1) * pageSize + pageSize))}></ArticleGrid>
                        :
                        <ArticleList categoryId={params.id} articleList={articlesList.slice((currentPage - 1) * pageSize, Math.min(articlesList.length, (currentPage - 1) * pageSize + pageSize))}></ArticleList>
                    }
                </div>
            </div>
            <TablePagination currentPage={currentPage} numOfPages={Math.ceil(articlesList.length / pageSize)}></TablePagination>
        </main>
    );
}

export default BrowsePage;
