import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { MailList, TopSection } from '../../components';


const Trash = ({ searchText }) => {
    const items = useSelector((state)=>state.items);
    const [trash, setTrash] = useState([]);

    const location = useLocation();
    const currentVal = location.pathname.split("/")[2];
    console.log(currentVal);

    useEffect(()=>{
        const filteredItems = items.filter((item)=>
            item.tag.toLowerCase()==="trash"
        )
        setTrash(filteredItems);
    },[items])

    const searchedItems = trash.filter((item)=>{
        return item.subject.toLowerCase().includes(searchText);
    })

    return (
        <div className="inboxContainer">
            <TopSection numVal={trash.length} />
            <div className="inboxWrapper">
                {searchedItems.map((item,i)=>(
                    <MailList currentVal={currentVal} body={item.body} id={item.id} subject={item.subject} tag={item.tag} userId={item.userId} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default Trash