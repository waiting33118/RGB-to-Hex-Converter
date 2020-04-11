const controlPanel = document.querySelector('[control-panel]')
const redValue = document.querySelector('[red-value]')
const greenValue = document.querySelector('[green-value]')
const blueValue = document.querySelector('[blue-value]')
const body = document.querySelector('body')
const hexDisplay = document.querySelector('[hex-display]')

controlPanel.addEventListener('input', (e) => {
  const controller = e.target
  const controllerValue = e.target.value
  if (controller.matches('[red]')) {
    redValue.innerHTML = controllerValue
  } else if (controller.matches('[green]')) {
    greenValue.innerHTML = controllerValue
  } else if (controller.matches('[blue]')) {
    blueValue.innerHTML = controllerValue
  }

  const redOfRgb = new RGB(redValue.innerText)
  const greenOfRgb = new RGB(greenValue.innerText)
  const blueOfRgb = new RGB(blueValue.innerText)
  const redOfHex = redOfRgb.convertToHex()
  const greenOfHex = greenOfRgb.convertToHex()
  const blueOfHex = blueOfRgb.convertToHex()
  body.style.backgroundColor = `#${redOfHex}${greenOfHex}${blueOfHex}`
  hexDisplay.innerHTML = `#${redOfHex}${greenOfHex}${blueOfHex}`
})

class RGB {
  constructor(color) {
    this.color = color
  }
  convertToHex() {
    let HexValue = (Number(this.color)).toString(16)
    if (HexValue.length < 2) {
      HexValue = "0" + HexValue
    }
    return HexValue
  }
}



