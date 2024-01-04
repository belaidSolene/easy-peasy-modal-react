import React from 'react'
import Modal from 'easy-peasy-modal-react'
import styled from 'styled-components'

const ConfirmationModal = ({ isModalOpen, setIsModalOpen }) => {
	const closeModal = () => {
		setIsModalOpen(false)
	}

	return (
		<Modal isOpen={isModalOpen} onClose={closeModal}>
			<ModalContent>
				<h2>Employee Created</h2>
				<p>
					<i className='fa-solid fa-people-group'></i>{' '}
					A new colleague has joined our team!
				</p>

				<Button onClick={closeModal}>Fermer</Button>
			</ModalContent>
		</Modal>
	)
}

const ModalContent = styled.div`
	width: 100%;
	background-color: white;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;

	h2 {
		text-align: center;
		width: 100%;
		margin: 0;
	}

	p {
		text-align: center;
		width: 100%;
	}
`

const Button = styled.button`
	border: none;
	border-radius: 3px;
	padding: 0.5rem 1rem;
	color: white;
	background-color: #fe142f;
	cursor: pointer;
`

export default ConfirmationModal
