import React, { Component } from 'react';
import { FooterNavigationBlock } from './footerNavigationBlock';
export class FooterNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }
    render() {
        const blocks = this.props.navigationInfo.map((info) => {
            return <FooterNavigationBlock title={info.title} links={info.links}/>
        });
        return (
            <div className="footer__navigation footer__block">
                { blocks }
            </div>
        )
    }
}

FooterNavigation.defaultProps = [
    {
        title: 'Sitemap', links: [
            {
                text:'What we do', href: '#'
            },
            {
                text: 'Who we are',
                href: '#'
            },
            {
                text: 'Projects',
                href: '#'}
        ],
    },
    {
        title: 'Category', links: ['Concerting', 'Decoration', 'Building'],
    },
    {
        title: 'Menu', links: ['About us', 'Services', 'Projects'],
    }
];