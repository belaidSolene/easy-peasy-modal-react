// Importing necessary dependencies and components from React and styled-components
import React from 'react'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'

// Importing custom components from the components folder
import Background from './components/Background'
import Container from './components/Container'
import CloseButton from './components/CloseButton'

// Importing utility functions to test props
import { testIsBoolean, testIsFct, ensureChildren } from './utils/testProps'

// Main functional component Modal
const Modal = ({ isOpen, onClose, children, style, closingButton = true }) => {
	// If the modal is not open, return null (not rendering anything)
	if (!isOpen) {
		return null
	}

	// Testing the provided props
	testIsBoolean(isOpen)
	testIsBoolean(closingButton)
	testIsFct(onClose)
	ensureChildren(children)

	// Rendering the Modal component
	return (
		// Wrapping the modal content with StyleSheetManager to handle styled-components styles
		<StyleSheetManager
			shouldForwardProp={(prop) => isPropValid(prop)}
		>
			{/* Background component covering the entire screen with a dark overlay */}
			<Background onClose={onClose} style={style}>
				{/* Container component holding the modal content */}
				<Container style={style}>
					{/* Render the CloseButton if closingButton is true */}
					{closingButton && (
						<CloseButton
							onClose={onClose}
							style={style}
							closingButton={closingButton}
						/>
					)}
					{/* Render the children components */}
					{children}
				</Container>
			</Background>
		</StyleSheetManager>
	)
}

export default Modal
