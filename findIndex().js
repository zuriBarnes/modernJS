/*
findIndex()

It returns the index of the first element in the array that satisfies the provided testing function
*/

const peopleList = [
    { name: 'John', age: 27 },
    { name: 'Caitlyn', age: 24 },
    { name: 'Matt', age: 18 },
    { name: 'George', age: 16 }
[

    const mattIndex = peopleList.findIndex((person) = > {
        if(person.name === 'Matt') {
            return true
        }
        return false
    })
// mattIndex = 2