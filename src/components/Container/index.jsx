// Importing necessary dependencies from React and styled-components
import React from 'react'
import styled from 'styled-components'

// Importing utility functions for default styles
import { DefaultContainer, generateStyles } from '../../utils/defaultStyle'

// Container component that wraps content with provided styles
const Container = ({ style, children }) => {
	// Extracting styles from the passed props
	const usingClassName = style?.className
	const usingStyledComponent = style?.styledComponent

	// Conditionally rendering the container based on the provided style
	if (usingClassName) {
		// If using className, create a string of classes and render a div with those classes
		const containerClasses = Array.isArray(usingClassName.container)
			? usingClassName.container.join(' ')
			: usingClassName.container

		return <div className={containerClasses}>{children}</div>
	} else {
		// If using styled-component, apply the styles and render the StyledContainer
		return (
			<StyledContainer {...usingStyledComponent?.container}>
				{children}
			</StyledContainer>
		)
	}
}

// Styled-component for the container, extending the DefaultContainer
const StyledContainer = styled(DefaultContainer)`
	${(props) => generateStyles(props)}
`

export default Container
