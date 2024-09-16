"use client"
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Offcanvas } from "react-bootstrap";

import "./MobileFIlterButton.css"
import FilterSideBar from "../FilterSideBar/FilterSideBar";
import { useState } from "react";
import FilterChips from "../FilterChips/FilterChips";
function MobileFIlterButton({filters}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    return ( 
        <>
            <Button onClick={() => setShow(true)} variant="dark" className="mobile-filter-btn">
                <span className="flex justify-center gap-1">
                    Filteri
                    <FontAwesomeIcon className="p-1" icon={faFilter}></FontAwesomeIcon>    
                </span>
                
            </Button>
            <Offcanvas className="side-filters" placement={"start"} show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className="fs-2">Filteri</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="filter-offcanvas">
                <FilterChips></FilterChips>
                <FilterSideBar filters={filters}></FilterSideBar>
            </Offcanvas.Body>
        </Offcanvas>
        </>
     );
}

export default MobileFIlterButton;