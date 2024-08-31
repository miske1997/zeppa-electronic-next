"use client"
import { Accordion, Form, ListGroup } from "react-bootstrap"
import "./FilterSideBar.css"
import { useEffect } from "react";



function FilterSideBar({ filters = [] }) {

    // const navigate = useNavigate();
    // const dispatch = useDispatch()
    const checkedFilters = [] //useSelector(selectCheckedFilters)
    // const url = new URL(window.location);
    // const filterCurrent = url.searchParams




    useEffect(() => {
        // for (const entry of filterCurrent.entries()) {
        //     if (entry[0] == "sort")
        //         continue;
        //     console.log(entry);
        //     const values = entry[1].split("_")
        //     const paramName = entry[0]
        //     for (const value of values) {
        //         dispatch(setFilter({ name: paramName, value: value }))
        //     }
        // }
    }, []);


    function AddUrlParam(option, paramName) {
        // let filter = url.searchParams.get(paramName) ?? ""
        // if (!filter || filter.length == 0){
        //     filter = option
        // }
        // else{
        //     filter = filter + "_" + option
        // }
        // dispatch(setFilter({ name: paramName, value: option }))
        // url.searchParams.set(paramName, filter);
        // navigate(url.search)
    }
    function RemoveParam(option, paramName) {
        // dispatch(removeFilter({name: paramName, value: option}))
        // url.searchParams.delete(paramName)
        // navigate(url.search)
    }

    function FilterClicked(option, paramName){
        // if (checkedFilters.find(f => f.name === paramName)?.options.includes(option)){
        //     RemoveParam(option, paramName)
        // }
        // else{
        //     AddUrlParam(option, paramName)
        // }
    }

    function RenderFilter(filter) {
        console.log(checkedFilters);
        return filter.options.map((option, index) => {
            return (
                <ListGroup.Item onClick={(event) => { event.preventDefault(); FilterClicked(option, filter.propName) }} >
                    <Form.Check
                        onClick={(event) => event.preventDefault()}
                        checked={checkedFilters.find(f => f.name === filter.propName) ? checkedFilters.find(f => f.name === filter.propName).options.includes(option) : false}
                        type={"checkbox"}
                        id={option}
                        label={option}
                    />
                </ListGroup.Item>
            )
        })
    }

    function RenderFilters() {
        return filters.map((filter, index) => {
            return (
                <Accordion.Item eventKey={index}>
                    <Accordion.Header>{filter.name}</Accordion.Header>
                    <Accordion.Body>
                        <ListGroup variant="flush">
                            {RenderFilter(filter)}
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            )
        })
    }

    return (
        <div className="filter-side-bar">
            <Accordion alwaysOpen="true" as={"div"} className="filter-accordian" defaultActiveKey={0}>
                {RenderFilters()}
            </Accordion>
        </div>
    );
}

export default FilterSideBar;