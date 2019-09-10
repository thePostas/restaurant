import React from 'react';

export const MenuItem = props => {
    return (
        <div className="menu-block__inner-item">
            <h4 className={'menu-block__inner-item-title'}>{props.title}</h4>
            <p className={'menu-block__inner-item-text'}>{props.text}</p>
        </div>
    )
};