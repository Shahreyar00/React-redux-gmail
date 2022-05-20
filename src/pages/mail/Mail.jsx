import React, { useEffect, useState } from 'react';
import "./mail.scss";
import Mailtop from '../../components/mailtop/Mailtop';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ReplyIcon from '@mui/icons-material/Reply';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import ForwardIcon from '@mui/icons-material/Forward';


const Mail = () => {
    const location = useLocation();
    const val = location.pathname.split("/")[3];
    const items = useSelector((state)=>state.items);
    const [mail, setMail] = useState([]);

    useEffect(()=>{
        const filteredItem = items.filter((item)=>
            item.id === items[val-1].id 
        )
        setMail(filteredItem[0]);
    },[location,items,val])

    return (
        <div className="mailContainer">
            <div className="mailWrapper">
                <Mailtop />
                <div className="mailTop">
                    <div className="mailTopLeft">
                        <span className="mailTopSub">{mail.subject}</span>
                    </div>
                    <div className="mailTopRight">
                        <div className="mailIconBox">
                            <LocalPrintshopIcon className="mailIcon" />
                        </div>
                        <div className="mailIconBox">
                            <OpenInNewIcon className="mailIcon" />
                        </div>
                    </div>
                </div>
                <div className="mailMiddle">
                    <div className="mailMiddleTop">
                        <div className="middleLeft">
                            <div className="avatarImg">
                                <AccountCircleIcon className="avatar" />
                            </div>
                            <div className="senderInfo">
                                <span>{mail.userId} sender@codemancers.com</span>
                            </div>
                        </div>
                        <div className="middleRight">
                            <div className="mailIconBox">
                                <StarBorderIcon className="mailIcon" />
                            </div>
                            <div className="mailIconBox">
                                <ReplyIcon className="mailIcon" />
                            </div>
                            <div className="mailIconBox">
                                <MoreVertIcon className="mailIcon" />
                            </div>
                        </div>
                    </div>
                    <div className="mailMiddleBottom">
                        <p className="mailBody">
                            {mail.body}
                        </p>
                    </div>
                </div>
                <div className="mailBottom">
                    <button className="mailBottomBtn">
                        <ReplyIcon className="bottomIcon" />
                        <span className="bottomText">Reply</span>
                    </button>
                    <button className="mailBottomBtn">
                        <ReplyAllIcon className="bottomIcon" />
                        <span className="bottomText">Reply all</span>
                    </button>
                    <button className="mailBottomBtn">
                        <ForwardIcon className="bottomIcon" />
                        <span className="bottomText">Forward</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Mail