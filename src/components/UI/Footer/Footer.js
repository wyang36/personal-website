import React from 'react';
import classes from './Footer.css';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import copyright from '@fortawesome/fontawesome-free-regular/faCopyright';

const footer = () => {
    const year = (new Date()).getFullYear();
    return (
        <div className={classes.Footer}>
            <p>
                <FontAwesomeIcon icon={copyright} />&nbsp;
            Kira Yang {year}
            </p>
        </div>
    );
}

export default footer;