import React from 'react'
import styled from 'styled-components'

import { DefaultBG, generateStyles } from '../../utils/defaultStyle'
const Background = ({ style, children, onClose }) => {
	const handleClickOutside = (e) => {
		if (e.target === e.currentTarget) {
			onClose()
		}
	}

	const usingClassName = style?.className
	const usingStyledComponent = style?.styledComponent

	if (usingClassName) {
		return (
			<div
				onClick={handleClickOutside}
				className={usingClassName?.background}
			>
				{children}
			</div>
		)
	} else {
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

const StyledBackground = styled(DefaultBG)`
    ${(props) => generateStyles(props)}
`

export default Background