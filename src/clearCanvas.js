export function clearCanvas() {
  document.getElementById('barsList').innerHTML = ''
  document.getElementById('barChartCanvas').classList.remove('axis')
  document.getElementById('legendList').innerHTML = ''
}
