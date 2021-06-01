import React,{useContext} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Spacer from './Spacer';
import {Context as LocationContext} from '../context/LocationContext';
// import { Foundation } from '@expo/vector-icons';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
    const {state: {name, recording, location}, startRecording, stopRecording, changeName} = useContext(LocationContext);
    
    const [saveTrack] = useSaveTrack();
    //console.log(name, location.length);    

    return (
        <View>
            <Spacer>
                <Input 
                    onChangeText={changeName}
                    value={name}
                    placeholder="Enter name"
                />
            {recording 
                ? <Button 
                    title="Stop"
                    onPress={stopRecording}
                />
                : <Button 
                title="Start Recording"
                onPress={startRecording}
                />
            }
            </Spacer>
            <Spacer>
            {
                !recording && location.length 
                ? <Button 
                    title="Save Recording"
                    onPress={saveTrack}
                />
                : null
            }
            </Spacer>
        </View>
    );
};

const styles = StyleSheet.create({
    // form: {
    //     position: "absolute",
    //     backgroundColor: "#f9f7f7",
    //     bottom: Dimensions.get("window").height - Dimensions.get("window").height,
    //     borderTopStartRadius: 18,
    //     borderTopEndRadius: 18,
    //     top: (Dimensions.get("window").height)-176,
    //     width: Dimensions.get("window").width,
    //     alignSelf: "center"
    // }
});

export default TrackForm;