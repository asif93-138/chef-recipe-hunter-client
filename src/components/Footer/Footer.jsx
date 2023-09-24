import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Footer = () => {
    const {} = useContext(AuthContext);
    return (
        <div>
            <p>Footer!</p>
        </div>
    );
};

export default Footer;