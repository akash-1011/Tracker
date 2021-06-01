import React, { useContext, useEffect } from 'react';
import {NavigationEvents} from 'react-navigation';
import { StyleSheet, View} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({navigation}) => {

    const {state, signup, clearErrorMessage, tryLocalSignin} = useContext(AuthContext);
    
    useEffect(() => {
        tryLocalSignin();
    }, []);

    return(
        <View style={styles.container}>
            <NavigationEvents 
                onWillBlur={clearErrorMessage}
            />
            <AuthForm 
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup}
            />
            <NavLink 
                routeName="Signin"
                text="Already have an account? Sign in instead!"
            />
            
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 100
    }
});

export default SignupScreen;