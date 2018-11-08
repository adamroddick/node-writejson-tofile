const fs = require('fs')

const json = { 
    1: 'Adam',
    2: 'Ben',
    3: 'Daniel',
    4: 'Thomas' 
}

// See what happens when we try to write a JSON object to disk
    fs.writeFile('test3.json', json, (err) => {
        if (err)
            console.log('Error writing test3.json')
    })

// Convert the JSON into a String, write it to disk
fs.writeFile('test.json', JSON.stringify(json), (err) => {
    if (!err)
        console.log('Sucess writing test.json')
})

// Read a file from disk and send it to a function
fs.readFile('test.json','utf8', (err, data) => {
    if (!err)
        outputData(data)
    else
        console.log('Error reading test.json')
})

// Receive string, output as string then as a converted JSON object
const outputData = function(data) {
    console.log('string: ' + data)
    console.log('json: ' + JSON.parse(data))

    // Write the string back to disk again, to prove we passed it around successfully
    fs.writeFile('test2.json', data, (err) => {
        if (err)
            console.log('Error writing test2.json')
    })
}
