import React from 'react';
import { Logo } from './logo';
import { Navigation } from '../../containers/header/navigation'

const navigationLinks = [
    {title: 'Home', link: '#', active: true},
    {title: 'About Us', link: '#', active: false},
    {title: 'Menu', link: '#', active: false},
    {title: 'Faq', link: '#', active: false},
    {title: 'Page', link: '#', active: false},
    {title: 'Contact', link: '#', active: false}
];

export const HeaderTop = props => {
  return (
      <div className={'header__top'}>
          <Logo title={'Restaurant'}/>
          <Navigation navigationLinks={navigationLinks}/>
      </div>
  )
};