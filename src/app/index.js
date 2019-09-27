import React from 'react';
import ReactDOM from 'react-dom';
import { Wrapper } from './components/wrapper';
import { BrowserRouter } from 'react-router-dom';

const app = document.getElementById('app');
ReactDOM.render(
    <BrowserRouter>
        <Wrapper/>
    </BrowserRouter>, app
);