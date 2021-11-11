import axios from "axios";

import {
	GET_DATA_REQUEST,
	GET_DATA_SUCCESS,
	GET_DATA_FAIL,
	NEW_DATA_REQUEST,
	NEW_DATA_SUCCESS,
	NEW_DATA_FAIL,

	// UPDATE_DATA_REQUEST,
	// UPDATE_DATA_SUCCESS,
	// UPDATE_DATA_FAIL,
	// DELETE_DATA_REQUEST,
	// DELETE_DATA_SUCCESS,
	// DELETE_DATA_FAIL,
	CLEAR_ERRORS,
} from "../constants/dataConstants";

//Get all data
export const getAllData = () => async (dispatch) => {
	try {
		dispatch({ type: GET_DATA_REQUEST });

		let link = `/api/v1/getdata`;

		const { data } = await axios.get(link);

		dispatch({
			type: GET_DATA_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: GET_DATA_FAIL,
			payload: error,
		});
	}
};

//Create data
export const createData = (newData) => async (dispatch) => {
	dispatch({ type: CLEAR_ERRORS });
	try {
		dispatch({ type: NEW_DATA_REQUEST });

		const config = { headers: { "Content-Type": "application/json" } };

		let link = `/api/v1/data/new`;

		const { data } = await axios.post(link, newData, config);

		dispatch({
			type: NEW_DATA_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: NEW_DATA_FAIL,
			payload: error,
		});
	}
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
	dispatch({ type: CLEAR_ERRORS });
};
