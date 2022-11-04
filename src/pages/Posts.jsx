import {Alert, Table} from "reactstrap";
import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from "../store/actions/posts";

function Posts () {

    const dispatch = useDispatch();
    const posts = useSelector(state =>state.posts.posts);
    console.log(posts)
    useEffect(() => {
        dispatch(getPosts());
    }, [])
    return (
        <div>
            <Alert color="primary">
                Record
            </Alert>
            <Table hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Author</th>
                    <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map((post, index) => (
                            <tr key={index}>
                                <th width="200px">{index + 1}</th>
                                <td>{post.title}</td>
                                <td>{post.body.substr(0,30)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Posts;