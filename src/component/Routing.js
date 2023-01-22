import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ViewBooking from "./Booking/ViewBooking";
import Cart from "./cart/Cart";
import DetailsPage from "./detailspage/DetailsPage";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./home/Home";
import ListingPage from "./listingpage/ListingPage"
import Login from "./Login/Login";
import Register from "./Login/Register";
import Wishlist from "./wishlist/Wishlist";

const Routing = () => {
  
  const [input,setInput] = useState('');
  // const filterData (data) => {
  //   let output = data.filter((item)=>{
  //     return(item.product_name.toLowerCase().indexOf(input.toLowerCase())>-1)
  //   })
  //   setSearch(output)
  // }
  return (
    <BrowserRouter>
      <Header userInput={(data)=>{setInput(data)}}/>
      {/* {console.log(input)} */}
      <Route exact path="/" component={Home} />
      <Route path="/listing/:category_id" render={(props)=> <ListingPage {...props} /> }/>
      {/* <Route path="/listing/:category_id"><ListingPage input = {input}/></Route> */}
      <Route path="/details/:product_id" component={DetailsPage} />
      <Route path="/wishlist" component={Wishlist} />
      <Route path="/Cart" component={Cart} />
      <Route path="/ViewBooking" component={ViewBooking} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Footer />
    </BrowserRouter>
  );
};
export default Routing;
