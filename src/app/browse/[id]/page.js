import CustomToggle from "@/components/CustomToggle/CustomeToggle";
import "./BrowsePage.css"
import { Breadcrumb, Stack } from 'react-bootstrap';
import GridStyleSelect from "@/components/Helpers/GridStyleSelect/GridStyleSelect";
import FilterSideBar from "@/components/FilterSideBar/FilterSideBar";
import FilterChips from "@/components/FilterChips/FilterChips";
import ArticleGrid from "@/components/ArticleGrid/ArticleGrid";
import ArticleList from "@/components/ArticleList/ArticleList";
import TablePagination from "@/components/TablePagination/TablePagination";
import { GetCategory, GetFiltersForCategory } from "@/services/categoryService";
import { GetAllArticlesForCategory } from "@/services/articleService";



const filterMap = [
    // filterByNameAsc,
    // filterByNameDesc,
    // filterByPopularity,
    // filterByPriceAsc,
    // filterByPriceDesc,
]

const BrowsePage = async ({params, searchParams}) => {
    
    const showFilters = true
    const gridDisplayType = "grid"
    // const categories = useSelector(selectCategories) OVI GLAVNI ZBOG BREAD CRUMBS
    const filters = await GetFiltersForCategory(params.id)
    let articlesList = await GetAllArticlesForCategory(params.id)
    const articlesInCart = [] // useSelector(selectArticlesInCart)
    const category = await GetCategory(params.id)

    const urlParams = new URLSearchParams(searchParams)

    const currentPage = urlParams.get("page") !== null ? parseInt(urlParams.get("page")) : 1
    const pageSize = 16

    const filterParams = new URLSearchParams(searchParams);
    const filterToApplay = []
    for (const param of filterParams.entries()) {
        filterToApplay.push({name : param[0], options: param[1].split("_") })
    }
    filterToApplay.forEach(filter => {
        articlesList = articlesList.filter(article => {
            if (filter.name === "page")
                return true
            if (!Object.hasOwn(article, filter.name))
                return false
            return filter.options.includes(article[filter.name])
        })
    });


    function RenderFilters(){
        // return filters.map(filter => {
        //     return (<FilterSelect filterName={filter.name}  options={filter.options} paramName={filter.propName}></FilterSelect>)
        // })
    }
    function GetMainCategory(){
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
            <div className='name-container'>
                <div className='category-name'>
                    {category.name}
                </div>
                <div style={{flexGrow: '1'}}></div>
                {/* <Stack style={{alignItems: "center"}} gap={1}  direction='horizontal'>
                    <p style={{margin: "0"}}>Sortiranje prema:</p>
                    <CustomToggle></CustomToggle>
                </Stack> */}
                <GridStyleSelect displayType={gridDisplayType} ></GridStyleSelect>
            </div>
            <div className='articles-grid-controlls'>
                {/* <div className='controlles'>
                    <Button onClick={() => setShowFilters(show => !show)}>Filters</Button>
                    <div style={{flexGrow: '1'}}></div>
                    <CustomToggle onValueChanged={OnFilterSelect}></CustomToggle>
                </div> */}
                {showFilters === true ? (<div className='filters-con'>
                    {RenderFilters()}
                </div>) : ""}
            </div>
            <div className='grid-container'>
                <FilterSideBar filters={filters}></FilterSideBar>
                <div style={{width: "100%"}}>
                    <FilterChips></FilterChips>
                    {gridDisplayType === "grid" ?
                    <ArticleGrid categoryId={params.id} articlesInCart={articlesInCart} articleList={articlesList.slice((currentPage - 1) * pageSize, Math.min(articlesList.length, (currentPage - 1) * pageSize + pageSize))}></ArticleGrid>
                    :
                    <ArticleList articlesInCart={articlesInCart} onArticleClick={OnArticleClick} articleList={articlesList.slice((currentPage - 1) * pageSize, Math.min(articlesList.length, (currentPage - 1) * pageSize + pageSize))}></ArticleList>
                    }
                </div>
            </div>
            <TablePagination currentPage={currentPage} numOfPages={Math.ceil(articlesList.length / pageSize)}></TablePagination>
        </main>
    );
}

export default BrowsePage;