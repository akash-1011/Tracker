import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import {SafeAreaView,NavigationEvents} from 'react-navigation';
import Spacer from '../components/Spacer';
import {ListItem} from 'react-native-elements';
import {Context as TrackContext} from '../context/TrackContext';

const TrackListScreen = ({navigation}) => {

    const {state,fetchTrack} = useContext(TrackContext); 
    //console.log(state);
    return(
        <SafeAreaView>
            <View>
                <NavigationEvents 
                    onWillFocus={fetchTrack}
                />
                <Spacer />
                <Text style={{fontSize: 48}}>Tracks</Text>
                <FlatList 
                    data={state}
                    keyExtractor={(item) => { return item._id}}
                    renderItem={({item}) => {
                        return <TouchableOpacity onPress={() => {
                            navigation.navigate('TrackDetail', {_id: item._id})
                        }} >
                            <ListItem 
                                chevron 
                                title={item.name}
                            />
                        </TouchableOpacity>
                    }}
                />
            </View>        
        </SafeAreaView>
    );
};

TrackListScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({});

export default TrackListScreen;