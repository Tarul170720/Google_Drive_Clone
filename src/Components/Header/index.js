import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import '../../Styles/Header.css';

export const index = () => {
    return (
        <div className='header'> 
           <div className='header__logo'>
                <img src="data:image/png;base64,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" alt=""/>
                <span>Drive</span>
            </div>
            <div className="header__searchContainer">
               
                <div className="header__searchBar">
                    <SearchIcon />
                    <input type='text' placeholder='Search in Drive'/>
                    <ExpandMoreIcon/>
                </div>
            </div>
            <div className='header__icon'>
                <span>
                    <HelpOutlineIcon/>
                    <SettingsIcon/>
                </span>

                <AppsIcon />
                <img src="" alt="User Photo"/>
            </div>
            
 
        </div>
    )
}
 export default index;