import React, { Component } from 'react';
import { MenuItem } from '../../components/content/menuItem'

const menuItems = [
    {
        title:'toasted & beef dripping butter',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title:'bread board butter',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title:'sticky chipotle chiken',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title:'salt & papper calamari',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title:'click & duck wings',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title:'beef & bone marrow bon bons',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title:'garlic king prawns',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title:'antipasti plate',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
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
        const items = menuItems.map((item) => {
            return <MenuItem title={item.title} text={item.text}/>
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