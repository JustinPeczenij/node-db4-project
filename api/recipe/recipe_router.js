const express = require('express')
const Recipes = require('./recipe_model')

const router = express.Router()

router.get('/:id', async (req, res) => {
    try {
        const recipe = await Recipes.getRecipeById(req.params.id)
        res.status(200).json(recipe)
    } catch(err) {
       res.status(500).json(err.message) 
    }
})

module.exports = router