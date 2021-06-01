import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaView} from 'react-navigation';
import MapView,{Polyline} from 'react-native-maps';
import {Context as TrackContext} from '../context/TrackContext';
import { Entypo } from '@expo/vector-icons';
import Spacer from '../components/Spacer';

const TrackDetailScreen = ({navigation}) => {
    
    const {state} = useContext(TrackContext);
    const _id = navigation.getParam('_id');
    
    const track = state.find(t => t._id === _id);
    const initianCoords = track.locations[1].coords;

    return(
        <SafeAreaView>
        <View>
        <Spacer />
            <Spacer />
            <Spacer>
            <Text style={{fontSize:48}}>{track.name}</Text>
            <MapView
                initialRegion={{
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                    ...initianCoords
                }}
                style={styles.map}
            >
                <Polyline 
                    coordinates={track.locations.map(loc => loc.coords)}
                />
            </MapView>
            </Spacer>
        </View>
        </SafeAreaView>
    );
};

TrackDetailScreen.navigationOptions = () => {
    return {
        headerTransparent: true,
        title: '',
        headerBackImage: () => <Entypo name="chevron-left" size={24} color="black" />
    };
};

const styles = StyleSheet.create({
    map:{
        height: 500
    }
});

export default TrackDetailScreen;