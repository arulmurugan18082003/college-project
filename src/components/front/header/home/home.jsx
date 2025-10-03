import './home.css'
import React from 'react'
import Bodycontent from '../../bodycontent'
import Bodycontent2 from '../../bodycontent2'
import Bodycontent3 from '../../bodycontent3'
import Bodycontent4 from '../../bodycontent4'
import Bodycontent5 from '../../bodycontent5'
import Bodycontent6 from '../../bodycontent6'
import Bodycontent7 from '../../bodycontent7'
import Footer from '../../footer'

const homepage = ({handleAddProduct}) => {
  
  return (
    <div>
     <Bodycontent />
     <Bodycontent2 handleAddProduct={handleAddProduct} />
     <Bodycontent3 handleAddProduct={handleAddProduct} />
     <Bodycontent4 handleAddProduct={handleAddProduct}/>
     <Bodycontent5 handleAddProduct={handleAddProduct} />
     <Bodycontent6 />
     <Bodycontent7 />
    <Footer />
    </div>    
  );
}
export default homepage;