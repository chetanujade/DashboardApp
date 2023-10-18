import React from 'react';
import './style.css';
import search1 from "../images/search-1.svg"


class Search extends React.Component{
    render(){
    return <div className="index">

<div className="search-2">
<div className="overlap-5">
  <input className="input" placeholder="Search" type="text" />
  <img
    className="search"
    alt="Search"
    src={search1}
  />
</div>
</div>
</div>
    }
}
export default Search;