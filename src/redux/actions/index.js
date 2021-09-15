import * as actionTypes from "../constants/actionType";
import { groupCode } from "../constants/actionType";
import { callApi } from "../../utils/callApi";
import axios from "axios";

// use for Category
export const fetchCourseCategory = () => {
    return (dispatch) => {
        dispatch(fetchCourseCategoryRequest());
        callApi("QuanLyKhoaHoc/LayDanhMucKhoaHoc", "GET")
            .then((res) => {
                dispatch(fetchCourseCategorySuccess(res.data));
            })
            .catch((err) => {
                dispatch(fetchCourseCategoryFailed(err));
            })
    };
}
export const fetchCourseCategoryRequest = () => {
    return {
        type: actionTypes.FETCH_COURSE_CATEGORY_REQUEST,
    };
};
export const fetchCourseCategorySuccess = (data) => {
    return {
        type: actionTypes.FETCH_COURSE_CATEGORY_SUCCESS,
        payload: data,
    };
};
export const fetchCourseCategoryFailed = (err) => {
    return {
        type: actionTypes.FETCH_COURSE_CATEGORY_FAILED,
        payload: err,
    };
};

//use for Top-Course
export const fetchCourse = () => {
    //console.log(1);
    return (dispatch) => {
        dispatch(fetchCourseRequest());
        callApi(`QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${groupCode}`, "GET")
            .then((res) => {
                dispatch(fetchCourseSuccess(res.data));
            })
            .catch((err) => {
                dispatch(fetchCourseFailed(err));
            })
    };
}
export const fetchCourseRequest = () => {
    return {
        type: actionTypes.FETCH_COURSE_REQUEST,
    };
};
export const fetchCourseSuccess = (data) => {
    return {
        type: actionTypes.FETCH_COURSE_SUCCESS,
        payload: data,
    };
};
export const fetchCourseFailed = (err) => {
    return {
        type: actionTypes.FETCH_COURSE_FAILED,
        payload: err,
    };
};