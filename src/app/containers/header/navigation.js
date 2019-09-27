import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
    }

    onClick = currentIndex => {
        const updatedLinks = this.props.navigationLinks.map((link, index)=> {
            link.active = index === currentIndex;
        });
        this.setState({navigationLinks: updatedLinks})
    };

    render() {
        const links = this.props.navigationLinks.map((link, index) => {
            return (
                <li key={index}
                className={'navigation__item'}
                >
                    <Link
                        className={link.active ? 'navigation__link navigation__link_active' : 'navigation__link'}
                        to={link.link}
                        onClick={this.onClick.bind(this, index)}
                >
                    {link.title}
                    </Link>
                </li>
            )
        });
        return (
                <nav className={'navigation header__navigation'}>
                    <ul className={'navigation__list'}>
                        { links }
                    </ul>
                </nav>
        )
    }
}

Navigation.defaultProps = [
    {title: 'Home', link: '/', active: true},
    {title: 'About Us', link: '/about', active: false},
    {title: 'Menu', link: '/menu', active: false},
    {title: 'Faq', link: '/faq', active: false},
    {title: 'Page', link: '/page', active: false},
    {title: 'Contact', link: '/contacts', active: false}
];