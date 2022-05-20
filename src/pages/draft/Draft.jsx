import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { MailList, TopSection } from '../../components';

const Draft = ({ searchText }) => {
    const items = useSelector((state)=>state.items);
    const [draft, setDraft] = useState([]);

    const location = useLocation();
    const currentVal = location.pathname.split("/")[2];
    console.log(currentVal);

    useEffect(()=>{
        const filteredItems = items.filter((item)=>
            item.tag.toLowerCase()==="draft"
        )
        setDraft(filteredItems);
    },[items])

    const searchedItems = draft.filter((item)=>{
        return item.subject.toLowerCase().includes(searchText);
    })

    return (
        <div className="inboxContainer">
            <TopSection numVal={draft.length} />
            <div className="inboxWrapper">
                {searchedItems.map((item,i)=>(
                    <MailList currentVal={currentVal} body={item.body} id={item.id} subject={item.subject} tag={item.tag} userId={item.userId} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default Draft