import React, { useState, useEffect, useMemo } from 'react';
import './components/FontAwesomeIcons';
import './App.css';
import useFullPageLoader from './hooks/useFullPageLoader';
import Paginator from './components/table/Paginator';
import TableHeader from './components/table/TableHeader';
import Search from './components/table/Search';

function DataTable() {

    const [comments, setComments] = useState([]);
    const [loader, showLoader, hideLoader] = useFullPageLoader();
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: "", order: "" });

    const ITEMS_PER_PAGE = 50;

    const headers = [
        { name: "#", field: "id", sortable: false },
        { name: "Name", field: "name", sortable: true },
        { name: "Email", field: "email", sortable: true },
        { name: "Comment", field: "body", sortable: true }
    ];
    const getData = () => {

        showLoader();

        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(response => response.json())
            .then(json => {
                hideLoader();
                setComments(json);
            }).catch(err => {
                hideLoader();
                console.log(err)});
    };
    useEffect(() => {
       getData();
    }, []);

    const commentsData = useMemo(() => {

        let computedComments = comments;

        //searching
        if (search) {
            computedComments = computedComments.filter(
                comment =>
                    comment.name.toLowerCase().includes(search.toLowerCase()) ||
                    comment.email.toLowerCase().includes(search.toLowerCase())
            );
        }

        setTotalItems(computedComments.length);

        //Sorting comments
        if (sorting.field) {
            const reversed = sorting.order === "asc" ? 1 : -1;
            computedComments = computedComments.sort(
                (a, b) =>
                    reversed * a[sorting.field].localeCompare(b[sorting.field])
            );
        }

        //Current Page slice
        return computedComments.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        );
    }, [comments, currentPage, search, sorting]);





    return (   

        <div className="container">
            <div className="row">
                <div className="col mb-5 col-12 text-center">
                    <div className="row">
                        <div className="col-md-6 ml-10">
                            <Paginator
                                total={totalItems}
                                itemsPerPage={ITEMS_PER_PAGE}
                                currentPage={currentPage}
                                onPageChange={page => setCurrentPage(page)}
                            />
                        </div>
                        <div className="col-md-6 d-flex flex-row-reverse">
                            <Search
                                onSearch={value => {
                                    setSearch(value);
                                    setCurrentPage(1);
                                }}
                            />
                        </div>
                    </div>
                    <div className="table-responsive table-sm">
                        <table className="table table-hover table-bordered ">
                            <TableHeader
                                headers={headers}
                                onSorting={(field, order) =>
                                    setSorting({ field, order })
                                }
                            />
                            <tbody>
                                {commentsData.map(comment => (
                                    <tr  key={comment.id}>
                                        <th scope="row">
                                            {comment.id}
                                        </th>
                                        <td>{comment.name}</td>
                                        <td>{comment.email}</td>
                                        <td>{comment.body}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {loader}
            </div>
        </div>
    );
};

export default DataTable;