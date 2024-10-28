"use client"
import { Pagination } from "react-bootstrap";
import "./TablePagination.css"
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function TablePagination({display = false, currentPage = 1, numOfPages = 1}) {
    
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    function RenderItems() {
        const start = Math.max(1, currentPage - 2)
        const end = Math.min(currentPage + 2, numOfPages)

        let items = []
        for (let pageNum = start; pageNum <= end; pageNum++) {
            items.push((<Pagination.Item onClick={() => AddUrlParam(pageNum)} active={pageNum == currentPage}>{pageNum}</Pagination.Item>))
        }
        return items
    }

    function AddUrlParam(pageNum){
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNum)
        router.replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="table-pagination">

            <Pagination>
                <Pagination.First onClick={() => AddUrlParam(1)}/>
                <Pagination.Prev onClick={() => AddUrlParam(Math.max(1, currentPage - 1))} />
                {RenderItems()}
                <Pagination.Next onClick={() => AddUrlParam(Math.min(numOfPages, currentPage + 1))}/>
                <Pagination.Last onClick={() => AddUrlParam(numOfPages)}/>
            </Pagination>
        </div>
    );
}

export default TablePagination;