import React from 'react';
import "./mailList.scss";
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { Link } from 'react-router-dom';

const MailList = ({ body, id, subject, tag, userId, currentVal }) => {
    const totalLength = 100;
    const subjectLength = subject.length;
    const remainingLenght = totalLength-subjectLength;
    const desc = body.slice(0,remainingLenght);

    return (
        <Link to={`/mail/${currentVal}/${id}`}>
            <div className="mailListContainer">
                <div className="mailListOptions">      
                    <CheckBoxOutlineBlankIcon className="mailListIcon" />
                    <GradeOutlinedIcon className="mailListIcon" />
                </div>
                <div className="mailListTitle">
                    {userId}
                </div>
                <div className="mailListSubject">
                    <span>
                        {subject} - {" "}
                        <span className="mailListDesc">
                            {desc}...
                        </span>
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default MailList