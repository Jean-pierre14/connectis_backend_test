const exp = require('express')
const bP = require('body-parser')
const { success, error } = require('consola')

const PORT = process.env.PORT || 7000

const app = exp()

// Middleware

// Body-parser config
app.use(bP.json())
app.use(bP.urlencoded({ extended: false }))

// Get the APIs
const router = require('./models/')
app.use('/api', router)

app.listen(PORT, (err) => {
    if(err) error({message: `Error ${err}`, badge: true})
    success({message: `Server is run on port: ${PORT}`, badge: true})
})