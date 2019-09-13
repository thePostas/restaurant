import React, { Component } from 'react';

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
                    <a
                        className={link.active ? 'navigation__link navigation__link_active' : 'navigation__link'}
                        href={link.link}
                        onClick={this.onClick.bind(this, index)}
                >
                    {link.title}
                    </a>
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
    {title: 'Home', link: '#', active: true},
    {title: 'About Us', link: '#', active: false},
    {title: 'Menu', link: '#', active: false},
    {title: 'Faq', link: '#', active: false},
    {title: 'Page', link: '#', active: false},
    {title: 'Contact', link: '#', active: false}
];