import React from 'react';
import Email from './Email';
import PropTypes from 'prop-types';

export default function Eamillist( { keyword, emails }){
    console.log('rendring... Emaillist')
    return(
        <ul className={ 'Emaillist' }>
            {
                emails
                    .filter(item => item.firstName.indexOf(keyword) != -1 || item.lastName.indexOf(keyword) != -1)
                    .map( item => <Email
                                            key = { item.no }
                                            firstName = { item.firstName }
                                            lastName = { item.lastName }
                                            email = { item.email }
                                            /> )
            }
        </ul>
    );
}

Eamillist.propTypes = {
    emails : PropTypes.arrayOf(PropTypes.shape(Email.propTypes))
}