controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Stop) {
        textSprite.startEffect(effects.halo)
        timer.after(8000, function () {
            scene.setBackgroundImage(img`
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                `)
        })
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
let Green = 0
let Red = 0
let Blue = 0
let textSprite: TextSprite = null
let Word = ""
let Stop = false
let picture = image.screenImage().clone()
scene.setBackgroundImage(picture)
Stop = false
timer.after(10000, function () {
    Word = game.askForString("Choose a word to hide")
    timer.after(5000, function () {
        textSprite = textsprite.create("Null")
        textSprite.setText(Word)
        textSprite.setStayInScreen(true)
        Blue = randint(0, 255)
        Red = randint(0, 255)
        Green = randint(0, 255)
        color.setColor(1, color.rgb(Green, Green, Blue), 500)
        color.setColor(randint(2, 14), color.rgb(Red + randint(-15, 15), Green, Blue), 500)
        color.setColor(randint(2, 14), color.rgb(Red, Green + randint(-15, 15), Blue), 500)
        color.setColor(randint(2, 14), color.rgb(Red, Green, Blue + randint(-15, 15)), 500)
        textSprite.setPosition(randint(30, 130), randint(20, 100))
        timer.after(1000, function () {
            Stop = true
            game.splash("The Word has been", "Hidden")
        })
    })
})
game.onUpdateInterval(100, function () {
    if (!(Stop)) {
        picture.drawLine(randint(0, 160), randint(0, 120), randint(0, 160), randint(0, 120), 2)
        picture.drawLine(randint(0, 160), randint(0, 120), randint(0, 160), randint(0, 120), 3)
        picture.drawLine(randint(0, 160), randint(0, 120), randint(0, 160), randint(0, 120), 4)
        picture.drawLine(randint(0, 160), randint(0, 120), randint(0, 160), randint(0, 120), 5)
        picture.drawLine(randint(0, 160), randint(0, 120), randint(0, 160), randint(0, 120), 6)
        picture.drawLine(randint(0, 160), randint(0, 120), randint(0, 160), randint(0, 120), 7)
        picture.drawLine(randint(0, 160), randint(0, 120), randint(0, 160), randint(0, 120), 8)
        picture.drawLine(randint(0, 160), randint(0, 120), randint(0, 160), randint(0, 120), 0)
        picture.drawLine(randint(0, 160), randint(0, 120), randint(0, 160), randint(0, 120), 9)
        picture.drawLine(randint(0, 160), randint(0, 120), randint(0, 160), randint(0, 120), 10)
        picture.drawLine(randint(0, 160), randint(0, 120), randint(0, 160), randint(0, 120), 11)
        picture.drawLine(randint(0, 160), randint(0, 120), randint(0, 160), randint(0, 120), 12)
        picture.drawLine(randint(0, 160), randint(0, 120), randint(0, 160), randint(0, 120), 13)
        picture.drawLine(randint(0, 160), randint(0, 120), randint(0, 160), randint(0, 120), 14)
        picture.drawLine(randint(0, 160), randint(0, 120), randint(0, 160), randint(0, 120), 15)
        picture.drawRect(randint(0, 160), randint(0, 120), randint(0, 160), randint(0, 120), 2)
        picture.drawRect(randint(0, 160), randint(0, 120), randint(0, 160), randint(0, 120), 3)
        picture.drawRect(randint(0, 160), randint(0, 120), randint(0, 160), randint(0, 120), 4)
        picture.drawRect(randint(0, 160), randint(0, 120), randint(0, 160), randint(0, 120), 5)
        picture.drawRect(randint(0, 160), randint(0, 120), randint(0, 160), randint(0, 120), 6)
        picture.drawRect(randint(0, 160), randint(0, 120), randint(0, 160), randint(0, 120), 7)
        picture.drawRect(randint(0, 160), randint(0, 120), randint(0, 160), randint(0, 120), 8)
        picture.drawRect(randint(0, 160), randint(0, 120), randint(0, 160), randint(0, 120), 9)
        picture.drawRect(randint(0, 160), randint(0, 120), randint(0, 160), randint(0, 120), 10)
        picture.drawRect(randint(0, 160), randint(0, 120), randint(0, 160), randint(0, 120), 15)
        if (5 == randint(1, 5)) {
            color.setColor(randint(1, 14), color.rgb(randint(0, 255), randint(0, 255), randint(0, 255)), 900)
        }
    }
})
