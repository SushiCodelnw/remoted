joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    contol = "Move"
    basic.showIcon(IconNames.Rollerskate)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    contol = "Arm"
    basic.showIcon(IconNames.Sword)
})
let command = ""
let contol = ""
contol = "Move"
radio.setGroup(4)
joystickbit.initJoystickBit()
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 200) {
        basic.showArrow(ArrowNames.North)
        if (contol == "Move") {
            command = "Forward"
        } else {
            command = "Arm2Up"
        }
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.X) > 800) {
        basic.showArrow(ArrowNames.South)
        if (contol == "Move") {
            command = "Arm1Forback"
        } else {
            command = "Arm2Down"
        }
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 800) {
        basic.showArrow(ArrowNames.West)
        if (contol == "Move") {
            command = "Baseleft"
        } else {
            command = "HandUp"
        }
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 200) {
        basic.showArrow(ArrowNames.East)
        if (contol == "Move") {
            command = "Baseright"
        } else {
            command = "HandDown"
        }
    } else {
        command = "Stop"
        basic.clearScreen()
    }
    radio.sendValue(command, control.deviceSerialNumber())
})
