import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h3>Read our Terms and Conditions</h3>
            <p><small>Go back to: <Link to='/register'>Register</Link></small></p>
        </div>
    );
};

export default Terms;