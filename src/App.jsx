import React, { useEffect, useState } from 'react';
import { Header, Rightbar, Sidebar } from './components';
import "./App.scss";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Inbox from './pages/inbox/Inbox';
import Draft from "./pages/draft/Draft";
import Spam from "./pages/spam/Spam";
import Trash from "./pages/trash/Trash";
import Mail from "./pages/mail/Mail";
import { useDispatch } from 'react-redux';
import { getItemsAsync } from './redux/itemSlice';


const App = () => {
    const [searchText, setSearchText] = useState("");
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getItemsAsync());
    },[dispatch])

    return (
        <Router>
            <Header setSearchText={setSearchText} />
            <div className="appContainer">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Navigate to="/mail/inbox" />} />
                    <Route path="/mail/inbox" element={<Inbox searchText={searchText}/>} />
                    <Route path="/mail/draft" element={<Draft searchText={searchText} />} />
                    <Route path="/mail/spam" element={<Spam searchText={searchText} />} />
                    <Route path="/mail/trash" element={<Trash searchText={searchText} />} />
                    <Route path="/mail/:currentVal/:id" element={<Mail />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                <Rightbar />
            </div>
        </Router>
    )
}

export default App