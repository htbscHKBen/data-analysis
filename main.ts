bluetooth.startUartService()
basic.showString("UART")
basic.forever(function () {
    bluetooth.uartWriteValue("x", input.acceleration(Dimension.X))
    bluetooth.uartWriteValue("y", input.acceleration(Dimension.Y))
})
