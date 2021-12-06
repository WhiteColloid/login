import axios from '../../../utils/request';

export const surveyAc = data => {
    return dispatch => {
        return axios.post('/api/survey',data);
    };
};
