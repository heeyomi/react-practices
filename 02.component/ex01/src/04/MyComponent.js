import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';

export default function MyComponent ( { props01, props02, props03, props04, props05, props06, props07, props08, props09} ) {
    return (
        <Fragment>
            <h2>Property Validation</h2>
            <span>props01 : { props01 ? props01 : '---not set --- '} </span>
            <br/>

            <span>props02 : { props01 ? props01 : '---not set --- '} </span>
            <br/>
            
            <span>props03 : { props03 ? `${props03}`: '---not set --- '} </span>
            <br/>
            
            <span>props04 : { props04 ? props04.no : '---not set --- '} </span>
            <br/>
            
            <span>props05 : { props05 ? props05.map( (e, i ) => <b key={i}>{e} { ' '} </b>) : '---not set --- '} </span>
            <br/>

            <span>props06 : { props06 ? props06() : '---not set ---'}</span>
            <br/>

            <span>props07 : { props07 ? props07 : '---not set ---'}</span>
            <br/>

            <span>props08 : { props08 ? props08.map((e,i) => e ? <b key={i}> {'true'}</b> : <b key={i}>{'false' }{ ' ' }</b>) : '---not set ---'}</span>
            <br/>

            <span>props09 : { props09 ?
                                    <div>
                                        <h3>{ props09.no }</h3>
                                        <h4>{ props09.name }</h4>
                                        <h5>{ props09.email }</h5>
                                    </div> : '---not set ---'}</span>
            <br/>
        </Fragment>
    )
}

MyComponent.propTypes = {
    // [Built-in propTypes Validatior : primitives]
    props01 : PropTypes.string,
    props02 : PropTypes.number.isRequired,
    props03 : PropTypes.bool,
    props04 : PropTypes.object,
    props05 : PropTypes.array,
    props06 : PropTypes.func,

    // [Built-in propTypes Validatior : Combined Promitives]
    props07 : PropTypes.oneOfType( [ PropTypes.string, PropTypes.number ] ).isRequired,
    props08 : PropTypes.arrayOf(PropTypes.bool).isRequired,
    props09 : PropTypes.shape( {
        no :PropTypes.number.isRequired,
        name : PropTypes.string.isRequired,
        email : PropTypes.string.isRequired
    }).isRequired
}

// Default Value
