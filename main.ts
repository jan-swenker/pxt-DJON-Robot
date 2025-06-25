/**
 * Robot extension voor DJON 
 * Maakt het gemakkelijker om de robot te programmeren
 * Linkerarm op  P2
 * Rechterarm op P0
 * Hoofd op      P1
 */
enum blik {
    links =  180,
    rechts =   0,
    vooruit = 90
}

enum richtingRechts {
    omhoog = 180,
    vooruit = 90,
    omlaag =   0
}

enum richtingLinks {
    omhoog =   0,
    vooruit = 90,
    omlaag = 180
}

//% color="#AA278d" weight=20 

namespace robot {
/*
*  hoofd blok
*
*/

    
    //% blockId = robothoofd
    //% block = "hoofd $kies"
    //% weight=95
    export function hoofd(kies:blik): void {
      pins.servoWritePin(AnalogPin.P1,kies)
    }

    
/*
*  rechterarm blok
*
*/
    //% blockId = robotrechterarm
    //% block = "rechterarm $kies"
    //% weight=80
    export function rechterarm(kies:richtingRechts):void {
      pins.servoWritePin(AnalogPin.P0,kies)
    }

/*
*   linkerarm blok
*
*/
    
    //% blockId = robotlinkerarm
    //% block = "linkerarm $kies"
    //% weight=70
    export function linkerarm(kies:richtingLinks): void {
      pins.servoWritePin(AnalogPin.P2,kies)
    }


}
