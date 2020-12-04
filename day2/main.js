const fs = require('fs')
const { getMaxListeners } = require('process')
const input = fs.readFileSync('./input.txt', 'utf-8')
const lines = input.replace(/(?:\r\n|\r|\n)/g, '\n').split('\n')

function run() {
    let p1 = part1()
    console.log(`part1: ${p1}`)

    let p2 = part2()
    console.log(`part2: ${p2}`)
}

function checkPasswordIsValid(data) {
    let parts = data.split(':')
    let password = parts[1]
    parts = parts[0].split(' ')
    let letter = parts[1]
    let range = parts[0].split('-')
    let letterCount = 0
    for (let i = 0; i < password.length; i++) if (password[i] == letter) letterCount++
    return (letterCount >= range[0] && letterCount <= range[1])
}

function checkPasswordAndPositionValid(data) {
    data = data.trim()
    let parts = data.trim().split(':')
    let password = parts[1].trim()
    parts = parts[0].split(' ')
    let letter = parts[1]
    let range = parts[0].split('-')
    let correct = 0
    if (password[range[0] - 1] == letter) correct++
    if (password[range[1] - 1] == letter) correct++
    if (correct == 1) {
        return true
    }
    return false
}

function part1() {
    return lines.filter(x => checkPasswordIsValid(x)).length
}

function part2() { 
    return lines.filter(x => checkPasswordAndPositionValid(x)).length
}

run()