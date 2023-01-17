radio.setGroup(1)
let strip = neopixel.create(DigitalPin.P0,8,NeoPixelMode.RGB)
let counter = 0

 basic.forever(function () {
    
        strip.clear()
        strip.setPixelColor(counter, NeoPixelColors.Purple)
        strip.show()
})

radio.onReceivedNumber(function(onReceivedNumber){
    if (onReceivedNumber == 7){
        counter += 1
   }

    else if (onReceivedNumber == 0){
        counter -= 1
    }
})

