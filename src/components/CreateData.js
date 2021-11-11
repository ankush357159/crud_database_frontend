import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { createData, clearErrors } from "../actions/dataAction";
import { NEW_DATA_RESET } from "../constants/dataConstants";

const CreateData = ({ history }) => {
	const dispatch = useDispatch();

	const { loading, error, success } = useSelector((state) => state.newData);

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNo, setPhoneNo] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [hobbies, setHobbies] = useState("");

	useEffect(() => {
		if (error) {
			dispatch(clearErrors());
		}
		if (success) {
			dispatch({ type: NEW_DATA_RESET });
		}
	}, [dispatch, error, history, success]);

	const newDataSubmitHandler = (e) => {
		e.preventDefault();

		const myForm = new FormData();

		myForm.set("firstName", firstName);
		myForm.set("lastName", lastName);
		myForm.set("email", email);
		myForm.set("phoneNo", phoneNo);
		myForm.set("city", city);
		myForm.set("state", state);
		myForm.set("hobbies", hobbies);

		dispatch(createData(myForm));
	};
	return (
		<div className='container'>
			<h1>Create Data</h1>
			<div>
				<form
					className='form-container'
					encType='multipart/form-data'
					onSubmit={newDataSubmitHandler}
				>
					<div>
						<span>First Name</span>
						<input
							type='text'
							placeholder='Enter your first name'
							required
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>

					<div>
						<span>Last Name</span>
						<input
							type='text'
							placeholder='Enter your last name'
							required
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>

					<div>
						<span>Email</span>
						<input
							type='text'
							placeholder='Enter your email'
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<div>
						<span>Phone Number</span>
						<input
							type='text'
							placeholder='Enter your phone number'
							required
							value={phoneNo}
							onChange={(e) => setPhoneNo(e.target.value)}
						/>
					</div>

					<div>
						<span>City</span>
						<input
							type='text'
							placeholder='Enter your city'
							required
							value={city}
							onChange={(e) => setCity(e.target.value)}
						/>
					</div>

					<div>
						<span>State</span>
						<input
							type='text'
							placeholder='Enter your state'
							required
							value={state}
							onChange={(e) => setState(e.target.value)}
						/>
					</div>

					<div>
						<span>Hobbies</span>
						<input
							type='text'
							placeholder='Enter your hobbies'
							required
							value={hobbies}
							onChange={(e) => setHobbies(e.target.value)}
						/>
					</div>
				</form>
				<Button
					variant='contained'
					id='createDataBtn'
					type='submit'
					disabled={loading ? true : false}
				>
					Create
				</Button>
			</div>
		</div>
	);
};

export default CreateData;
