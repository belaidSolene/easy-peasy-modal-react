// Importing necessary dependencies from React and styled-components
import React from 'react'
import styled from 'styled-components'

// Importing utility functions for default styles
import { DefaultBG, generateStyles } from '../../utils/defaultStyle'

// Background component that handles click outside and renders children
const Background = ({ style, children, onClose }) => {
	// Function to handle click outside of the background
	const handleClickOutside = (e) => {
		// If the click target is the background itself, trigger the onClose function
		if (e.target === e.currentTarget) {
			onClose()
		}
	}

	// Extracting styles from the passed props
	const usingClassName = style?.className
	const usingStyledComponent = style?.styledComponent

	// Conditionally rendering the background based on the provided style
	if (usingClassName) {
		// If using className, apply the styles and render children
		return (
			<div
				onClick={handleClickOutside}
				className={usingClassName?.background}
			>
				{children}
			</div>
		)
	} else {
		// If using styled-component, apply the styles and render children
		return (
			<StyledBackground
				onClick={handleClickOutside}
				{...usingStyledComponent?.background}
			>
				{children}
			</StyledBackground>
		)
	}
}

// Styled-component for the background, extending the DefaultBG
const StyledBackground = styled(DefaultBG)`
	${(props) => generateStyles(props)}
`

export default Background
