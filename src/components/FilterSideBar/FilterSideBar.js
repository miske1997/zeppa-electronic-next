"use client"
import { Accordion, Form, ListGroup } from "react-bootstrap"
import "./FilterSideBar.css"
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from 'next/navigation'

function FilterSideBar({ filters = [] }) {

    // const navigate = useNavigate();
    // const dispatch = useDispatch()
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const [checkedFilters, setCheckedFilters] = useState([])
    // const url = new URL(window.location);
    // const filterCurrent = url.searchParams

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        const parsedFilters = []
        for (const param of params.entries()) {
            parsedFilters.push({name : param[0], options: param[1].split("_") })
        }
        setCheckedFilters(parsedFilters)
    }, [searchParams]);

    function AddUrlParam(option, paramName) {
        const params = new URLSearchParams(searchParams);
        let filter = params.get(paramName) ?? ""
        if (!filter || filter.length == 0){
            filter = option
        }
        else{
            filter = filter + "_" + option
        }
        params.set(paramName, filter);
        router.replace(`${pathname}?${params.toString()}`);
    }
    function RemoveParam(option, paramName) {
        const params = new URLSearchParams(searchParams);
        let filter = params.get(paramName) ?? "";
        const options = filter.split("_")
        console.log(options);
        
        if (options.length === 1){
            params.delete(paramName)
        }
        else{
            options.splice(options.findIndex(o => o === option), 1)
            params.set(paramName, options.join("_"))
        }
        router.replace(`${pathname}?${params.toString()}`);
    }

    function FilterClicked(option, paramName) {
        if (checkedFilters.find(f => f.name === paramName)?.options.includes(option)){
            RemoveParam(option, paramName)
        }
        else{
            AddUrlParam(option, paramName)
        }
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