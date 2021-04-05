import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Link} from "react-router-dom";



const Header = () => {
    return (
         <div className="header">
            <div className="header__logo">
                <Link to="/">
                <img src="/images/logo1.jpg" alt="pic"/>
                </Link>
            </div> 
            <div className="header__search">
                <input type="text" />
                <SearchIcon />
            </div>
            <div className="header__icon">
         <h1>Become a host</h1>
        <LanguageIcon /> 
        <ExpandMoreIcon />
        <AccountCircleIcon />
            </div>
        </div>   
    )
}

export default Header
