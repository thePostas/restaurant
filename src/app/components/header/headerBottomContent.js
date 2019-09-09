import React from 'react';

export const HeaderBottomContent = props => {
    return (
        <div className={'header__bottom-content'}>
            <h1 className={'header__bottom-content-title'}>{props.title}</h1>
            <p className={'header__bottom-content-text'}>{props.text}</p>
        </div>
    )
};

HeaderBottomContent.defaultProps = {
  title: 'default title',
  text: 'some text here'
};