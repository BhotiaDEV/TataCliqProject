import React, { Component } from 'react';
import axios from 'axios';
import './Cart.css'
import Header from '../Header';

const placeOrder = 'https://tatacliqapi.onrender.com/placeOrder';

export default class Cart extends Component {
    constructor(){
        super();
        this.state = {
            cart:[],
            wishlist:[],
            popup:'false',
            id:Math.floor(Math.random()*10000),
            name:'Gaurav',
            email:'gaurav.pal.com',
            original_price:'',
            cost:'0',
            phone:123456897,
            address:'joshimath',
            products:[]
            
        };
    }
    componentDidMount(){
        let cartData = JSON.parse(localStorage.getItem('cart'));
        let wishlistData = JSON.parse(localStorage.getItem('wishlist'));
        if(cartData){
            this.setState({cart: cartData});
        }
        if(wishlistData){
            this.setState({wishlist: wishlistData})
        }
        fetch('https://tatacliqapi.onrender.com/details/3',{method:'GET'})
        .then((res)=>res.json)
        .then((data)=>{

            let totalPrice = 0;
            let originalPrice = 0;
            
                this.state.cart.map((item)=>{
                    totalPrice =  totalPrice + Number(item.price);
                    originalPrice =  originalPrice + Number(item.original_price);
                    // console.log(item)
                    
                })
                // console.log(this.state.order.cost)
            
            this.setState({cost: totalPrice})
            this.setState({original_price: originalPrice})
            console.log(this.state.cost)
            console.log(this.state.cart)
        })
        
    }
    componentDidUpdate(wishlist){
        localStorage.setItem('wishlist',JSON.stringify(this.state.wishlist));
        
    }
    addToWishlist(data){
        let duplicate = this.state.cart.filter((item)=>{
        if(item._id == data._id)
            return 1;
        else
            return 0;
        })
    
        if(data)
            if(duplicate != 1){
                this.setState((prev)=>({
                    wishlist: [...prev.wishlist,data]
                }))
                this.deleteCartItem(this.state.cart,data._id);
            }
            else
                console.log('duplicate') ;

        localStorage.setItem('wishlist', JSON.stringify(this.state.wishlist));
            this.totalprice()
    }
    deleteCartItem(data,id){
        let deletedList = data.filter((item)=>{
            return(item._id !== id)
        })  
        
        this.setState({cart: deletedList});
        localStorage.setItem('cart',JSON.stringify(deletedList));
        this.totalprice();
    }

    renderCartItems(data){
        if(data)
            return data.map((item)=>{
                return  <div className='cart-item' key={item._id}>
                            <div className='cart-item-img'>
                                <img src={item.image} alt=''/>
                            </div>
                            <div className='cart-item-details'>
                                <div className='cart-item-name'>{item.product_name}</div>
                                <div className='cart-item-price'>₹{item.price} <del>₹{item.original_price}</del></div>
                                <div className='cart-item-color'><b>Color:</b> {item.color}</div>
                                <div className='cart-item-size'><b>Size:</b> UK/IND-7.5</div>
                                <div className='delivery-date'>Delivery by <b>20th Jan</b> | <span>FREE</span></div>
                            </div>
                            <div className='save-to-wishlist' onClick={(e)=>{this.addToWishlist(item)}}><i className="fa-solid fa-heart"></i> Save to Wislist</div> 
                            <div className='remove-btn' onClick={(e)=>{this.deleteCartItem(this.state.cart,item._id)}}>Remove</div>
                    </div>
                }
            )
            
            
    }
    totalprice(){
        let totalPrice = 0;
            let originalPrice = 0;
            
                this.state.cart.map((item)=>{
                    totalPrice =  totalPrice + Number(item.price);
                    originalPrice =  originalPrice + Number(item.original_price);
                    // console.log(item)
                })
                // console.log(this.state.order.cost)
            
            this.setState({cost: totalPrice});
            this.setState({original_price: originalPrice});
    }
    checkout(){
        let obj = {
            "id": this.state.id,
            "name": this.state.name,
            "email": this.state.email,
            "original_price": this.state.original_price,
            "cost": this.state.cost,
            "phone": this.state.phone,
            "address": this.state.address,
            "products": this.state.cart
        }
        // let obj = this.state;
        console.log(obj)
        console.log(JSON.stringify(obj))
        
        axios.post(placeOrder,obj)
        .then((response)=>{console.log(response)})
    }

    render () {
        return(
        <React.Fragment>
            <Header/>
            <div className='cart-page'>
                <div className='cart-heading'>
                    <span>My Bag</span>
                    <span className='area-code'></span>
                </div>
                {this.renderCartItems(this.state.cart)}
                <div className='purchase-summary'>
                    <div className='check-coupons'>Check for Coupons</div>
                    <div className='user-address'>
                            <div className='address-head'>Default Address</div>
                            <input id='address' className='address-body' value='house of dragons, Joshimath , Uttrakhand'/>
                            <label htmlFor='address' className='address-label'>Change &rarr;</label>
                            {/* <button className='address-change' onClick={(e)=>this.setState({popup : true})}>Change </button> */}
                            {/* <AddressPopup popup={this.state.popup} onClose={()=>{this.setState({popup:false})}} /> */}
                        </div>
                    <form 
                     action='https://paytm-paymentgateway.onrender.com/paynow' method='POST'
                      className='purchase-details'>
                        <input type='hidden' name = 'id' value={this.state.id}/>
                        <input type='hidden' name = 'cost' value={this.state.cost}/>
                        <input type='hidden' name = 'name' value={this.state.name}/>
                        <input type='hidden' name = 'email' value={this.state.email}/>
                        <input type='hidden' name = 'phone' value={this.state.phone}/>
                        <input type='hidden' name = 'product' value={this.state.cart}/>
                        <div className='purchase-details-item'>
                            <span>Bag Total</span>
                            <span className='bag-total'>₹{this.state.original_price}</span>
                        </div>
                        <div className='purchase-details-item'>
                            <span>Shipping Charge</span>
                            <span className='shipping-charges'>FREE</span>
                        </div>
                        <div className='purchase-details-item'> 
                            <span>Bag Subtotal</span>
                            <span className='bag-subtotal'>₹{this.state.original_price}</span>
                        </div>
                        <div className='purchase-details-item'> 
                            <span>Product Discount(s)</span>
                            <span className='product-discount'>-₹{this.state.original_price - this.state.cost}</span>
                        </div>
                        <div className='purchase-details-item'>
                            <span className='savings'>You will save ₹{this.state.original_price - this.state.cost}.00 on this order</span>
                        </div>
                        <div className='checkout'>
                            <div className='total'>
                                <div>Total</div>
                                <span className='total-payment'>₹ {this.state.cost}{console.log(this.state.cost)}</span>
                            </div>
                            
                            <button className='checkout-btn' onClick={()=>{this.checkout()}}>Checkout</button>
                        </div>
                    </form>
                    
                    <div className='warning'></div>
                </div>
            </div>
        </React.Fragment>
        );
    }
}