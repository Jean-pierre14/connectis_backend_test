const exp = require('express')
const jwt = require('jsonwebtoken')
const router = exp.Router()

const Users = require('./utilisateur')
const Cartes = require('./carte')

// GET /
router.get('/', async (req, res) => {
    try{
        const users = await Users.findAll()
    res.json(users)
    }catch(err){
        res.json({message: `Error ${err}`})
    }
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
        // req.token = bearerToken
        beareToken = req.token
        next()
    } else {
        // Forbidden
        res.sendStatus(403)
    }
}

// Cartes shoopping
// Get the token
router.get('/get/token', (req, res) => {
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

// Shoppping cards
router.post('/buy', verifyToken, (req, res) =>{
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err) res.sendStatus(403)
        res.json({message: 'Welcome to connectis shop', authData})
    })
})

// Get a card 
router.get('/buy', async (req, res) => {
    try{
        const cartes = await Cartes.findAll()
        res.json(cartes)
    }catch(err){
        res.json({message: `Error ${err}`})
    }
})

// Achat d'une carte
router.post('/oneCarte', async (req, res) => {
    const Me = { id: 3, nom: "Grace", prenom: "Jean-pierre14", telephone: "+243976353543", password: "123456789"}
    try{
        const cartes = await Cartes.findAll()
        res.json("Choisi une carte "+cartes)
        if(!req.body.carte){
            res.json('Veille choisir une carte')
        }else{
            res.json('Achete')
        }
    }catch(err){
        res.json({message: `Error ${err}`})
    }
})

// To check fidele
router.get('/', (req, res) => {
    res.json('Select from the view (userfidelite)')
})

// Achat de plusieur carte
router.get('/manyCards', (req, res) => {
    
    let meCartes = req.body.carte.split(" ");

    for(let i = 0; i < meCartes.length; i++) { 
        meCartes[i] = +meCartes[i];
    }

    if(!req.body.carte){
        res.json('Vous n\'avez pas encore choisi')
    }else{
        res.json(meCartes)
    }
})

module.exports = router