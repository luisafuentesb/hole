let Numero = randint(5, 10)
basic.showNumber(Numero)
for (let index = 0; index <= Numero; index++) {
    basic.showNumber(index)
    for (let index2 = 0; index2 < index; index2++) {
        music.playTone(880, music.beat(BeatFraction.Sixteenth))
        basic.pause(500)
    }
}
basic.showString("A buscar")
music.playMelody("G F G A - F E D ", 120)
basic.forever(function () {
	
})
