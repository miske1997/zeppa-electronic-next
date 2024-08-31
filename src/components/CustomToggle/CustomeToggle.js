"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons'; // Assuming you're using Font Awesome icons
import { Dropdown, DropdownButton } from 'react-bootstrap';
import './CustomToggle.css'

const CustomToggle = ({}) =>{
  
  const url = new URL(window.location);
  const filterCurrent = url.searchParams.get("sort") ?? "None"
  
  function OnFilterSelect(filter){
    // dispatch(filterMap[filter]())
}

  function AddUrlParam(option){
    // url.searchParams.set("sort", option);
    // navigate(url.search)
  }
  return (
    <DropdownButton className="dropdown-basic-button" title={
        <span>
          {`${filterCurrent}`} <FontAwesomeIcon icon={faFilter} />
        </span>
      }>
      <Dropdown.Item  onClick={(event) => {event.preventDefault(); AddUrlParam("Name Asc"); OnFilterSelect(0)}}>By: Name Asc</Dropdown.Item>
      <Dropdown.Item  onClick={(event) => {event.preventDefault(); AddUrlParam("Name Desc"); OnFilterSelect(1)}}>By: Name Desc</Dropdown.Item>
      <Dropdown.Item onClick={(event) => {event.preventDefault(); AddUrlParam("Popularity"); OnFilterSelect(2)}}>By: Popularity</Dropdown.Item>
      <Dropdown.Item  onClick={(event) => {event.preventDefault(); AddUrlParam("Price Asc"); OnFilterSelect(3)}}>By: Price Asc</Dropdown.Item>
      <Dropdown.Item  onClick={(event) => {event.preventDefault(); AddUrlParam("Price Desc"); OnFilterSelect(4)}}>By: Price Desc</Dropdown.Item>
    </DropdownButton>
)}

export default CustomToggle