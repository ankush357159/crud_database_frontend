import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getAllData } from "../actions/dataAction";
import DataCard from "./DataCard";
import "./Data.css";

const Data = () => {
	const dispatch = useDispatch();

	const { error, data } = useSelector((state) => state.getData);

	useEffect(() => {
		if (error) {
			dispatch(clearErrors());
		}
		dispatch(getAllData());
	}, [dispatch, error]);

	console.log(data);

	return (
		<div>
			{data && data.map((item) => <DataCard key={item.id} item={item} />)}
		</div>
	);
};

export default Data;
