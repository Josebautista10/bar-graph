export function clearCanvas() {
  const delBars = document.getElementById("barsList")
  delBars.innerHTML = ''
  const delAxis = document.getElementById("bar-chart-canvas")
    delAxis.classList.remove("axis")
}