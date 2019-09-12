import React from 'react';

export const MenuItem = props => {
    return (
        <div className="menu-block__inner-item">
            <div className={'menu-block__inner-item-wrapper'}>
                <h4 className={'menu-block__inner-item-title'}>{props.title}</h4>
                <span className={'menu-block__inner-item-price'}>
                    {props.price}
                </span>
            </div>
            <p className={'menu-block__inner-item-text'}>{props.text}</p>
        </div>
    )
};

MenuItem.defaultProps = [
    {
        title:'title',
        text: 'text.',
        price: '1000$'
    },
    {
        title:'title',
        text: 'text.',
        price: '1000$'
    },
    {
        title:'title',
        text: 'text.',
        price: '1000$'
    },
    {
        title:'title',
        text: 'text.',
        price: '1000$'
    },
    {
        title:'title',
        text: 'text.',
        price: '1000$'
    },
    {
        title:'title',
        text: 'text.',
        price: '1000$'
    },
    {
        title:'title',
        text: 'text.',
        price: '1000$'
    },
    {
        title:'title',
        text: 'text.',
        price: '1000$'
    }
];
