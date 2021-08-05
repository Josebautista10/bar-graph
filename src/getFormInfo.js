export function getFormInfo() {
  const formSelector = document.getElementsByClassName('bar-data-wrapper')
  let data = []
  let options = []

  for (let i = 0; i < formSelector.length; i++) {
    data.push(
      parseInt(formSelector[i].getElementsByClassName('bar-height')[0].value)
    )

    const barOptions = {}
    barOptions.color =
      formSelector[i].getElementsByClassName('bar-color')[0].value
    barOptions.label =
      formSelector[i].getElementsByClassName('label-color')[0].value
    options.push(barOptions)
  }

  const general = {}
  general.barSpacing = parseFloat(document.getElementById('bar-spacing').value)
  general.switchAxes =
    document.getElementsByClassName('toggle-checkbox')[0].checked
  options.push(general)

  return { data, options }
}
