import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';
import { Octicons } from '@expo/vector-icons';

const AccountScreen = () => {
    const {signout} = useContext(AuthContext);
    return(
        <SafeAreaView forceInset={{top: 'always'}}>
            <Spacer>
                <Text style={{fontSize: 48}}>AccountScreen</Text>
                <Button 
                    title="Sign Out"
                    onPress={signout}
                />
            </Spacer>
        </SafeAreaView>
    );
};

AccountScreen.navigationOptions = {
    title: "Account",
    tabBarIcon: <Octicons name="sign-out" size={20} color="black" />
};

const styles = StyleSheet.create({});

export default AccountScreen;