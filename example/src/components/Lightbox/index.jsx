import React from 'react'
import { useState } from 'react'
import Modal from 'react-simple-modal'

// Importing arrow icons as React components
import { ReactComponent as ArrowPrev } from '../../assets/arrowPrev.svg'
import { ReactComponent as ArrowNext } from '../../assets/arrowNext.svg'

import styled from 'styled-components'
const Lightbox = ({ isModalOpen, setIsModalOpen }) => {
	const closeModal = () => {
		setIsModalOpen(false)
	}

	const pictures = [
		'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg',
		'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg',
		'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg',
		'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg',
		'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg',
	]

	const [index, setIndex] = useState(0)

	const numberPic = pictures.length

	let currentPic = pictures[index]

	const content = (
		<Carousel>
			{/* Displaying the current image */}
			<StyleImg src={currentPic} alt='' />

			{/* Button to navigate to the previous image */}
			<StyleArrowPrev
				onClick={() => {
					// Updating index based on current position
					index === 0
						? setIndex(numberPic - 1)
						: setIndex(index - 1)
				}}
				data-testid='prevBtn'
			>
				<ArrowPrev />
			</StyleArrowPrev>

			{/* Button to navigate to the next image */}
			<StyleArrowNext
				onClick={() => {
					// Updating index based on current position
					index === numberPic - 1
						? setIndex(0)
						: setIndex(index + 1)
				}}
				data-testid='nextBtn'
			>
				<ArrowNext />
			</StyleArrowNext>

			{/* Index indicator displaying the current position */}
			<StyleIndex>
				<span>
					{index + 1} / {numberPic}
				</span>
			</StyleIndex>
		</Carousel>
	)

	return (
		<Modal isOpen={isModalOpen} onClose={closeModal} style={MyModal}>
			{content}
		</Modal>
	)
}

const MyModal = {
	styledComponent: {
		background: {
			'background-color': 'rgba(0, 0, 0, 0.75)',
		},
		closeButton: {
			'background-color': 'transparent',
			'box-shadow': 'none',
		},
		container: {
			width: '65vw',
			height: '85vh',
			'max-height': '900px',
			padding: '20px',
			overflow: 'hidden',
			'border-radius': '25px',
		},
	},
}

const Carousel = styled.div`
	width: 90%;
	height: 75vh;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 5px;
	overflow: hidden;
`

const StyleImg = styled.img`
	object-fit: cover;
	width: 100%;
	height: 100%;
`

const StyleArrow = styled.button`
	position: absolute;
	height: 100%;
	cursor: pointer;
	border: none;
	background-color: transparent;
`

const StyleArrowPrev = styled(StyleArrow)`
	left: 1rem;
`

const StyleArrowNext = styled(StyleArrow)`
	right: 1rem;
`

const StyleIndex = styled.p`
	position: absolute;
	bottom: 1rem;
	width: 100%;
	text-align: center;
	color: #ffffff;

	span {
		padding: 0.5rem 1rem;
		border-radius: 5px;
		background-color: rgba(0, 0, 0, 0.4);
	}
`

export default Lightbox
