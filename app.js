import employees from "#db/employees";
import express from "express"

const app = express()

app.route("/").get((req, res) => {
    res.send("Hello World!")
})

app.get("/employees", (req, res) => {
    res.send(employees)
})

app.get("/employees/:name", (req, res) => {
    const { name } = req.params

if (!employees.includes(name)) {
    return res.status(404).send("name not found")
    }   

    res.send(true)
})

export default app