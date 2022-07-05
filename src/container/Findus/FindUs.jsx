import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title='Contact' />
      <h1 className='headtext__cormorant' style={{ marginBottom: '3rem' }}>Find us</h1>
      <div className='app__wraper-contant'>
        <p className='p__opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
        <p className='p__cormorant' style={{ color: '#DCCA87', margin: '2rem 0' }}>Öffnungszeiten</p>
        <p className='p__opensans'>Mo - Fr: 10:00 - 02:00 Uhr</p>
        <p className='p__opensans'>Sa - So: 10:00 - 03:00 Uhr</p>
      </div>
      <button className='custom__button' style={{ marginTop: '2rem' }}>visit us</button>
    </div>
    <div className='app__wrapper_img'>
        <img src={images.findus} alt='Find us'/>
    </div>
  </div>
);

export default FindUs;
