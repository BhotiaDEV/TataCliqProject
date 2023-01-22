import React, {Component } from "react";
import DetailsDisplay from "./DetailsDisplay";
import "./DetailsPage.css";

let detailsurl = "https://tatacliqapi.onrender.com/details";
// "https://tatacliqapi.onrender.com/filter/1?lcost=1000&&hcost=10000&&brandId=2";

class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productdetails: [],
    };
  }

  renderProduct = (data) => {
    if (data) {
      return data.map((item) => {
        if (item.size)
          return (
            <>
              <div className="product-image">
                <img
                  src={item.image}
                  alt="matus-hatala-p-Fzxa-Khd-FME-unsplash"
                  border="0"
                />
                {/* <div className="image-list">
                  <img
                    src="https://i.ibb.co/N6PhS3Y/rayban-glasses.jpg"
                    alt="rayban-glasses"
                    border="0"
                  />
                  <img
                    src="https://i.ibb.co/N6PhS3Y/rayban-glasses.jpg"
                    alt="rayban-glasses"
                    border="0"
                  />
                  <img
                    src="https://i.ibb.co/N6PhS3Y/rayban-glasses.jpg"
                    alt="rayban-glasses"
                    border="0"
                  />
                </div> */}
              </div>
              <div className="product-details">
                <div className="product-brand" value={item._id}>
                  <span>{item.brand}</span>
                </div>
                <div className="product-name">{item.product_name}</div>
                <div className="product-price">
                  <span>&#8377;{item.original_price} </span>{" "}
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
                  <button>BUY NOW</button>
                </div>
                <div className="add-to-cart">
                  <button>ADD TO BAG</button>
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
            </>
          );
        else
          return (
            <>
              <div className="product-image">
                <img
                  src={item.image}
                  alt="matus-hatala-p-Fzxa-Khd-FME-unsplash"
                  border="0"
                />
                <div className="image-list">
                  <img
                    src="https://i.ibb.co/N6PhS3Y/rayban-glasses.jpg"
                    alt="rayban-glasses"
                    border="0"
                  />
                  <img
                    src="https://i.ibb.co/N6PhS3Y/rayban-glasses.jpg"
                    alt="rayban-glasses"
                    border="0"
                  />
                  <img
                    src="https://i.ibb.co/N6PhS3Y/rayban-glasses.jpg"
                    alt="rayban-glasses"
                    border="0"
                  />
                </div>
              </div>
              <div className="product-details">
                <div className="product-brand" value={item._id}>
                  <span>{item.brand}</span>
                </div>
                <div className="product-name">{item.product_name}</div>
                <div className="product-price">
                  <span>&#8377;{item.original_price} </span>{" "}
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
                  <button>BUY NOW</button>
                </div>
                <div className="add-to-cart">
                  <button>ADD TO BAG</button>
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
            </>
          );
      });
    }
  };

  handleOnClick() {}
  componentDidMount() {
    let productId = this.props.match.params.product_id;
    fetch(`${detailsurl}/${productId}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ productdetails: data });
      });
  }
  render() {
    // detailsurl = "https://tatacliqapi.onrender.com/details/{this.props}";
    // console.log(this.props);
    return (
      <>
        <main>
          <DetailsDisplay productdata={this.state.productdetails} />
        </main>
      </>
    );
  }
}
export default DetailsPage;
