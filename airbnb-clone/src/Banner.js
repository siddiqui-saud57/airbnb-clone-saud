import React,{useState} from 'react';
import "./Banner.css";
import Search from './Search';
import {Button} from "@material-ui/core";

const Banner = () => {
    const [showSearch,setshowSearch] = useState(false);
    return (
        <div>
        <div className="banner__search">
            {showSearch && <Search />}
     <button onClick={() => setshowSearch(!showSearch)}>{showSearch ? "Hide" : "search Dates"}</button>
        </div>
        <div className="banner">
            <img src="/images/banner4.jpg" alt="banner" />
            <div className="banner__section">
            <h1>Get out and stretch your imagination</h1>
            <p>plan a different kind of gateway to uncover the hidden gems near you </p>
            <Button className="banner__btn">Explore nearby</Button>
            </div>
           
        </div>
        </div>
    )
}

export default Banner;
