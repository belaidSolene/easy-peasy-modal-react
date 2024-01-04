# easy-peasy-modal-react

## Description

A responsive and customizable React modal component for the effortless display of interactive content in your React application. Easy to integrate, lightweight, and highly configurable, our component provides a seamless user experience with advanced customization options.

## Installation

```bash
npm install easy-peasy-modal-react

```

## Usage

1. Import the Modal component into your React project:

```bash
import Modal from 'easy-peasy-modal-react'

```

1. Use the Modal component in your React component:

```bash
import Modal from 'easy-peasy-modal-react'

const YourComponentModal({isModalOpen, setIsModalOpen}) {
  const closeModal = () => {
    setIsModalOpen(false)
  }

  const content = <theContentYouWantInTheModal />

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal} >
      {content}
    </Modal>
  )
}
```

1. Declare a useState in the file where you want your modal to appear and trigger an event to make it appear. In this example, I'm using a button:

```bash
const [isModalOpen, setIsModalOpen] = useState(false)

<button onClick={() => setIsModalOpen(true)}>
  Press me
</button>

{isModalOpen && (
    <YourComponentModal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
    />
  )}
```

## Styling

Now, let's have some fun and stylize everything!

> [!NOTE]
>
> The Modal component comes with easy styling options. You can customize three objects: `background`,`container`, and `closeButton`.

1. To apply styling, declare an object with the name of your choice:

```bash
const styledModal = {
	className: {
		background: 'modal-section',
		container: ['content', 'content--form-body'],
	},
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
```

> [!IMPORTANT]
>
> The key of your styling object must be either styledComponent or className.

### className

If you prefer using classes for styling, use className and add a string for the class name. You can even use an array to add more classes for a single element.

### styledComponent

If you enjoy using styled-components, you can easily integrate it:

```bash
const MyStyledModal = {
  styledComponent: {
    background: {
      'background-color': 'rgba(0, 0, 0, 0.75)';
    },
    container: {
      width: '500px';
      height: '200px';
      'max-height': '900px';
      padding: '20px';
      overflow: hidden;
      'border-radius': 2'5px';
    },
  },
};
```

## Props

Props
:green_square: `isOpen`: A boolean indicating if the modal is open or not
:blue_square: `onClose`: The function that will close the modal
:purple_square: `children`: The components that will appear in the modal
:red_square: `style`: The styling object for the modal
:orange_square: `closingButton`: A boolean to design your own closing button
