import {
  generateInputText,
  generateInputNumber,
  generateSelectOption
} from './src/generateFormInputs.js'
import { getFormInfo } from './src/getFormInfo.js'
import { drawBarChart } from './src/drawBarChart.js'
import { generateDefaultInputs } from './src/generateDefaultInputs.js'
import { clearCanvas } from './src/clearCanvas.js'

let quantityBars = 0
let selectors = {
  barsQuantityInput: document.getElementById('selectBarGraph'),
  barsContainerInput: document.getElementById('barsContainerInput')
}

function addBarInputs(totalBars) {
  for (let i = 0; i < totalBars; i++) {
    const row = document.createElement('div')
    row.className = 'bar-data-wrapper'
    row.id = `bar-data-wrapper-${i + 1}`
    selectors.barsContainerInput.appendChild(row)

    const barDataWrapperSelector = selectors.barsContainerInput.querySelector(
      `#bar-data-wrapper-${i + 1}`
    )

    // Inject fieldset
    const fieldset = document.createElement('fieldset')
    fieldset.id = `fieldSet-${i + 1}`
    barDataWrapperSelector.appendChild(fieldset)

    const fieldsetSelector = barDataWrapperSelector.querySelector(
      `#fieldSet-${i + 1}`
    )
    const legend = document.createElement('legend')
    legend.textContent = `Bar ${i + 1}`
    fieldsetSelector.appendChild(legend)

    // Inject Bar height input
    fieldsetSelector.appendChild(
      generateInputNumber('1', `bar-height-${i + 1}`, 'bar-height', 1)
    )

    // Inject Bar color select
    const barColor = document.createElement('select')

    barColor.id = `bar-color-${i + 1}`
    barColor.className = 'bar-color'
    barColor.appendChild(
      generateSelectOption({
        textContent: 'select color',
        value: ''
      })
    )

    const barColorOptions = ['red', 'blue', 'green', 'yellow']

    barColorOptions.forEach((color) => {
      barColor.appendChild(
        generateSelectOption({
          className: `option-${color}`,
          textContent: color,
          value: color
        })
      )
    })

    fieldsetSelector.appendChild(barColor)

    //inject bar label color
    fieldsetSelector.appendChild(
      generateInputText('label color', `label-color-${i + 1}`, 'label-color')
    )
  }
}

function addInputBars(e) {
  const totalBars = parseInt(e.target.value, 10)

  if (quantityBars === 0) {
    addBarInputs(totalBars)
  } else {
    const container = selectors.barsContainerInput

    while (container.firstChild) {
      container.removeChild(container.firstChild)
    }
    addBarInputs(totalBars)
  }

  quantityBars = selectors.barsContainerInput.querySelectorAll('input').length
}

selectors.barsQuantityInput.addEventListener('input', addInputBars)

function drawCanvas() {
  clearCanvas()
  const { data, options } = getFormInfo()
  if (data.some((e) => isNaN(e))) {
    alert('Please supply the graph with a number')
    return
  }
  drawBarChart(data, options, 'barChartCanvas')
}

document.getElementById('drawButton').addEventListener('click', drawCanvas)

function drawDefaultCanvas() {
  clearCanvas()
  const defaultInputs = generateDefaultInputs()
  drawBarChart(defaultInputs.data, defaultInputs.options, 'barChartCanvas')
}

document
  .getElementById('randomButton')
  .addEventListener('click', drawDefaultCanvas)
