import React from 'react';
import { Header } from './header/header';
import { MainContent } from "./content/mainContent";
import { Footer } from "./footer/footer";

export const Wrapper = props => {
  return (
      <div className={'wrapper'}>
          <Header/>
          <MainContent/>
          <Footer/>
      </div>
  )
};