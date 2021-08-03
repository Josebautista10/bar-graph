export function drawBarChart(data, options, element) {
  const drawButton = document.getElementById('draw-button');
  drawButton.disabled = true;
  const canvas = document.querySelector(`#${element}`);
  const totalBars = data.length;
  const { barSpacing, switchAxes } = options[options.length - 1];
  const spacingScale = 5;
  const maxHeight = Math.max(...data);

  canvas.className = 'axis';

  for (let i = 0; i < totalBars; i++) {
    const bar = document.createElement('li');

    bar.className = 'bar';
    bar.id = `bar-${i + 1}`;
    bar['data-value'] = totalBars[i];
    bar.style['background-color'] = options[i].color;
    bar.style.width = '20%';
    bar.style.height = '100%';

    canvas.querySelector('ul').appendChild(bar);
  }

  console.log(canvas);
}
