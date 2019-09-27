import React from 'react';
import { Route } from 'react-router-dom';
import {Page} from "./page";
import {Home} from "./home";
import {Menu} from "./menu";
import {Contacts} from "./contacts";
import {About} from "./about";
import {Faq} from "./faq";

export const Wrapper = () => {
    return (
        <div className="wrapper">
            <Route exact path={'/'} component={Home}/>
            <Route path={'/about'} component={About}/>
            <Route path={'/menu'} component={Menu}/>
            <Route path={'/faq'} component={Faq}/>
            <Route path={'/page'} component={Page}/>
            <Route path={'/contacts'} component={Contacts}/>
        </div>
    )
};