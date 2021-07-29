import React, {Fragment} from 'react';

export default function ListItem({name, message, regDate }){
    return (
        <li className="Guestbook__List__Item">
            <strong>{name}</strong>
            <p>{message.split('\n').map(line => {
                return (<Fragment key={line}>{line}<br/></Fragment>)
            })}</p>
            <strong>{regDate}</strong>
            <a href="">삭제</a>
        </li>
    );
}