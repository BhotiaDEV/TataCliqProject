import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const userinfourl = 'https://loginapilive.onrender.com/api/auth/userInfo'

class Header extends Component {
  constructor() {
    super();
    this.state = {
      loginToken:'',
      userData:''
    };
  }
  // darkmode() {
  //   var toggleicon = document.getElementById("toggle-icon");
  //   document.body.classList.toggle("dark-theme");
  //   if (document.body.classList.contains("dark-theme")) {
  //     toggleicon.classList.remove("fa-moon");
  //     toggleicon.classList.add("fa-sun");
  //   } else {
  //     toggleicon.classList.remove("fa-sun");
  //     toggleicon.classList.add("fa-moon");
  //   }
  // }

  search = (e) => {
    // this.props.history.push('/listing')
    
    let text = e.target.value;
    this.props.userInput(e.target.value);
  };
  handleLogout(){
    sessionStorage.removeItem('loginToken');
    this.setState({userData:''});
    this.props.history.push('/')
  }
  handleLoginbtn(){
    if(this.state.userData.name){
                return ( <>
                    <a href="/" className="topbar-item">
                      <i className="fa-solid fa-right-to-bracket" onClick={()=>this.handleLogout()}></i>
                    </a>
                    <div  className="topbar-item">
                      <div>
                      <i className="fa-solid fa-user"></i>
                      <span style={{
                        'padding':'10px 5px',
                        'fontWeight':'300'
                        }}>
                        Hi {this.state.userData.name.split(' ')[0]}
                      </span>
                      </div>
                    </div>
                </>
                )
    }
    else {
      return ( <>
        <Link to={`/login`} className="topbar-item">
            <div>
              <i className="fa-solid fa-user"></i>
              <span style={{
                'padding':'10px 3px',
                'fontWeight':'300'
                }}>
                  Login
              </span>
            </div>
        </Link>
    </>
    )
    }
  }
  componentDidMount(){
    fetch(userinfourl,{
      method: 'GET',
      headers:{
        'x-access-token': sessionStorage.getItem('loginToken')
      }
    })
    .then((res)=>res.json())
    .then((data)=>{
      this.setState({userData: data})
    })
  }
  componentDidUpdate(userData){
  }
  render() {
    return (
      <React.Fragment>
        <header>
          <div id="nav">
            <div className="brand-name">
              <Link to={`/`}>
                <div className="logo">
                  <img
                    src="https://i.ibb.co/XZBcHWX/tatacliqlogo2.png"
                    alt="tatacliqlogo2"
                    border="0"
                    />
                </div>
              </Link>
            </div>
            <div className="nav-options">
              <div className="topbar">
                <a
                  href="/"
                  // onClick={this.darkmode()}
                  id="togglebtn"
                  className="topbar-item"
                >
                  <i id="toggle-icon" className="fa-solid fa-moon"></i>
                </a>
                
                {this.handleLoginbtn()}
              </div>
              <div className="bottombar">
                <div className="search">
                  <Link to={`/listing/1`}>
                    <input
                      onChange={this.search}
                      type="text"
                      placeholder="Search for brands"
                      />
                  </Link>
                  <div className="search-icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
                {/* <ul className="cart"> */}
                  <li className="your-cart">
                    <Link to={`/cart`}>
                      <i className="fa-solid fa-cart-shopping"></i>
                      <span> Cart</span>
                    </Link>
                  </li>
                  <li className="wishlist">
                    <Link to={`/wishlist`}>
                      <i className="fa-solid fa-heart"></i>
                      <span> Wishlist</span>
                    </Link>
                  </li>
                {/* </ul> */}
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
