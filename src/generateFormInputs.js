export function generateSelectOption(properties) {
  const option = document.createElement('option')

  option.className = properties.className || `option-class-${Date.now()}`
  option.id = properties.id || `option-id-${Date.now()}`
  option.textContent = properties.textContent
  option.value = properties.value

  return option
}

export function generateInputText(placeholder, id, className) {
  const input = document.createElement('input')

  input.placeholder = placeholder
  input.id = id
  input.className = className
  input.type = 'text'

  return input
}

export function generateInputNumber(placeholder, id, className, step) {
  const input = document.createElement('input')

  input.className = className
  input.id = id
  input.min = 1
  input.placeholder = placeholder
  input.step = step
  input.type = 'number'

  return input
}
