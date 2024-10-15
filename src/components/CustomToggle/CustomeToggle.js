"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons'; // Assuming you're using Font Awesome icons
import { Dropdown, DropdownButton } from 'react-bootstrap';
import './CustomToggle.css'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const sortMap = {Popularity: "Popularnost", NameAsc: "Ime ▲", NameDesc: "Ime ▼", PriceAsc: "Cena ▲", PriceDesc: "Cena ▼"}

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
    <DropdownButton variant="dark" className="dropdown-basic-button" title={
        <span>
          {`${sortMap[filterCurrent]}`} {/*<FontAwesomeIcon icon={faFilter} /> */}
        </span>
      }>
      <Dropdown.Item  onClick={(event) => {event.preventDefault(); AddUrlParam("NameAsc")}}>Ime Rastuce</Dropdown.Item>
      <Dropdown.Item  onClick={(event) => {event.preventDefault(); AddUrlParam("NameDesc")}}>Ime Opadajuce</Dropdown.Item>
      <Dropdown.Item onClick={(event) => {event.preventDefault(); AddUrlParam("Popularity")}}>Popularnost</Dropdown.Item>
      <Dropdown.Item  onClick={(event) => {event.preventDefault(); AddUrlParam("PriceAsc")}}>Cena Rastuca</Dropdown.Item>
      <Dropdown.Item  onClick={(event) => {event.preventDefault(); AddUrlParam("PriceDesc")}}>Cena Opadajuca</Dropdown.Item>
    </DropdownButton>
)}

export default CustomToggle