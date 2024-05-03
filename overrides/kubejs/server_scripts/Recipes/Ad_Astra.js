let yeet = (itemName) => {
  ServerEvents.recipes(event => {
    event.remove({ output: itemName })
  })
  ServerEvents.tags('item', event => {
    event.add('c:hidden_from_recipe_viewers', itemName)
    event.remove('forge:tools/hammers', itemName)
  })
}
let yeet_f = (itemName) => {
  ServerEvents.recipes(event => {
    event.remove({ output: Fluid.of(itemName) })
  })
  ServerEvents.tags('fluid', event => {
    event.add('c:hidden_from_recipe_viewers', itemName)
  })
}   //This regex is apparently messing with the CEU steel ingot as well we also don't wanna hide the AA higher tier ingots quite yet 
// yeet(/ad_astra:(.*)_ingot/);
yeet('ad_astra:steel_ingot')
yeet('ad_astra:steel_nugget')
yeet(/ad_astra:(.*)_plate/)
// yeet(/ad_astra:(.*)_raw/)
// yeet(/ad_astra:(.*)_nugget/)
// yeet(/ad_astra:(.*)_block/)
// yeet(/ad_astra:(.*)_tank/)
yeet(/ad_astra:(.*)_rod/)
yeet('ad_astra:steel_cable')
yeet('ad_astra:wrench')
yeet('ad_astra:desh_cable')
yeet('ad_astra:steel_fluid_pipe')
yeet('ad_astra:desh_fluid_pipe')
yeet('ad_astra:ostrum_fluid_pipe')
yeet('ad_astra:fluid_pipe_duct')
yeet('ad_astra:cable_duct')
// yeet('ad_astra:rocket_nose_cone')
// yeet('ad_astra:rocket_fin')
yeet('ad_astra:engine_frame')
yeet('ad_astra:engine_fan')
yeet('ad_astra:hammer')
yeet('ad_astra:solar_panel')
yeet('ad_astra:fuel_refinery')
yeet('ad_astra:coal_generator')
yeet('ad_astra:compressor')
yeet('ad_astra:water_pump')
yeet('ad_astra:oxygen_loader')
yeet('ad_astra:energizer')
yeet('ad_astra:cryo_freezer')
// yeet(/ad_astra:(.*)_engine/) 
yeet('ad_astra:fuel_bucket')
yeet('ad_astra:cryo_fuel_bucket')
yeet('ad_astra:etrionic_blast_furnace')
yeet('ad_astra:etrionic_capacitor')
yeet('ad_astra:etrionic_core')
yeet('ad_astra:oxygen_gear')

yeet_f('ad_astra:oxygen')
yeet_f('ad_astra:fuel')
yeet_f('ad_astra:cryo_fuel')

//Last fix didn't work, i'm just removing the steel tag from ad astra steel lul - Srdra
ServerEvents.tags('item', event => {
  event.remove('forge:ingots/steel', 'ad_astra:steel_ingot')
})

ServerEvents.tags('fluid', event => {
  event.add('ad_astra:fuel', `gtceu:rocket_fuel`)
  event.remove(`forge:oxygen`,'ad_astra:oxygen')
  event.remove(`forge:hydrogen`,'ad_astra:hydrogen')
})

