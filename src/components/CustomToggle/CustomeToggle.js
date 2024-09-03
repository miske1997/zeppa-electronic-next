"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons'; // Assuming you're using Font Awesome icons
import { Dropdown, DropdownButton } from 'react-bootstrap';
import './CustomToggle.css'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const CustomToggle = ({}) =>{
  
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const params = new URLSearchParams(searchParams);
  const filterCurrent = params.get("sort") ?? "Popularity"
  
  function AddUrlParam(option){
    params.set("sort", option);
    router.replace(`${pathname}?${params.toString()}`);
  }
  return (
    <DropdownButton className="dropdown-basic-button" title={
        <span>
          {`${filterCurrent}`} <FontAwesomeIcon icon={faFilter} />
        </span>
      }>
      <Dropdown.Item  onClick={(event) => {event.preventDefault(); AddUrlParam("NameAsc")}}>By: Name Asc</Dropdown.Item>
      <Dropdown.Item  onClick={(event) => {event.preventDefault(); AddUrlParam("NameDesc")}}>By: Name Desc</Dropdown.Item>
      <Dropdown.Item onClick={(event) => {event.preventDefault(); AddUrlParam("Popularity")}}>By: Popularity</Dropdown.Item>
      <Dropdown.Item  onClick={(event) => {event.preventDefault(); AddUrlParam("PriceAsc")}}>By: Price Asc</Dropdown.Item>
      <Dropdown.Item  onClick={(event) => {event.preventDefault(); AddUrlParam("PriceDesc")}}>By: Price Desc</Dropdown.Item>
    </DropdownButton>
)}

export default CustomToggle