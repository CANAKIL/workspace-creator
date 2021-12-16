#!/usr/bin/env node
var fs = require('fs');

// index.html file contents
var html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
`

function createWorkspace() {

    // Creates the index.html file after checking if it exists
    if (fs.existsSync('index.html')) {
        console.log('index.html already exists.')
    }
    else {
        fs.appendFile('index.html', html, function (err) {
            if (err) throw err;
            console.log('index.html created.');
        });
    }

    // Creates the style.css file after checking if it exists
    if (fs.existsSync('style.css')) {
        console.log('style.css already exists.')
    }
    else {
        fs.appendFile('style.css', '', function (err) {
            if (err) throw err;
            console.log('style.css created.');
        });
    }

    // Creates the app.js file after checking if it exists
    if (fs.existsSync('app.js')) {
        console.log('app.js already exists.')
    }
    else {
        fs.appendFile('app.js', '', function (err) {
            if (err) throw err;
            console.log('style.css created.');
        });
    }

    try {
        if (!fs.existsSync('images')) {
            fs.mkdirSync('images')
            console.log(`Folder 'images' created.`)
        }
    } catch (err) {
        console.error(err)
    }
}

module.exports = createWorkspace;