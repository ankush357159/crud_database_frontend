import {
	GET_DATA_REQUEST,
	GET_DATA_SUCCESS,
	GET_DATA_FAIL,
	NEW_DATA_REQUEST,
	NEW_DATA_SUCCESS,
	NEW_DATA_FAIL,
	NEW_DATA_RESET,
	// UPDATE_DATA_REQUEST,
	// UPDATE_DATA_SUCCESS,
	// UPDATE_DATA_FAIL,
	// DELETE_DATA_REQUEST,
	// DELETE_DATA_SUCCESS,
	// DELETE_DATA_FAIL,
	CLEAR_ERRORS,
} from "../constants/dataConstants";

export const getDataReducer = (state = { data: [] }, action) => {
	switch (action.type) {
		case GET_DATA_REQUEST:
			return {
				loading: true,
				data: [],
			};
		case GET_DATA_SUCCESS:
			return {
				loading: false,
				data: action.payload.data,
			};
		case GET_DATA_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case CLEAR_ERRORS:
			return {
				...state,
				error: null,
			};
		default:
			return state;
	}
};

export const newDataReducer = (state = { data: {} }, action) => {
	switch (action.type) {
		case NEW_DATA_REQUEST:
			return {
				...state,
				loading: true,
			};
		case NEW_DATA_SUCCESS:
			return {
				loading: false,
				success: action.payload.success,
				data: action.payload.data,
			};
		case NEW_DATA_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case NEW_DATA_RESET:
			return {
				...state,
				loading: false,
			};
		case CLEAR_ERRORS:
			return {
				...state,
				error: null,
			};
		default:
			return state;
	}
};
