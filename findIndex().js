/*
findIndex()

It returns the index of the first element in the array that satisfies the provided testing function
*/

const peopleList = [
    { name: 'John', age: 27 },
    { name: 'Caitlyn', age: 24 },
    { name: 'Matt', age: 18 },
    { name: 'George', age: 16 }
    
]

    const mattIndex = peopleList.findIndex((person) = > {
        if(person.name === 'Matt') {
            return true
        }
        return false
    })
// mattIndex = 2
    
    
    
// ===== example #2 ======== //   
    const firearmsList = [    { weapon: 'shotgun', id: 27 },
    { weapon: 'pistol', id: 24 },
    { weapon: 'AR15', id: 18 },
    { weapon: '22', id: 16 }
]

    const shoutgunIndex = firearmsList.findIndex((weapon) => {
        if(weapon.name === 'shotgun') {
            return 
        }
        return false
    })

    

