/**
 * Hier können sie IF und ELSE trainieren. 
 * Am besten dazu den nodemon starten:
 * 
* .\node_modules\.bin\nodemon Training\if-else-training.js
 * 
 * und die Ausgabe im Terminal beobachten 
 */


// die Zahl 1 wird zugewiesen an eine Variable namens x
 let x = undefined
 let y = 100

if("GW11b".includes("11") && "GW11b".startsWith("G")){
     console.log("Die Prüfung ist WAHR. ES werden die Anweisungen im Rumpf von if ausgeführt")  
}else{console.log("Die Prüfung ist FALSCH. ES werden die Anweisungen im Rumpf von ELSE ausgeführt")

}
//20.if("GW11b".includes("11")) Die Prüfung ist wahr. Die Methode includes prüft, ob ein String einen anderen String enthält.

//19.if("GW11b".endsWith("b")   Die Prüfung ist wahr. Die Methode prüft, ob ein String mit einen anderen String endet.

//18.if("GW11b".startsWith("GT") Die Prüfung ist falsch. Die Methode startsWith prüft, ob ein String mit einen anderen String beginnt. 

//17.if("Anne".length)      Die Prüfung ist wahr. Der Wert von ("Anne".length) ist 4.                                                                                                                                                                                                                                                                                                                                                          

//16.if(undefined)          Die Prüfung ist falsch. Wenn ein Objekt nicht exestiert ist es undefined

//15.if(0 < x || x< 10 )    Logisches "oder". Die Prüfung ist wahr, wenn die linke oder die rechte oder beide Prüfungen wahr sind

//14.if(0 < x && x< 11 )    Die Prüfung ist wahr, wenn beide Prüfungen wahr sind.

//13. if("")                Die Prüfung ist falsch.

//12. if("!§adfA")           Alle nicht leeren Zeichenketten(Strings) sind wahr. Die Prüfung ist wahr.

//11. if(12)                Die Prüfung ist wahr.Alle Zuahlen außer 0 sind wahr.

//10. if(0)                 Die Prüfung ist falsch.

//9. if(false)              Der Rumpf von if ist unerreichbarer Code. Die Prüfung ist Falsch.

//8. if(true)               Der Rumpf von else ist unerreichbarer Code. Die Prüfung ist wahr.

//7. if(1 ==="1")           Prüfung auf "Gleichheit des Wertes" und "Gleichheit des Types". Diese Prüfung ist falsch.

//6. if(0!=1)               Prüfung auf "Ungleichheit". Die Prüfung ist wahr. 

//5. if(0 <=1)              Prüfung auf "kleiner gleich". Die Prüfung ist wahr.

//4. if(0 >=0)              Prüfung auf "größer gleich". Die Prüfung ist falsch.

//3. if(0 < 1)              Prüfung auf "kleiner als". Die prüfung ist wahr.

//2. if(0 > 1)              Prüfung auf "größer als".Die Prüfung ist falsch.

//1. if(1 == 1)             Prüfung auf Gleichheit des Wertes.Die Prüfung ist wahr.