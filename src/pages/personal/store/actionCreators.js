import axios from '../../../utils/request';

export const getClassAc = data => {
    return dispatch => {
        return axios.get('/api/class');
    };
};
export const createClassAc = data => {
    return dispatch => {
        return axios.post('/api/createClass',data);
    };
};
