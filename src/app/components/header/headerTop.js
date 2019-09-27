import React from 'react';
import { Logo } from './logo';
import { Navigation } from '../../containers/header/navigation'

const navigationLinks = [
    {title: 'Home', link: '/', active: true},
    {title: 'About Us', link: '/about', active: false},
    {title: 'Menu', link: '/menu', active: false},
    {title: 'Faq', link: '/faq', active: false},
    {title: 'Page', link: '/page', active: false},
    {title: 'Contact', link: '/contacts', active: false}
];

export const HeaderTop = props => {
  return (
      <div className={'header__top'}>
          <Logo title={'Restaurant'}/>
          <Navigation navigationLinks={navigationLinks}/>
      </div>
  )
};