const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send(`Example app listening at http://localhost:${port}`));

app.get('/users', (req, res) => res.send('List users!'))


app.listen(port, () => {});