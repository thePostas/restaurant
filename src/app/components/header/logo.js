import React from 'react';

export const Logo = props => {
    return (
        <div className="logo">
            <a className={'logo__link'} href={'index.html'}>
                <h3 className={'logo__title'}>
                    {props.title}
                </h3>
            </a>

        </div>
    )
};

Logo.defaultProps = {
    title: 'logo'
};