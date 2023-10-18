
import React from 'react';
import './style.css';
import line2 from "../images/line-2.svg";
import moneyrecive1 from "../images/money-recive-1.svg";
import arrowup1 from "../images/arrow-up-1.svg";
import walletmoney1 from "../images/wallet-money-1.svg"
import arrowup11 from "../images/arrow-up-1-1.svg"
import bag21 from "../images/bag-2-1.svg"
import arrowup12 from "../images/arrow-up-1-2.svg"


class Earning extends React.Component{
    render(){
        return <div className="index">
           
        <div className="earning">
          <div className="overlap-group">
            <div className="group">
              <div className="group-2">
                <div className="text-wrapper">Earning</div>
                <div className="text-wrapper-2">$198k</div>
                <div className="money-recive-wrapper">
                  <img
                    className="img"
                    alt="Money recive"
                    src={moneyrecive1}
                  />
                </div>
                <div className="group-3">
                  <p className="p">
                    <span className="span">37.8%</span>
                    <span className="text-wrapper-3"> this month</span>
                  </p>
                  <img
                    className="arrow-up"
                    alt="Arrow up"
                    src={arrowup1}
                  />
                </div>
              </div>
              <div className="group-4">
                <div className="text-wrapper">Balance</div>
                <div className="text-wrapper-2">$2.4k</div>
                <div className="wallet-money-wrapper">
                  <img
                    className="img"
                    alt="Wallet money"
                    src={walletmoney1}
                  />
                </div>
                <div className="group-5">
                  <p className="p">
                    <span className="text-wrapper-4">2%</span>
                    <span className="text-wrapper-3"> this month</span>
                  </p>
                  <img
                    className="arrow-up"
                    alt="Arrow up"
                    src={arrowup11}
                  />
                </div>
              </div>
              <div className="group-6">
                <div className="text-wrapper">Total Sales</div>
                <div className="text-wrapper-2">$89k</div>
                <div className="bag-wrapper">
                  <img
                    className="bag"
                    alt="Bag"
                    src={bag21}
                  />
                </div>
                <div className="group-7">
                  <p className="p">
                    <span className="span">11%</span>
                    <span className="text-wrapper-3"> this week</span>
                  </p>
                  <img
                    className="arrow-up"
                    alt="Arrow up"
                    src={arrowup12}
                  />
                </div>
              </div>
              <img
                className="line"
                alt="Line"
                src={line2}
              />
              <img
                className="line-2"
                alt="Line"
                src={line2}
              />
            </div>
          </div>
        </div>
    </div>
    
    }

}
export default Earning;

