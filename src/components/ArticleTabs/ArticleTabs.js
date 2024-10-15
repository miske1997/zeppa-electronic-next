"use client"

import { Tab, Table, Tabs } from "react-bootstrap";

function ArticleTabs({ specification = [], description = "" }) {

    function renderSpecifications() {
        if (!specification)
            return
        let specs = specification.split("\n")
        specs = specs.map(spec => spec.split(":"))
        console.log(specs);
        return specs.map(spec => {
            return (
                <tr key={spec[0]}>
                    <td>{spec[0]}</td>
                    <td>{spec[1]}</td>
                </tr>
            )
        })
    }

    return (
        <Tabs
            defaultActiveKey="specification"
            id="justify-tab-example"
            className="mb-3"
            justify
        >
            <Tab eventKey="specification" title="specification">
                <Table hover bordered striped>
                    <tbody>
                        {renderSpecifications()}
                    </tbody>
                </Table>
            </Tab>
            <Tab eventKey="description" title="Description">
                <div className="text-start p2 fs-5">
                    {description}
                </div>
            </Tab>
        </Tabs>
    );
}

export default ArticleTabs;