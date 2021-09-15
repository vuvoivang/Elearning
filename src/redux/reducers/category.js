import * as actionTypes from "../constants/actionType";
const initialState = {
    loading: false,
    data: null,
    err: null
};
const courseCategoryReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.FETCH_COURSE_CATEGORY_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };
        case actionTypes.FETCH_COURSE_CATEGORY_SUCCESS:
            state.loading = false;
            state.data = payload;
            state.err = null;
            return { ...state };
        case actionTypes.FETCH_COURSE_CATEGORY_FAILED:
            state.loading = false;
            state.data = null;
            state.err = payload;
            return { ...state };
        default:
            return { ...state };
    }
}
export default courseCategoryReducer;