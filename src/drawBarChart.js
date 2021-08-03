export function drawBarChart(data, options, element) {
  const drawButton = document.getElementById('draw-button');
  drawButton.disabled = true;
  const canvas = document.querySelector(`#${element}`);
  const totalBars = data.length;
  const maxHeight = Math.max(...data);
  const maxGraphHeightPx = 500;
  const maxGraphWidthPx = 1000;
  const yAxisScale = maxGraphHeightPx / maxHeight;
  const xAxisScale = maxGraphWidthPx / totalBars - (totalBars + 1);
  const defaultBarSettings = {
    colors: ['red', 'green', 'blue', 'yellow'],
    barSpacing: 5
  };

  let { barSpacing = 5, switchAxes } = options[options.length - 1];
  
  if (isNaN(barSpacing)) {
    barSpacing = defaultBarSettings.barSpacing
  }

   

  canvas.className = 'axis';

  for (let i = 0; i < totalBars; i++) {
    const bar = document.createElement('div');

    bar.className = 'bar';
    bar.id = `bar-${i + 1}`;
    const randomColor = parseInt(defaultBarSettings.colors.length * Math.random());
    bar.style['background-color'] = options[i].color || defaultBarSettings.colors[randomColor];
    bar.style.width = totalBars === 1 ? '250px' : `${xAxisScale}px`;

    bar.style['margin-left'] = totalBars === 1 ? '300px' : `${barSpacing}px`;
    bar.style['margin-right'] = `${barSpacing}px`;

    const barHeight = data[i] * yAxisScale;
    bar.style.height = `${barHeight}px`;
    bar.style['margin-top'] = `${maxGraphHeightPx - barHeight}px`;

    canvas.querySelector('.bars').appendChild(bar);
  }

  console.log(canvas);
}
