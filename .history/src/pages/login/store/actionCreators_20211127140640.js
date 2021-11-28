import axios  from "../../../utils/request";


export const loginAc = data => {
    return dispatch => {
      return axios.post('/api.login', data)
    };
};