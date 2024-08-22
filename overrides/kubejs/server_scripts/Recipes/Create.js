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
    .circuit(0)
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
    .circuit(0)
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
    .circuit(0)
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
    .circuit(0)
    .duration(50)
    .EUt(8);
  //Brass Casing
  event.recipes.gtceu.assembler("create:brass_casing")
    .itemInputs('1x #forge:stripped_logs', 'gtceu:brass_plate')
    .itemOutputs('2x create:brass_casing')
    .circuit(0)
    .duration(50)
    .EUt(8);
  //Copper Casing
  event.recipes.gtceu.assembler("create:copper_casing")
    .itemInputs('1x #forge:stripped_logs', 'gtceu:copper_plate')
    .itemOutputs('2x create:copper_casing')
    .circuit(0)
    .duration(50)
    .EUt(8);
  //Train Casing
  event.recipes.gtceu.assembler("create:railway_casing")
    .itemInputs('2x create:brass_casing', 'gtceu:obsidian_plate')
    .itemOutputs('2x create:railway_casing')
    .circuit(0)
    .duration(50)
    .EUt(8);
  //Gearbox
  event.recipes.gtceu.assembler("create:gearbox")
    .itemInputs('2x create:cogwheel', 'create:andesite_casing')
    .itemOutputs('create:gearbox')
    .circuit(0)
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
    .circuit(0)
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
    .circuit(0)
    .EUt(8);  
  //Encased Chain Drive
  event.recipes.gtceu.assembler("create:encased_chain_drive")
    .itemInputs('1x create:andesite_casing', '3x minecraft:iron_nugget')
    .itemOutputs('1x create:encased_chain_drive')
    .duration(50)
    .circuit(0)
    .EUt(8);   
  //Adjustable Chain Gearshift
  event.recipes.gtceu.assembler("create:adjustable_chain_gearshift")
  .itemInputs('1x create:encased_chain_drive', '1x create:electron_tube')
  .itemOutputs('1x create:adjustable_chain_gearshift')
  .duration(50)
  .circuit(0)
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
    .circuit(0)
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
    .circuit(0)
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
    .circuit(0)
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
  .circuit(0)
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
  .circuit(0)
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
    .circuit(0)
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
    .circuit(0)
    .EUt(8);
  //Fluid Tank
  event.remove({output: 'create:fluid_tank'})
  event.shaped('4x create:fluid_tank' ,[
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
    .circuit(0)
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
    .circuit(0)
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
    .circuit(0)
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
    .circuit(0)
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
    .circuit(0)
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
    .circuit(0)
    .EUt(8);
  //Mechanical Piston
  event.remove({output: "create:mechanical_piston"})
  event.shaped('create:mechanical_piston', [
    'WWW',
    'APA',
    'RER'
  ], {
    W: 'gtceu:treated_wood_plate',
    R: 'gtceu:red_alloy_bolt',
    A: 'create:andesite_casing',
    E: 'create:piston_extension_pole',
    P: 'ulvcovm:ulv_electric_piston'
  })
  event.recipes.gtceu.assembler("create:mechanical_piston")
    .itemInputs('3x gtceu:treated_wood_plate', 'ulvcovm:ulv_electric_piston', '2x gtceu:red_alloy_bolt', '2x create:andesite_casing', '2x create:piston_extension_pole')
    .itemOutputs('create:mechanical_piston')
    .duration(50)
    .circuit(0)
    .EUt(8);
  //Piston Extension Pole
  event.remove({output: "create:piston_extension_pole"})
  event.shaped('4x create:piston_extension_pole', [
    ' W ',
    ' R ',
    ' W '
  ], {
    W: 'gtceu:treated_wood_plate',
    R: 'gtceu:andesite_alloy_rod',
  })
  event.recipes.gtceu.assembler("create:piston_extension_pole")
    .itemInputs('2x gtceu:treated_wood_plate', 'gtceu:andesite_alloy_rod')
    .itemOutputs('8x create:piston_extension_pole')
    .duration(50)
    .circuit(0)
    .EUt(8);
  //Gantry Carriage
  event.remove({output: "create:gantry_carriage"})
  event.shaped('create:gantry_carriage', [
    ' W ',
    'ARA',
    'CCC'
  ], {
    W: 'gtceu:treated_wood_plate',
    R: 'ulvcovm:ulv_electric_motor',
    A: 'create:andesite_casing',
    C: 'create:cogwheel'
  })
  event.recipes.gtceu.assembler("create:gantry_carriage")
    .itemInputs('gtceu:treated_wood_plate', 'ulvcovm:ulv_electric_motor', '2x create:andesite_casing', '3x create:cogwheel')
    .itemOutputs('create:gantry_carriage')
    .duration(50)
    .circuit(0)
    .EUt(8);
  //Gantry Shaft
  event.remove({output: "create:gantry_shaft"})
  event.shaped('4x create:gantry_shaft', [
    'PRP',
    'FFF',
    'PRP'
  ], {
    P: 'gtceu:andesite_alloy_plate',
    R: 'gtceu:andesite_alloy_rod',
    F: 'gtceu:red_alloy_foil'
  })
  event.recipes.gtceu.assembler("create:gantry_shaft")
    .itemInputs('4x gtceu:andesite_alloy_plate', '3x gtceu:red_alloy_foil', '2x gtceu:andesite_alloy_rod')
    .itemOutputs('8x create:gantry_shaft')
    .duration(50)
    .circuit(0)
    .EUt(8);
  //Mechanical Bearing
  event.remove({output: "create:mechanical_bearing"})
  event.shaped('create:mechanical_bearing', [
    'WWW',
    'AMA',
    'CSC'
  ], {
    W: 'gtceu:treated_wood_plate',
    A: 'create:andesite_casing',
    C: 'create:cogwheel',
    M: 'ulvcovm:ulv_electric_motor',
    S: 'create:shaft'
  })
  event.recipes.gtceu.assembler("create:mechanical_bearing")
    .itemInputs('3x gtceu:treated_wood_plate', '2x create:andesite_casing', '2x create:cogwheel', 'ulvcovm:ulv_electric_motor', 'create:shaft')
    .itemOutputs('create:mechanical_bearing')
    .duration(50)
    .circuit(0)
    .EUt(8);
  //Clockwork Bearing
  event.remove({output: "create:clockwork_bearing"})
  event.shaped('create:clockwork_bearing', [
    'WWW',
    'AMA',
    'CSC'
  ], {
    W: 'gtceu:treated_wood_plate',
    A: 'create:brass_casing',
    C: 'create:cogwheel',
    M: 'ulvcovm:ulv_electric_motor',
    S: 'create:electron_tube'
  })
  event.recipes.gtceu.assembler("create:clockwork_bearing")
    .itemInputs('3x gtceu:treated_wood_plate', '2x create:brass_casing', '2x create:cogwheel', 'ulvcovm:ulv_electric_motor', 'create:electron_tube')
    .itemOutputs('create:clockwork_bearing')
    .duration(50)
    .circuit(0)
    .EUt(8);
  //Rope Pulley
  event.remove({output: "create:rope_pulley"})
  event.shaped('create:rope_pulley', [
    'AMA',
    'SRS',
    'PPP'
  ], {
    P: 'gtceu:andesite_alloy_plate',
    A: 'create:andesite_casing',
    M: 'ulvcovm:ulv_electric_motor',
    S: 'create:shaft',
    R: '#forge:rope'
  })
  event.recipes.gtceu.assembler("create:rope_pulley")
    .itemInputs('3x gtceu:andesite_alloy_plate', '2x create:andesite_casing', '2x create:shaft', 'ulvcovm:ulv_electric_motor', '#forge:rope')
    .itemOutputs('create:rope_pulley')
    .duration(50)
    .circuit(0)
    .EUt(8);
  //Elevator Pulley
  event.remove({output: "create:elevator_pulley"})
  event.shaped('create:elevator_pulley', [
    'AMA',
    'SRS',
    'PPP'
  ], {
    P: 'gtceu:andesite_alloy_plate',
    A: 'create:brass_casing',
    M: 'ulvcovm:ulv_electric_motor',
    S: 'create:shaft',
    R: '#forge:rope'
  })
  event.recipes.gtceu.assembler("create:elevator_pulley")
    .itemInputs('3x gtceu:andesite_alloy_plate', '2x create:brass_casing', '2x create:shaft', 'ulvcovm:ulv_electric_motor', '#forge:rope')
    .itemOutputs('create:elevator_pulley')
    .duration(50)
    .circuit(0)
    .EUt(8);
  //Cart Assembler
  event.remove({output: "create:cart_assembler"})
  event.recipes.gtceu.assembler("create:cart_assembler")
    .itemInputs('2x gtceu:andesite_alloy_plate', '2x create:andesite_casing', '2x #gtceu:circuits/hv', 'gtceu:red_alloy_plate', 'gtceu:hv_robot_arm', 'gtceu:hv_assembler')
    .itemOutputs('create:cart_assembler')
    .circuit(0)
    .duration(50)
    .EUt(GTValues.VA[GTValues.HV]);
  //Linear Chassis
  event.remove({output: "create:linear_chassis"})
  event.shaped('3x create:linear_chassis', [
    'AWA',
    'LLL',
    'AWA'
  ], {
    A: 'gtceu:andesite_alloy_plate',
    L: '#minecraft:logs',
    W: 'gtceu:treated_wood_plate',
  })
  event.recipes.gtceu.assembler("create:linear_chassis")
    .itemInputs('4x gtceu:andesite_alloy_plate', '3x #minecraft:logs', '2x gtceu:treated_wood_plate')
    .itemOutputs('6x create:linear_chassis')
    .circuit(6)
    .duration(50)
    .EUt(8);
  //Radial Chassis
  event.remove({output: "create:radial_chassis"})
  event.shaped('3x create:radial_chassis', [
    'ALA',
    'WLW',
    'ALA'
  ], {
    A: 'gtceu:andesite_alloy_plate',
    L: '#minecraft:logs',
    W: 'gtceu:treated_wood_plate',
  })
  event.recipes.gtceu.assembler("create:radial_chassis")
    .itemInputs('4x gtceu:andesite_alloy_plate', '3x #minecraft:logs', '2x gtceu:treated_wood_plate')
    .itemOutputs('6x create:radial_chassis')
    .circuit(7)
    .duration(50)
    .EUt(8);
  //Sticker
  event.remove({output: "create:sticker"})
  event.shaped('create:sticker', [
    'ABA',
    'SRS',
    '   '
  ], {
    A: 'gtceu:andesite_alloy_plate',
    S: 'gtceu:stone_plate',
    B: '#forge:slimeballs',
    R: 'gtceu:red_alloy_bolt'
  })
  event.recipes.gtceu.assembler("create:sticker")
    .itemInputs('2x gtceu:andesite_alloy_plate', '2x gtceu:stone_plate', '#forge:slimeballs', 'gtceu:red_alloy_bolt')
    .itemOutputs('create:sticker')
    .duration(50)
    .circuit(0)
    .EUt(8);
  //Mechanical Drill
  event.remove({output: "create:mechanical_drill"})
  event.shaped('create:mechanical_drill', [
    'AP ',
    'MGD',
    'AP '
  ], {
    A: 'create:andesite_casing',
    P: 'gtceu:andesite_alloy_plate',
    G: 'gtceu:andesite_alloy_gear',
    D: 'gtceu:steel_drill_head',
    M: 'ulvcovm:ulv_electric_motor'
  })
  event.recipes.gtceu.assembler("create:mechanical_drill")
    .itemInputs('2x create:andesite_casing', '2x gtceu:andesite_alloy_plate', 'gtceu:blue_steel_drill_head', 'gtceu:andesite_alloy_gear', 'ulvcovm:ulv_electric_motor')
    .itemOutputs('create:mechanical_drill')
    .duration(50)
    .circuit(0)
    .EUt(8);
  //Mechanical Saw
  event.remove({output: "create:mechanical_saw"})
  event.shaped('create:mechanical_saw', [
    'AP ',
    'MGD',
    'AP '
  ], {
    A: 'create:andesite_casing',
    P: 'gtceu:andesite_alloy_plate',
    G: 'gtceu:andesite_alloy_gear',
    D: 'gtceu:wrought_iron_buzz_saw_blade',
    M: 'ulvcovm:ulv_electric_motor'
  })
  event.recipes.gtceu.assembler("create:mechanical_saw")
    .itemInputs('2x create:andesite_casing', '2x gtceu:andesite_alloy_plate', 'gtceu:wrought_iron_buzz_saw_blade', 'gtceu:andesite_alloy_gear', 'ulvcovm:ulv_electric_motor')
    .itemOutputs('create:mechanical_saw')
    .duration(50)
    .circuit(0)
    .EUt(8);
  //Deployer
  event.remove({output: "create:deployer"})
  event.shaped('create:deployer', [
    'AP ',
    'MGD',
    'AP '
  ], {
    A: 'create:andesite_casing',
    P: 'gtceu:andesite_alloy_plate',
    G: 'create:shaft',
    D: 'create:brass_hand',
    M: 'ulvcovm:ulv_electric_piston'
  })
  event.recipes.gtceu.assembler("create:deployer")
    .itemInputs('2x create:andesite_casing', '2x gtceu:andesite_alloy_plate', 'create:brass_hand', 'create:shaft', 'ulvcovm:ulv_electric_piston')
    .itemOutputs('create:deployer')
    .duration(50)
    .circuit(0)
    .EUt(8);
  //Portable Storage Interface
  event.remove({output: 'create:portable_storage_interface'})
  event.shaped('create:portable_storage_interface', [
    'COH',
    '   ',
    '   '
  ], {
    C: 'create:andesite_casing',
    O: 'ulvcovm:ulv_conveyor_module',
    H: 'create:chute'
  })
  event.recipes.gtceu.assembler("create:portable_storage_interface")
    .itemInputs('ulvcovm:ulv_conveyor_module', 'create:andesite_casing', 'create:chute')
    .itemOutputs('create:portable_storage_interface')
    .duration(50)
    .circuit(0)
    .EUt(8);
  //Mechanical Harvester
  event.recipes.gtceu.assembler("create:mechanical_harvester")
    .itemInputs('create:andesite_casing', '4x create:andesite_alloy', '2x gtceu:iron_plate')
    .itemOutputs('create:mechanical_harvester')
    .circuit(4)
    .duration(50)
    .EUt(8);
  //Mechanical Plough
  event.recipes.gtceu.assembler("create:mechanical_plough")
  .itemInputs('create:andesite_casing', '3x create:andesite_alloy', '3x gtceu:iron_plate')
  .itemOutputs('create:mechanical_plough')
  .circuit(5)
  .duration(50)
  .EUt(8);
  //Mechanical Roller
  event.recipes.gtceu.assembler("create:mechanical_roller")
  .itemInputs('create:andesite_casing', 'create:crushing_wheel', 'create:electron_tube')
  .itemOutputs('create:mechanical_roller')
  .circuit(5)
  .duration(50)
  .EUt(8);
  //Mechanical Crafter
  event.remove({output: "create:mechanical_crafter"})
  event.shaped('create:mechanical_crafter', [
    'BEB',
    'CGC',
    'BTB'
  ], {
    B: 'gtceu:brass_plate',
    E: 'create:electron_tube',
    C: 'create:brass_casing',
    G: 'gtceu:steel_gear',
    T: 'minecraft:crafting_table'
  })
  event.recipes.gtceu.assembler("create:mechanical_crafter")
  .itemInputs('4x gtceu:brass_plate', '2x create:brass_casing', 'minecraft:crafting_table', 'create:electron_tube', 'gtceu:steel_gear')
  .itemOutputs('create:mechanical_crafter')
  .circuit(5)
  .duration(50)
  .EUt(8);
  //Sequenced Gearshift
  event.recipes.gtceu.assembler("create:sequenced_gearshift")
  .itemInputs('create:brass_casing', 'create:cogwheel', 'create:electron_tube')
  .itemOutputs('create:sequenced_gearshift')
  .circuit(5)
  .duration(50)
  .EUt(8);
  //Rotation Speed Controller
  event.remove({output: "create:rotation_speed_controller"})
  event.shaped('create:rotation_speed_controller', [
    'B B',
    'CRC',
    'CPC'
  ], {
    B: 'gtceu:brass_plate',
    R: 'gtceu:aluminium_rod',
    C: 'create:brass_casing',
    P: 'create:precision_mechanism',
  })
  event.recipes.gtceu.assembler("create:rotation_speed_controller")
  .itemInputs('4x create:brass_casing', '2x gtceu:brass_plate', 'gtceu:aluminium_rod', 'create:precision_mechanism')
  .itemOutputs('create:rotation_speed_controller')
  .circuit(5)
  .duration(50)
  .EUt(8);
  //Precision Mechanism
  event.recipes.gtceu.assembler("create:precision_mechanism")
  .itemInputs('gtceu:brass_plate', '2x gtceu:small_aluminium_gear', '#gtceu:circuits/lv')
  .itemOutputs('create:precision_mechanism')
  .circuit(5)
  .duration(50)
  .EUt(8);
  //Mechanical Arm
  event.remove({output: "create:mechanical_arm"})
  event.shaped('create:mechanical_arm', [
    ' A ',
    'PR ',
    'CGC'
  ], {
    A: 'gtceu:lv_robot_arm',
    R: 'gtceu:aluminium_rod',
    C: 'create:brass_casing',
    P: 'create:precision_mechanism',
    G: 'gtceu:bronze_gear'
  })
  event.recipes.gtceu.assembler("create:mechanical_arm")
  .itemInputs('2x create:brass_casing', 'gtceu:aluminium_rod', 'create:precision_mechanism', 'gtceu:lv_robot_arm', 'gtceu:bronze_gear')
  .itemOutputs('create:mechanical_arm')
  .circuit(5)
  .duration(50)
  .EUt(8);
  //Train Track
  event.remove({output: "create:track"})
  event.recipes.gtceu.assembler("create:track")
  .itemInputs('2x gtceu:steel_rod', '#create:sleepers')
  .itemOutputs('4x create:track')
  .circuit(8)
  .duration(50)
  .EUt(8);
  //Train Station
  event.remove({output: "create:track_station"})
  event.shaped('2x create:track_station', [
    '   ',
    'F  ',
    'CCC'
  ], {
    C: 'create:railway_casing',
    F: '#supplementaries:flags'
  })
  event.recipes.gtceu.assembler("create:track_station")
  .itemInputs('3x create:railway_casing', '#supplementaries:flags')
  .itemOutputs('2x create:track_station')
  .circuit(0)
  .duration(50)
  .EUt(8);
  //Train Signal
  event.remove({output: "create:track_signal"})
  event.shaped('4x create:track_signal', [
    '   ',
    'LEL',
    'CCC'
  ], {
    C: 'create:railway_casing',
    E: 'create:electron_tube',
    L: '#gtceu:circuits/lv'
  })
  event.recipes.gtceu.assembler("create:track_signal")
  .itemInputs('3x create:railway_casing', '2x #gtceu:circuits/lv', 'create:electron_tube')
  .itemOutputs('4x create:track_signal')
  .circuit(0)
  .duration(50)
  .EUt(8);
  //Train Observer
  event.remove({output: "create:track_observer"})
  event.shaped('2x create:track_observer', [
    '   ',
    'GOL',
    'CCC'
  ], {
    C: 'create:railway_casing',
    O: 'minecraft:observer',
    G: 'gtceu:glass_lens',
    L: '#gtceu:circuits/lv'
  })
  event.recipes.gtceu.assembler("create:track_observer")
  .itemInputs('3x create:railway_casing', '#gtceu:circuits/lv', 'minecraft:observer', 'gtceu:glass_lens')
  .itemOutputs('2x create:track_observer')
  .circuit(0)
  .duration(50)
  .EUt(8);
  //Train Controls
  event.remove({output: "create:controls"})
  event.shaped('create:controls', [
    'PLP',
    'CEC',
    'PMP'
  ], {
    P: 'gtceu:brass_plate',
    C: 'create:railway_casing',
    E: '#gtceu:circuits/lv',
    L: 'minecraft:lever',
    M: 'create:precision_mechanism'
  })
  event.recipes.gtceu.assembler("create:controls")
  .itemInputs('4x gtceu:brass_plate', '2x create:railway_casing', '#gtceu:circuits/mv', 'create:precision_mechanism', 'minecraft:lever')
  .itemOutputs('create:controls')
  .circuit(0)
  .duration(50)
  .EUt(8);
  //Item Vault
  event.remove({output: "create:item_vault"})
  event.shaped('create:item_vault', [
    'PRP',
    'RCR',
    'PRP'
  ], {
    P: 'gtceu:steel_plate',
    C: 'gtceu:steel_crate',
    R: 'gtceu:steel_rod'
  })
  event.recipes.gtceu.assembler("create:item_vault")
  .itemInputs('4x gtceu:steel_plate', '4x gtceu:steel_rod', 'gtceu:steel_crate')
  .itemOutputs('2x create:item_vault')
  .circuit(0)
  .duration(50)
  .EUt(8);
  //Andesite Funnel
  event.remove({output: "create:andesite_funnel"})
  event.shaped('2x create:andesite_funnel', [
    'PPP',
    'R R',
    'P P'
  ], {
    P: 'gtceu:andesite_alloy_plate',
    R: 'gtceu:rubber_foil'
  })
  event.recipes.gtceu.assembler("create:andesite_funnel")
  .itemInputs('5x gtceu:andesite_alloy_plate', '2x gtceu:rubber_foil')
  .itemOutputs('4x create:andesite_funnel')
  .circuit(9)
  .duration(50)
  .EUt(8);  
  //Brass Funnel
  event.remove({output: "create:brass_funnel"})
  event.shaped('2x create:brass_funnel', [
    'PEP',
    'R R',
    'P P'
  ], {
    P: 'gtceu:brass_plate',
    E: 'create:electron_tube',
    R: 'gtceu:rubber_foil'
  })
  event.recipes.gtceu.assembler("create:brass_funnel")
  .itemInputs('4x gtceu:brass_plate', '2x gtceu:rubber_foil', 'create:electron_tube')
  .itemOutputs('4x create:brass_funnel')
  .circuit(9)
  .duration(50)
  .EUt(8);  
  //Andesite Tunnel
  event.remove({output: "create:andesite_tunnel"})
  event.shaped('2x create:andesite_tunnel', [
    'PPP',
    'R R',
    'PPP'
  ], {
    P: 'gtceu:andesite_alloy_plate',
    R: 'gtceu:rubber_foil'
  })
  event.recipes.gtceu.assembler("create:andesite_tunnel")
  .itemInputs('6x gtceu:andesite_alloy_plate', '2x gtceu:rubber_foil')
  .itemOutputs('4x create:andesite_tunnel')
  .circuit(10)
  .duration(50)
  .EUt(8);  
  //Brass Tunnel
  event.remove({output: "create:brass_tunnel"})
  event.shaped('2x create:brass_tunnel', [
    'PEP',
    'R R',
    'PPP'
  ], {
    P: 'gtceu:brass_plate',
    E: 'create:electron_tube',
    R: 'gtceu:rubber_foil'
  })
  event.recipes.gtceu.assembler("create:brass_tunnel")
  .itemInputs('5x gtceu:brass_plate', '2x gtceu:rubber_foil', 'create:electron_tube')
  .itemOutputs('4x create:brass_tunnel')
  .circuit(10)
  .duration(50)
  .EUt(8);
  //Smart Observer
  event.recipes.gtceu.assembler("create:content_observer")
  .itemInputs('create:brass_casing', 'minecraft:observer', 'create:electron_tube')
  .itemOutputs('create:content_observer')
  .circuit(6)
  .duration(50)
  .EUt(8);
  //Threshold Switch
  event.recipes.gtceu.assembler("create:stockpile_switch")
  .itemInputs('create:brass_casing', 'minecraft:comparator', 'create:electron_tube')
  .itemOutputs('create:stockpile_switch')
  .circuit(6)
  .duration(50)
  .EUt(8);
  //Display Link
  event.recipes.gtceu.assembler("create:display_link")
  .itemInputs('create:brass_casing', 'minecraft:redstone_torch', 'create:copper_plate')
  .itemOutputs('create:display_link')
  .circuit(6)
  .duration(50)
  .EUt(8);
  //Display Board
  event.remove({output: "create:display_board"})
  event.shaped('2x create:display_board', [
    '   ',
    'PEP',
    '   '
  ], {
    P: 'gtceu:andesite_alloy_plate',
    E: 'create:electron_tube',
  })
  event.recipes.gtceu.assembler("create:display_board")
  .itemInputs('2x gtceu:andesite_alloy_plate', 'create:electron_tube')
  .itemOutputs('4x create:display_board')
  .circuit(10)
  .duration(50)
  .EUt(8);
  //Nixie Tube
  event.recipes.gtceu.assembler("create:nixie_tube")
  .itemInputs('2x create:electron_tube')
  .itemOutputs('4x create:nixie_tube')
  .circuit(2)
  .duration(50)
  .EUt(8);
  //Redstone Link
  event.recipes.gtceu.assembler("create:redstone_link")
  .itemInputs('create:brass_casing', 'minecraft:redstone_torch') 
  .itemOutputs('2x create:redstone_link')
  .circuit(2)
  .duration(50)
  .EUt(8);
  //Mechanical Pump
  event.remove({output: "create:mechanical_pump"})
  event.shaped('create:mechanical_pump', [
    'CPF',
    '   ',
    '   '
  ], {
    C: 'create:cogwheel',
    P: 'ulvcovm:ulv_electric_pump',
    F: 'create:fluid_pipe'
  })
  event.recipes.gtceu.assembler("create:mechanical_pump")
  .itemInputs('create:fluid_pipe', 'ulvcovm:ulv_electric_pump', 'create:cogwheel')
  .itemOutputs('create:mechanical_pump')
  .circuit(10)
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
  //Brass Hand 
  event.recipes.gtceu.assembler('create:brass_hand')
    .itemInputs('4x gtceu:brass_plate')
    .itemInputs('gtceu:andesite_alloy_plate')
    .itemOutputs('create:brass_hand')
    .circuit(0)
    .duration(100)
    .EUt(8);
  //Rose Quartz
  event.remove({output: "create:rose_quartz"})
  event.recipes.gtceu.alloy_smelter("create:rose_quartz")
  .itemInputs('4x minecraft:redstone', 'gtceu:quartzite_gem')
  .itemOutputs('create:rose_quartz')
  .duration(50)
  .EUt(8);
  //Polished Rose Quartz
  event.recipes.gtceu.mixer("create:rose_quartz")
  .itemInputs('create:rose_quartz')
  .notConsumable('minecraft:sand')
  .itemOutputs('create:polished_rose_quartz')
  .duration(50)
  .EUt(8);
})



ServerEvents.recipes(e => {
  e.recipes.create.filling('botania:manasteel_ingot', [Fluid.of('gtceu:ethanol', 1000), 'gtceu:blue_alloy_ingot'])
})