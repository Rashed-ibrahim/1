input.onButtonPressed(Button.A, function () {
    Counter += 1
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Counter)
})
input.onGesture(Gesture.Shake, function () {
    Hand = randint(1, 3)
    if (Hand == 1) {
        basic.showIcon(IconNames.Square)
    } else if (Hand == 2) {
        basic.showIcon(IconNames.SmallSquare)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
let Hand = 0
let Counter = 0
Counter = 0
