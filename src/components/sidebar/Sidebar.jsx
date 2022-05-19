import React from 'react';
import "./sidebar.scss";
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import ReportIcon from '@mui/icons-material/Report';
import DeleteIcon from '@mui/icons-material/Delete';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const totalInbox = useSelector((state)=>
        state.items.filter((item)=>item.tag==="inbox")
    );
    

    return (
        <div className="sidebarContainer">
            <div className="sidebarWrapper">
                <div className="sidebarTop">
                    <div className="sidebarTopBox">
                        <AddIcon className="topIcon" />
                        <span className="topText">Compose</span>
                    </div>
                </div>
                <div className="sidebarBottom">
                    <NavLink 
                        to="/mail/inbox"
                        className={({isActive})=>
                            isActive?"active":" "
                        }
                    >
                        <div className="sidebarRow">
                            <InboxIcon className="bottomIcon" />
                            <span className="bottomText">Inbox</span>
                            <span className="totalCount">{totalInbox.length}</span>
                        </div>
                    </NavLink>
                    <NavLink 
                        to="/mail/draft"
                        className={({isActive})=>
                            isActive?"active":" "
                        }
                    >
                        <div className="sidebarRow">
                            <DraftsIcon className="bottomIcon" />
                            <span className="bottomText">Draft</span>
                        </div>
                    </NavLink>
                    <NavLink 
                        to="/mail/spam"
                        className={({isActive})=>
                            isActive?"active":" "
                        }
                    >
                        <div className="sidebarRow">
                            <ReportIcon className="bottomIcon" />
                            <span className="bottomText">Spam</span>
                        </div>
                    </NavLink>
                    <NavLink 
                        to="/mail/trash"
                        className={({isActive})=>
                            isActive?"active":" "
                        }
                    >
                        <div className="sidebarRow">
                            <DeleteIcon className="bottomIcon" />
                            <span className="bottomText">Trash</span>
                        </div>
                    </NavLink>
                    <div className="sidebarRow">
                        <ExpandMoreIcon className="bottomIcon" />
                        <span className="bottomText">More</span>
                    </div>
                </div>
                <div className="sidebarExtra">
                    <span className="extraText">Meet</span>
                    <div className="sidebarRow">
                        <VideocamIcon className="bottomIcon" />
                        <span className="bottomText">New meeting</span>
                    </div>
                    <div className="sidebarRow">
                        <KeyboardIcon className="bottomIcon" />
                        <span className="bottomText">Join a meeting</span>
                    </div>
                </div>
                <div className="sidebarExtra2">
                    <span className="extraText">Hangouts</span>
                    <div className="bottomExtraRow">
                        <AccountCircleIcon className="bottomExtraIcon2" />
                        <span className="bottomExtraText">Codemancers</span>
                        <ArrowDropDownIcon className="bottomSmall" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar