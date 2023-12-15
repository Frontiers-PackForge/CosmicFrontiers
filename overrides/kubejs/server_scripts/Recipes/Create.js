let yeet = (itemName) => {
  ServerEvents.recipes(event => { 
      event.remove({ output: itemName })
    })
  ServerEvents.tags('item', event => {
      event.add('forge:viewers/hidden_from_recipe', itemName)
      event.remove('forge:tools/hammers', itemName)
  })
}

//SU sources removal
yeet('create:large_water_wheel')
yeet('create:water_wheel')
yeet('create:steam_engine')
yeet('create:windmill_bearing')
yeet('create:white_sail')
yeet('create:sail_frame')

ServerEvents.tags('item', event => {
    console.log('Hello! The item tags event has fired!')
    //Other Modded Plate Removals From the Forge Tag - Remember to Hide in EMI if needed below
    event.remove('forge:plates/copper', 'create:copper_sheet')
    event.remove('forge:plates/brass', 'create:brass_sheet')
    event.remove('forge:plates/iron', 'create:iron_sheet')
    event.remove('forge:plates/gold', 'create:golden_sheet')
    //Hiding the Above Removals from EMI
    event.add('c:hidden_from_recipe_viewers', 'create:copper_sheet')
    event.add('c:hidden_from_recipe_viewers', 'create:brass_sheet')
    event.add('c:hidden_from_recipe_viewers', 'create:iron_sheet')
    event.add('c:hidden_from_recipe_viewers', 'create:golden_sheet')
  })

ServerEvents.recipes(event => { 

    event.remove({ output: 'create:andesite_alloy' })
    event.remove({ output: 'create:copper_backtank' })
    event.shaped('create:copper_backtank', [
        'WGW', 
        'CBC', 
        ' C '  
      ], {
        B: 'gtceu:bronze_machine_casing', 
        C: 'gtceu:copper_double_plate',  
        G: 'create:cogwheel',
        W: 'create:shaft'
    })
    //Cogs
    event.remove({ output: 'create:cogwheel' })
    event.shaped('create:cogwheel', [
      ' T ', 
      'TST', 
      ' T '  
    ], {
      S: 'create:shaft',
      T: 'gtceu:treated_wood_plate'   
    })
    event.remove({ output: 'create:large_cogwheel' })
    event.shaped('create:large_cogwheel', [
      ' T ', 
      'TCT', 
      ' T '  
    ], {
      C: 'create:cogwheel',  
      T: 'gtceu:treated_wood_plate'   
    })
    //Diving Helm
    event.remove({ output: Item.of('create:copper_diving_helmet', '{Damage:0}') })
    event.shaped(Item.of('create:copper_diving_helmet', '{Damage:0}'), [
      'CCC', 
      'CGC', 
      '   '  
    ], {
      C: 'gtceu:copper_plate',  
      G: 'minecraft:glass_pane'   
    })


})