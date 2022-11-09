import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { ColorRing } from 'react-loader-spinner';

const Loader = () => {

    const { loading } = useContext(AuthContext);

    if (loading) {
        return <ColorRing />;
    }
};

export default Loader;