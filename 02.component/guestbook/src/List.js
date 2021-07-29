import React from 'react';
import ListItem from './ListItem';

export default function List({lists}){
    console.log(lists);

    return (
        <div className="Guestbook__List">
            {lists.map(listItem =>
                <ListItem key={listItem.no}
                        name={ listItem.name }
                        message={listItem.message}
                        regDate={listItem.regDate} />)}
        </div>
    );
}