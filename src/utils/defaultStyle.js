import styled from 'styled-components'

const colors = {
	bgModalRGB: '59, 44, 53',
}

export const DefaultBG = styled.div`
	position: fixed;
	z-index: 100;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	overflow: auto;
	background-color: rgba(${colors.bgModalRGB}, 0.5);
`

export const DefaultContainer = styled.div`
	width: 400px;
	height: 200px;
	border-radius: 7px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	overflow: hidden;
	z-index: 101;
	background-color: white;
	padding: 20px;
`

export const DefaultClosingButton = styled.button`
	cursor: pointer;
	position: absolute;
	top: 0;
	right: 0;
	margin: 15px;
	border: none;
	border-radius: 5px;
	box-shadow: 3px 2px 4px rgba(${colors.bgModalRGB}, 0.25);
	display: flex;
`
export const generateStyles = (props) => {
	return Object.entries(props)
		.map(([key, value]) => `${key}: ${value};`)
		.join(' ')
}
