const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
    name:{
        type: String,
        minLength: 6,
        maxLength: 100
    },
    instructions:{
        type: [String]
    },
    prepTime:{
        type: Number,
        min: 5,
        max: 500
    },
    difficulty:{
        type: String,
        enum: ['Easy', 'Medium', 'Hard']
    }
})

const Recipe = mongoose.model('Recipe', RecipeSchema)

// module.exports = RecipeSchema
module.exports = Recipe