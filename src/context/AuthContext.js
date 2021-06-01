import {AsyncStorage} from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import {navigate} from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'clear_error_message':
            return {...state, errorMessage: ''};
        case 'sign':
            return {errorMessage: '', token: action.payload};
        case 'singout':
            return {token: null, errorMessage: ''};
        default:
            return state;
    }

};

const tryLocalSignin = (dispatch) => {
    return async () => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            dispatch({type: 'signin', payload: token});
            navigate('TrackList');
        } else {
            navigate('Signup');
        }
    };
};

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_message'});
};

const signup = (dispatch) => {
    return async ({email, password}) => {
        try {
            const response = await trackerApi.post('/signup', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'sign', action: response.data.token});

            navigate('TrackList');

        } catch (err) {
            dispatch({type: 'add_error', payload: 'Something went worng with signup'});
        }
    };
};

const signin = (dispatch) => {
    return async ({email, password}) => {
        try {
            //console.log(password);
            const response = await trackerApi.post('/signin', {email,password});
            
            await AsyncStorage.setItem('token', response.data.token);
            
            dispatch({type: 'sign', action: response.data.token});

            navigate('TrackList');

        } catch (err) {
            console.log(err);
            dispatch({type: 'add_error', payload: 'Something went worng with signin'});
        }
    };
};

const signout = (dispatch) => {
    return async () => {
        await AsyncStorage.removeItem('token');
        dispatch({type: 'signout'});
        navigate('loginFlow');
    };
};


export const {Provider, Context} = createDataContext(
    authReducer,
    {signin, signup, signout, clearErrorMessage, tryLocalSignin},
    {token: null, errorMessage: ''}
);