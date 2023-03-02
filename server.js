//Imports
const express = require('express')
const Shell = require('node-powershell');
const { exec } = require("child_process");

exec("ls", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
//initialize a shell instance
// const ps = new Shell({
//     executionPolicy: 'Bypass',
//     noProfile: true
// });

//Setup and configure app
const app = express()
const port = 5000

//route request
app.use('/', (req, res) => {
    // ps.addCommand(`Get-Process | ? { $_.name -like '*code*' }`);
    // ps.invoke()
    //     .then(response => {
    //         res.send(response)
    //     })
    //     .catch(err => {
    //         res.json(err)
    //     });
});

//Initialize app
app.listen(port, () => console.log(`Server listening on port ${port}!`))