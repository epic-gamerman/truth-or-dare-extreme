let Toes = 0
let RandomNumber = 0
input.onButtonPressed(Button.A, function () {
    Toes = randint(0, 1)
    if (true) {
        Toes = 0
        while (Toes <= 4) {
            Toes += 1
            basic.showIcon(IconNames.Happy)
        }
        basic.showNumber(Toes)
    }
})
input.onGesture(Gesture.Shake, function () {
    RandomNumber = randint(0, 3)
})
basic.forever(function () {
	
})
