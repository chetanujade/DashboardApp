
import React from 'react';
import './style.css';
import chevrondown1 from "../images/chevron-down-1.svg"



class Overview extends React.Component{
    render(){
    return <div className="index">
        
    <div className="overview">
          <div className="overlap">
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <img
                  className="chevron-down"
                  alt="Chevron down"
                  src={chevrondown1}
                />
                <div className="text-wrapper-5">Quarterly</div>
              </div>
            </div>
            <div className="text-wrapper-6">Overview</div>
            <div className="text-wrapper-7">Monthly Earning</div>
            <div className="text-wrapper-8">Jan</div>
            <div className="text-wrapper-9">Feb</div>
            <div className="text-wrapper-10">Mar</div>
            <div className="text-wrapper-11">Apr</div>
            <div className="text-wrapper-12">May</div>
            <div className="text-wrapper-13">Jun</div>
            <div className="text-wrapper-14">Jul</div>
            <div className="text-wrapper-15">Aug</div>
            <div className="text-wrapper-16">Sep</div>
            <div className="text-wrapper-17">Oct</div>
            <div className="text-wrapper-18">Nov</div>
            <div className="text-wrapper-19">Dec</div>
            <div className="rectangle" />
            <div className="rectangle-2" />
            <div className="rectangle-3" />
            <div className="rectangle-4" />
            <div className="rectangle-5" />
            <div className="rectangle-6" />
            <div className="rectangle-7" />
            <div className="rectangle-8" />
            <div className="rectangle-9" />
            <div className="rectangle-10" />
            <div className="rectangle-11" />
            <div className="rectangle-12" />
            
          </div>
        </div>
        </div>
       
    }
}

export default Overview;