ServerEvents.recipes(event => {
  event.remove({ output: 'ad_astra:tier_1_rocket' })
  event.remove({ output: 'ad_astra:tier_2_rocket' })
  event.remove({ output: 'ad_astra:tier_3_rocket' })
  event.remove({ output: 'ad_astra:tier_4_rocket' })
  event.remove({ output: 'ad_astra:steel_engine' })
  event.remove({ output: 'ad_astra:launch_pad' })
  event.remove({ output: 'ad_astra:nasa_workbench' })
  event.remove({ output: 'ad_astra:oxygen_distributor' })
  event.remove({ output: 'ad_astra:oxygen_sensor' })
  event.remove({ output: 'ad_astra:gravity_normalizer' })
  event.remove({ output: 'ad_astra:ti_69' })
  event.remove({ output: 'ad_astra:space_helmet' })
  event.remove({ output: 'ad_astra:space_suit' })
  event.remove({ output: 'ad_astra:space_pants' })
  event.remove({ output: 'ad_astra:space_boots' })
  event.remove({ output: 'ad_astra:netherite_space_helmet' })
  event.remove({ output: 'ad_astra:netherite_space_suit' })
  event.remove({ output: 'ad_astra:netherite_space_pants' })
  event.remove({ output: 'ad_astra:netherite_space_boots' })
  event.remove({ output: 'ad_astra:jet_suit_helmet' })
  event.remove({ output: 'ad_astra:jet_suit' })
  event.remove({ output: 'ad_astra:jet_suit_pants' })
  event.remove({ output: 'ad_astra:jet_suit_boots' })
  event.remove({ output: 'ad_astra:wheel' })
  event.remove({ output: 'ad_astra:tier_1_rover' })
  event.remove({ id: 'ad_astra:nasa_workbench/tier_1_rocket_from_nasa_workbench' })
  event.remove({ id: 'ad_astra:nasa_workbench/tier_2_rocket_from_nasa_workbench' })
  event.remove({ id: 'ad_astra:nasa_workbench/tier_3_rocket_from_nasa_workbench' })
  event.remove({ id: 'ad_astra:nasa_workbench/tier_4_rocket_from_nasa_workbench' })
  event.remove({ output: 'ad_astra:desh_ingot' })
  event.remove({ id: 'ad_astra:desh_nugget' })
  event.remove({ id: 'ad_astra:desh_block' })
  event.custom({
    "type": "ad_astra:nasa_workbench",
    "ingredients": [
      {
        "item": "ad_astra:rocket_nose_cone"
      },
      {
        "item": "kubejs:t1_rocket_plating"
      },
      {
        "item": "kubejs:t1_rocket_plating"
      },
      {
        "item": "kubejs:t1_rocket_plating"
      },
      {
        "item": "kubejs:t1_rocket_plating"
      },
      {
        "item": "kubejs:t1_rocket_plating"
      },
      {
        "item": "kubejs:t1_rocket_plating"
      },
      {
        "item": "ad_astra:rocket_fin"
      },
      {
        "item": 'gtceu:stainless_steel_drum'
      },
      {
        "item": 'gtceu:stainless_steel_drum'
      },
      {
        "item": "ad_astra:rocket_fin"
      },
      {
        "item": "ad_astra:rocket_fin"
      },
      {
        "item": "ad_astra:steel_engine"
      },
      {
        "item": "ad_astra:rocket_fin"
      }
    ],
    "result": {
      "count": 1,
      "id": "ad_astra:tier_1_rocket"
    }
  })
  event.recipes.gtceu.forming_press("t1_welded_plate")
    .itemInputs(['4x gtceu:black_steel_plate', '4x gtceu:galvanized_ethersteel_plate', '4x gtceu:titanium_plate', '4x gtceu:mana_steel_plate'])
    .circuit(1)
    .itemOutputs('kubejs:welded_rocket_plating')
    .duration(160)
  event.recipes.gtceu.implosion_compressor("t1_rocket_plate")
    .itemInputs('kubejs:welded_rocket_plating')
    .circuit(1)
    .itemOutputs('kubejs:t1_rocket_plating')
    .duration(10)
  event.recipes.gtceu.canner("ad_astra:gas_tank/filling_t1")
    .itemInputs('ad_astra:gas_tank')
    .inputFluids('gtceu:oxygen 1000')
    .circuit(1)
    .itemOutputs(Item.of('ad_astra:gas_tank', '{BotariumData:{StoredFluids:[{Amount:1000L,Fluid:"gtceu:oxygen"}]}}'))
    .duration(160)
  event.recipes.gtceu.canner("ad_astra:gas_tank/filling_t2")
    .itemInputs('ad_astra:large_gas_tank')
    .inputFluids('gtceu:oxygen 3000')
    .circuit(1)
    .itemOutputs(Item.of('ad_astra:large_gas_tank', '{BotariumData:{StoredFluids:[{Amount:3000L,Fluid:"gtceu:oxygen"}]}}'))
    .duration(160)
    .EUt(GTValues.VA[GTValues.HV]);
  event.recipes.gtceu.canner("ad_astra:space_suit/filling_t1")
    .itemInputs('ad_astra:space_suit')
    .inputFluids('gtceu:oxygen 1000')
    .circuit(1)
    .itemOutputs(Item.of('ad_astra:space_suit', '{BotariumData:{StoredFluids:[{Amount:1000L,Fluid:"gtceu:oxygen"}]}}'))
  event.recipes.gtceu.assembler("space_suit_t1")
    .itemInputs(['32x gtceu:polytetrafluoroethylene_plate', '4x gtceu:stainless_steel_plate', '4x gtceu:titanium_plate', 'ad_astra:gas_tank'])
    .circuit(1)
    .itemOutputs('ad_astra:space_suit')
    .duration(160)
    .EUt(GTValues.VA[GTValues.HV]);
  event.recipes.gtceu.assembler("space_helmet_t1")
    .itemInputs(['20x gtceu:polytetrafluoroethylene_plate', '3x gtceu:stainless_steel_plate', '3x gtceu:titanium_plate', 'gtceu:glass_plate'])
    .circuit(1)
    .itemOutputs('ad_astra:space_helmet')
    .duration(160)
    .EUt(GTValues.VA[GTValues.HV]);
  event.recipes.gtceu.assembler("space_pants_t1")
    .itemInputs(['28x gtceu:polytetrafluoroethylene_plate', '4x gtceu:stainless_steel_plate', '4x gtceu:titanium_plate'])
    .circuit(2)
    .itemOutputs('ad_astra:space_pants')
    .duration(160)
    .EUt(GTValues.VA[GTValues.HV]);
  event.recipes.gtceu.assembler("space_boots_t1")
    .itemInputs(['16x gtceu:polytetrafluoroethylene_plate', '1x gtceu:stainless_steel_plate', '1x gtceu:titanium_plate'])
    .circuit(2)
    .itemOutputs('ad_astra:space_boots')
    .duration(160)
    .EUt(GTValues.VA[GTValues.HV]);
  event.recipes.gtceu.assembler("launch_pad")
    .itemInputs(['6x gtceu:stainless_steel_plate', '3x gtceu:titanium_plate'])
    .circuit(5)
    .itemOutputs('ad_astra:launch_pad')
    .duration(160)
    .EUt(GTValues.VA[GTValues.HV]);
  event.shaped('ad_astra:nasa_workbench', [
    'DAB',
    'AHA',
    'CMC'
  ], {
    A: 'gtceu:hv_robot_arm',
    B: '#forge:tools/screwdrivers',
    C: '#gtceu:circuits/iv',
    H: 'gtceu:hv_machine_hull',
    D: 'minecraft:redstone_lamp',
    M: 'gtceu:computer_monitor_cover',
  })
  event.shaped('ad_astra:wheel', [
    'HBS',
    'BCB',
    'ABA'
  ], {
    A: 'gtceu:stainless_steel_screw',
    B: 'gtceu:styrene_butadiene_rubber_plate',
    C: 'gtceu:stainless_steel_plate',
    H: '#forge:tools/hammers',
    S: '#forge:tools/screwdrivers',
  })
  event.shaped('ad_astra:tier_1_rover', [
    'B R',
    'BDE',
    'WPW'
  ], {
    R: 'gtceu:stainless_steel_rod',
    B: 'gtceu:desh_block',
    D: 'gtceu:stainless_steel_drum',
    P: 'gtceu:desh_plate',
    W: 'ad_astra:wheel',
    E: 'ad_astra:steel_engine'
  })
  event.shaped('ad_astra:oxygen_distributor', [
    'CBC',
    'AHA',
    'DDD'
  ], {
    A: 'gtceu:stainless_steel_rotor',
    B: 'gtceu:titanium_drum',
    C: '#gtceu:circuits/ev',
    H: 'gtceu:hv_machine_hull',
    D: 'gtceu:desh_plate',
  })
  event.shaped('ad_astra:gravity_normalizer', [
    'M M',
    'EHE',
    'DDD'
  ], {
    M: '#gtceu:circuits/hv',
    E: 'gtceu:hv_emitter',
    H: 'gtceu:hv_machine_hull',
    D: 'gtceu:desh_plate',
  })
  event.shaped('ad_astra:steel_engine', [
    'SPS',
    'PMP',
    'DFH'
  ], {
    P: 'gtceu:steel_plate',
    S: 'gtceu:steel_screw',
    M: 'gtceu:hv_machine_hull',
    F: 'gtceu:stainless_steel_rotor',
    H: '#forge:tools/hammers',
    D: '#forge:tools/screwdrivers',
  })
  event.shaped('ad_astra:ti_69', [
    'SGS',
    'PMP',
    'CDC'
  ], {
    P: 'gtceu:steel_plate',
    S: 'gtceu:stainless_steel_screw',
    M: '#gtceu:circuits/hv',
    C: 'gtceu:gold_single_cable',
    D: '#forge:tools/screwdrivers',
    G: 'gtceu:computer_monitor_cover'
  })
  event.replaceOutput(
    { output: 'gtceu:desh_block' },
    'gtceu:desh_block',
    'ad_astra:desh_block'
  )
  event.replaceInput(
    { input: 'ad_astra:iron_rod' },
    'ad_astra:iron_rod',
    'gtceu:iron_rod'
  )
  event.replaceInput(
    { input: 'ad_astra:steel_rod' },
    'ad_astra:steel_rod',
    'gtceu:steel_rod'
  )
})



