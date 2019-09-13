import React from 'react';
import { FooterLogo } from '../footer/footerLogo';
import { FooterNavigation } from '../../containers/footer/footerNavigation'

const navigationInfo = [
    {
        title: 'Sitemap',
        links: [
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
        title: 'Category',
        links: [
            {
                text: 'Concerting',
                href: '#'
            },
            {
                text: 'Decoration', href:'#'
            },
            {
                text:'Building', href: '#'
            }
            ],
    },
    {
        title: 'Menu',
        links: [
            {
                text: 'About us',
                href: '#'
            },
            {
                text: 'Services',
                href: '#'
            },
            {
                text: 'Projects', href: '#'
            }
            ],
    }
];

export const FooterTop = () => {
  return (
      <div className="footer__top">
          <FooterLogo/>
          <FooterNavigation navigationInfo={navigationInfo}/>
      </div>
  )
};