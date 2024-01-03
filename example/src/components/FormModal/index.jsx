import React from 'react'
import Modal from 'react-simple-modal'

const FormModal = ({ isModalOpen, setIsModalOpen }) => {
	const closeModal = () => {
		setIsModalOpen(false)
	}

	const contentModal = (
		<>
			<span
				className='closing-cross close'
				onClick={closeModal}
			></span>
			<form
				id='bookingGameEvent'
				action='#'
				method='GET'
				noValidate
			>
				<div className='formData'>
					<label
						className='text-label'
						htmlFor='firstName'
					>
						Prénom
					</label>
					<br />
					<input
						autoFocus
						className='text-control'
						type='text'
						id='firstName'
						name='firstName'
						minLength='2'
						required
					/>
					<br />
				</div>

				<div className='formData'>
					<label
						className='text-label'
						htmlFor='lastName'
					>
						Nom
					</label>
					<br />
					<input
						className='text-control'
						type='text'
						id='lastName'
						name='lastName'
						minLength='2'
						required
					/>
					<br />
				</div>

				<div className='formData'>
					<label
						className='text-label'
						htmlFor='email'
					>
						E-mail
					</label>
					<br />
					<input
						className='text-control'
						type='email'
						id='email'
						name='email'
						required
					/>
					<br />
				</div>

				<div className='formData'>
					<label
						className='text-label'
						htmlFor='birthDate'
					>
						Date de naissance
					</label>
					<br />
					<input
						className='text-control'
						type='date'
						id='birthDate'
						name='birthDate'
						required
					/>
					<br />
				</div>

				<div className='formData'>
					<label
						className='text-label'
						htmlFor='numberGameJoin'
					>
						À combien de tournois GameOn avez-vous
						déjà participé ?
					</label>
					<br />
					<input
						type='number'
						className='text-control'
						id='numberGameJoin'
						name='numberGameJoin'
						min='0'
						max='99'
						required
					/>
					<br />
				</div>

				<div className='formData'>
					<p className='text-label'>
						À quel tournoi souhaitez-vous
						participer cette année ?
					</p>
					<input
						className='checkbox-input'
						type='radio'
						id='location1'
						name='location'
						value='New York'
					/>
					<label
						className='cb-tournament-label'
						htmlFor='location1'
					>
						<span className='checkbox-icon'></span>
						New York
					</label>

					<input
						className='checkbox-input'
						type='radio'
						id='location2'
						name='location'
						value='San Francisco'
					/>
					<label
						className='cb-tournament-label'
						htmlFor='location2'
					>
						<span className='checkbox-icon'></span>
						San Francisco
					</label>

					<input
						className='checkbox-input'
						type='radio'
						id='location3'
						name='location'
						value='Seattle'
					/>
					<label
						className='cb-tournament-label'
						htmlFor='location3'
					>
						<span className='checkbox-icon'></span>
						Seattle
					</label>

					<input
						className='checkbox-input'
						type='radio'
						id='location4'
						name='location'
						value='Chicago'
					/>
					<label
						className='cb-tournament-label'
						htmlFor='location4'
					>
						<span className='checkbox-icon'></span>
						Chicago
					</label>

					<input
						className='checkbox-input'
						type='radio'
						id='location5'
						name='location'
						value='Boston'
					/>
					<label
						className='cb-tournament-label'
						htmlFor='location5'
					>
						<span className='checkbox-icon'></span>
						Boston
					</label>

					<input
						className='checkbox-input'
						type='radio'
						id='location6'
						name='location'
						value='Portland'
					/>
					<label
						className='cb-tournament-label'
						htmlFor='location6'
					>
						<span className='checkbox-icon'></span>
						Portland
					</label>
				</div>

				<div className='formData cb-CGU-newsLetter'>
					<input
						className='checkbox-input'
						type='checkbox'
						id='checkboxCGU'
						name='checkboxCGU'
						required
					/>
					<label
						className='cb-CGU-newsLetter-label'
						htmlFor='checkboxCGU'
					>
						<span className='checkbox-icon'></span>
						J'ai lu et accepté les conditions
						d'utilisation.
					</label>
				</div>

				<div className='formData cb-CGU-newsLetter'>
					<input
						className='checkbox-input'
						type='checkbox'
						id='checkboxNewsLetter'
					/>
					<label
						className='cb-CGU-newsLetter-label'
						htmlFor='checkboxNewsLetter'
					>
						<span className='checkbox-icon'></span>
						Je souhaite être prévenu des prochains
						évènements.
					</label>
				</div>

				<button className='btn btn--form ' type='submit'>
					C'est parti
				</button>
			</form>
		</>
	)

	return (
		<Modal
			isOpen={isModalOpen}
			onClose={closeModal}
			style={styledModal}
			closingButton={false}
		>
			{contentModal}
		</Modal>
	)
}

const styledModal = {
	className: {
		background: 'modal-section',
		container: ['content', 'content--form-body'],
	},
}

export default FormModal
