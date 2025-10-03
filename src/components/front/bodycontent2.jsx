import React from 'react'


const bodycontent2 = ({handleAddProduct}) => {
  const product1=[{id:10,Title:"Bacon+Cheese",title:"+ Green Burger",text:"220gr / 600 cal",price: 6,Img:"https://eatsy.bold-themes.com/burger/wp-content/uploads/sites/2/2018/09/product_01-300x300.jpg",name: "BEEF",}];
  const product2=[{id:11,Title:"BlackAngus",title:"Burger",text:"220gr / 600 cal",price: 12,Img:"https://eatsy.bold-themes.com/burger/wp-content/uploads/sites/2/2018/09/product_02-640x640.jpg",name: "BEEF",},]
  const product3=[{id:12,Title:"Bøfsandwich",text:"220gr / 600 cal",price: 8,Img:"https://eatsy.bold-themes.com/burger/wp-content/uploads/sites/2/2021/02/image_product_01.jpg",name: "BEEF",},]
  return (
    <div>
       <div className='cardcontainer'>
      {product1.map((productItem,) =>(
       
            <div className='card1' data-aos="fade-up"
                   data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                 <div className='card1text'> {productItem.name}</div>
                  <div className='card1text2'>{productItem.Title}</div>      
                  <div className='card1text3'>{productItem.title}</div>  
                  <div >
                    <img className='card1img' src={productItem.Img} alt='1' />
                    </div>  
                <div className='card1text4'>${productItem.price}.00</div>
                <div className='card1text5'>{productItem.text}</div>
                <button className='card1button' onClick={() => handleAddProduct(productItem)}>+</button>
                
            </div>
      ))}
       {product2.map((productItem,) =>(
       
       <div className='card1' data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
            <div className='card1text'> {productItem.name}</div>
             <div className='card1text2'>{productItem.Title}</div>      
             <div className='card1text3'>{productItem.title}</div>  
             <div >
               <img className='card1img' src={productItem.Img} alt='1' />
               </div>  
           <div className='card1text4'>${productItem.price}.00</div>
           <div className='card1text5'>{productItem.text}</div>
           <button className='card1button' onClick={() => handleAddProduct(productItem)}>+</button>
           
       </div>
      ))}
       {product3.map((productItem,) =>(
       
       <div className='card3' data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" data-aos-duration="3000">
            <div className='card2text'> {productItem.name}</div>
             <div className='card2text2'>{productItem.Title}</div>      
             <div className='card2text3'>{productItem.title}</div>  
             <div >
               <img className='card2img' src={productItem.Img} alt='1' />
               </div>  
           <div className='card2text4'>${productItem.price}.00</div>
           <div className='card2text5'>{productItem.text}</div>
           <button className='card1button1' onClick={() => handleAddProduct(productItem)}>+</button>
           
       </div>
      ))}
      </div>    
</div>
  );
}
export default bodycontent2;
