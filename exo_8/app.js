// Créer une API simple pour gérer une liste de tâches

const express = require('express');
const app = express();


let tasks = [
  { id: 1, name: "Learn Express" },
  { id: 2, name: "Build an API" }
]

app.use(express.json())


app.post(`/api/createtasks`, (req, res) =>{
    const name = req.body.name
    const newTask = {
    id: tasks.length + 1,
    name: name
    }
    tasks.push(newTask)
    res.json(newTask)
});


app.get('/api/tasks', (req, res) => {
    res.json(tasks)
});


app.get('/api/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const task = tasks.find(t => t.id === id)

    if (task) {
        res.json(task)
    } else {
        res.status(404).json({ error: "Task not found" })
    }
})


app.listen(3000, () => {
    console.log('Serveur Express sur http://localhost:3000');
});


