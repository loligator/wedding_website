import { stringify } from 'querystring';
import React, { useState } from 'react';

import styles from './RsvpForm.module.css';

interface formData {
	guest: Guest;
	email: string;
	phone: string;
	extraGuests: Guest[];
	foodRestrictions: string;
	message: string;
}

interface Guest {
	firstName: string;
	lastName: string;
}

export default function RsvpForm() {
	const [fields, setFields] = useState<formData>({
		guest: {
			firstName: "",
			lastName: "",
		},
		email: "",
		phone: "",
		extraGuests: [],
		foodRestrictions: "",
		message: ""
	});

	const setFirstName = (firstName: string) => {
		setFields({
			...fields,
			guest: {
				...fields.guest,
				firstName
			}
		});
	}

	const setLastName = (lastName: string) => {
		setFields({
			...fields,
			guest: {
				...fields.guest,
				lastName
			}
		});
	}

	const setEmail = (email: string) => {setFields({...fields, email})}
	const setPhone = (phone: string) => {setFields({...fields, phone})}
	const setMessage = (message: string) => {setFields({...fields, message})}
	const setFoodRestrictions = (foodRestrictions: string) => {setFields({...fields, foodRestrictions})}

	return (
		<div className={styles.form}>
			<form>
				<input 
					name="Name"
					placeholder='First Name'
					value={fields.guest.firstName}
					onChange={e => setFirstName(e.target.value)}>
				</input>
				<input 
					name="Last Name"
					placeholder='Last Name'
					value={fields.guest.lastName}
					onChange={e => setLastName(e.target.value)}>
				</input>
				<input 
					name="Email"
					placeholder='Email'
					value={fields.email}
					onChange={e => setEmail(e.target.value)}>
				</input>
				<input 
					name="Phone"
					placeholder='Phone'
					value={fields.phone}
					onChange={e => setPhone(e.target.value)}>
				</input>
				<input 
					name="Food Restrictions"
					placeholder='Food Restrictions'
					value={fields.foodRestrictions}
					onChange={e => setLastName(e.target.value)}>
				</input>
				<input 
					name="Message"
					placeholder='Message'
					value={fields.message}
					onChange={e => setLastName(e.target.value)}>
				</input>
			</form>
		</div>
	);
}

function setFirstName(value: string, setFields: React.Dispatch<React.SetStateAction<formData>>) {
	setFields({
		...
	});
}