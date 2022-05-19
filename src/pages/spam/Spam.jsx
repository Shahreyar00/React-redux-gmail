import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MailList, TopSection } from '../../components';

const Spam = ({ searchText }) => {
    const items = useSelector((state)=>state.items);
    const [spam, setSpam] = useState([]);

    useEffect(()=>{
        const filteredItems = items.filter((item)=>
            item.tag.toLowerCase()==="spam"
        )
        setSpam(filteredItems);
    },[items])

    const searchedItems = spam.filter((item)=>{
        return item.subject.toLowerCase().includes(searchText);
    })

    return (
        <div className="inboxContainer">
            <TopSection numVal={spam.length} />
            <div className="inboxWrapper">
                {searchedItems.map((item,i)=>(
                    <MailList body={item.body} id={item.id} subject={item.subject} tag={item.tag} userId={item.userId} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default Spam