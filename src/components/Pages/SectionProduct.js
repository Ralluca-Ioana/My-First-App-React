import React , { useEffect, useState} from 'react'
import { Element } from "./Element";
import './SectionProduct.css';
import './Card.css';
import { motion } from 'framer-motion';

function SectionProduct() {
  
  const [data,setData] = useState([]);
  const [category,setCategory] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(()=>{
    setData(Element);
    setCategory([...new Set(Element.map((item)=> item.category))])
  },[]) 

  const category_filter = (itemData) =>{
    const filterData = Element.filter((item)=> item.category === itemData);
    setData(filterData);
  }

  const handleSearch = (event) => {
    const word = event.target.value;
    setSearchWord(word);

    const searchList = Element.filter((item)=>{
      return item.name.toLowerCase().indexOf(word.toLowerCase()) !== -1
    })
    setData(searchList);
  };

  return (
    <div className="app">
      <div className="productWrapper">
        <div className="filterProduct">

          <span className='search-title'>Search </span>
          <input
            type="text"
            name="search"
            placeholder="Type here"
            className='search-input'
            value={searchWord}
            onChange={handleSearch}
          />
          
          <ul className='button-filter float'>
            <span>Filter </span>
            <li className='item float-item'><button onClick={()=> setData(Element)}>All</button></li>
            {
              category.map((item)=> <li><button onClick={()=>{category_filter(item)}}>{item}</button></li>)
            }
          </ul>
          
        </div>
        <div className="product-container">
          {
            data.map((item)=> 
            <motion.div whileHover={{ scale: 1.1 , boxShadow: "0px 0px 10px rgb(0,0,0)" }} key={item.id} className="product">
              <div className="image">
                <img src={item.image  } alt="" />
              </div>
              <div className="content-card">
                <div className="title">
                    <h3>{item.name}</h3>
                </div>
                <div className="body-product">
                  <span style={{fontSize: '0.7rem'}}><b>Price:</b> <span style={{fontSize: '0.9rem', fontFamily:'Lucida Handwriting' , color: 'rgb(172, 106, 117)'}}>{item.price} <sup style={{fontFamily:'Lucida Handwriting'}}>lei</sup></span></span><br />
                  <span style={{fontSize: '0.7rem', marginLeft: '20px'}}><b>Category:</b> <span style={{fontSize: '0.9rem', fontFamily:'Lucida Handwriting', color: 'rgb(172, 106, 117)'}}>{item.category}</span></span>
                </div>
              </div> 
            </motion.div> )
          }
        </div>
      </div>
    </div>
  )
}

export default SectionProduct
