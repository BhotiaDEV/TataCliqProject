import React, { useEffect, useState } from "react";
import "./DetailsPage.css";

const DetailsDisplay = (props) => {
  const [wishlist,setWishlist] = useState([]);

  useEffect(() => {
    let olddata = JSON.parse(localStorage.getItem('wishlist'));
    if(olddata){
      setWishlist(olddata);
    }
  },[]);

  useEffect(() => {
    localStorage.setItem('wishlist',JSON.stringify(wishlist))
  },[wishlist])
  
  const handleOnClick = (newdata) => {
    const duplicate =  wishlist.filter((item)=>{
          if(item._id == newdata._id)
            return 1;
          else
            return 0;
    })
    if(duplicate == 0){
      setWishlist((previousData)=>{
        return([...previousData,newdata])
      })
    }
    else{
      console.log('duplicate item')
    }
    console.log(wishlist)
  }

  const details = ({ productdata }) => {
    if (productdata) {
      return productdata.map((item) => {
        if (item.size)
          return (
            <div id="product-info" key={item._id}>
              <div className="product-image">
                <img
                  src={item.image}
                  alt="matus-hatala-p-Fzxa-Khd-FME-unsplash"
                  border="0"
                />
              </div>
              <div className="product-details">
                <div className="product-brand" value={item._id}>
                  <span>{item.brand}</span>
                </div>
                <div className="product-name">{item.product_name}</div>
                <div className="product-price">
                  <span>&#8377;{item.original_price} </span>
                  <del>MRP: &#8377;{item.price}</del>
                  <span className="product-discount">
                    ({item.discount}% off)
                  </span>
                </div>
                <span className="product-rating">{item.rating} &#9733;</span>
                <span className="product-review">{item.reviews} rating</span>
                <div className="product-offers">
                  <div className="offer-header">AVAILABLE OFFERS</div>
                  {
                    // console.log(this.props)
                    item.offers.map((data) => {
                      return (
                        <div className="available-offers">
                            <div className="offer-icon"></div>
                            <div className="about-offer">
                              <div className="offer-details">{data.offer}</div>
                              <div className="offer-coupon">{data.coupon}</div>
                            </div>
                          </div>
                      );
                    })
                  }
                </div>
                <div className="product-color">
                  <div className="color-header">
                    Colour
                    <span>:{item.color}</span>
                  </div>
                  <div className="colour-image"></div>
                </div>

                <div className="product-size">
                  {item.size.map((data) => {
                    return (
                      <>
                        <div className="sizes">{data}</div>
                      </>
                    );
                  })}
                </div>
                <div className="buy-now">
                <button onClick={()=>{props.history.push('/wishlist')}}>Wishlist</button>
                 </div>
                <div className="add-to-wishlist">
                  <button onClick={()=>{handleOnClick(item)}}>ADD TO WISHLIST</button>
                </div>
                <div className="seller-details">
                  <span>Sold directly by</span>
                  <span className="address">{item.seller}</span>
                </div>
                <div className="shipping-address">
                  <span>Ship To</span>
                  <input type="text" id="pincode" placeholder="Delhi,110001" />
                  <label htmlFor="pincode">Change</label>
                </div>
                <div className="additional-details"></div>
              </div>
            </div>
          );
        else
          return (
            <div id="product-info" key={item._id}>
              <div className="product-image">
                <img
                  src={item.image}
                  alt="matus-hatala-p-Fzxa-Khd-FME-unsplash"
                  border="0"
                />
              </div>
              <div className="product-details">
                <div className="product-brand" value={item._id}>
                  <span>{item.brand}</span>
                </div>
                <div className="product-name">{item.product_name}</div>
                <div className="product-price">
                  <span>&#8377;{item.original_price} </span>
                  <del>MRP: &#8377;{item.price}</del>
                  <span className="product-discount">
                    ({item.discount}% off)
                  </span>
                </div>
                <span className="product-rating">{item.rating} &#9733;</span>
                <span className="product-review">{item.reviews} rating</span>
                <div className="product-offers">
                  <div className="offer-header">AVAILABLE OFFERS</div>
                  {
                    // console.log(this.props)
                    item.offers.map((data) => {
                      return (
                        <>
                          <div className="available-offers">
                            <div className="offer-icon"></div>
                            <div className="about-offer">
                              <div className="offer-details">{data.offer}</div>
                              <div className="offer-coupon">{data.coupon}</div>
                            </div>
                          </div>
                        </>
                      );
                    })
                  }
                </div>
                <div className="product-color">
                  <div className="color-header">
                    Colour
                    <span>:{item.color}</span>
                  </div>
                  <div className="colour-image"></div>
                </div>
                <div className="buy-now">
                  <button onClick={()=>{props.history.push('/wishlist')}}>Wishlist</button>
                </div>
                <div className="add-to-wishlist">
                  <button onClick={()=>{handleOnClick(item)}} >ADD TO WISHLIST</button>
                </div>
                <div className="seller-details">
                  <span>Sold directly by</span>
                  <span className="address">{item.seller}</span>
                </div>
                <div className="shipping-address">
                  <span>Ship To</span>
                  <input type="text" id="pincode" placeholder="Delhi,110001" />
                  <label htmlFor="pincode">Change</label>
                </div>
                <div className="additional-details"></div>
              </div>
            </div>
          );
      });
    }
    else{
      return(
        <ul className="loader">
          <li>L</li>
          <li>O</li>
          <li>A</li>
          <li>D</li>
          <li>I</li>
          <li>N</li>
          <li>G</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
        </ul>
      )
    } 
  };
  return <>{details(props)}</>;
};
export default DetailsDisplay;
