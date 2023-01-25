import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import './Wishlist.css'

export default class Wishlist extends Component {
    constructor(){
        super();
        this.state = {
            wishlist:[],
            cart:[]
        };
    }
    componentDidMount(){
        let wishlistData = JSON.parse(localStorage.getItem('wishlist'));
        let cartData = JSON.parse(localStorage.getItem('cart'));
        if(wishlistData)
            this.setState({wishlist: wishlistData})
        if(cartData)
            this.setState({cart: cartData})
    }
    componentDidUpdate(cart){
        localStorage.setItem('cart',JSON.stringify(this.state.cart))
    }

    deleteWishlistItem(data,id){
        let deletedList = data.filter((item)=>{
                return(item._id !== id)
            })
        this.setState({wishlist:deletedList});
        localStorage.setItem('wishlist', JSON.stringify(deletedList));
    }
    addCartItem(data){
        let duplicate = this.state.cart.filter((item)=>{
            if(item._id == data._id)
                return 1;
            else
                return 0;
        })
        
        if(data)
            if(duplicate != 1){
                this.setState((prev)=>({
                    cart: [...prev.cart,data]
                }))
                this.deleteWishlistItem(this.state.wishlist,data._id);
            }
            else
                console.log('duplicate') 


        localStorage.setItem('cart',JSON.stringify(this.state.cart));
        console.log(this.state.cart) 
    }

    displayItems  (data)  {
        if(data)
        {
            return data.map((item) => {
                   return <div className='wishlist-item'>
                        <div className='wishlist-img'><img src={item.image} alt=''></img></div>
                        <div className='wishlist-details'>
                            <div className='wishlist-name'>{item.product_name}</div>
                            <div className='wishlist-price'>₹{item.price} <del>₹{item.original_price}</del></div>
                        </div>
                        <div className='delete-btn' onClick={()=>{this.deleteWishlistItem(this.state.wishlist,item._id)}}>
                            <i className="fa-solid fa-trash-can"></i>
                        </div>
                        <div className='add-to-cart' onClick={()=>{this.addCartItem(item)}}>
                            <div className='add-to-cart-btn'>ADD TO CART</div>
                        </div>
                    </div>
                })
            
        }
    }

    render () {
        return(<React.Fragment>
                <Header/>
                <div className='wishlist-page'>
                    <div className='wishlist-heading'>My Wishlist</div>
                    {this.displayItems(this.state.wishlist)}
                    {/* {console.log(this.state.wishlist)} */}
                    {/* {console.log(this.state.cart)} */}
                    <div className='user-data'>
                        <div className='user-details'>
                            <div className='user-image'></div>
                            <div className='user-email'>xyz@gmail.com</div>
                            <div className='user-phone'>123456789</div>
                        </div>
                        
                    </div>
                </div>
        </React.Fragment>);
    }
}