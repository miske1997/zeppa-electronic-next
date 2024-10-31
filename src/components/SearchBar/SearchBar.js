"use client"
import { liteClient as algoliasearch } from "algoliasearch/lite";
import { Hit } from "@/components/SearchHit/SearchHit";
import "instantsearch.css/themes/satellite.css";
import { Hits, InstantSearch, SearchBox, Configure } from "react-instantsearch";
import searchClient from "@/configs/algolia";
import "./SearchBar.css"
import { useEffect, useRef, useState } from "react";
// const searchClient = algoliasearch("R2FYS2BTLJ", "2651446e64fb8ab1b4fb70d73f76fe38");


export default function SearchBar() {

    const [focused, setFocus] = useState(false)
    const searchRef = useRef()


    return (
        <InstantSearch
            searchClient={searchClient}
            indexName="ARTICLE_INDEX"
        >
            <Configure hitsPerPage={8} />
            <div className="ais-InstantSearch">
                <SearchBox onBlur={(ev) => setTimeout(() => {setFocus(false)}, 200)} onFocus={() => setFocus(true)} className="search-bar" />
                <Hits style={{ position: "absolute", display: `${!focused ? "none" : "unset"}` }} hitComponent={Hit} />
            </div>
        </InstantSearch>
    );
};

