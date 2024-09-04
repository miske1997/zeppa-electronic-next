"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripLines, faGripVertical } from '@fortawesome/free-solid-svg-icons';
import "./GridStyleSelect.css"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

function GridStyleSelect() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const params = new URLSearchParams(searchParams);
    const displayType = params.get("display") ?? "grid"

    function setDisplayType(type) {
        params.set("display", type);
        router.replace(`${pathname}?${params.toString()}`);
    }
    return (
        <div className="grid-style-select">
            <p>Vrsta prikaza:</p>
            <FontAwesomeIcon onClick={() => setDisplayType("list")} className={`icon ${displayType === "list" ? "selected" : ""}`} icon={faGripLines}></FontAwesomeIcon>
            <FontAwesomeIcon onClick={() => setDisplayType("grid")} className={`icon ${displayType === "grid" ? "selected" : ""}`} icon={faGripVertical}></FontAwesomeIcon>
        </div>
    );
}

export default GridStyleSelect;