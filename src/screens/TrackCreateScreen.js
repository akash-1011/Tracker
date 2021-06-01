//import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView, withNavigationFocus} from 'react-navigation';
import Map from '../components/Map';
import {Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import { MaterialIcons } from '@expo/vector-icons';

const TrackCreateScreen = ({isFocused}) => {
    
    const { state: {recording}, addLocation } = useContext(LocationContext);

    const callback = useCallback((location) => {
        addLocation(location, recording);
    }, [recording]);

    const [err] = useLocation(isFocused || recording, callback);

    return(<>
        <SafeAreaView forceInset={{top:'always'}}>
                    <Text h3>Create a Track</Text>
                    <Map />
                    {err? <Text>Please enable location services</Text> : null}
                <TrackForm />
        </SafeAreaView>
        
        </>
    );
};

TrackCreateScreen.navigationOptions = {
    title: "Add Track",
    tabBarIcon: <MaterialIcons name="add" size={20} color="black" />
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);