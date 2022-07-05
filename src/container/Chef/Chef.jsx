import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
        <img src={images.chef} alt='chef'/>
    </div>
    <div className='app__wrapper_info '>
        <SubHeading title="chefs word" />
        <h1 className='headtext__cormorant'>What we believe in</h1>
        <div className='app__chef-content'>
          <div className='app__chef-content_quote'>
              <img src={images.quote} alt='quote' />
              <p className='p__opensans'>moamens Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <p className='p__opensans'> Necessitatibus voluptatem velit iusto, quos reprehenderit, minus consequatur alias rem unde ipsum, maiores molestiae possimus <br/> sapiente aliquid porro tempora voluptates tenetur fugit.</p>
        </div>
        <div className='app__chef-sign'>
          <p>kevin luo</p>
          <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt='sign'/>
        </div>
    </div>
  </div>
);

export default Chef;
