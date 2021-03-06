import React, { Component, Fragment } from 'react';

export default function() {
    const date = new Date();

    const hour = date.getHours();
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);

    return (
        /**
         * comment01 : 컴포넌트 안이 아니기 때문에 자바스크립트 구문이 가능
         */
        <div
        /**
         * comment02 : 여기서도 다중행 주석이 가능(추천X)
         */
        className="clock" title="시계" props01="hello" props02="world">
            {/* JSX는 HTML이 아니다! 이런 <-- --> 주석은 사용 할 수 없다. */}
            
            // comment03 : JSX 컴포넌트 안에서 주석을 사용하면 화면에 그대로 나옴

            { ('0'+(hour > 12 ? hour-12 : hour)).slice(-2) }
            {/* comment04 : 이런 방식으로 표현식이 실행되는 블록 안에서 주석을 달아야 한다.*/}
            { ' : ' }
            { ('0' + minutes).slice(-2) }
            { ' : ' }
            { ('0' + seconds).slice(-2) }
            { ' ' }
            { hour > 12 ? 'PM' : 'AM' }     
        </div>
    )
}