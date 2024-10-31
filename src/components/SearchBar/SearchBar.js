"use client"
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

    function onBlur(){
         
        setTimeout(() => {
            if (searchRef?.current.querySelector("input") === document.activeElement)
                return
            setFocus(false)
        }, 200)
    }

    return (
        <InstantSearch
            searchClient={searchClient}
            indexName="ARTICLE_INDEX"
        >
            <Configure hitsPerPage={8} />
            <div ref={searchRef} onBlur={(ev) => onBlur()} onFocus={() => setFocus(true)}  className="ais-InstantSearch">
                <SearchBox className="search-bar" />
                <Hits style={{ position: "absolute", display: `${!focused ? "none" : "unset"}` }} hitComponent={Hit} />
            </div>
        </InstantSearch>
    );
};

