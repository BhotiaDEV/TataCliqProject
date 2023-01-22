import React, { Component } from 'react'

const url = "https://tatacliqapi.onrender.com/filter"
const ProductFilter = (props)=> {
   const  productFilter=(e)=>{
        let category_id = props.category_id;
        let product_type = e.target.value;
        let producturl = ''
        if(product_type === '')
            producturl = `${url}/${category_id}`
        else
            producturl = `${url}/${product_type}`
            fetch(producturl,{method:'GET'})
            .then((res)=>res.json())
            .then((res)=>{
                props.setProductFilter(res);
            })
        
    }
    return (
            <div>
                <details >
                    <summary>Category</summary>
                    <div className="filter-item" onChange={(e)=>{productFilter(e)}}>
                        <label className='radio'>
                            <input type="radio" name='price' value="1" />Earphones
                        </label>
                        <label className='radio'>
                            <input type="radio" name='price' value="2" />Speakers
                        </label>
                        <label className='radio'>
                            <input type="radio" name='price' value="3" />Headphones
                        </label>
                        <label className='radio'>
                            <input type="radio" name='price' value="4" />Trimmers
                        </label>
                        <label className='radio'>
                            <input type="radio" name='price' value="5" />Watches
                        </label>
                        <label className='radio'>
                            <input type="radio" name='price' value="6" />Footwear
                        </label>
                    </div>
                </details>
                
            </div>
        )
}

export default ProductFilter