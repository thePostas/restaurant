import React from 'react';
import { HeaderTop } from './headerTop'
import { HeaderBottom } from './headerBottom'

export const Header = props => {
  return (
      <header className={'header'}>
          <HeaderTop/>
          <HeaderBottom/>
      </header>)
};