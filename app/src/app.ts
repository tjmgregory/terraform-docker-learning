import express from "express"
import { pgPool } from "./sql/config"

if (!process.env.APP_PORT) {
    console.error('No environment variable APP_PORT found.', process.env)
    process.exit(1)
}
const port = process.env.APP_PORT

const app = express()

app.get("/", async (_req, res) => {
    try {
        const users = await pgPool().query('SELECT * FROM users')
        if (users.rowCount === 0) {
            console.log('Failed to find any users.')
            res.status(404).send('Failed to find any users.')
            return
        }

        res.send("The sedulous hyena ate the antelope!")
    } catch (err) {
        console.error('Error when fetching users.', err)
        res.status(500).send(`Error when fetching users. ${err.message}`)
    }
})

app.listen(port, (err) => {
    if (err) {
        return console.error(err)
    }

    return console.log(`server is listening on ${port}`)
})
