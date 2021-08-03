export function drawBarChart(data, options, element) {
  const drawButton = document.getElementById('draw-button');
  drawButton.disabled = true;
  const canvas = document.querySelector(`#${element}`);
  const totalBars = data.length;
  const { barSpacing, switchAxes } = options[options.length - 1];
  const spacingScale = 5;
  const maxHeight = Math.max(...data);
  const minHeight = Math.min(...data);
  console.log(minHeight)
  const maxGraphHeightPx = 500
  const scale = maxGraphHeightPx / minHeight;


  canvas.className = 'axis';

  for (let i = 0; i < totalBars; i++) {
    const bar = document.createElement('div');

    bar.className = 'bar';
    bar.id = `bar-${i + 1}`;
    bar.style['background-color'] = options[i].color;
    bar.style.width = '20px';
    bar.style["margin-left"] = totalBars === 1 ? '300px' : `${barSpacing}px`
    bar.style["margin-right"] = `${barSpacing}px`

    const barHeight = data[i] * maxGraphHeightPx / maxHeight
    bar.style.height = `${barHeight}px`
    bar.style["margin-top"] = `${maxGraphHeightPx - barHeight}px`


    canvas.querySelector('.bars').appendChild(bar);
  }

  console.log(canvas);
}
