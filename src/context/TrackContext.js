import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import {AsyncStorage} from 'react-native';


const trackReducer = (state, action) => {
    switch(action.type){
        case 'fetch_tracks':
            return action.payload;
        default:
            return state;
    }
};

const fetchTrack = (dispatch) => {
    return async() => {
        const response = await trackerApi.get('/tracks');
        //console.log(response.data);
        dispatch({type: 'fetch_tracks', payload: response.data});
    };
};

const createTrack = (dispatch) => {
    return async (name, locations) => {
        //console.log(name, locations.length);
        await trackerApi.post('/tracks',{name, locations});
    };
};

export const {Provider, Context} = createDataContext(
    trackReducer,
    {fetchTrack, createTrack},
    []
);