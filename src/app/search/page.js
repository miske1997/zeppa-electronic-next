"use client"
import { liteClient as algoliasearch } from "algoliasearch/lite";
import { Hit } from "@/components/SearchHit/SearchHit";
import "instantsearch.css/themes/satellite.css";
import { Hits, InstantSearch, SearchBox, Configure } from "react-instantsearch";

const searchClient = algoliasearch("R2FYS2BTLJ", "2651446e64fb8ab1b4fb70d73f76fe38");


export default function Search(){
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="ARTICLE_INDEX"
    >
      <Configure hitsPerPage={5} />
      <div className="ais-InstantSearch">
        <SearchBox />
        <Hits hitComponent={Hit} />
      </div>
    </InstantSearch>
  );
};

