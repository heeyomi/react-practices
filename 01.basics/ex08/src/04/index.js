import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    createElement(App, null),
    document.getElementById('root')
);  