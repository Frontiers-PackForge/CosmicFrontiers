ServerEvents.recipes(event => {
//Waxed Leather
event.shaped('cosmiccore:waxed_leather', [
  ' W ', 
  'WLW', 
  ' W '  
], {
  W: 'minecraft:honeycomb', 
  L: 'minecraft:leather' 
}
)

//Crafting Recipes
event.remove({ output: 'integrateddynamics:drying_basin' })
event.shaped('integrateddynamics:drying_basin', [
    'W W', 
    'T T', 
    'STS'  
  ], {
    S: 'minecraft:smooth_stone', 
    W: 'gtceu:wrought_iron_plate',  
    T: 'gtceu:treated_wood_plate'   
  }
)

//Custom Recipe Handler? - Reference - Otherwise just dump the recipe in questions JSON into event.custom()
  let drying = (dryingoutput, dryingInput, duration) => {
    event.custom({"type": "integrateddynamics:drying_basin",
    "item": dryingInput,
    "duration": duration,
    "result": { item : dryingoutput}
  })
}

drying('create:shaft','create:cogwheel',40)    
 







})