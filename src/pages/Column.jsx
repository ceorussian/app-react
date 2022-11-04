import {Alert, Table} from "reactstrap";
import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { getColumn } from "../store/actions/column";

function Column () {
    const dispatch = useDispatch();
    const columns = useSelector(state =>state.columns.columns);

    useEffect(() => {
        dispatch(getColumn());
    }, []);

    return (
        <div>
            <Alert color="primary">
                Columns
            </Alert>
        
            <Table hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Author</th>
                    <th>Title</th>
                    <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        columns.map((column, index) => (
                            <tr key={index}>
                                <th width="200px">{index + 1}</th>
                                <td>{column.author}</td>
                                <td>{column.title}</td>
                                <td>{column.description.substr(0,30)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default Column