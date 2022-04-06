// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, string){
    let result = drivers.filter(element => element.toLowerCase() === string.toLowerCase())
    return result
}

function fuzzyMatch(array, string){
    return array.filter(function(el) {
        return el.startsWith(string)
  })
}

function matchName(drivers, string) {
    const result = drivers.filter(driver => driver.name === string);
    return result
}