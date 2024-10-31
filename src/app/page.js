import Carousel from "@/components/Carousel/Carousel";
import ExpandingGalery from "@/components/ExpandingGalery/ExpandingGalery";
import ScrollingImage from "@/components/ParalaxImage/ScrollingImage";
import PopularCard from "@/components/PopularCard/PopularCard";
import CategorySelectHover from "@/components/CategorySelectHover/CategorySelectHover";

import { GetMainCategorys } from "@/services/categoryService"

import "./HomePage.css"
import MobileHomeCarousel from "@/components/MobileHomeCarousel/MobileHomeCarousel";

export default async function HomePage() {
    const categories = await GetMainCategorys();
    const popularCategoryes = []

    //MakeArticleRecords(categories)

    return (
        <main style={{ position: "relative" }}>
            <MobileHomeCarousel></MobileHomeCarousel>
            <ScrollingImage firstParagraphFirstRow='' secondParagraph='' picPositionPixels={-20} backgroundImageSource='https://www.nextpcb.com/uploads/images/202303/20/1679303211-0734-cavktR.jpg'>
                <div className='category-container'>
                    <CategorySelectHover categories={categories}></CategorySelectHover>
                    <div className="flex flex-col">
                        <h1 className='hero-title' >ZEPPA ELEKTRONIKA</h1>
                        {/* <p className='hero-text'>Sed vel vestibulum dui, in pulvinar elit. Aenean vulputate ante orci, quis maximus diam vehicula malesuada. Ut a turpis efficitur, malesuada nibh a, elementum dolor.</p> */}
                    </div>
                </div>
            </ScrollingImage>

            <div className="text-center text-2xl">
                <h1 style={{ marginBlock: "3rem", marginInline: "auto" }}>Popularne Kategorije</h1>
                <ExpandingGalery></ExpandingGalery>
            </div>

            {/* SMISLI POPULARNE Artikle */}
            
            {/* <div className="text-2xl" style={{ display: "flex", alignItems: "center", flexDirection: "column", width: "100%", justifyContent: "center" }}>
                <h1 style={{ marginBlock: "3rem" }}>Popular Articles</h1>
                <div style={{ width: "90%" }}>
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
            </div> */}

            {/* <div className="text-center text-2xl">
                <h1 style={{ marginBlock: "3rem" }}>Brendovi</h1>
            </div> */}
        </main>
    );
}