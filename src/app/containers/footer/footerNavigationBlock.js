import React, { Component } from 'react';

export class FooterNavigationBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }
    render() {
        const links = this.props.links.map((link, index) => {
            return <li key={index} className={'footer__navigation-block-list-item'}><a href={link.href} className={'footer__navigation-block-list-link'}>{link.text}</a></li>
        });
        return (
            <div className="footer__navigation-block">
                <h4 className={'footer__navigation-block-title'}>
                    {this.props.title}
                </h4>
                <ul className="footer__navigation-block-list">
                    { links }
                </ul>
            </div>
        )
    }
}

FooterNavigationBlock.defaultProps = {links: ['1', '2', '3']};