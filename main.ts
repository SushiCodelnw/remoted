input.onButtonPressed(Button.A, function () {
    Set = 1
    basic.showIcon(IconNames.Square)
})
input.onButtonPressed(Button.B, function () {
    Set = 0
    basic.showIcon(IconNames.Triangle)
})
let command = ""
let Y = 0
let X = 0
let Set = 0
Set = 0
radio.setGroup(4)
basic.forever(function () {
    X = input.rotation(Rotation.Roll)
    Y = input.rotation(Rotation.Pitch)
    if (Set == 0) {
        if (Y < -30) {
            command = "Arm1Forward"
            basic.showArrow(ArrowNames.North)
        } else if (Y > 30) {
            command = "Arm1Forback"
            basic.showArrow(ArrowNames.South)
        } else if (X < -30) {
            command = "Baseleft"
            basic.showArrow(ArrowNames.West)
        } else if (X > 30) {
            command = "Baseright"
            basic.showArrow(ArrowNames.East)
        } else {
            command = "Stop"
            basic.clearScreen()
        }
    } else {
        if (Y < -30) {
            command = "Arm2Up"
            basic.showArrow(ArrowNames.North)
        } else if (Y > 30) {
            command = "Arm2Down"
            basic.showArrow(ArrowNames.South)
        } else if (X < -30) {
            command = "HandUp"
            basic.showArrow(ArrowNames.West)
        } else if (X > 30) {
            command = "HandDown"
            basic.showArrow(ArrowNames.East)
        } else {
            command = "Stop"
            basic.clearScreen()
        }
    }
    radio.sendValue(command, control.deviceSerialNumber())
})
