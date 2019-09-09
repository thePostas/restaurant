import React from 'react';
import { Story } from './story'

export const MainContent = props => {
    return (
        <main className={'main-content'}>
            <Story title={'Our Story'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
        </main>
    )
};