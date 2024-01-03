import React from 'react'
import styled from 'styled-components'
import { DefaultClosingButton, generateStyles } from '../../utils/defaultStyle'

const CloseButton = ({ style, onClose }) => {
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

	const usingClassName = style?.className
	const usingStyledComponent = style?.styledComponent

	if (usingClassName) {
		return (
			<button
				onClick={onClose}
				className={usingClassName?.closeButton}
			>
				{closingBtn}
			</button>
		)
	} else {
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

const StyledClosingButton = styled(DefaultClosingButton)`
	${(props) => generateStyles(props)}
`
export default CloseButton
