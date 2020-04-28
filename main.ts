enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const thing = SpriteKind.create()
    export const obstacle = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
function checklose () {
    if (mySprite.overlapsWith(myEnemy)) {
        music.powerDown.play()
        game.over(false, effects.starField)
    }
}
function checkwin () {
    let coins = 0
    if (3 < coins) {
        game.over(true, effects.confetti)
    }
}
function scenery_loop () {
	
}
function sceneryMoveLeft () {
    obstacle1.x += 0 - game.runtime() / (game.runtime() - 1)
    obstacle2.x += 0 - game.runtime() / (game.runtime() - 1)
    obstacle3.x += 0 - game.runtime() / (game.runtime() - 1)
    obstacle4.x += 0 - game.runtime() / (game.runtime() - 1)
}
function collectCoins () {
    if (mySprite.overlapsWith(coin)) {
        music.baDing.play()
        coin.setPosition(155, Math.randomRange(0, 115))
    }
}
let myEnemy: Sprite = null
let mySprite: Sprite = null
let obstacle4: Sprite = null
let obstacle3: Sprite = null
let obstacle2: Sprite = null
let obstacle1: Sprite = null
let coin: Sprite = null
scene.setBackgroundColor(9)
coin = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 8 8 8 . . . . . . . . 
. . . . 8 9 9 9 8 8 . . . . . . 
. . . 8 9 6 6 6 6 6 8 8 . . . . 
. . . 8 6 8 8 8 8 8 8 8 8 8 . . 
. . . 8 8 8 8 8 8 8 8 8 . . . . 
. . . . 8 8 8 8 8 8 . . . . . . 
. . . . . 6 8 8 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
obstacle1 = sprites.create(img`
. . . . . . c c 6 6 . . . . . . 
. . . . . c 6 5 7 6 c . . . . . 
. . . . c 6 7 7 5 7 6 c . . . . 
. . . . c c 6 7 7 6 6 6 . . . . 
. . . c c 6 c 6 6 6 7 c c . . . 
. . 6 c 6 6 6 7 7 7 c c 6 c . . 
. . c 7 6 6 6 6 7 6 6 7 7 6 . . 
. . c 6 7 7 7 7 7 7 7 7 6 c . . 
. . c c 6 7 7 7 7 7 7 6 c c . . 
. c 6 7 c c 7 6 6 7 6 6 7 6 c . 
. c 7 7 7 6 6 6 6 6 7 7 7 7 c . 
. c 6 7 7 7 7 7 7 7 7 7 7 6 6 . 
. c c 7 7 6 7 7 7 6 7 7 6 6 6 6 
c 6 7 6 c c 6 7 6 6 6 6 6 7 7 6 
c 7 7 7 7 6 6 6 6 6 6 7 7 7 7 6 
c c 7 7 7 7 7 7 7 7 7 7 7 7 6 c 
. c 6 7 6 7 7 7 6 7 7 7 6 7 c . 
. . c c 6 6 7 6 6 6 7 6 6 c . . 
. . . c c c 6 c 6 6 c c c . . . 
. . . . . c c c c c c . . . . . 
. . . . . . . e e . . . . . . . 
. . . . . . e e e e . . . . . . 
. . . . . e e e e e e . . . . . 
. . . . . . . e e . . . . . . . 
`, SpriteKind.Player)
obstacle2 = sprites.create(img`
. . . . . . c c 6 6 . . . . . . 
. . . . . c 6 5 7 6 c . . . . . 
. . . . c 6 7 7 5 7 6 c . . . . 
. . . . c c 6 7 7 6 6 6 . . . . 
. . . c c 6 c 6 6 6 7 c c . . . 
. . 6 c 6 6 6 7 7 7 c c 6 c . . 
. . c 7 6 6 6 6 7 6 6 7 7 6 . . 
. . c 6 7 7 7 7 7 7 7 7 6 c . . 
. . c c 6 7 7 7 7 7 7 6 c c . . 
. c 6 7 c c 7 6 6 7 6 6 7 6 c . 
. c 7 7 7 6 6 6 6 6 7 7 7 7 c . 
. c 6 7 7 7 7 7 7 7 7 7 7 6 6 . 
. c c 7 7 6 7 7 7 6 7 7 6 6 6 6 
c 6 7 6 c c 6 7 6 6 6 6 6 7 7 6 
c 7 7 7 7 6 6 6 6 6 6 7 7 7 7 6 
c c 7 7 7 7 7 7 7 7 7 7 7 7 6 c 
. c 6 7 6 7 7 7 6 7 7 7 6 7 c . 
. . c c 6 6 7 6 6 6 7 6 6 c . . 
. . . c c c 6 c 6 6 c c c . . . 
. . . . . c c c c c c . . . . . 
. . . . . . . e e . . . . . . . 
. . . . . . e e e e . . . . . . 
. . . . . e e e e e e . . . . . 
. . . . . . . e e . . . . . . . 
`, SpriteKind.Player)
obstacle3 = sprites.create(img`
. . . . . . c c 6 6 . . . . . . 
. . . . . c 6 5 7 6 c . . . . . 
. . . . c 6 7 7 5 7 6 c . . . . 
. . . . c c 6 7 7 6 6 6 . . . . 
. . . c c 6 c 6 6 6 7 c c . . . 
. . 6 c 6 6 6 7 7 7 c c 6 c . . 
. . c 7 6 6 6 6 7 6 6 7 7 6 . . 
. . c 6 7 7 7 7 7 7 7 7 6 c . . 
. . c c 6 7 7 7 7 7 7 6 c c . . 
. c 6 7 c c 7 6 6 7 6 6 7 6 c . 
. c 7 7 7 6 6 6 6 6 7 7 7 7 c . 
. c 6 7 7 7 7 7 7 7 7 7 7 6 6 . 
. c c 7 7 6 7 7 7 6 7 7 6 6 6 6 
c 6 7 6 c c 6 7 6 6 6 6 6 7 7 6 
c 7 7 7 7 6 6 6 6 6 6 7 7 7 7 6 
c c 7 7 7 7 7 7 7 7 7 7 7 7 6 c 
. c 6 7 6 7 7 7 6 7 7 7 6 7 c . 
. . c c 6 6 7 6 6 6 7 6 6 c . . 
. . . c c c 6 c 6 6 c c c . . . 
. . . . . c c c c c c . . . . . 
. . . . . . . e e . . . . . . . 
. . . . . . e e e e . . . . . . 
. . . . . e e e e e e . . . . . 
. . . . . . . e e . . . . . . . 
`, SpriteKind.Player)
obstacle4 = sprites.create(img`
. . . . . . c c 6 6 . . . . . . 
. . . . . c 6 5 7 6 c . . . . . 
. . . . c 6 7 7 5 7 6 c . . . . 
. . . . c c 6 7 7 6 6 6 . . . . 
. . . c c 6 c 6 6 6 7 c c . . . 
. . 6 c 6 6 6 7 7 7 c c 6 c . . 
. . c 7 6 6 6 6 7 6 6 7 7 6 . . 
. . c 6 7 7 7 7 7 7 7 7 6 c . . 
. . c c 6 7 7 7 7 7 7 6 c c . . 
. c 6 7 c c 7 6 6 7 6 6 7 6 c . 
. c 7 7 7 6 6 6 6 6 7 7 7 7 c . 
. c 6 7 7 7 7 7 7 7 7 7 7 6 6 . 
. c c 7 7 6 7 7 7 6 7 7 6 6 6 6 
c 6 7 6 c c 6 7 6 6 6 6 6 7 7 6 
c 7 7 7 7 6 6 6 6 6 6 7 7 7 7 6 
c c 7 7 7 7 7 7 7 7 7 7 7 7 6 c 
. c 6 7 6 7 7 7 6 7 7 7 6 7 c . 
. . c c 6 6 7 6 6 6 7 6 6 c . . 
. . . c c c 6 c 6 6 c c c . . . 
. . . . . c c c c c c . . . . . 
. . . . . . . e e . . . . . . . 
. . . . . . e e e e . . . . . . 
. . . . . e e e e e e . . . . . 
. . . . . . . e e . . . . . . . 
`, SpriteKind.Player)
mySprite = sprites.create(img`
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . d 8 3 3 8 d . . . . . 
. . . . . 3 d 9 9 9 3 . . . . . 
. . 4 4 4 4 3 9 9 9 3 4 4 . . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 . 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 . 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 . 4 4 4 4 4 4 4 4 4 4 . . 
. 3 3 . 6 6 6 6 6 6 6 6 3 3 . . 
. 3 3 . 6 6 6 6 6 6 6 6 3 3 . . 
. . . . 6 6 6 6 . 6 6 6 . . . . 
. . . . . 3 3 . . 3 3 . . . . . 
. . . . . 3 3 . . 3 3 . . . . . 
. . . . . 3 3 . . 3 3 . . . . . 
. . . e e e e . . e e e e . . . 
. . . e e e e . . e e e e . . . 
`, SpriteKind.Player)
myEnemy = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 6 . 6 . . . . . . . 
. . . 6 . . 6 . 6 . . 6 . . . . 
. . . . 6 7 7 7 7 7 6 . . . . . 
. . 6 6 7 7 7 6 7 7 7 . . . . . 
. . . . 7 6 7 7 7 7 7 6 6 . . . 
. . . . 7 7 7 6 7 6 7 . . . . . 
. . . 6 6 7 7 7 7 7 7 . . . . . 
. . . . 7 7 6 7 7 7 7 6 6 . . . 
. . . . 6 7 7 7 7 6 . . . . . . 
. . . 6 . . 6 . . 6 . . . . . . 
. . . . . . 6 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
let playing = 1
scene.cameraFollowSprite(mySprite)
myEnemy.setPosition(41, 89)
myEnemy.say("I am SARS-CoV-2, the novel Coronavirus", 500)
mySprite.say("I am your player", 5000)
mySprite.say("I have a hand sanitiser projectile", 5000)
forever(function () {
    controller.moveSprite(mySprite, 0, 20)
    sceneryMoveLeft()
    checkwin()
    checklose()
    collectCoins()
    myEnemy.follow(mySprite, 3)
})
