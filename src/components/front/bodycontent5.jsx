import React from 'react'
import Image4 from '../../images/image_logo_02.png'
import Imgtop from '../../images/red_top_wave_01.png'
import Imgbottom from '../../images/cream_bottom_wave_01.png'
import Carousel from 'react-bootstrap/Carousel'
const bodycontent5 = ({handleAddProduct}) => {
  const product1=[{id:17,Title:"World Famous",title:"Burger",text:"220gr / 600 cal",price:12,Img:"https://eatsy.bold-themes.com/burger/wp-content/uploads/sites/2/2021/01/home_slider_01.jpg",name: "Burger",}];
  const product2=[{id:18,Title:"Popular",title:"ShroomBecon",text:"220gr / 600 cal",price:12,Img:"https://eatsy.bold-themes.com/burger/wp-content/uploads/sites/2/2021/01/home_slider_02.jpg",name: "ShroomBecon",}];
  const product3=[{id:19,Title:"BestLocal",title:"TunaBurger",text:"220gr / 600 cal",price:12,Img:"https://eatsy.bold-themes.com/burger/wp-content/uploads/sites/2/2021/01/home_slider_03.jpg",name: "TunaBurger",}];
  
  return (
    <>
   
    <img className='topimg' src={Imgtop} alt='top'/>
    <Carousel fade>
    {product1.map((product)=>( 
      <Carousel.Item>
        <img src={product.Img} className='dark' alt='1' text="First slide" />
       <Carousel.Caption className='caption'>
        <p className='cartxt1'>{product.Title}</p><br></br>
        <p className='cartxt2'>{product.title}</p>
        <img className='logo1' src={Image4}alt='logo'></img>
        <p className='logotxt'>100 % Grass-fed beef patty, cheddar cheese, special sauce,<br></br>tomato, pickles, lettuce, sesame seed bun</p>
        <div className='btntxt'>
           <p className='imgtxt2'>${product.price}.00</p>
           {product.text}
         <button onClick={() => handleAddProduct(product)} className='carouselbtn'>+</button>
       </div>
      </Carousel.Caption >
    </Carousel.Item>
    ))}
    {product2.map((product)=>( 
      <Carousel.Item>
      <img src={product.Img} alt='1' text="First slide" />
        <Carousel.Caption className='caption'>
        <p className='cartxt1'>{product.Title}</p><br></br>
        <p className='cartxt2'>{product.title}</p>
             <p className='logotxt'>100 % Grass-fed beef patty, cheddar cheese, special sauce,<br></br>tomato, pickles, lettuce, sesame seed bun</p>
        <div className='btntxt'>
           <p className='imgtxt2'>$12.00</p>
           220gr/600cal
         <button onClick={() => handleAddProduct(product)} className='carouselbtn'>+</button>
       </div>
        
        </Carousel.Caption>
      </Carousel.Item>
    ))}
     {product3.map((product)=>( 
      <Carousel.Item>
      <img src={product.Img} alt='1' text="First slide" />
        <Carousel.Caption className='caption'>
        <p className='cartxt1'>{product.Title}</p><br></br>
        <p className='cartxt2'>{product.title}</p>
        <img className='logo1' src={Image4}alt='logo'></img>
        <p className='logotxt'>100 % Grass-fed beef patty, cheddar cheese, special sauce,<br></br>tomato, pickles, lettuce, sesame seed bun</p>
        <div className='btntxt'>
           <p className='imgtxt2'>$12.00</p>
           220gr/600cal
         <button onClick={() => handleAddProduct(product)} className='carouselbtn'>+</button>
       </div>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
    </Carousel>
    <img className='bottomimg' src={Imgbottom} alt='top'/>
  </>   
  )
}
export default bodycontent5;

