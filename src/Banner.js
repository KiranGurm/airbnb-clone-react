// import React from 'react' have to delete it as we are loading it in below import where we use hooks;
import React, {useState} from 'react';
import './Banner.css';
import Search from './Search';
import { Button } from '@material-ui/core';

import {useHistory} from "react-router-dom";

function Banner() {

  /* to make a link to the search page inBUTTON*/
  const history=useHistory();
/* because we want to change "search dates" to "hide" when we click on "search dates"*/
const [showSearch, setShowSearch] = useState(false);

  return (
    <div className='banner'>
        <div className='banner__search'>
            {showSearch && <Search/>}

               <Button onClick={()=>
                 setShowSearch(!showSearch)
               } className="banner__searchButton" variant='outlined'>{showSearch?"Hide":"SearchDates"}</Button>

        </div>
        <div className="banner_info">
            <h1>Get out and stretch your imagination</h1>
            <h5>
               Plan a different kind of
               getaway to uncover the hidden gems
               near you.</h5>

              <Button variant='outlined' onClick={() => history.push("/search")}>Explore Nearby</Button>

        </div>

    </div>
  )
}

export default Banner
