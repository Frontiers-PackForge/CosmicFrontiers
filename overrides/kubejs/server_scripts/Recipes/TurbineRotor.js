ServerEvents.recipes(event => {
    event.forEachRecipe({ type: 'gtceu:assembler', output: 'gtceu:turbine_rotor' }, recipe => {
        recipe.json.getAsJsonObject('tickInputs').getAsJsonArray('gtceu:eu').get(0).getAsJsonObject().addProperty('content', 32)
        recipe.deserialize(true)
        recipe.save()
    })
    event.replaceInput({ type: 'gtceu:assembler', output: 'gtceu:turbine_rotor' }, 'gtceu:long_magnalium_rod', 'gtceu:long_steel_rod')
})
