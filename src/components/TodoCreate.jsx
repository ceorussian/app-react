import React, {useState} from 'react';
import PropTypes from 'prop-types';

TodoCreate.propTypes = {
    onSubmit : PropTypes.func,
};

TodoCreate.defaultProps = {
    onSubmit: null
}

function TodoCreate(props) {
    
    const {onSubmit} = props;
    const [title, setTitle] = useState('');

    function updateValueTitle (e) {
        setTitle(e.target.value);
    }

    function submitForm(e){
        e.preventDefault();
        onSubmit({
            title,
        });
        setTitle('')
    }

    return (
        <form onSubmit={submitForm}>
            <input type="text" value={title} onChange={updateValueTitle}></input>
        </form>
    );
}

export default TodoCreate;