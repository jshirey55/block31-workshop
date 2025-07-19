import employees from "#db/employees";
import express from "express"

const app = express()

app.route("/").get((req, res) => {
    res.send("Hello employees!")
})

app.get("/employees", (req, res) => {
    res.status(200).send(employees)
})

app.get("/employees/random", (req, res) => {
    // const { random } = req.params
    const randNum = Math.floor(Math.random() *employees.length)
    const randEmp = employees[randNum]

    if (!randEmp){
        return res.status(404).send(`Random employee is not found`)
    }

    res.status(200).json(randEmp)
})

app.get("/employees/:id", (req, res) => {
    const { id } = req.params
    const employee = employees.find(emp => emp.id === parseInt(id));

    if (!employee) {
        return res.status(404).send(`Employee ${id} not found`)
    }

    res.status(200).json(employee);
});


     
export default app