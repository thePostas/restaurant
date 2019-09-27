import React from 'react';
import { Header } from './header/header';
import { MainContent } from "./content/mainContent";
import { Footer } from "./footer/footer";

export const Home = props => {
  return (
      <div className={'home'}>
          <Header/>
          <MainContent/>
          <Footer/>
      </div>
  )
};