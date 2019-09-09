import React from 'react';
import image from '../../img/story_img.jpg'

export const Story = props => {
    return (
        <section className={'story-block'}>
            <div className="story-block__inner">
                <img src={image} alt="image" className="story-block__inner-image" width={445} height={400}/>
                <div className="story-block__inner-content">
                    <h2 className="story-block__inner-content-title">
                        {props.title}
                    </h2>
                    <p className="story-block__inner-content-text">
                        {props.text}
                    </p>
                </div>
            </div>
        </section>
    )
};

Story.defaultProps = {
    title: 'default title',
    text: 'some text'
};