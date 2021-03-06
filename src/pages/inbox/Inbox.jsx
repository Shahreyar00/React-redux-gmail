import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { TopSection } from '../../components';
import MailList from '../../components/mailList/MailList';
import Subtopsection from '../../components/subtopsection/Subtopsection';
import "./inbox.scss";

const Inbox = ({ searchText }) => {
    const items = useSelector((state)=>state.items);
    const [inbox, setInbox] = useState([]);
    
    const location = useLocation();
    const currentVal = location.pathname.split("/")[2];
    console.log(currentVal);

    useEffect(()=>{
        const filteredItems = items.filter((item)=>
            item.tag.toLowerCase()==="inbox"
        )
        setInbox(filteredItems);
    },[items])

    const searchedItems = inbox.filter((item)=>{
        return (item.subject.toLowerCase().includes(searchText));
    })

    return (
        <div className="inboxContainer">
            <TopSection numVal={inbox.length} />
            <Subtopsection />
            <div className="inboxWrapper">
                {searchedItems.map((item,i)=>(
                    <MailList currentVal={currentVal} body={item.body} id={item.id} subject={item.subject} tag={item.tag} userId={item.userId} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default Inbox