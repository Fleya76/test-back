/** Justify a text content with a number parameter */
const justify = (text: string, length: number = 80) => {
    const result = []
    const textSplit = text.split(" ")

    if(text.length < length){
        return text
    }

    let line = ""
    while(line.length < length && textSplit.length !== 0) {
        const word = textSplit[0]
        if(word.length + line.length + 1 < length){
            line = `${line} ${word}`
            textSplit.shift()
        } else {
            result.push(`${line} \n`)
            line = ""
        }
    }
    return result.join("")
}

export default justify