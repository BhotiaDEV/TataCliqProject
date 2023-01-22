import axios from 'axios';
import React, { Component } from 'react'

const url = "https://tatacliqapi.onrender.com/filter"
const PriceFilter = (props)=> {
  
   const  PriceFilter=(e)=>{
        let category_id = props.category_id;
        let lcost = e.target.value.split('-')[0];
        let hcost = e.target.value.split('-')[1];
        console.log(lcost,hcost)
        let priceurl = ''
        if(e.target.value === '')
            priceurl = `${url}/${category_id}`
        else
            priceurl = `${url}/${category_id}?lcost=${lcost}&&hcost=${hcost}`
            fetch(priceurl,{method:'GET'})
            .then((res)=>res.json())
            .then((res)=>{props.setPriceFilter(res)})
            // .then((res)=>{console.log(res)})
    }
    return (
            <div>
                <details >
                    <summary>Price</summary>
                    <div className="filter-item" onChange={(e)=>{PriceFilter(e)}}>
                        <label className='radio'>
                            <input type="radio" name='price' value="0-500" />0-500
                        </label>
                        <label className='radio'>
                            <input type="radio" name='price' value="501-1000" />501-1000
                        </label>
                        <label className='radio'>
                            <input type="radio" name='price' value="1001-5000" />1001-5000
                        </label>
                        <label className='radio'>
                            <input type="radio" name='price' value="5001-20000" />5001-20000
                        </label>
                    </div>
                </details>
            </div>
        )
}

export default PriceFilter