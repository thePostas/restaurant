import React from 'react';
import { Header } from './header/header';
import { MainContent } from "./content/mainContent";
import { Footer } from "./footer/footer";

export const Menu = props => {
  return (
      <div className={'menu'}>
          <Header/>
          <Footer/>
      </div>
  )
};