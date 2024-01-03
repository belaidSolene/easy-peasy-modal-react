import React from 'react'
import styled from 'styled-components'
import { DefaultContainer, generateStyles } from '../../utils/defaultStyle'

const Container = ({ style, children }) => {
	const usingClassName = style?.className
	const usingStyledComponent = style?.styledComponent

	if (usingClassName) {
		const containerClasses = Array.isArray(usingClassName.container)
			? usingClassName.container.join(' ')
			: usingClassName.container

		return <div className={containerClasses}>{children}</div>
	} else {
		return (
			<StyledContainer {...usingStyledComponent?.container}>
				{children}
			</StyledContainer>
		)
	}
}
const StyledContainer = styled(DefaultContainer)`
	${(props) => generateStyles(props)}
`

export default Container
