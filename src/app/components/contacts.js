import React from 'react';
import { Header } from './header/header';
import { MainContent } from "./content/mainContent";
import { Footer } from "./footer/footer";

export const Contacts = props => {
  return (
      <div className={'contacts'}>
          <Header/>
          <Footer/>
      </div>
  )
};