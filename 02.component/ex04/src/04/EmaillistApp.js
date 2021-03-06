import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import data from './assets/json/data';

export default function() {
    const [emails] = useState(data);
    const [keyword, setKeyword] = useState('');
    
    const notifyKeywordChanged = function(keyword) {
        setKeyword(keyword);
    };

    return(
        <div className = {'EmaillistApp'}>
            <SearchBar
                callback = { notifyKeywordChanged }
                keyword = { keyword } />
            <Emaillist
                emails = { emails }
                keyword = { keyword }/>
        </div>
    )
}