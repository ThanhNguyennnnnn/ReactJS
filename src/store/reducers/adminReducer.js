import actionTypes from '../actions/actionTypes';
// khoi dau Luon la gia tri rong
const initialState = {
    isLoadingGender: false,
    genders: [],
    roles: [],
    positions: [],
    users: [],
    topDoctors: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            let copyState = { ...state };
            copyState.isLoadingGender = true;
            //console.log('Fire fetch gender start: ', action);
            return {
                ...copyState,

            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            state.genders = action.data;
            state.isLoadingGender = false;
            // console.log('Fire fetch gender success: ', action);
            return {
                ...state,

            }
        case actionTypes.FETCH_GENDER_FAILED:
            state.isLoadingGender = false;
            state.genders = [];
            // console.log('Fire fetch gender failed: ', action)

            return {
                ...state,

            }
        // POSITION
        case actionTypes.FETCH_POSITION_SUCCESS:
            state.positions = action.data;
            // state.isLoadingGender = false;
            // console.log('Fire fetch POSITION success: ', action);
            return {
                ...state,

            }
        case actionTypes.FETCH_POSITION_FAILED:
            // state.isLoadingGender = false;
            state.positions = [];
            // console.log('Fire fetch POSITION failed: ', action)

            return {
                ...state,

            }

        // ROLE
        case actionTypes.FETCH_ROLE_SUCCESS:
            state.roles = action.data;
            // state.isLoadingGender = false;
            // console.log('Fire fetch ROLE success: ', action);
            return {
                ...state,

            }
        case actionTypes.FETCH_ROLE_FAILED:
            // state.isLoadingGender = false;
            state.roles = [];
            // console.log('Fire fetch ROLE failed: ', action)

            return {
                ...state,

            }
        // FETCH ALL USER Redux
        case actionTypes.FETCH_ALL_USER_SUCCESS:
            state.users = action.users;
            // state.isLoadingGender = false;
            // console.log('Fire fetch ROLE success: ', action);
            return {
                ...state,

            }
        case actionTypes.FETCH_ALL_USER_FAILED:
            // state.isLoadingGender = false;
            state.users = [];
            // console.log('Fire fetch ROLE failed: ', action)

            return {
                ...state,

            }
        // FETCH TOP DOCTOR 
        case actionTypes.FETCH_TOP_DOCTORS_SUCCESS:
            state.topDoctors = action.dataDoctors;
            // state.isLoadingGender = false;
            // console.log('Fire fetch ROLE success: ', action);
            return {
                ...state,
            }
        case actionTypes.FETCH_TOP_DOCTORS_FAILED:
            // state.isLoadingGender = false;
            state.topDoctors = [];
            // console.log('Fire fetch ROLE failed: ', action)

            return {
                ...state,
            }

        default:
            return state;
    }
}

export default adminReducer;