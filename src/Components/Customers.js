import React from 'react';
import './style.css';

import elipse6 from "../images/ellipse-6.svg";
import  elipse7 from "../images/ellipse-7.svg";




class Customers extends React.Component{
    render(){
        return <div className="index">
           
<div className="customers">
          <div className="overlap-2">
            <div className="text-wrapper-6">Customers</div>
            <div className="text-wrapper-21">Customers that buy products</div>
            <div className="overlap-group-3">
              
              <div className="ellipse" />
              <img
              
                className="ellipse-2"
                alt="Ellipse"
                src={elipse6}
              />
              <img
                className="ellipse-3"
                alt="Ellipse"
                src={elipse7}
              />
              <p className="element-total-new">
                <span className="text-wrapper-22">
                  65%
                  <br />
                </span>
                <span className="text-wrapper-23">Total New Customers</span>
              </p>
            </div>
          </div>
        </div>
        </div>
       
    }
}
export default Customers;