import axios from 'axios';
import React, { Component } from 'react'

const url = "https://tatacliqapi.onrender.com/filter"
const BrandsFilter = (props)=> {
  
   const  brandFilter=(e)=>{
        let category_id = props.category_id;
        let brandId = e.target.value;
        let brandurl = ''
        if(brandId === '')
            brandurl = `${url}/${category_id}`
        else
            brandurl = `${url}/${category_id}?brandId=${brandId}`
            fetch(brandurl,{method:'GET'})
            .then((res)=>res.json())
            .then((res)=>{props.setBrandFilter(res)})
    }
    return (
            <div>
                <details >
                    <summary>Brands</summary>
                    <div className="filter-item" onChange={(e)=>{brandFilter(e)}}>
                        <label htmlFor="women" className='radio'>
                            <input type="radio" id="women" name='brands' value="1" />Adidas
                        </label>
                        <label htmlFor="men" className='radio'>
                            <input type="radio" id="men" name='brands' value="2" />Nike
                        </label>
                        <label htmlFor="kids" className='radio'>
                            <input type="radio" id="kids" name='brands' value="3" />Puma
                        </label>
                    </div>
                </details>
            </div>
        )
}

export default BrandsFilter