import React from 'react'

const bodycontent4 = ({ handleAddProduct }) => {
  const product1 = [{ id: 15, Title: "ShroomBacon", title: "Burger", text: "220gr / 600 cal", price: 8, Img: "https://eatsy.bold-themes.com/burger/wp-content/uploads/sites/2/2018/09/product_09-640x640.jpg", name: "VEGAN", }];
  const product2 = [{ id: 16, Title: "", title: "", text: "220gr / 600 cal", price: 11, Img: "https://eatsy.bold-themes.com/burger/wp-content/uploads/sites/2/2021/02/image_product_03.jpg", name: "", }];
  return (
    <>
      <div className='containercontent-4'>
        {product1.map((product) => (
          <div className="content4card1" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
            <div className='card1text'>{product.Title}</div>
            <div className='card4text2'>{product.title}</div>
            <div className='card1text3'>{product.name}</div>
            <div >
              <img className='cardimg1' src={product.Img} alt='1' width='250px' height='250px' />
            </div>
            <div className='cardtext4'>${product.price}.00</div>
            <div className='card1text5'>220gr/600 cal</div>
            <button onClick={() => handleAddProduct(product)} className='cardbutton1'>+</button>

          </div>
        ))}
        {product2.map((product) => (
          <div className="content4img1" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
            <img className='container-img' src={product.Img} alt='1' ></img>
            <div className='container-1text4'>${product.price}.00</div>
            <div className='card1text5'>{product.text}</div>
            <button onClick={() => handleAddProduct(product)} className='card3button3'> +</button>
          </div>
        ))}
      </div>

    </>
  );
}
export default bodycontent4;