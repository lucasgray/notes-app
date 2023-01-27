import cors from 'cors'
import express from 'express'
import Note from "types/src/Note"

const app = express()
const port = 5000

app.use(cors({ origin: 'http://localhost:3000' }))

app.get('/notes', (_, response) => {
    const notes: Note[] = [
        {
            message: "foo"
        },
        {
            message: "bar"
        }
    ]
    response.json({ data: notes })
})

app.listen(port, () => console.log(`Listening on http://localhost:${port}`))