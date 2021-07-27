import React, { Component, Fragment } from 'react';

export default function() {
    const date = new Date();

    const hour = date.getHours();
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);

    const html =
    "<span>" + 
        ('0'+(hour > 12 ? hour-12 : hour)).slice(-2) + 
        " : " + ('0' + minutes).slice(-2) +
        " : " + ('0' + seconds).slice(-2) +
    "</span>";

    return (
        /**
         * HTML 태그를 동적으로 생성하여 JSX에 추가하는 작업은 기본적으로 금지(XSS 공격 방지 기능 내장)
         */
        <div>
            { html }
        </div>
    )
}