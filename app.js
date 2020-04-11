const controlPanel = document.querySelector('[control-panel]')
const redValue = document.querySelector('[red-value]')
const greenValue = document.querySelector('[green-value]')
const blueValue = document.querySelector('[blue-value]')

controlPanel.addEventListener('change', (e) => {
  const controller = e.target
  const controllerValue = e.target.value
  console.log(controllerValue)
  console.log(controller)
  if (controller.matches('[red]')) {
    console.log('red')
    redValue.innerHTML = controllerValue
  } else if (controller.matches('[green]')) {
    console.log('green')
    greenValue.innerHTML = controllerValue
  } else {
    console.log('blue')
    blueValue.innerHTML = controllerValue
  }
})