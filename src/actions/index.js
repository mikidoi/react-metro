export function selectStation(station) {
    // selectStation is an ActionCreator, it needs to return an action,
    // an object with a type property.
    return {
        type: 'STATION_SELECTED',
        payload: station
    };
}