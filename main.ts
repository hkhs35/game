input.onButtonPressed(Button.A, function () {
    fruit.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    game.setScore(0)
    sprite = 1
    time = 500
})
input.onButtonPressed(Button.B, function () {
    fruit.change(LedSpriteProperty.X, 1)
})
let _this: game.LedSprite = null
let banana: game.LedSprite = null
let time = 0
let sprite = 0
let fruit: game.LedSprite = null
fruit = game.createSprite(2, 4)
let run = 0
basic.forever(function () {
    if (run == 1) {
        banana = game.createSprite(randint(0, 4), 0)
        banana.set(LedSpriteProperty.Brightness, 50)
        for (let index = 0; index <= 4; index++) {
            banana.set(LedSpriteProperty.Y, index)
        }
        basic.pause(time)
    }
    banana.delete()
    _this += -20
})
basic.forever(function () {
    if (run == 1) {
        if (fruit.isTouching(banana)) {
            game.addScore(1)
            banana.delete()
        }
    }
})
basic.forever(function () {
    if (true) {
        _this = game.createSprite(randint(0, 4), 2)
        fruit.set(LedSpriteProperty.Brightness, 50)
        for (let index = 0; index <= 5; index++) {
            if (banana.isDeleted()) {
                break;
if (index == 5) {
                    banana.delete()
                    run = 0
                    game.pause()
                    basic.showNumber(game.score())
                }
            }
        }
        banana.delete()
        time = -20
    }
})
