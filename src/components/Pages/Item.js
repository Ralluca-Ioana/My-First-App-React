import React from "react";
import './Item.css'

// React Component to display individual item
function Item({image,name, price, category}) {

  
    
    <div className='item-container'>
        <div className="image-product">Img
            <img src={image} alt="" />
        </div>
        <div className="content-products">
            <div>
                <span className="item-label">Name: </span>
                {name}
            </div>
            <div>
                <span className="item-label">Price: </span>
                {price} lei
            </div>
            <div>
                <span className="item-label">Category: </span>
                {category}
            </div>
        </div>
        
    </div>
 
  
}

export default Item;