import React from 'react'
import Image from '../../images/floating_burger_01.png';
import Image2 from '../../images/floating_fries_02-removebg-preview.png';
import Image3 from '../../images/floating_fries_01.png';
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>

const bodycontent = () => {
  return (
    <div className='bgcolor1'>
        <div className='bannertext'>
        
              <p className='backgroundtext' data-aos="zoom-in" data-aos-duration="2000"> Delicious</p>
              
              <p className='backgroundtext1' data-aos="zoom-in" data-aos-duration="2000">Burgers</p>
        </div>    
        <div >
        
            <center><img className='banner-image' src={Image} alt="1" width='1200' height='500px' data-aos="zoom-in" data-aos-duration="1000"/></center> 
             
        </div>
        <div>
          <img className='banner-image2' src={Image3} alt='1'data-aos="fade-right" data-aos-duration="1000" />
          <img className='banner-image3' src={Image2} alt='1' width='300px' data-aos="fade-left" data-aos-duration="1000" />
          </div>
        <div>
          <h1 className='banner-text2' data-aos="fade-up"
              data-aos-anchor-placement="top-bottom">
             Bestsellers 
          </h1>
          </div>    

          <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
          <script>
             AOS.init();
          </script>


    </div>
  );
}
export default bodycontent;