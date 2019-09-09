import React from 'react';

export const Recipes = props => {
    return (
        <section className={'recipes-block'}>
            <div className="recipes-block__inner">
                <div className="recipes-block__inner-content">
                    <h2 className="recipes-block__inner-content-title">
                        {props.title}
                    </h2>
                    <p className="recipes-block__inner-content-text">
                        {props.text}
                    </p>
                </div>
            </div>
        </section>
    )
};

Recipes.defaultProps = {
    title: 'default title',
    text: 'some text'
};