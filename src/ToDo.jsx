import React from 'react';

const ToDo = (props) => {
    const { id, text, onSelect } = props;

    return (
        <div className="todo_style">
            <i
                className="fa fa-times"
                aria-hidden="true"
                onClick={() => {
                    onSelect(id); // Call the deleteItems function from App.jsx
                }}
            />
            <li>{text}</li>
        </div>
    );
};

export default ToDo;
