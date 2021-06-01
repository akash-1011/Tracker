import React, {useEffect, useContext} from 'react';
import {Context as AuthContext} from '../context/AuthContext';
import { ActivityIndicator } from 'react-native';

const LoadingScreen = () => {
    const {tryLocalSignin} = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignin();
    },[]);

    return <ActivityIndicator size="large" />;
};

export default LoadingScreen;