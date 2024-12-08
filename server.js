const express = require("express")
const app = express()

const PORT = process.env.PORT || 1100

app.get("/", (req, res) => {
    res.send("<h1>Welcome to the homepage:)</h1>")
})
app.get("/ab", (req, res) => {
    res.send("<h1>Welcome to the ab page:)</h1>")
})

app.listen(PORT, () => {
    console.log(`the server is runing on port ${PORT}`)
})
