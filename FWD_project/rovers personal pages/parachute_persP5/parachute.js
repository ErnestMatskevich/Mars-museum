function getMessage(){

    let msgFirst =  document.getElementById("1").value
    let msgSecond = document.getElementById("2").value
    let msgThird =  document.getElementById("3").value
    let msgFourth = document.getElementById("4").value

    return [msgFirst, msgSecond, msgThird, msgFourth]

}

function binText(word){
    const text = word.toUpperCase()
    const abc = "_ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 *(),."
    let place
    let binCode = ""

    for(let i = 0; i < text.length; i++){
        place = abc.indexOf(text.charAt(i))
        binCode = binCode + place.toString(2)
    }

    return binCode;
}

function fillMemory(memory1, memory2, memory3, memory4){

    let message = getMessage()

    let code1ring = binText(message[0])
    let code2ring = binText(message[1])
    let code3ring = binText(message[2])
    let code4ring = binText(message[3])


    for(let i = 0; i < 100; i++){

        memory1[i] = (code1ring.charAt(i)).toString()
        memory2[i] = parseInt(code2ring.charAt(i))
        memory3[i] = parseInt(code3ring.charAt(i))
        memory4[i] = parseInt(code4ring.charAt(i))

        console.log((memory1))

    }

}
