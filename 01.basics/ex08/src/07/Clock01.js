import React, { Component, Fragment } from 'react';

export default function() {
    const date = new Date();

    const hour = date.getHours();
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);

    

    return (
        <div>
            { ('0'+(hour > 12 ? hour-12 : hour)).slice(-2) }
            { ' : ' }
            { ('0' + minutes).slice(-2) }
            { ' : ' }
            { ('0' + seconds).slice(-2) }
            { ' ' }
            { hour > 12 ? 'PM' : 'AM' }     
        </div>
    )
}