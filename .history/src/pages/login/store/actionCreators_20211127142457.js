import * as actionTypes from './actionTypes';
import axios  from "../../../utils/request";
import { act } from 'react-dom/test-utils';


export const loginAc = data => {
    return dispatch => {
      return axios.post('/api.login', data)
    };
};


export const syncInfoAc = data => {
  return{
    type: actionTypes.SYNC_STATE_INFO,
    payload: data
  };
},