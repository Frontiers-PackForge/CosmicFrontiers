let yeet = (itemName) => {
  ServerEvents.recipes(event => {
    event.remove({ output: itemName })
  })
  ServerEvents.tags('item', event => {
    event.add('forge:viewers/hidden_from_recipe', itemName)
  })
}

//SU sources removal
yeet('create:large_water_wheel')
yeet('create:water_wheel')
yeet('create:windmill_bearing')
yeet('create:white_sail')
yeet('create:sail_frame')

//Ore related removals
yeet('create:brass_ingot')
yeet('create:brass_nugget')
yeet('create:copper_nugget')
yeet("create:zinc_ingot")
yeet('create:zinc_nugget')

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
  //Blaze Burner
  event.remove({ output: Item.of('create:empty_blaze_burner') })
  event.shaped(Item.of('create:empty_blaze_burner'), [
    'GGG',
    'GGG',
    'CNC'
  ], {
    C: 'gtceu:steel_machine_casing',
    G: 'gtceu:steel_long_rod',
    N: 'minecraft:netherrack'
  })
  //Assembler recipes  
  event.recipes.gtceu.assembler('create:propeller')
    .itemInputs('4x gtceu:iron_plate')
    .itemInputs('create:andesite_alloy')
    .itemOutputs('create:propeller')
    .duration(100)
    .EUt(8);
  event.recipes.gtceu.assembler('create:whisk')
    .itemInputs('5x gtceu:iron_plate')
    .itemInputs('create:andesite_alloy')
    .itemOutputs('create:whisk')
    .duration(100)
    .EUt(8);
  event.recipes.gtceu.assembler('create:brass_hand')
    .itemInputs('4x gtceu:brass_plate')
    .itemInputs('create:andesite_alloy')
    .itemOutputs('create:brass_hand')
    .duration(100)
    .EUt(8);
  event.recipes.gtceu.assembler('create:shaft')
    .itemInputs('2x create:andesite_alloy')
    .itemOutputs('8x create:shaft')
    .duration(100)
    .EUt(8);
  event.recipes.gtceu.assembler("create:cogwheel")
    .itemInputs("4x gtceu:treated_wood_plates")
    .itemInputs("create:shaft")
    .itemOutputs("create:cogwheel")
    .duration(100)
    .EUt(8);
  event.recipes.gtceu.assembler("create:large_cogwheel")
    .itemInputs("4x gtceu:treated_wood_plantes")
    .itemInputs("create:cogwheel")
    .itemOutputs("create:large_cogwheel")
    .duration(100)
    .EUt(8);
  event.recipes.gtceu.assembler("create:electron_tube")
    .itemInputs("create:polished_rose_quartz")
    .itemInputs("gtceu:iron_plate")
    .itemOutputs("create:electron_tube")
    .duration(100)
    .EUt(8);
})


ServerEvents.recipes(e => {
  e.recipes.create.filling('botania:manasteel_ingot', [Fluid.of('gtceu:ethanol', 1000), 'gtceu:blue_alloy_ingot'])
})