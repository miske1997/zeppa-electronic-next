"use client"
import Link from "next/link";
import { Breadcrumb } from "react-bootstrap";


function BreadCrumbs({ crumbs = [] }) {

    function RenderCrumbs() {
        return crumbs.map(crumb => {
            return (
                <Breadcrumb.Item key={crumb.link} href={crumb.link}>
                    {crumb.text}
                </Breadcrumb.Item>
            )
        })
    }
    return (
        <Breadcrumb className='bread-crumbs'>
            {RenderCrumbs()}
        </Breadcrumb>
    );
}

export default BreadCrumbs;