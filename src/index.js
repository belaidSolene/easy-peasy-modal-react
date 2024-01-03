import React from 'react'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'

import Background from './components/Background'
import Container from './components/Container'
import CloseButton from './components/CloseButton'
const Modal = ({ isOpen, onClose, children, style, closingButton = true }) => {
	if (!isOpen) {
		return null
	}

	return (
		<StyleSheetManager
			shouldForwardProp={(prop) => isPropValid(prop)}
		>
			<Background onClose={onClose} style={style}>
				<Container style={style}>
					{closingButton && (
						<CloseButton
							onClose={onClose}
							style={style}
							closingButton={closingButton}
						/>
					)}

					{children}
				</Container>
			</Background>
		</StyleSheetManager>
	)
}

export default Modal
