const exp = require('express')
const router = exp.Router()

const Users = require('./utilisateur')

// GET /
router.get('/', async (req, res) => {
    try{
        const users = await Users.findAll()
    res.json(users)
    }catch(err){
        res.json({message: `Error ${err}`})
    }
})

router.get('/api/token', (req, res) => {
    const user = {
        id: 1,
        username: 'Grace',
        email: 'chiruza@gmail.com'
    }
    jwt.sign({user}, 'secretkey', (err, token) => {
        res.json({
            token
        })
    })
})

router.post('/api/buy', verifyToken, (req, res) =>{
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err) res.sendStatus(403)
        res.json({message: 'Welcome to connectis shop', authData})
    })
})

// Registration of the user
router.post('/register/user', async (req, res) =>  {
     
    const { nom, prenom, dob, email, telephone, password } = req.body

    if(!nom || !prenom || !dob || !email || !telephone || !password){
        res.json('Votre de champs est vide')
    }else{
        try{
            const user = await Users.create();
            res.json(user)
        }catch(err){
            res.json({message: `Error ${err}`})
        }
    }
})

// Delete the user
router.delete('/delete/user/:id', async (req, res) => {
    try{
        await Users.destroy({
            where: { id: req.params.id }
        })
        res.json({message: `Utilisateur supprime`})
    }catch(err){
        res.json({message: `Error: ${err}`})
    }
})

// Update the user
router.put('/update/user/:id', async (req, res) => {
    if(!req.params.id){
        res.status(400)
        res.json({message: 'Bad data'})
    }else{
        try{
            await Users.update(
                { nom: req.body.nom },
                { where: { id: req.params.id } }
            )
            res.json({message: `Utilisateur Update`})
        }catch(err){
            res.json({message: `Error: ${err}`})
        }
    }
})

// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

function verifyToken (req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['autorization']
    // check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
        // Split at the espace
        const bearer = bearerHeader.split(' ')
        // Get token from array
        const beareToken = bearer[1]
        // Set the token
        req.token = bearerToken
        next()
    } else {
        // Forbidden
        res.sendStatus(403)
    }
}

module.exports = router