import React from 'react'
import { useState } from 'react'

import FormModal from './components/FormModal'
import ConfirmationModal from './components/ConfirmationModal'
import Lightbox from './components/Lightbox'

import styled from 'styled-components'
import './App.css'

function App() {
	const [isFormOpen, setIsFormOpen] = useState(false)
	const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
	const [isLightboxOpen, setIsLightboxOpen] = useState(false)

	return (
		<div className='App'>
			<header className='App-header'>
				Code example for react-simple-modal
			</header>

			<main>
				<WrapperButton>
					<ButtonForm
						onClick={() => setIsFormOpen(true)}
					>
						Open Form Modal
					</ButtonForm>

					<ButtonConfirm
						onClick={() =>
							setIsConfirmationOpen(true)
						}
					>
						Open Confirmation Modal
					</ButtonConfirm>

					<ButtonLightbox
						onClick={() =>
							setIsLightboxOpen(true)
						}
					>
						Open Lightbox
					</ButtonLightbox>
				</WrapperButton>

				{isFormOpen && (
					<FormModal
						isModalOpen={isFormOpen}
						setIsModalOpen={setIsFormOpen}
					/>
				)}

				{isConfirmationOpen && (
					<ConfirmationModal
						isModalOpen={isConfirmationOpen}
						setIsModalOpen={setIsConfirmationOpen}
					/>
				)}

				{isLightboxOpen && (
					<Lightbox
						isModalOpen={isLightboxOpen}
						setIsModalOpen={setIsLightboxOpen}
					/>
				)}
			</main>
		</div>
	)
}

const WrapperButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	margin: 1rem;
`

const Button = styled.button`
	border: none;
	border-radius: 3px;
	padding: 0.5rem 1rem;
	margin: 0.5rem;
	color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
`

const ButtonForm = styled(Button)`
	background-color: #fe142f;
`

const ButtonConfirm = styled(Button)`
	background-color: #5d6d21;
`

const ButtonLightbox = styled(Button)`
	background-color: #ff6060;
`

export default App
