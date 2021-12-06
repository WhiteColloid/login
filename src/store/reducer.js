import { combineReducers } from 'redux';
import { reducer as registerReducer } from '../pages/registor/store';
import { reducer as flashReducer } from '../pages/flash/store';
import { reducer as loginReducer } from '../pages/login/store';

// Combine all reducer
export default combineReducers({
    register: registerReducer,
    flash: flashReducer,
    login: loginReducer
});