import * as actionTypes from "../constants/actionType";
const initialState = {
    loading: false,
    data: null,
    err: null
};
const courseReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.FETCH_COURSE_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };
        case actionTypes.FETCH_COURSE_SUCCESS:
            state.loading = false;
            state.data = payload;
            state.err = null;
            return { ...state };
        case actionTypes.FETCH_COURSE_FAILED:
            state.loading = false;
            state.data = null;
            state.err = payload;
            return { ...state };
        default:
            return { ...state };
    }
}
export default courseReducer;