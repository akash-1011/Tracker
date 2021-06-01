import React,{useContext} from 'react';
import {NavigationEvents} from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {Context} from '../context/AuthContext';

const SigninScreen = () => {

    const {state, signin, clearErrorMessage} = useContext(Context);
    return(
        <View style={styles.container}>
            <NavigationEvents 
                onWillBlur={clearErrorMessage}
            />
            <AuthForm 
                headerText="Welcome Back!"
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitButtonText="Sign in"
            />
            <NavLink 
                routeName="Signup"
                text="Dont have an account? Sign up instead!"
            />
        </View>
    );
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;