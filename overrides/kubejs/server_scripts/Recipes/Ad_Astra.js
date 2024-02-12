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
// // yeet(/ad_astra:(.*)_ingot/);
yeet(/ad_astra:(.*)_plate/)
// yeet(/ad_astra:(.*)_raw/)
// yeet(/ad_astra:(.*)_nugget/)
// yeet(/ad_astra:(.*)_block/)
// // yeet(/ad_astra:(.*)_tank/)
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
yeet('ad_astra:oxygen_loader' ) 
yeet('ad_astra:energizer' ) 
yeet('ad_astra:cryo_freezer')
// yeet(/ad_astra:(.*)_engine/) 
yeet('ad_astra:fuel_bucket')
yeet('ad_astra:cryo_fuel_bucket')


yeet_f('ad_astra:oxygen')
yeet_f('ad_astra:fuel')
yeet_f('ad_astra:cryo_fuel')

//Last fix didn't work, i'm just removing the steel tag from ad astra steel lul - Srdra
ServerEvents.tags('item', event => {
  event.remove('forge:ingots/steel', 'ad_astra:steel_ingot')
})

ServerEvents.tags('fluid', event => {


  event.add('ad_astra:fuel', `gtceu:rocket_fuel`)
  event.remove('forge:ingots/steel', 'ad_astra:steel_ingot')
})
ServerEvents.recipes(event => {
  event.remove({ output: 'ad_astra:steel_ingot' })
  event.remove({ output: 'ad_astra:tier_1_rocket' })
  event.remove({ output: 'ad_astra:tier_2_rocket' })
  event.remove({ output: 'ad_astra:tier_3_rocket' })
  event.remove({ output: 'ad_astra:tier_4_rocket' })
  event.remove({ output: 'ad_astra:launch_pad' })
  event.remove({ output: 'ad_astra:nasa_workbench' })
  event.remove({ output: 'ad_astra:oxygen_distributor' })
  event.remove({ output: 'ad_astra:oxygen_sensor' })
  event.remove({ output: 'ad_astra:space_helmet' })
  // event.remove({ output: 'ad_astra:space_suit' })
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
  event.remove({ id: 'ad_astra:tier_1_rocket_from_nasa_workbench' })
  event.remove({ id: 'ad_astra:tier_2_rocket_from_nasa_workbench' })
  event.remove({ id: 'ad_astra:tier_3_rocket_from_nasa_workbench' })
  event.remove({ id: 'ad_astra:tier_4_rocket_from_nasa_workbench' })
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
        "item": "ad_astra:steel_tank"
      },
      {
        "item": "ad_astra:steel_tank"
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
  event.recipes.gtceu.assembler("ad_astra:gas_tank/filling_t1")
  .itemInputs('ad_astra:gas_tank')
  .inputFluids('gtceu:oxygen 1000')
  .circuit(1)
  .itemOutputs(Item.of('ad_astra:gas_tank', '{BotariumData:{StoredFluids:[{Amount:1000L,Fluid:"gtceu:oxygen"}]}}'))
  .duration(160)
  event.recipes.gtceu.assembler("ad_astra:gas_tank/filling_t2")
  .itemInputs('ad_astra:large_gas_tank')
  .inputFluids('gtceu:oxygen 3000')
  .circuit(1)
  .itemOutputs(Item.of('ad_astra:large_gas_tank', '{BotariumData:{StoredFluids:[{Amount:3000L,Fluid:"gtceu:oxygen"}]}}'))
  .duration(160)
  .EUt(GTValues.VA[GTValues.HV]);
  event.recipes.gtceu.assembler("space_suit_t1")
  .itemInputs(['32x gtceu:polytetrafluoroethylene_plate', '4x gtceu:stainless_steel_plate', '4x gtceu:titanium_plate', 'ad_astra:gas_tank'])
  .circuit(1)
  .itemOutputs('ad_astra:space_suit')
  .duration(160)
  .EUt(GTValues.VA[GTValues.HV]);
  event.shaped('ad_astra:nasa_workbench', [
    'DAB',
    'AHA',
    'CMC'
  ], {
    A: 'gtceu:hv_robot_arm',
    B: 'gtceu:stainless_steel_screwdriver',
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
    E: 'kubejs:stainless_steel_engine'
  })
})


