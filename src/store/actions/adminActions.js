import actionTypes from './actionTypes';
import { getAllCodeService } from '../../services/userService';
// Muon su dung duoc file nay thi phai qua file /actions/index.js export

export const fetchGenderStart = () => ({
    type: actionTypes.FETCH_GENDER_START
})
export const fetchGenderSuccess = () => ({
    type: actionTypes.FETCH_GENDER_SUCCESS
})
export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})

// start doing end
