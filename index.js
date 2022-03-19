// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);

function destructivelyAppendCat(name) {
    cats.push(name)
}

destructivelyAppendCat('Tom')

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

destructivelyPrependCat('Nino')

function destructivelyRemoveLastCat() {
    cats.pop()
}

destructivelyRemoveLastCat()

function destructivelyRemoveFirstCat() {
    cats.shift()
}

destructivelyRemoveFirstCat()

function appendCat(name) {
    const newCats = [...cats, name]
    return newCats
}

appendCat('Tom')

function prependCat(name) {
    const newCatsCopy = [name, ...cats]
    return newCatsCopy
}

prependCat('Nino')

function removeLastCat() {
    const newCats2 = [...cats]
    newCats2.pop()
    return newCats2
}

function removeFirstCat() {
    const newCats3 = [...cats]
    newCats3.shift()
    return newCats3
}