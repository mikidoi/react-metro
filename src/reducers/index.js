import { combineReducers } from 'redux';
import StationsReducer from './reducer_stations';
import ActiveStation from './reducer_active_station';

const rootReducer = combineReducers({
    stations: StationsReducer,
    activeStation: ActiveStation
});

export default rootReducer;
