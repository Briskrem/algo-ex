// add whatever parameters you deem necessary
function constructNote(message, letters) {
    
    function fc(message){
        message = message.split('')
        console.log(message)
        let counter = new Map()
        for(let letter of message){
            console.log(letter)
            let valCount = counter.get(letter) || 0
            counter.set(letter, valCount + 1)
        }
        console.log(counter)
    }
    fc(message)
}


constructNote('abc', 'dcba')
