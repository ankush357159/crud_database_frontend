import React, { Fragment } from "react";
import CreateData from "./CreateData";
import "./DataCard.css";

function DataCard({ item }) {
	return (
		<Fragment>
			<h2 className='table-heading'>Crud sample database</h2>
			<table className='table'>
				<tbody key={item.firstName}>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Phone Number</th>
						<th>City</th>
						<th>State</th>
						<th>Hobbies</th>
					</tr>
					<tr>
						<td>{item.firstName}</td>
						<td>{item.lastName}</td>
						<td>{item.email}</td>
						<td>{item.phoneNo}</td>
						<td>{item.location.city}</td>
						<td>{item.location.state}</td>
						<td>{item.hobbies}</td>
					</tr>
				</tbody>
			</table>
			<CreateData />
		</Fragment>
	);
}

export default DataCard;
