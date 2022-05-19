import React from 'react';
import "./mailtop.scss";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardIcon from '@mui/icons-material/Keyboard';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArchiveIcon from '@mui/icons-material/Archive';
import ReportIcon from '@mui/icons-material/Report';
import DeleteIcon from '@mui/icons-material/Delete';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import TimerIcon from '@mui/icons-material/Timer';
import AddTaskIcon from '@mui/icons-material/AddTask';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import LabelIcon from '@mui/icons-material/Label';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';


const Mailtop = () => {
    const navigate = useNavigate();

    return (
        <div className="mailtopContainer">
            <div className="mailtopLeft">
                <div className="sectionIconbox left1">
                    <ArrowBackIcon 
                        className='mailtopIcon' 
                        onClick={()=>navigate(-1)}
                    />
                </div>
                <div className="sectionIconbox">
                    <ArchiveIcon className='mailtopIcon' />
                </div>
                <div className="sectionIconbox">
                    <ReportIcon className='mailtopIcon' />
                </div>
                <div className="sectionIconbox">
                    <DeleteIcon className='mailtopIcon' />
                </div>
                <div className="sectionIconbox">
                    <div className="mailTopLine"></div>
                </div>
                <div className="sectionIconbox">
                    <MarkAsUnreadIcon className='mailtopIcon' />
                </div>
                <div className="sectionIconbox">
                    <TimerIcon className='mailtopIcon' />
                </div>
                <div className="sectionIconbox">
                    <AddTaskIcon className='mailtopIcon' />
                </div>
                <div className="sectionIconbox">
                    <div className="mailTopLine"></div>
                </div>
                <div className="sectionIconbox">
                    <DriveFileMoveIcon className='mailtopIcon' />
                </div>
                <div className="sectionIconbox">
                    <LabelIcon className='mailtopIcon' />
                </div>
                <div className="sectionIconbox">
                    <MoreVertIcon className='mailtopIcon' />
                </div>
            </div>
            <div className="mailtopRight">
                <span className="mailtopRange">
                    1-1 of 1
                </span>
                <div className="sectionIconbox">
                    <KeyboardArrowLeftIcon className='mailtopIcon' />
                </div>
                <div className="sectionIconbox">
                    <ChevronRightIcon className='mailtopIcon' />
                </div>
                <div className="sectionIconbox">
                    <KeyboardIcon className='mailtopIcon' />
                </div>
            </div>
        </div>
    )
}

export default Mailtop