import React , { Component, useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import BrandsFilter from './filters/BrandsFilter';
import PriceFilter from './filters/PriceFilter';
import ProductFilter from './filters/ProductFilter';
import "./ListingPage.css";

const listingurl = "https://tatacliqapi.onrender.com/filter"

const ListingPage = (props)=> {
    
    const [searchedData,setSearch] = useState([]);
    const [allData,setAll] = useState([]);
    const [productList,setList] = useState([]);
    const [extraData,setExtra] = useState([]);
    const [category,setCategory] = useState([]);
    const [input,setInput] = useState('');

  useEffect(() => {
    let category_id = props.match.params.category_id;
    let query = '';
    query = props.location.search;
    setCategory(category_id)
    fetch(`${listingurl}/${category_id}${query}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setList(data);
        setSearch(data)
      }
    );
    fetch(`https://tatacliqapi.onrender.com`,{
      method:"GET"
    })
      .then((res) => res.json())
      .then((data) => {
        setExtra(data.sort(() => 0.5 - Math.random()).slice(0,6));
        setAll(data);
      })

  },[])

  const renderItemList = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <Link to={`/details/${item.id}`}>
            <div className="list-item" key={item.id}>
              <div className="item-img">
                <img
                  src={item.image}
                  alt="matus-hatala-p-Fzxa-Khd-FME-unsplash"
                  border="0"
                />
              </div>
              <div className="item-details">
                <div className="brand">{item.brand}</div>
                <div className="desc">{item.product_name}</div>
                <div className="price">
                  <span> ₹{item.price} </span>
                  <span>
                    <del> ₹{item.original_price} </del>
                  </span>
                </div>
                  {(item.rating >= 4) ? 
                  (
                <div className="rating good-rating">
                  <span>
                    {item.rating} <i className="fa-solid fa-star"></i>
                  </span>
                </div>) : 
                (<div className="rating low-rating">
                  <span>
                    {item.rating} <i className="fa-solid fa-star bad-star"></i>
                  </span>
                </div>)
                  }
                <div className="review">
                  <span>({item.review})</span>
                </div>
              </div>
            </div>
          </Link>
        );
      });
    }
    else{
      return(<><h1 style={{textAlign : "center"}} >Loading...</h1></>)
    }
    
  }
  const renderExtraData = (extraData) => {
    if (extraData) {
      return extraData.map((item) => {
        return (
          <Link to={`/details/${item.id}`}>
            <div className="list-item" key={item.id}>
              <div className="item-img">
                <img
                  src={item.image}
                  alt="matus-hatala-p-Fzxa-Khd-FME-unsplash"
                  border="0"
                />
              </div>
              <div className="item-details">
                <div className="brand">{item.brand}</div>
                <div className="desc">{item.product_name}</div>
                <div className="price">
                  <span> ₹{item.price} </span>
                  <span>
                    <del> ₹{item.original_price} </del>
                  </span>
                </div>
                  {(item.rating >= 4) ? 
                  (
                <div className="rating good-rating">
                  <span>
                    {item.rating} <i className="fa-solid fa-star"></i>
                  </span>
                </div>) : 
                (<div className="rating low-rating">
                  <span>
                    {item.rating} <i className="fa-solid fa-star bad-star"></i>
                  </span>
                </div>)
                  }
                <div className="review">
                  <span>({item.review})</span>
                </div>
              </div>
            </div>
          </Link>
        );
      });
    }
  }
  const setDataperFilter=(data)=>{
    setSearch(data);
  }
  

 const setDataPerSearch = (keyword) => {
    console.log(keyword);
      // let output = productList.filter((item)=>{
      //   return(item.product_name.toLowerCase().indexOf(search.toLowerCase())>-1)
      // })
      console.log(allData);
      let output = [];
      output = allData.filter((data) => {
        if(keyword === '') return productList;
        return (
          // data.id == 16
          // console.log(data.product_name)
          data.product_name.toLowerCase().includes(keyword.toLowerCase())
          )
      })

      console.log(output);
      setSearch(output);
      setExtra('');
  }
  
  return (
      <>
        <Header userInput={(data)=>{setDataPerSearch(data)}} />
        <div id="main">
          <div className="container-fluid">
            <div id="filter">
              <div id="filter-heading">
                <span> Filter </span>
                <button>Clear All</button>
              </div>
              <div id="filter-body">
                <div className="filter-category">
                  <ProductFilter category_id={category} setProductFilter={(data)=>{setDataperFilter(data)}} />
                  <BrandsFilter category_id={category} setBrandFilter={(data)=>{setDataperFilter(data)}} />
                  <PriceFilter category_id={category} setPriceFilter={(data,id)=>{setDataperFilter(data)}} />
                  </div>
              </div>
            </div>
            <div id="listing">
              {renderItemList(searchedData)}
              {renderExtraData(extraData)}
            </div>
          </div>
        </div>
      </>
    );
  }
  export default ListingPage ;