import React, { useState } from 'react';
import TodoCreate from './TodoCreate';


function TodoListUseState (props) {
    const {items, removeItem} = props;

    return (
        <table className="table-lits">
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Action</th>
            </tr>
            <tbody>
            {
                items.map((x, key) => (
                    <tr key={key}>
                        <td>{x.id}</td>
                        <td>{x.title}</td>
                        <td onClick={() => removeItem(x.id)} >
                            xoa
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}

export default TodoListUseState;