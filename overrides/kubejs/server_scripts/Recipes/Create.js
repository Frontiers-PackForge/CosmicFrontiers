let yeet = (itemName) => {
  ServerEvents.recipes(event => {
    event.remove({ output: itemName })
  })
  ServerEvents.tags('item', event => {
    event.add('c:hidden_from_recipe_viewers', itemName)
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
yeet('balancedflight:ascended_flight_ring')

yeet('create:propeller')

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
  event.remove({ id: 'create:cutting/compat/blue_skies/stripped_cherry_wood' })
  event.remove({ id: 'create:cutting/compat/blue_skies/stripped_cherry_log' })
  event.remove({ id: 'create:cutting/compat/biomesoplenty/cherry_log' })
  event.remove({ id: 'create:cutting/compat/forbidden_arcanus/stripped_cherrywood_log' })
  event.remove({ id: 'create:cutting/compat/forbidden_arcanus/stripped_mysterywood' })
  event.remove({ id: 'create:cutting/compat/biomesoplenty/stripped_cherry_wood' })
  event.remove({ id: 'create:cutting/compat/forbidden_arcanus/cherrywood' })
  event.remove({ id: 'create:cutting/compat/biomesoplenty/cherry_wood' })
  event.remove({ id: 'create:cutting/compat/forbidden_arcanus/mysterywood_log' })
  event.remove({ id: 'create:cutting/compat/forbidden_arcanus/mysterywood' })
  event.remove({ id: 'create:cutting/compat/blue_skies/cherry_wood' })
  event.remove({ id: 'create:cutting/compat/blue_skies/cherry_log' })
  event.remove({ id: 'create:cutting/compat/forbidden_arcanus/stripped_cherrywood' })
  event.remove({ id: 'create:cutting/compat/biomesoplenty/stripped_cherry_log' })
  event.remove({ id: 'crabbersdelight:lanternfish_barrel' })
  event.remove({ id: 'create:cutting/compat/forbidden_arcanus/cherrywood_log' })
  event.remove({ id: 'create:cutting/compat/forbidden_arcanus/stripped_mysterywood_log' })
  event.remove({ id: 'create:pressing/sugar_cane' })
  event.remove({ output: 'create:andesite_alloy' })

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
  event.recipes.gtceu.assembler("create:cogwheel")
    .itemInputs("4x gtceu:treated_wood_plate")
    .itemInputs("create:shaft")
    .itemOutputs("4x create:cogwheel")
    .duration(100)
    .EUt(8);

  event.remove({ output: 'create:large_cogwheel' })
  event.shaped('create:large_cogwheel', [
    ' T ',
    'TCT',
    ' T '
  ], {
    C: 'create:cogwheel',
    T: 'gtceu:treated_wood_plate'
  })
  event.recipes.gtceu.assembler("create:large_cogwheel")
    .itemInputs("2x gtceu:treated_wood_plate")
    .itemInputs("create:cogwheel")
    .itemOutputs("create:large_cogwheel")
    .duration(100)
    .EUt(8);
  //Shaft
  event.remove({output: 'create:shaft'})
  event.shaped('4x create:shaft' ,[
    ' R ',
    'HAF',
    ' R '
  ], {
    R: 'gtceu:andesite_alloy_rod',
    A: 'gtceu:andesite_alloy_plate',
    H: '#forge:tools/hammers',
    F: '#forge:tools/files'
  })
  event.recipes.gtceu.assembler("create:shaft")
    .itemInputs('2x gtceu:andesite_alloy_rod', 'gtceu:andesite_alloy_plate')
    .itemOutputs('8x create:shaft')
    .duration(50)
    .EUt(8);
  event.recipes.gtceu.extruder("create:shaft")
    .itemInputs('create:andesite_alloy')
    .notConsumable('gtceu:normal_pipe_extruder_mold')
    .itemOutputs('12x create:shaft')
    .duration(50)
    .EUt(GTValues.VA[GTValues.MV]);
  //Andesite Casing
  event.recipes.gtceu.assembler("create:andesite_casing")
    .itemInputs('1x #forge:stripped_logs', 'gtceu:andesite_alloy_plate')
    .itemOutputs('2x create:andesite_casing')
    .duration(50)
    .EUt(8);
  //Gearbox
  event.recipes.gtceu.assembler("create:gearbox")
    .itemInputs('2x create:cogwheel', 'create:andesite_casing')
    .itemOutputs('create:gearbox')
    .duration(50)
    .EUt(8);
  //Clutch
  event.remove({output: 'create:clutch'})
  event.shapeless('create:clutch', [
    '1x create:andesite_casing',
    '1x create:shaft',
    '1x gtceu:red_alloy_bolt'
  ])
  event.recipes.gtceu.assembler("create:clutch")
    .itemInputs('1x create:andesite_casing', '1x create:shaft', '1x gtceu:red_alloy_bolt')
    .itemOutputs('1x create:clutch')
    .duration(50)
    .EUt(8);
  //Gearshift
  event.remove({output: 'create:gearshift'})
  event.shapeless('create:gearshift', [
    '1x create:andesite_casing',
    '1x create:cogwheel',
    '1x gtceu:red_alloy_bolt'
  ])
  event.recipes.gtceu.assembler("create:gearshift")
    .itemInputs('1x create:andesite_casing', '1x create:cogwheel', '1x gtceu:red_alloy_bolt')
    .itemOutputs('1x create:gearshift')
    .duration(50)
    .EUt(8);  
  //Encased Chain Drive
  event.recipes.gtceu.assembler("create:encased_chain_drive")
    .itemInputs('1x create:andesite_casing', '3x minecraft:iron_nugget')
    .itemOutputs('1x create:encased_chain_drive')
    .duration(50)
    .EUt(8);   
  //Adjustable Chain Gearshift
  event.recipes.gtceu.assembler("create:adjustable_chain_gearshift")
  .itemInputs('1x create:encased_chain_drive', '1x create:electron_tube')
  .itemOutputs('1x create:adjustable_chain_gearshift')
  .duration(50)
  .EUt(8);
  //Electron Tube
  event.remove({output: 'create:electron_tube'})
  event.shaped('create:electron_tube', [
    ' G ',
    ' R ',
    ' P '
  ], {
    G: 'gtceu:glass_tube',
    R: 'create:polished_rose_quartz',
    P: 'gtceu:iron_plate'
  })
  event.recipes.gtceu.assembler("create:electron_tube")
    .itemInputs('1x gtceu:glass_tube', '1x create:polished_rose_quartz', '1x gtceu:iron_plate')
    .itemOutputs('4x create:electron_tube')
    .duration(100)
    .EUt(8);
  //Encased Fan
  event.remove({output: 'create:encased_fan'})
  event.shaped('create:encased_fan', [
    ' S ',
    'AMA',
    ' P '
    ], {
      S: 'create:shaft',
      A: 'create:andesite_casing',
      M: 'gtceu:mv_electric_motor',
      P: 'gtceu:aluminium_rotor'
    })
  event.recipes.gtceu.assembler("create:encased_fan")
    .itemInputs('gtceu:aluminium_rotor', '1x create:andesite_casing', '2x create:shaft', 'gtceu:mv_electric_motor')
    .itemOutputs('1x create:encased_fan')
    .duration(50)
    .EUt(8);
  //Mechanical Belt
  event.shaped('2x create:belt_connector', [
    '   ',
    'RRR',
    'RRR'
  ], {
    R: 'gtceu:rubber_foil'
  })
  event.recipes.gtceu.assembler('create:belt_connector')
  .itemInputs('6x gtceu:rubber_foil')
  .itemOutputs('4x create:belt_connector')
  .circuit(6)
  .duration(100)
  .EUt(8);
  //Millstone
  event.remove({output: 'create:millstone'})
  event.shaped('create:millstone' ,[
    ' C ',
    'SAS',
    'FMF'
  ], {
    C: 'create:cogwheel',
    A: 'create:andesite_casing',
    S: 'gtceu:stone_gear',
    M: 'ulvcovm:ulv_electric_motor',
    F: '#forge:stone'
  })
  event.recipes.gtceu.assembler("create:millstone")
    .itemInputs('2x gtceu:stone_gear', 'create:cogwheel', 'create:andesite_casing', '2x #forge:stone', 'ulvcovm:ulv_electric_motor')
    .itemOutputs('create:millstone')
    .duration(50)
    .EUt(8);
  //Mechanical Press
  event.remove({output: 'create:mechanical_press'})
  event.shaped('create:mechanical_press', [
    ' S ',
    'AMA',
    ' W '
  ], {
    S: 'create:shaft',
    A: 'create:andesite_casing',
    M: 'ulvcovm:ulv_electric_piston',
    W: 'gtceu:wrought_iron_block'
  })
  event.recipes.gtceu.assembler("create:mechanical_press")
  .itemInputs('gtceu:wrought_iron_block', 'create:shaft', '2x create:andesite_casing', 'ulvcovm:ulv_electric_piston')
  .itemOutputs('create:mechanical_press')
  .duration(50)
  .EUt(8);
  //Whisk
  event.remove({output: 'create:whisk'})
  event.shaped('create:whisk', [
    ' A ',
    'I I',
    ' I '
  ], {
    A: 'gtceu:andesite_alloy_plate',
    I: 'gtceu:andesite_alloy_ring'
  })
  event.recipes.gtceu.assembler('create:whisk')
    .itemInputs('3x gtceu:iron_rod', '1x gtceu:andesite_alloy_ring')
    .circuit(4)
    .itemOutputs('create:whisk')
    .duration(100)
    .EUt(8);
  //Mechanical Mixer
  event.remove({output: 'create:mechanical_mixer'})
  event.shaped('create:mechanical_mixer', [
    ' C ',
    'AMA',
    ' W '
  ], {
    C: 'create:cogwheel',
    A: 'create:andesite_casing',
    M: 'ulvcovm:ulv_electric_motor',
    W: 'create:whisk'
  })
  event.recipes.gtceu.assembler('create:mechanical_mixer')
  .itemInputs('create:whisk', '2x create:andesite_casing', 'create:cogwheel', 'ulvcovm:ulv_electric_motor')
  .itemOutputs('create:mechanical_mixer')
  .duration(100)
  .EUt(8);
  //Basin
  event.remove({output: 'create:basin'})
  event.shaped('create:basin', [
    '   ',
    'AHA',
    'AAA'
  ], {
    A: 'gtceu:andesite_alloy_plate',
    H: '#forge:tools/hammers'
  })
  event.recipes.gtceu.assembler('create:basin')
  .itemInputs('5x gtceu:andesite_alloy_plate')
  .circuit(5)
  .itemOutputs('create:basin')
  .duration(100)
  .EUt(8);
  //Depot
  event.remove({output: 'create:depot'})
  event.shaped('create:depot', [
    '   ',
    ' A ',
    ' C '
  ], {
    A: 'gtceu:andesite_alloy_plate',
    C: 'create:andesite_casing'
  })
  event.recipes.gtceu.assembler('create:depot')
  .itemInputs('create:andesite_casing', 'gtceu:andesite_alloy_plate')
  .circuit(8)
  .itemOutputs('create:depot')
  .duration(100)
  .EUt(8);
  //Weighted Ejector
  event.remove({output: 'create:weighted_ejector'})
  event.shaped('create:weighted_ejector' ,[
    ' C ',
    ' D ',
    'WSW'
  ], {
    W: 'create:cogwheel',
    D: 'create:depot',
    S: 'gtceu:andesite_alloy_spring',
    C: 'gtceu:andesite_alloy_plate'
  })
  event.recipes.gtceu.assembler("create:weighted_ejector")
    .itemInputs('2x create:cogwheel', 'create:depot', 'gtceu:andesite_alloy_spring', 'gtceu:andesite_alloy_plate')
    .itemOutputs('create:weighted_ejector')
    .duration(50)
    .EUt(8);
  //Chute
  event.recipes.gtceu.assembler("create:chute")
    .itemInputs('2x gtceu:iron_plate', 'minecraft:iron_ingot')
    .circuit(6)
    .itemOutputs('6x create:chute')
    .duration(50)
    .EUt(8);
  //Smart Chute
  event.recipes.gtceu.assembler("create:smart_chute")
    .itemInputs('gtceu:brass_plate', 'create:chute', 'create:electron_tube')
    .itemOutputs('1x create:smart_chute')
    .duration(50)
    .EUt(8);
  //Fluid Tank
  event.remove({output: 'create:fluid_tank'})
  event.shaped('create:fluid_tank' ,[
    'CBC',
    'GDG',
    'CBC'
  ], {
    D: 'gtceu:bronze_drum',
    C: 'gtceu:copper_plate',
    B: 'gtceu:bronze_plate',
    G: 'minecraft:glass_pane'
  })
  event.recipes.gtceu.assembler("create:fluid_tank")
    .itemInputs('gtceu:bronze_drum', '4x gtceu:copper_plate','2x minecraft:glass_pane', '2x gtceu:bronze_plate')
    .itemOutputs('4x create:fluid_tank')
    .duration(50)
    .EUt(8);
  //Hose Pulley
  event.remove({output: 'create:hose_pulley'})
  event.shaped('create:hose_pulley' ,[
    'CCC',
    'KPK',
    'CFC'
  ], {
    C: 'gtceu:copper_plate',
    K: 'minecraft:dried_kelp_block',
    P: 'ulvcovm:ulv_electric_pump',
    F: 'gtceu:bronze_normal_fluid_pipe'
  })
  event.recipes.gtceu.assembler("create:hose_pulley")
    .itemInputs('ulvcovm:ulv_electric_pump', '5x gtceu:copper_plate','minecraft:dried_kelp_block', 'gtceu:bronze_normal_fluid_pipe')
    .itemOutputs('create:hose_pulley')
    .duration(50)
    .EUt(8);
  //Item Drain
  event.remove({output: 'create:item_drain'})
  event.shaped('create:item_drain', [
    'BIB',
    'CCC',
    '   '
  ], {
    B: 'gtceu:bronze_plate',
    I: 'minecraft:iron_bars',
    C: 'create:copper_casing'
  })
  event.recipes.gtceu.assembler("create:item_drain")
    .itemInputs('2x gtceu:bronze_plate', 'minecraft:iron_bars', '3x create:copper_casing')
    .itemOutputs('create:item_drain')
    .duration(50)
    .EUt(8);  
  //Spout
  event.remove({output: 'create:spout'})
  event.shaped('create:spout', [
    ' C ',
    'BPB',
    ' F '
  ], {
    C: 'create:copper_casing',
    B: 'gtceu:bronze_plate',
    P: 'ulvcovm:ulv_electric_pump',
    F: 'gtceu:bronze_normal_fluid_pipe'
  })
  event.recipes.gtceu.assembler("create:spout")
    .itemInputs('2x gtceu:bronze_plate', 'ulvcovm:ulv_electric_pump', 'create:copper_casing', 'gtceu:bronze_normal_fluid_pipe')
    .itemOutputs('create:spout')
    .duration(50)
    .EUt(8);
  //Portable Fluid Interface
  event.remove({output: 'create:portable_fluid_interface'})
  event.shaped('create:portable_fluid_interface', [
    'COH',
    '   ',
    '   '
  ], {
    C: 'create:copper_casing',
    O: 'ulvcovm:ulv_electric_pump',
    H: 'create:chute'
  })
  event.recipes.gtceu.assembler("create:portable_fluid_interface")
    .itemInputs('ulvcovm:ulv_electric_pump', 'create:copper_casing', 'create:chute')
    .itemOutputs('create:portable_fluid_interface')
    .duration(50)
    .EUt(8);
  //Steam Engine
  event.remove({output: 'create:steam_engine'})
  event.shaped('create:steam_engine', [
    ' G ',
    'ARA',
    'CFC'
  ], {
    G: 'gtceu:gold_plate',
    F: 'gtceu:andesite_alloy_frame',
    A: 'gtceu:andesite_alloy_plate',
    C: 'minecraft:copper_block',
    R: 'ulvcovm:ulv_electric_piston'
  })
  event.recipes.gtceu.assembler("create:steam_engine")
    .itemInputs('gtceu:gold_plate', 'ulvcovm:ulv_electric_piston', 'gtceu:andesite_alloy_frame', '2x gtceu:andesite_alloy_plate', '2x minecraft:copper_block')
    .itemOutputs('create:steam_engine')
    .duration(50)
    .EUt(8);  
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
  //Copper Backtank
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
  //Blaze Burner
  event.remove({ output: Item.of('create:empty_blaze_burner') })
  event.shaped(Item.of('create:empty_blaze_burner'), [
    'GGG',
    'GGG',
    'CNC'
  ], {
    C: 'gtceu:steel_machine_casing',
    G: 'gtceu:long_steel_rod',
    N: 'minecraft:netherrack'
  })
  //Assembler recipes  
  event.recipes.gtceu.assembler('create:brass_hand')
    .itemInputs('4x gtceu:brass_plate')
    .itemInputs('gtceu:andesite_alloy_plate')
    .itemOutputs('create:brass_hand')
    .duration(100)
    .EUt(8);
})


ServerEvents.recipes(e => {
  e.recipes.create.filling('botania:manasteel_ingot', [Fluid.of('gtceu:ethanol', 1000), 'gtceu:blue_alloy_ingot'])
})