import React, {Fragment, Component} from 'react';
import Header from './Header';
import Content from './Content';

export default class extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Content />
            </Fragment>
        );
    }
}
