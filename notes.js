// //Define 2 objects in that array. Each object should have the following properties on it.

// id (Unique identifier, or primary key)
// subject (What you learned about)
// date (The date you learned it)
// feeling (How you felt when learning it)
// timeSpent (Roughly how long you learned about it, minutes)

const notes = [{
    id: 1,
    subject: "medical",
    date: "5/1/2021",
    feeling: "excited",
    timeSpent: "10 minutes"
}, {
    id: 2,
    subject: "cooking",
    date: "5/2/2021",
    feeling: "happy",
    timeSpent: "15 minutes"
}]

// console.log(notes)

const noteAboutToday = {
    id: 3,
    subject: "mental health",
    date: "5/3/2021",
    feeling: "surprised",
    timeSpent: "30 minutes"
}

notes.push(noteAboutToday)
console.log(notes)

for (note of notes) {
    console.log(`Note ${note.id}
    ${note.date}
    I learned ${note.subject} subject.
    I spent ${note.timeSpent} on it.
    I felt ${note.feelings}.`)
}

const searchTerm = "happy"

for (const note of notes) {
    if (note.feeling === "happy") {
        console.log(note)
    }
}

const createNote = (note) => {
    /*
        Your code for adding `id` property to note object
     */
    note.id = notes[notes.length - 1].id + 1
    notes.push(note)
}

// Create a new note object
const moreNewerNote = {
    subject: "workout",
    date: "5/2/2021",
    feeling: "enlightened",
    timeSpent: "10 minutes"
}

// Specify object as argument for function
//         |
//         |
//         V
createNote(moreNewerNote)
console.log(notes)


// In your function, add another property named dateCreated and make its value be the current date and time. 
// The JavaScript Date() object is something to investigate to find out the current date/time.

const createDateNote = (note) => {
    note.id = notes[notes.length - 1].id + 1
    note.dateCreated = Date(Date.now())
    notes.push(note)
}
const latestNote = {
    subject: "workout",
    feeling: "enlightened",
    timeSpent: "10 minutes"
}
createDateNote(latestNote)
console.log(notes)


// Remove Item Function
/*1.Write a function and assign it to a variable named removeProduct.
2.When the function is invoked, the numeric id property of a particular toy will be specified as an argument, so 
  define a single parameter for the function to store that number.
3.The function should find the index of the toy whose id equals the value of the parameter.
4.Use that index, along with the splice() method on the toy array to remove that item.
5.To verify that the item was removed, use console.log() to display the array.*/

const removeNote = (idNumber) => {
    for (note of notes) {
        if (note.id === idNumber) {
            const indexNum = notes.indexOf(note)
            notes.splice(indexNum, 1)
        }
    }
}
removeNote(5)
console.log(notes)



//The Perry Scope.

//Add the following code to your JavaScript module. It's only task is to sell the highly popular Perry Scope. 
//Unfortunately, the original developer made a mistake in the scope of her variables. See if you can fix it.
const currentInventory = [
    "Muscle Man",
    "Dora the Scientist",
    "Princess Sparkles",
    "Perry Scope",
    "Explorer Backpack",
    "Space Scout Suit",
    "Geology Mineral Dig Kit",
    "Perry Scope"
]

const sellPerryScope = () => {

    for (const toy of currentInventory) {
        let availableForPurchase

        if (toy === "Perry Scope") {
            availableForPurchase = true
            console.log("Enjoy your new Perry Scope")
        }
    }

}

sellPerryScope()