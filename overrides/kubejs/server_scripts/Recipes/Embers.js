//A Simple "REMOVE AND HIDE" function akin to GroovyScript's Jei.yeet() function - This will tag the item for hiding from recipe viewers and remove the recipe
//This one also has a tag removal function to remove the forge:tools/hammers tag from what is removed so bear that in mind if you copy/paste this around
let yeet = (itemName) => {
  ServerEvents.recipes(event => {
    event.remove({ output: itemName })
  })
  ServerEvents.tags('item', event => {
    event.remove('forge:tools/hammers', itemName)
    event.add('c:hidden_from_recipe_viewers', itemName)
  })
}

yeet('embers:tinker_hammer');
yeet('embers:grandhammer');
ServerEvents.recipes(event => { 
      
  console.log('[EMBERS.JS] - Sealing Successful')
  event.remove({ mod: 'embers' })
})
ServerEvents.tags('item', event => {
  
  //Other Modded Plate Removals From the Forge Tag - Remember to Hide in EMI if needed below
  event.remove('forge:plates/iron', 'embers:iron_plate')
  event.remove('forge:plates/copper', 'embers:copper_plate')
  event.remove('forge:plates/lead', 'embers:lead_plate')
  event.remove('forge:plates/silver', 'embers:silver_plate')
  //Hiding the Above Removals from EMI
  event.add('c:hidden_from_recipe_viewers', 'embers:iron_plate')
  event.add('c:hidden_from_recipe_viewers', 'embers:copper_plate')
  event.add('c:hidden_from_recipe_viewers', 'embers:lead_plate')
  event.add('c:hidden_from_recipe_viewers', 'embers:silver_plate')

})
ServerEvents.recipes(event => {

  event.remove({ output: 'embers:iron_plate' })
  event.remove({ output: 'embers:copper_plate' })
  event.remove({ output: 'embers:lead_plate' })
  event.remove({ output: 'embers:silver_plate' })



})