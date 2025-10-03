import React from 'react'



const bodycontent3 = ({handleAddProduct}) => {
  const product1=[{id:13,Title:"",title:"",text:"220gr / 600 cal",price: 11,Img:"https://eatsy.bold-themes.com/burger/wp-content/uploads/sites/2/2021/02/image_product_02.jpg",name: "",}];
  const product2=[{id:14,Title:"BaconBacon",title:"CheeseBurger",text:"220gr / 600 cal",price: 8,Img:"https://eatsy.bold-themes.com/burger/wp-content/uploads/sites/2/2018/09/product_04-640x640.jpg",name: "MEALS",}];
  return (
    <div>
      
       <div className='container-1'>
       {product1.map((productItem,) =>(
            <div className=''data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" data-aos-duration="7000">
                <img className='container-img' src={productItem.Img} alt='1'></img>
                <div className='container-1text4'>${productItem.price}.00</div>
                <div className='card1text5'>{productItem.text}</div>
                <button onClick={() => handleAddProduct(productItem)} className='card3button'>+</button>
              </div>

         ))}
         {product2.map((product) =>(
              <div className='card-conatiner-1' data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                    <div className='card1text'> {product.name} </div>
                    <div className='card1text2'>{product.Title}</div>      
                    <div className='card1text3'>{product.title}</div>  
                    <div>
                      <img className='card1img' src={product.Img} alt='1' />
                      </div>  
                      <div className='card1text4'>${product.price}.00</div>
                      <div className='card1text5'>{product.text}</div>
                      <button onClick={() => handleAddProduct(product)} className='card1button'>+</button>
              </div>
         ))}   
        </div> 

      
    </div>
  );
}
export default bodycontent3;