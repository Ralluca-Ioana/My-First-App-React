import React from 'react'
import { useState, useEffect, useMemo } from "react";
import Item from './Item';
import './SectionProduct.css'


function SectionProduct() {
     // Default Value
  const products = [
    { id:1, image: "files/wedding.jpg", name: "wedding nov", price: "2.5", category: "wedding" },
    { id:2, image: "files/wedding.jpg", name: "boy-baptisme",price: "2", category: "baptisme" },
    { id:3, image: "files/wedding.jpg", name: "girl baptisme",price: "3.5", category: "baptisme" },
    { id:4, image: "files/wedding.jpg", name: "accesories", price: "4.5", category: "accesories" },
    // { name: "marturii", category: "accesories" }
  ];
  const [productList, setProductList] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState();
  const [searchQuery, setSearchQuery] = useState("");
 

  //Search list of objects
  const handleSearch = (event) => {
    const query = event.target.value
    setSearchQuery(query)

    const searchList = products.filter((item)=>{
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })

    setProductList(searchList)
    };

  // Add default value on page load
  useEffect(() => {
    setProductList(products);
  }, []);

  // Function to get filtered list
  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!selectedCategory) {
      return productList;
    }
    return productList.filter((item) => item.category === selectedCategory);
  }

  // Avoid duplicate function calls with useMemo
  var filteredList = useMemo(getFilteredList, [selectedCategory, productList]);
  console.log(filteredList);
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }


  return (
    <div className="app">
      <div className="filter-container">
      <h6>Search </h6>
      <input
            type="text"
            name="search"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
          />
        <div>Filter:</div>
        <div>
          <select
            name="category-list"
            id="category-list"
            onChange={handleCategoryChange}
          >
            <option value="">All</option>
            <option value="wedding">wedding</option>
            <option value="baptisme">baptisme</option>
            <option value="accesories">accesories</option>
          </select>
          
        </div>
      </div>
      <div className="product-list">
        {filteredList.map(element => {
        //   <Item {...element} key={index} />
        return (
            <div className="card"  key={element.id}>
                <div className="image">
                    <img src={element.image} alt="" />
                </div>
                <div>Nume:</div>
                <p className="num-text"> {element.name}</p>
                <div>Categorie:</div>
                <p className="title"> {element.category}</p>
                <div>Pret:</div>
                <p className="description"> 
                  {element.price} lei
                </p>
            </div>
          
             
          );
        })}
         {/* {filteredList.map((element, index) => (
          <Item {...element} key={index} />
        ))} */}
        
      </div>
    </div>
  );
}

export default SectionProduct
