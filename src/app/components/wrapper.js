import React from 'react';
import { Header } from './header/header';
import { MainContent } from "./content/mainContent";

export const Wrapper = props => {
  return (
      <div className={'wrapper'}>
          <Header/>
          <MainContent/>
      </div>
  )
};