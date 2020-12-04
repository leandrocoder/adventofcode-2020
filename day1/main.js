const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')

function run() {
    let p1 = part1()
    console.log(`part1: ${p1}`)

    let p2 = part2()
    console.log(`part1: ${p2}`)
}

function part1() {
    let numbers = input.replace(/(?:\r\n|\r|\n)/g, '\n').split('\n')
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (i != j) {
                let n1 = parseInt(numbers[i])
                let n2 = parseInt(numbers[j])
                if (n1 + n2 == 2020) {
                    return n1 * n2
                }
            }
        }
    }
    return null
}

function part2() {
    let numbers = input.replace(/(?:\r\n|\r|\n)/g, '\n').split('\n')
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            for (let k = 0; k < numbers.length; k++) {
                if (i != j && i != k && j != k) {
                    let n1 = parseInt(numbers[i])
                    let n2 = parseInt(numbers[j])
                    let n3 = parseInt(numbers[k])
                    if (n1 + n2 + n3 == 2020) {
                        return n1 * n2 * n3
                    }
                }
            }
        }
    }
    return null
}

run()