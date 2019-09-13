import React, { Component } from 'react';
import { MenuItem } from '../../components/content/menuItem'

const menuItems = [
    {
        title:'toasted breads & beef dripping butter',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: '20$'
    },
    {
        title:'bread board butter',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: '30$'
    },
    {
        title:'sticky chipotle chicken',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: '26$'
    },
    {
        title:'salt & papper calamari',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: '14$'
    },
    {
        title:'cluck & duck wings',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: '18$'
    },
    {
        title:'beef & bone marrow bon bons',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: '2$'
    },
    {
        title:'garlic king prawns',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: '36$'
    },
    {
        title:'antipasti plate',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: '16$'
    },
];

export class MenuInner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }
    render() {
        const items = menuItems.map((item, index) => {
            return <MenuItem key={index} title={item.title} text={item.text} price={item.price}/>
        });
        return (
            <div className="menu-block__inner">
                    <h2 className={'menu-block__inner-title main-content__title'}>
                        {this.props.title}
                    </h2>
                <div className={'menu-block__inner-box'}>
                    {items}
                </div>
            </div>
        )
    }
}