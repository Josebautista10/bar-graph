function positionBarValue(bar) {
  const valuePosition = document.querySelector('#valuePosition').value

  switch (valuePosition) {
    case 'center':
      bar.style['align-items'] = 'center'
      break
    case 'bottom':
      bar.style['align-content'] = 'flex-end'
      bar.style['align-items'] = 'flex-end'
      break
    default:
      break
  }
}

function drawBarsLegend(options) {
  const barList = document.querySelector('#legendList')

  options.forEach((bar) => {
    const legend = document.createElement('li')

    legend.innerHTML = bar.label
    legend.className = 'barLegend'
    legend.style.setProperty('--background', bar.color)
    barList.appendChild(legend)
  })
}

function drawGrid(canvas) {
  canvas.style['background-image'] =
    'repeating-linear-gradient(rgb(0, 0, 0) 0 1px, transparent 1px 100%)'
  canvas.style['background-size'] = '71px 71px'
}

function removeGrid(canvas) {
  canvas.style['background-image'] = ''
  canvas.style['background-size'] = ''
}

export function drawBarChart(data, options, element) {
  const canvas = document.querySelector(`#${element}`)
  const totalBars = data.length
  const maxHeight = Math.max(...data)
  const maxGraphHeightPx = 500
  const maxGraphWidthPx = 1000
  const yAxisScale = maxGraphHeightPx / maxHeight
  const xAxisScale = maxGraphWidthPx / totalBars - (totalBars + 1)
  const { barSpacing, switchAxes } = options[options.length - 1]
  const barList = canvas.querySelector('.bars')

  canvas.className = 'axis'
  switchAxes ? drawGrid(canvas) : removeGrid(canvas)

  for (let i = 0; i < totalBars; i++) {
    const bar = document.createElement('div')

    bar.className = 'bar'
    bar.id = `bar-${i + 1}`
    bar.style['background-color'] = options[i].color
    bar.style.width = totalBars === 1 ? '250px' : `${xAxisScale}px`
    bar.style['margin-left'] = totalBars === 1 ? '300px' : `${barSpacing}px`
    bar.style['margin-right'] = `${barSpacing}px`

    const barHeight = data[i] * yAxisScale

    bar.style.height = `${barHeight}px`
    bar.style['margin-top'] = `${maxGraphHeightPx - barHeight}px`
    bar.animate(
      [
        { transform: `translateY(${barHeight}px)` },
        { transform: 'translateY(0px)' }
      ],
      { duration: 1000 }
    )

    barList.appendChild(bar)

    const barValue = document.createElement('div')

    barValue.className = 'bar-value'
    barValue.innerHTML = data[i]

    bar.appendChild(barValue)
    positionBarValue(bar)
  }

  drawBarsLegend(options.slice(0, -1))
  barList.style['padding-top'] = data.every((e) => e === 0) ? '520px' : '50px'
}
