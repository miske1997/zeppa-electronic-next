"use client"
import { faX } from "@fortawesome/free-solid-svg-icons";
import "./FilterChips.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function FilterChips() {
    const [checkedFilters, setCheckedFilters] = useState([])
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        const parsedFilters = []
        for (const param of params.entries()) {
            if (param[0] !== "display" && param[0] !== "sort" && param[0] !== "page")
                parsedFilters.push({name : param[0], options: param[1].split("_") })
        }
        setCheckedFilters(parsedFilters)
    }, [searchParams]);

    function RemoveChip(paramName, option){
        const params = new URLSearchParams(searchParams);
        let filter = params.get(paramName) ?? "";
        const options = filter.split("_")
        if (options.length === 1){
            params.delete(paramName)
        }
        else{
            options.splice(options.findIndex(o => o === option), 1)
            params.set(paramName, options.join("_"))
        }
        router.replace(`${pathname}?${params.toString()}`);
    }

    function RenderChips(){
        return checkedFilters.map(filter => {
            return filter.options.map(option => {
                return (
                    <div className="filter-chip">
                        {`${filter.name}: ${option}`}
                        <FontAwesomeIcon onClick={() => RemoveChip(filter.name, option)} className='chip-cross-icon' size='sm' icon={faX}></FontAwesomeIcon>
                    </div>
                )
            })
        })
    }

    return ( 
        <div className="filter-chips-container">
            {RenderChips()}
        </div>
     );
}

export default FilterChips;