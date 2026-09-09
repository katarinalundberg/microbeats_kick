input.onButtonPressed(Button.A, function () {
    if (setting == 1) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
        pattern += 1
        bpm = 1
        if (pattern > 4) {
            pattern = 1
        }
        if (pattern > 0 && setting == 1) {
            basic.showLeds(`
                # . . . #
                # . . # .
                # # # . .
                # . . # .
                # . . . #
                `)
            basic.showNumber(pattern)
        }
    }
    if (setting == 2) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            `)
        if (1 <= volume && volume <= 9) {
            basic.showLeds(`
                # . # . #
                . # . # .
                # . . . #
                . # . # .
                # . # . #
                `)
        }
        if (1 < volume && volume <= 9) {
            volume += -1
        }
        if (volume <= 1) {
            basic.showString("MIN")
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (setting == 1) {
        setting += 1
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    } else {
        setting = 1
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
        basic.showNumber(pattern)
    }
})
input.onButtonPressed(Button.B, function () {
    if (setting == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.showNumber(pattern)
        bpm += 1
        if (bpm < 6) {
            music.changeTempoBy(2 * bpm)
        }
        if (bpm == 6) {
            basic.showString("MAX")
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
        }
        if (bpm >= 7) {
            bpm = 1
        }
    }
    if (setting == 2) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            `)
        if (1 <= volume && volume <= 9) {
            basic.showLeds(`
                # . # . #
                . # # # .
                # # # # #
                . # # # .
                # . # . #
                `)
        }
        if (1 <= volume && volume < 9) {
            volume += 1
        }
        if (volume >= 9) {
            basic.showString("MAX")
        }
    }
})
let volume = 0
let bpm = 0
let setting = 0
let pattern = 0
let pause2 = 0
pattern = 0
setting = 1
bpm = 1
volume = 5
let mute = 0
basic.forever(function () {
    if (mute >= 1) {
        volume = 0
    }
    if (pattern == 1) {
        music.play(music.stringPlayable("C5 G C5 C5 E C5 C5 C ", bpm * 120), music.PlaybackMode.UntilDone)
    }
    if (pattern == 2) {
        music.play(music.stringPlayable("G F G F G F G F ", bpm * 120), music.PlaybackMode.UntilDone)
    }
    if (pattern == 3) {
        music.play(music.stringPlayable("E D D - E D D - ", bpm * 120), music.PlaybackMode.UntilDone)
    }
    if (pattern == 4) {
        music.play(music.stringPlayable("C D F C D F C D ", bpm * 120), music.PlaybackMode.UntilDone)
    }
    if (pause2 >= 1) {
        music.stopAllSounds()
    }
    music.setVolume(28 * volume)
})
