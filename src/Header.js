import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import {Link} from "react-router-dom"




function Header()

{
  return (


  /* Header airbnb logo */
    <div className="header">
    <Link to="/">
      <img className="header_icon" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="" />
   </Link>
{/* header centre ,that is, the search option*/}


      <div className="header_center">
            <input type="text" placeholder="Search"/>
 {/* For search icon, we are using material UI, to install it => go to terminal and write npm install @material-ui/core and
    then for icons install npm install @material-ui/icons. n
    Next step is to search for the icon on materialui.com and import the icon
    */}
          <SearchIcon/>
        </div>

{/* header right ,that is, become a host etc*/}
        <div className="header_right">
        <p>Become a Host</p>
        <LanguageIcon/>
        <ExpandMoreIcon/>
        <Avatar/>


        </div>


  </div>

  )
}

export default Header
