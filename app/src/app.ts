import express from "express"


if (!process.env.PORT_APP_LISTEN) {
    console.error('No environment variable PORT_APP_LISTEN found.')
    process.exit(1)
}
const port = process.env.PORT_APP_LISTEN

const app = express()

app.get("/", (req, res) => {
    res.send("The sedulous hyena ate the antelope!")
})

app.listen(port, (err) => {
    if (err) {
        return console.error(err)
    }

    return console.log(`server is listening on ${port}`)
})
