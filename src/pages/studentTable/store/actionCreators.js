import axios from '../../../utils/request';

export const getTopAc = data => {
    return dispatch => {
        return axios.get('/api/getTop',data);
    };
};
