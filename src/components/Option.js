import React from 'react';

const Option = props => (
    <li className="option">
        <span className="option__text">
            {props.count}. {props.optionText}
        </span>
        
        <button
            className="button button--link"
            onClick={() => {
                props.handleDeleteOption(props.optionText);
            }}
        >
            remove
        </button>
    </li>
);

export default Option;