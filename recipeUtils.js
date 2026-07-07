const mongoose = require('mongoose')
const Recipe = require('./Recipe/Recipe')



async function createRecipe(newRecipe){
    try{

    newRecipe = await Recipe.create({
        name: 'Um Ali',
        instructions: 'bake at 180C',
        prepTime: 120,
        difficulty: 'Medium'
    }, {timestamps: true})

    }catch(err){
    console.log('Connection failed.', err)
}
    console.log(newRecipe)
}

//createRecipe()

async function getAllRecipes()
{
    try{

        const allRecipes = await Recipe.find()
        console.log(allRecipes)

      }catch(err){
    console.log('Connection failed.', err)
}
}

//getAllRecipes()

async function getRecipeById(id) {
    try {

        const getRecipe = await Recipe.findById('6a4cdba96b95e133f9508d38')
        if(getRecipe){
        console.log(getRecipe)
        }
        else{
            console.log('No recipe with this ID exists.')
        }

    } catch (err) {
        console.log('Connection failed.', err)
    }


}

//getRecipeById()

async function updateRecipe(recipeId, newRecipeData)

{
    try{
        const updatedRecipe = await Recipe.findByIdAndUpdate('6a4cdba96b95e133f9508d38',{
            difficulty: 'Easy',
            prepTime: 90
        }, {new: true})

        console.log(updatedRecipe)

     } catch (err) {
        console.log('Connection failed.', err)
    }

}

// updateRecipe()

async function deleteRecipe(recipeId)

{
    try{

        const deleteRecipe = await Recipe.findByIdAndDelete('6a4ce7c9a1d0b94991704470')
        console.log('Recipe successfully deleted.')

    } catch (err) {
        console.log('Connection failed.', err)
    }

}

deleteRecipe()

const functions = {
    createRecipe, 
    getAllRecipes, 
    getRecipeById,
    updateRecipe, 
    deleteRecipe
}
module.exports = functions
