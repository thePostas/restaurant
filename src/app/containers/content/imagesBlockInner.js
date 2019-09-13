import React, { Component } from 'react';

export class ImagesBlockInner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }

    render() {
        const images = this.props.images.map((image, index) => {
            return <img key={index} className={'images-block__image'} src={image} alt={'image'} width={480} height={365}/>
        });
        return (
            <div className="images-block__inner">
                {images}
            </div>
        )
    }
}

ImagesBlockInner.defaultProps = {
  images: []
};