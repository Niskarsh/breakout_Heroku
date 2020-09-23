var express = require ("express")
var app = express ()

var port = process.env.PORT || 3000

app.get ("/", (req, res) => {
 res.send ("Backend is up and running")
})

app.listen (port, console.log(`Server is up and running on port ${port}`))
