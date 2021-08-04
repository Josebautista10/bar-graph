export function generateDefaultInputs() {
  const colors = ['red', 'green', 'blue', 'yellow'];
  const spacings = [5, 10, 15, 20];
  const barSpacing = spacings[randomNumber(spacings.length)];
  const switchAxes = Math.random < 0.5;
  const totalBars = Math.floor(Math.random() * (10 - 1) + 1);
  const labels = [
    'Rocks',
    'Papers',
    'Scissors',
    'Shots',
    'Balls',
    'Sticks',
    'Shoes',
    'Dogs',
    'Cats',
    'Lizards',
  ];

  const data = Array.from({ length: totalBars }, () => randomNumber(totalBars));
  const options = Array.from({ length: totalBars }, () => ({
    color: colors[randomNumber(colors.length)],
    label: labels[randomNumber(labels.length)],
  }));

  options.push({
    barSpacing,
    switchAxes,
  });

  return { data, options };
}

function randomNumber(length) {
  return Math.floor(Math.random() * length);
}
