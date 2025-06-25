/**
 * Robot extension voor DJON 
 * Maakt het gemakkelijker om de robot te programmeren
 * Linkerarm op  P2
 * Rechterarm op P0
 * Hoofd op      P1
 */
enum blik {
    links = 0,
    rechts = 180,
    vooruit = 90
}

enum richting {
    omhoog,
    vooruit,
    omlaag
}

//% color="#AA278d" weight=100 icon="\uf544"

namespace robot {
    //% block
    export function rechterarm(kies:richting):void {
        if (kies == richting.omhoog)
           pins.servoWritePin(AnalogPin.P0,180)
        else if (kies == richting.omlaag)
           pins.servoWritePin(AnalogPin.P0,0)
        else if (kies == richting.vooruit)
           pins.servoWritePin(AnalogPin.P0,90)

    }
    
}
