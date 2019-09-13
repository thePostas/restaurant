import React from 'react';
import { ImagesBlockInner } from '../../containers/content/imagesBlockInner'

import image1 from '../../img/images_block_1.jpg';
import image2 from '../../img/images_block_2.jpg';
import image3 from '../../img/images_block_3.jpg';
import image4 from '../../img/images_block_4.jpg';
import image5 from '../../img/images_block_5.jpg';

const images = [
    image1,
    image2,
    image3,
    image4,
    image5
];

export const ImagesBlock = props => {
  return (
      <section className="images-block">
          <ImagesBlockInner images={images}/>
      </section>
  )
};