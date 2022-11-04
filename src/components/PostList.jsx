import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
    posts: PropTypes.array,
};

PostList.defaultProps = {
    posts: [],
};

function PostList(props) {
    const {posts} = props;
    return (
        <table className="table-lits">
            <tr>
                <th>Id</th>
                <th>Author</th>
                <th>Title</th>
                <th>Created At</th>
            </tr>
            <tbody>
            {
                posts.map((x, key) => (
                    <tr key={key}>
                        <td>{x.id}</td>
                        <td>{x.author}</td>
                        <td>{x.title}</td>
                        <td>{x.createdAt}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    );
}

export default PostList;