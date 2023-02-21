import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditon = () => {
    return (
        <div>
            <h2>Here is our terms and conditon</h2>
            <p>Go back to: <Link to='/register'>Register</Link> </p>
        </div>
    );
};

export default TermsAndConditon;