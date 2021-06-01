import * as Location from 'expo-location';

const tenM = 0.0001;

const getLocation = (increment) => {
    return {
        timestamp: 10000000,
        coords:{
            speed: 0,
            heading: 0,
            accuracy: 0,
            altitudeAccuracy: 5,
            altitude: 5,
            latitude: 12.9416861 + increment * tenM,
            longitude: 80.1510629 + increment * tenM
        }
    };
};

let counter = 0;
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged',{
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
},1000);