export function clearCanvas() {
  document.getElementById('barsList').innerHTML = '';
  document.getElementById('bar-chart-canvas').classList.remove('axis');
  document.getElementById('legendList').innerHTML = '';
}
