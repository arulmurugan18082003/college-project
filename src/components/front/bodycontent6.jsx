import React from 'react'
import Image1 from '../../images/home_01_delivery.png'
import Image2 from '../../images/stay_home.png'
import Image3 from '../../images/PngItem_1746259.png'
import Image4 from '../../images/bike.png'
import Image6 from '../../images/delivery-man_888472.png'
import Image5 from '../../images/cream_top_wave_01.png'

const bodycontent6 = () => {
  return (
    <div className='bgcolor'>
        <img className='content6img' src={Image1} alt='1' data-aos="fade-right" data-aos-duration="1000" />
        <img className='content6img2' src={Image2} alt='2' />
           <div className='content6base'> 
                <p className='content6txt1'>Free delivery 7 
                 day a week</p>
                
                    <div className='content6row'>
                        <div className='row1' data-aos="fade-right" data-aos-duration="1000">
                           <span className='imgborder'> <img className='rowimg1' src={Image3} alt='1'></img> </span>
                            <p className='rowtext1'>Choose Burger</p>
                            <p className='rowtext2'>Sesame snaps tootsie roll dessert candy canes <br></br>apple pie marzipan topping toffee croissant.</p>
                        </div>
                        <div className='bt_bb_inner_step_line' />
                    </div>    
                    <div className='content6row'>
                        <div className='row1' data-aos="fade-right" data-aos-duration="1000">
                           <span className='imgborder'> <img className='rowimg2' src={Image4} alt='1'></img> </span>
                            <p className='rowtext1'>Delivery or Takeaway</p>
                            <p className='rowtext3'> Capitalize on low hanging fruit to identify a <br></br>ballpark value added activity to beta test.</p>
                        </div>
                        <div className='bt_bb_inner_step_line' />
                    </div>
                    <div className='content6row' data-aos="fade-right" data-aos-duration="1000">
                        <div className='row1'>
                           <span className='imgborder'> <img className='rowimg3' src={Image6} alt='1'></img> </span>
                            <p className='rowtext1'>
                            Enjoy Burger</p>
                            <p className='rowtext2'>
                            Praesent interdum mollis neque purus sed <br></br> diam integer, in egestas nulla eget pede.</p>
                        </div>
                        <img className='imgtop1' src={Image5} alt='1'></img>
                    </div>
                     
                    
            </div> 
    </div>

  )
}
export default bodycontent6
