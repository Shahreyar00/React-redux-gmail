import React from 'react';
import "./header.scss";
import logoGmail from "../../assets/logoGmail.png";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';


const Header = ({setSearchText}) => {
    return (
        <div className="headerContainer">
            <div className="headerLeft">
                <div className="iconContainer"> 
                    <MenuIcon className="Icon" />
                </div>
                <img 
                    src={logoGmail} 
                    alt="Gmail Logo" 
                />
            </div>
            <div className="headerMiddle">
                <div className="inputContainer">
                    <div className="iconContainer">                     
                        <SearchIcon className="Icon" />
                    </div>
                    <input 
                        type="text" 
                        placeholder="Search Mail"  
                        onChange={(e)=>setSearchText(e.target.value)}  
                    />
                    <div className="iconContainer">                     
                        <TuneIcon className="Icon" />
                    </div>
                </div>
            </div>
            <div className="headerRight">
                <div className="rightIconContainer">
                    <div className="iconContainer">                     
                        <HelpOutlineOutlinedIcon className="Icon" />               
                    </div>
                    <div className="iconContainer">                     
                        <SettingsOutlinedIcon className="Icon" />                  
                    </div>
                    <div className="iconContainer">                     
                        <AppsOutlinedIcon className="Icon" />                       
                    </div>
                    <div className="avatar">
                        <img src="https://lh3.googleusercontent.com/a/AATXAJxo8xrVWhNC5h66Lo_G3RUoooXdaGZkCuh8pUWv=s96-c" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header