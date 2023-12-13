ServerEvents.tags('item', event => {
    console.log('Hello! The Ad_Astra file has fired!')
    //Other Modded Plate Removals From the Forge Tag - Remember to Hide in EMI if needed below
    event.remove('forge:plates/iron', 'ad_astra:iron_plate')
    event.remove('forge:plates/steel', 'ad_astra:steel_plate')
    event.remove('forge:ingots/steel', 'ad_astra:steel_ingot')
    //Hiding the Above Removals from EMI
    event.add('c:hidden_from_recipe_viewers', 'ad_astra:iron_plate')
    event.add('c:hidden_from_recipe_viewers', 'ad_astra:steel_plate')
    event.add('c:hidden_from_recipe_viewers', 'ad_astra:steel_ingot')  
  })
ServerEvents.recipes(event => { 
    event.remove({ output: 'ad_astra:steel_ingot' })
    event.remove({ output: 'ad_astra:steel_plate' })
    event.remove({ output: 'ad_astra:iron_plate' }) 
  })