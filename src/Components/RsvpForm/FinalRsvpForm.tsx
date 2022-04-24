import { useState } from 'react';
import { Form, Field } from 'react-final-form';
import cx from 'classnames';

import styles from './RsvpForm.module.css';

interface formData {
	guest: Guest;
	email: string;
	phone: string;
	guestNames: string;
	foodRestrictions: string;
	message: string;
}

interface Guest {
	firstName: string;
	lastName: string;
}

export default function RsvpForm() {
	const [bringingGuests, setBringingGuests] = useState(false);

	const onSubmit = (values: formData) => {
		console.dir(values);
	}

	const validate = (values: formData): any => {
		return;
	}

	return (
		<Form
			onSubmit={onSubmit}
			validate={validate}
			className={styles.form}
			render={({ handleSubmit, form, submitting, pristine, values }) => {

				let guestNameEntry;
				if (bringingGuests) {
					guestNameEntry = (
						<>
							<span className={styles.label}>Please enter the names of each of your guests</span>
							<Field name="guestNames" component="textarea"/>
						</>
					);
				} else {
					guestNameEntry = <></>;
				}
				return (
					<form className={styles.form} onSubmit={handleSubmit}>
						<div className={cx(styles.flex, styles.flexColumn)}>
							<div className={cx(styles.flex, styles.flexRow, styles.center)}>
								<Field name="attending" component="input" type="radio" value="true"/>
								<span className={styles.label}>
									Attending
								</span>
								<Field name="attending" component="input" type="radio" value="false"/>
								<span className={styles.label}>
									Not Attending
								</span>
							</div>
							<Field name="firstName" component="input" placeholder="First Name"/>
							<Field name="lastName" component="input" placeholder="Last Name"/>
							<Field name="email" component="input" type='email' placeholder="Email"/>
							<Field name="phone" component="input" type='phone' placeholder="Phone"/>
							<div>
								<h5>Are you bringing any guests with you?</h5>
								<input name="bringingGuests" type="radio" checked={bringingGuests} onChange={() => setBringingGuests(true)}/>
								<span className={styles.label}>Yes</span>
								<input name="bringingGuests" type="radio" checked={!bringingGuests} onChange={() => setBringingGuests(false)}/>
								<span className={styles.label}>No</span>
							</div>
							{guestNameEntry}
							<Field name="foodRestrictions" component="textarea" placeholder="Food Restrictions"/>
							<Field name="message" component="textarea" placeholder="Message for the Couple"/>
							<button className={styles.submit} type="submit" disabled={submitting || pristine}>
								Submit
							</button>
							<pre>{JSON.stringify(values)}</pre>
						</div>
					</form>
				)}}
		/>
	);
}
