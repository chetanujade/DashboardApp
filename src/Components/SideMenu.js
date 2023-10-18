import React from 'react';
import './style.css';
import ProfilePicture from "../images/ProfilePicture.jpg";
import icon24outlinekeysquare from "../images/icon---24---outline---key-square.svg";
import d3square1 from "../images/3d-square-1.svg";
import chevronright2 from "../images/chevron-right-2.svg";
import usersquare1 from "../images/user-square-1.svg";
import walletmoney2 from "../images/wallet-money-2.svg";
import discountshape1 from "../images/discount-shape-1.svg";
import messagequestion1 from "../images/message-question-1.svg";
import chevrondown2 from "../images/chevron-down-2.svg";
import newlogo1 from "../images/newlogo1.png";






class SideMenu extends React.Component{
    render(){
    return <div className="index">
        <div className="side-menu">
         
          <div className="overlap-6">
          
            <div className="list-menu-wrapper">
            
              <div className="list-menu">
                <img
                  className="img-3"
                  alt="Icon outline key"
                  src={icon24outlinekeysquare}
                />
                <div className="text-wrapper-36">Dashboard</div>
              </div>
            </div>
            <div className="list-menu-2">
              <img
                className="img-3"
                alt="Element square"
                src={d3square1}
              />
              <div className="text-wrapper-37">Product</div>
              <img
                className="chevron-right"
                alt="Chevron right"
                src={chevronright2}
              />
            </div>
            <div className="list-menu-3">
              <img
                className="img-3"
                alt="User square"
                src={usersquare1}
              />
              <div className="text-wrapper-37">Customers</div>
              <img
                className="chevron-right"
                alt="Chevron right"
                src={chevronright2}
              />
            </div>
            <div className="list-menu-4">
              <img
                className="img-3"
                alt="Wallet money"
                src={walletmoney2}
              />
              <div className="text-wrapper-37">Income</div>
              <img
                className="chevron-right"
                alt="Chevron right"
                src={chevronright2}
              />
            </div>
            <div className="list-menu-5">
              <img
                className="img-3"
                alt="Discount shape"
                src={discountshape1}
              />
              <div className="text-wrapper-37">Promote</div>
              <img
                className="chevron-right"
                alt="Chevron right"
                src={chevronright2}
              />
            </div>
            <div className="list-menu-6">
              <img
                className="img-3"
                alt="Message question"
                src={messagequestion1}
              />
              <div className="text-wrapper-37">Help</div>
              <img
                className="chevron-right"
                alt="Chevron right"
                src={chevronright2}
              />
            </div>
            <img
              className="ellipse-4"
              alt="Ellipse"
              src= {ProfilePicture}

            />
            <div className="group-16">
              <div className="overlap-group-5">
                <div className="text-wrapper-38">Chetan Ujade</div>
                <div className="text-wrapper-39">FullStack Developer</div>
              </div>
            </div>
            <img
              className="chevron-down-3"
              alt="Chevron down"
              src={chevrondown2}
            />
            
            <div className="group-17">
              <div className="text-wrapper-41">Dashboard</div>
              <img
                className="setting"
                alt="Setting"
                src={newlogo1}
              />
            </div>
           
          </div>
          </div>
        </div>
        
    
 
    }
}
export default SideMenu;