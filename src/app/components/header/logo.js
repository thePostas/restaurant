import React from 'react';

export const Logo = props => {
    return (
        <div className="logo">
            <h3 className={'logo__title'}>
                {props.title}
            </h3>
        </div>
    )
};

Logo.defaultProps = {
    title: 'logo'
};