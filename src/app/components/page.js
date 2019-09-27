import React from 'react';
import { Header } from './header/header';
import { MainContent } from "./content/mainContent";
import { Footer } from "./footer/footer";

export const Page = props => {
  return (
      <div className={'page'}>
          <Header/>
          <Footer/>
      </div>
  )
};