import React from 'react';
import './style.css';
import unsplashwh2fhl0veo from "../images/unsplash-wh2fhl0v-eo.svg"
import unsplasha2jnamzag from "../images/unsplash-a2j--namzag.svg"
import line4 from "../images/line-4.svg"
import search1 from "../images/search-1.svg"
import chevrondown1 from "../images/chevron-down-1.svg"



class Product extends React.Component{
    render(){
    return <div className="index">

<div className="product">
          <div className="overlap-3">
            <div className="text-wrapper-24">Product Sell</div>
            <div className="group-9">
              <div className="text-wrapper-25">32 in stock</div>
              <div className="text-wrapper-26">$ 45.99</div>
              <div className="text-wrapper-27">20</div>
              <div className="group-10">
                <div className="text-wrapper-28">Abstract 3D</div>
                <p className="text-wrapper-29">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <img
                  className="img-2"
                  alt="Unsplash eo"
                  src={unsplashwh2fhl0veo}
                />
              </div>
            </div>
            <div className="group-11">
              <div className="text-wrapper-28">Sarphens Illustration</div>
              <div className="text-wrapper-25">32 in stock</div>
              <div className="text-wrapper-26">$ 45.99</div>
              <div className="text-wrapper-27">20</div>
              <p className="text-wrapper-29">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <img
                className="img-2"
                alt="Unsplash namzag"
                src={unsplasha2jnamzag}
              />
            </div>
           
            
            <div className="group-14">
              <div className="group-15">
                <div className="text-wrapper-30">Product Name</div>
                <div className="text-wrapper-31">Stock</div>
                <div className="text-wrapper-32">Price</div>
                <div className="text-wrapper-33">Total Sales</div>
              </div>
              <img
                className="line-3"
                alt="Line"
                src={line4}
              />
            </div>
            <div className="div-wrapper">
              <div className="overlap-group-4">
                <div className="text-wrapper-34">Search</div>
                <img
                  className="search"
                  alt="Search"
                  src={search1}
                />
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-4">
                <img
                  className="chevron-down-2"
                  alt="Chevron down"
                  src={chevrondown1}
                />
                <div className="text-wrapper-35">Last 30 days</div>
              </div>
            </div>
          </div>
        </div>
        </div>
        
    }
}
export default Product;