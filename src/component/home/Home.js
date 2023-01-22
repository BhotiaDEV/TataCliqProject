import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./Home.css";

const brandurl = "https://tatacliqapi.onrender.com/brands";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      branddata: [],
      length:"",
      col4:[],
      col2:[]
    };
  }

  renderCol4 = (data) =>{
    if(data)
    return data.map((item) => {
      return (
        <Link to ={`/listing/${item.category_id}?brandId=${item.brand_id}`}>
          <div className="card-item-col-4" key={item.brand_id}>
            <img src={item.brand_img} alt="" />
            <div className="card-details">
              <div className="jumbotron">
                <h2>{item.brand}</h2>
                <p>{item.category}</p>
              </div>
            </div>
          </div>
        </Link>
     );
   })
  }
  renderCol2 = (data) =>{
    if(data){
    return data.map((item) => {
      return (
        <Link to ={`/listing/${item.category_id}?brandId=${item.brand_id}`}>
            <div className="card-item-col-2" key={item.brand_id}>
                    <img src={item.brand_img} alt="" />
                    <div className="card-details">
                      <div className="jumbotron">
                        <h2>{item.brand} {item.category}</h2>
                        <p>up to {item.brand_offers}% off</p>
                      </div>
                    </div>
            </div>
        </Link>
     );
   })
  }
  }
  

  componentDidMount() {
    fetch(brandurl, { method: "GET" })
    .then((res) => res.json())
    .then((data) => {
      this.setState({ branddata: data });
      this.setState({col4: data.sort(() => 0.5 - Math.random()).slice(0,4)})   
      this.setState({col2: data.sort(() => 0.5 - Math.random()).filter((item)=>{return item.brand_offers >= 40}).slice(0,4)})   
      
      });
  }
  getRandom = (data)=>{
    this.setState({random : data.sort(() => 0.5 - Math.random()).slice(0,4)})   
      
  }

  render() {
    
    return (
      <React.Fragment>
        <main>
         {console.log(this.state.branddata)} 
          <div className="banner">
            {/* <!-- Carousel --> */}
            <div
              id="carouselExampleIndicators"
              className="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="4"
                  aria-label="Slide 0"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://i.ibb.co/wdj62QX/homepage-desktop.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://i.ibb.co/QmrKn2B/35151849979934.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://i.ibb.co/CB096km/34933387493406.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://i.ibb.co/tPwRWHQ/34933387427870.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://i.ibb.co/FJs7Bk3/34933387362334.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="featured-discounts">
            <div className="">
              <div className="d-flex justify-content-center">
                <div className="discount-type">
                  <img
                    className="discount-type-img"
                    src="https://i.ibb.co/0FCJpF8/34921325527070.jpg"
                    alt="34921325527070"
                    border="0"
                  />
                </div>
                <div className="discount-type">
                  <img
                    className="discount-type-img"
                    src="                   https://i.ibb.co/VpZp5hc/34921325461534.jpg"
                    alt="34921325461534"
                    border="0"
                  />
                </div>
                <div className="discount-type">
                  <img
                    className="discount-type-img"
                    src="https://i.ibb.co/dt1dpP0/34921325395998.jpg"
                    alt="34921325395998"
                    border="0"
                  />
                </div>
                <div className="discount-type">
                  <img
                    className="discount-type-img"
                    src=" https://i.ibb.co/kqyk6wz/34921325330462.jpg"
                    alt="34921325330462"
                    border="0"
                  />
                </div>
                <div className="discount-type">
                  <img
                    className="discount-type-img"
                    src="https://i.ibb.co/Z6XJMjz/34921325264926.jpg"
                    alt="34921325264926"
                    border="0"
                  />
                </div>
                <div className="discount-type">
                  <img
                    className="discount-type-img"
                    src="https://i.ibb.co/0ZFVTPz/34921325199390.jpg"
                    alt="34921325199390"
                    border="0"
                  />
                </div>
                <div className="discount-type">
                  <img
                    className="discount-type-img"
                    src="https://i.ibb.co/KKwRybN/34921325133854.jpg"
                    alt="34921325133854"
                    border="0"
                  />
                </div>
              </div>
              <div className="col-2"></div>
            </div>
          </div>
          <div className="deals-wheel">
            <div className="container">
              <div className="cards-section">
                <div className="heading">Popular Brands</div>
                <div className="sub-heading">Your favourites at a CLiQ</div>
                <div className="cards">
                  {this.renderCol4(this.state.col4)}
                </div>
              </div>
            </div>
          </div>
          <div className="featured-brand">
            <div className="container">
              <div className="cards-section">
                <div className="heading">Featured Brands</div>
                <div className="sub-heading">
                  Celebrating the Brands in spotlight
                </div>
                <div className="cards">
                  {this.renderCol2(this.state.col2)}
                </div>
              </div>
            </div>
          </div>
          <Link to={`/listing/6`}>
            <div className="all-about-shoes">
              <div className="container">
                <div className="cards-section">
                  <div className="heading">All about shoes</div>
                  <div className="sub-heading">Hype worthy add-ons to buy</div>
                  <div className="cards">
                    <div className="card-item-col-1">
                      <div className="slide-details">
                        <span>Walk with pride</span>
                        <p>Enjoy the new exclusive footwear collections</p>
                      </div>
                      <img
                        src="https://i.ibb.co/tJDkrSH/revolt-164-6w-VEHf-I-unsplash.jpg"
                        alt=""
                        />
                    </div>
                  </div>
                </div>
              </div>
            </div>
</Link>

          <div className="new-arrivals"></div>
          <div className="trending"></div>
          <div className="highlight"></div>
          <div className="popular"></div>
        </main>
      </React.Fragment>
    );
  }
}

export default Home;
