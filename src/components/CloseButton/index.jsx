// Importing necessary dependencies from React and styled-components
import React from 'react'
import styled from 'styled-components'

// Importing utility functions for default styles
import { DefaultClosingButton, generateStyles } from '../../utils/defaultStyle'

// CloseButton component that renders a close button with provided styles
const CloseButton = ({ style, onClose }) => {
	// SVG for the close button
	const closingBtn = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<line x1='18' y1='6' x2='6' y2='18'></line>
			<line x1='6' y1='6' x2='18' y2='18'></line>
		</svg>
	)

	// Extracting styles from the passed props
	const usingClassName = style?.className
	const usingStyledComponent = style?.styledComponent

	// Conditionally rendering the close button based on the provided style
	if (usingClassName) {
		// If using className, apply the styles and render the button with onClick
		return (
			<button
				onClick={onClose}
				className={usingClassName?.closeButton}
			>
				{closingBtn}
			</button>
		)
	} else {
		// If using styled-component, apply the styles and render the button with onClick
		return (
			<StyledClosingButton
				onClick={onClose}
				{...usingStyledComponent?.closeButton}
			>
				{closingBtn}
			</StyledClosingButton>
		)
	}
}

// Styled-component for the close button, extending the DefaultClosingButton
const StyledClosingButton = styled(DefaultClosingButton)`
	${(props) => generateStyles(props)}
`
export default CloseButton
