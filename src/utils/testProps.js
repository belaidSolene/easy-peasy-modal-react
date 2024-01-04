export const testIsBoolean = (isOpen) => {
	if (typeof isOpen !== 'boolean') {
		throw new Error('isOpen must be a boolean')
	}
}

export const testIsFct = (onClose) => {
	if (typeof onClose !== 'function') {
		throw new Error('onClose must be a function')
	}
}

export const ensureChildren = (children) => {
	if (!children) {
		throw new Error(
			'The "children" prop must be defined and should contain components to appear in the modal.',
		)
	}
}
export const testOnStyle = (style) => {
	if (!validateStyleObject(style)) {
		throw new Error('Style is invalid')
	}
}

function validateStyleObject(styleObject) {
	const allowedKeys = ['background', 'container', 'closeButton']

	if (!styleObject) {
		return true
	}

	const hasClassName = 'className' in styleObject
	const hasstyledComponent = 'styledComponent' in styleObject

	if (!(hasClassName || hasstyledComponent)) {
		console.error(
			"L'objet style doit contenir className ou styledComponent.",
		)
		return false
	}

	if (hasClassName && hasstyledComponent) {
		console.error(
			"L'objet style ne peut avoir className styledComponent en même temps.",
		)
		return false
	}

	if (hasClassName && Object.keys(styleObject.className).length === 0) {
		console.error(
			"L'objet style ne peut avoir className sans valeur.",
		)
		return false
	}

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

	if (modalKeys.length !== uniqueKeys.size) {
		console.error(
			'Les clés ne doivent pas être dupliquées entre className et styleComponent.',
		)
		return false
	}

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

	return true
}
