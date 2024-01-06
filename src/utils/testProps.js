// Ensures that isBoolean is a boolean, otherwise throws an error
export const testIsBoolean = (isBoolean) => {
	if (typeof isBoolean !== 'boolean') {
		throw new Error('isOpen must be a boolean')
	}
}

// Ensures that onClose is a function, otherwise throws an error
export const testIsFct = (onClose) => {
	if (typeof onClose !== 'function') {
		throw new Error('onClose must be a function')
	}
}

// Ensures that children is defined, otherwise throws an error
export const ensureChildren = (children) => {
	if (!children) {
		throw new Error(
			'The "children" prop must be defined and should contain components to appear in the modal.',
		)
	}
}

// Ensures that the provided style object is valid, otherwise throws an error
export const testOnStyle = (style) => {
	if (!validateStyleObject(style)) {
		throw new Error('Style is invalid')
	}
}

// Validates the structure and content of the style object
function validateStyleObject(styleObject) {
	const allowedKeys = ['background', 'container', 'closeButton']

	// If styleObject is not defined, it is considered valid
	if (!styleObject) {
		return true
	}

	const hasClassName = 'className' in styleObject
	const hasstyledComponent = 'styledComponent' in styleObject

	// Validates the presence of either className or styledComponent, but not both
	if (!(hasClassName || hasstyledComponent)) {
		console.error(
			"L'objet style doit contenir className ou styledComponent.",
		)
		return false
	}

	// Validates that className and styledComponent are not present simultaneously
	if (hasClassName && hasstyledComponent) {
		console.error(
			"L'objet style ne peut avoir className styledComponent en même temps.",
		)
		return false
	}

	// Validates that className is not an empty object
	if (hasClassName && Object.keys(styleObject.className).length === 0) {
		console.error(
			"L'objet style ne peut avoir className sans valeur.",
		)
		return false
	}

	// Validates that styledComponent is not an empty object
	if (
		hasstyledComponent &&
		Object.keys(styleObject.styledComponent).length === 0
	) {
		console.error(
			"L'objet style ne peut avoir styledComponent sans valeur.",
		)
		return false
	}

	const modalKeys = hasClassName
		? Object.keys(styleObject.className)
		: Object.keys(styleObject.styleComponent)

	const uniqueKeys = new Set(modalKeys)

	// Validates that keys are not duplicated between className and styledComponent
	if (modalKeys.length !== uniqueKeys.size) {
		console.error(
			'Les clés ne doivent pas être dupliquées entre className et styleComponent.',
		)
		return false
	}
	// Validates that keys are within the allowed list
	for (const key of modalKeys) {
		console.log(key)
		if (
			key !== 'container' &&
			key !== 'background' &&
			key !== 'closeButton'
		) {
			console.error(`La clé "${key}" n'est pas autorisée.`)
			return false
		}
	}

	// Validates that values of styledComponent keys are objects
	if (hasstyledComponent) {
		for (const key in styleObject.styledComponent) {
			const value = styleObject.styledComponent[key]
			if (typeof value !== 'object') {
				console.error(
					`La valeur pour la clé "${key}" doit être un objet.`,
				)
				return false
			}
		}
	}

	// If all validations pass, the style object is considered valid
	return true
}
