let RandomNumber = 0
let Toes = 0
input.onButtonPressed(Button.A, function () {
    RandomNumber = randint(0, 1)
    if (RandomNumber == 0) {
        basic.showString("Turth")
    } else {
        basic.showString("Dare")
    }
})
input.onButtonPressed(Button.B, function () {
    Toes = randint(0, 3)
    if (Toes == 0) {
        basic.showArrow(ArrowNames.North)
    } else if (Toes == 1) {
        basic.showArrow(ArrowNames.South)
    } else if (Toes == 2) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showArrow(ArrowNames.East)
    }
    basic.clearScreen()
})
basic.forever(function () {
	
})
