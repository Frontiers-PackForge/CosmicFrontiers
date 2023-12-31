//A Simple "REMOVE AND HIDE" function akin to GroovyScript's Jei.yeet() function - This will tag the item for hiding from recipe viewers and remove the recipe
//This one also has a tag removal function to remove the forge:tools/knives tag from what is removed so bear that in mind if you copy/paste this around
let yeet = (itemName) => {
  ServerEvents.recipes(event => {
    event.remove({ output: itemName })
  })
  ServerEvents.tags('item', event => {
    event.add('forge:viewers/hidden_from_recipe', itemName)

  })
}

//Generator Removal - WILL RETURN WITH UH, """BETTER""" CREATE FUNCTIONALITY
// yeet('gtceu:lv_combustion')
// yeet('gtceu:mv_combustion')
// yeet('gtceu:hv_combustion')
// yeet('gtceu:large_combustion_engine')
// yeet('gtceu:extreme_combustion_engine')
// yeet('gtceu:lv_gas_turbine')
// yeet('gtceu:mv_gas_turbine')
// yeet('gtceu:hv_gas_turbine')
// yeet('gtceu:gas_large_turbine')
// yeet('gtceu:lv_steam_turbine')
// yeet('gtceu:mv_steam_turbine')
// yeet('gtceu:hv_steam_turbine')
// yeet('gtceu:lv_steam_turbine')
// yeet('gtceu:steam_large_turbine')
// yeet('gtceu:plasma_large_turbine')
// yeet('gtceu:turbine_rotor')




ServerEvents.recipes(event => {
  // //Lmao
  // event.remove([{ type: 'gtceu:steam_turbine' },{ type: 'gtceu:gas_turbine' },{ type: 'gtceu:combustion_generator' },{ type: 'gtceu:plasma_generator' }])

  // GTRegistries.MATERIALS.forEach(id => {
  //   event.remove(`gtceu:${id}_turbine_blade`)
  // })







  event.remove({ output: 'gtceu:firebrick' })
  event.recipes.gtceu.masonry_oven('gtceu:firebrick_masonry')
    .itemInputs('gtceu:compressed_fireclay')
    .itemInputs('gtceu:coal_dust')
    .itemOutputs('gtceu:firebrick')
    .itemOutputs('gtceu:ash_dust')
    .notConsumable('gtceu:ingot_casting_mold')
    .duration(100)
    .EUt(8);
  event.recipes.gtceu.masonry_oven('gtceu:andesite_alloy_masonry')
    .itemInputs('minecraft:andesite')
    .itemInputs('gtceu:zinc_dust')
    .itemOutputs('create:andesite_alloy')
    .notConsumable('gtceu:ingot_casting_mold')
    .duration(100)
    .EUt(8);
  event.recipes.gtceu.macerator('gtceu:treated_wood_dust_shred')
    .itemInputs('gtceu:treated_wood_planks')
    .itemOutputs('gtceu:treated_wood_dust')
    .duration(40)
    .EUt(8);
  event.recipes.gtceu.macerator('gtceu:nether_brick_dust_shred')
    .itemInputs('minecraft:nether_bricks')
    .itemOutputs('gtceu:nether_brick_dust_dust')
    .duration(40)
    .EUt(16);
  event.remove({ output: 'gtceu:fireclay_dust' })
  event.shapeless('2x gtceu:fireclay_dust', [
    'gtceu:nether_brick_dust_dust',
    'gtceu:clay_dust'
  ])

  event.recipes.gtceu.bender('kubejs:stainless_steel_fin')
    .itemInputs('6x gtceu:stainless_steel_plate')
    .circuit(4)
    .itemOutputs('kubejs:stainless_steel_fin')
    .duration(100)
    .EUt(480);
  event.recipes.gtceu.assembler('kubejs:stainless_steel_nose_cone')
    .itemInputs('4x gtceu:stainless_steel_plate')
    .itemInputs('gtceu:annealed_copper_rod')
    .itemInputs('gtceu:annealed_copper_nugget')
    .inputFluids('gtceu:polytetrafluoroethylene 288')
    .itemOutputs('kubejs:stainless_steel_nose_cone')
    .duration(100)
    .EUt(480);
  event.recipes.gtceu.assembler('kubejs:stainless_steel_engine')
    .itemInputs('4x gtceu:stainless_steel_plate')
    .itemInputs('gtceu:stainless_steel_rotor')
    .itemInputs('gtceu:stainless_steel_drum')
    .itemInputs('gtceu:hv_electric_motor')
    .inputFluids('gtceu:polytetrafluoroethylene 432')
    .itemOutputs('kubejs:stainless_steel_engine')
    .duration(100)
    .EUt(480);
  event.recipes.gtceu.bender('kubejs:hsse_fin')
    .itemInputs('6x gtceu:hsse_plate')
    .circuit(4)
    .itemOutputs('kubejs:hsse_fin')
    .duration(100)
    .EUt(4046);
  event.recipes.gtceu.assembler('kubejs:hsse_nose_cone')
    .itemInputs('4x gtceu:hsse_plate')
    .itemInputs('gtceu:annealed_copper_rod')
    .itemInputs('gtceu:annealed_copper_nugget')
    .inputFluids('gtceu:polytetrafluoroethylene 288')
    .itemOutputs('kubejs:hsse_nose_cone')
    .duration(100)
    .EUt(4046);
  event.recipes.gtceu.assembler('kubejs:hsse_engine')
    .itemInputs('4x gtceu:hsse_plate')
    .itemInputs('gtceu:stainless_steel_rotor')
    .itemInputs('gtceu:iv_quantum_tank')
    .itemInputs('gtceu:iv_electric_motor')
    .inputFluids('gtceu:polytetrafluoroethylene 432')
    .itemOutputs('kubejs:hsse_engine')
    .duration(100)
    .EUt(4046);
  event.recipes.gtceu.bender('kubejs:osmiridium_fin')
    .itemInputs('6x gtceu:osmiridium_plate')
    .circuit(4)
    .itemOutputs('kubejs:osmiridium_fin')
    .duration(100)
    .EUt(30720);
  event.recipes.gtceu.assembler('kubejs:osmiridium_nose_cone')
    .itemInputs('4x gtceu:osmiridium_plate')
    .itemInputs('gtceu:annealed_copper_rod')
    .itemInputs('gtceu:annealed_copper_nugget')
    .inputFluids('gtceu:styrene_butadiene_rubber 288')
    .itemOutputs('kubejs:osmiridium_nose_cone')
    .duration(100)
    .EUt(30720);
  event.recipes.gtceu.assembly_line('kubejs:osmiridium_engine')
    .itemInputs('4x gtceu:osmiridium_plate')
    .itemInputs('2x gtceu:osmiridium_round')
    .itemInputs('gtceu:stainless_steel_rotor')
    .itemInputs('gtceu:niobium_titanium_small_fluid_pipe')
    .itemInputs('gtceu:luv_quantum_tank')
    .itemInputs('gtceu:luv_electric_motor')
    .itemInputs('4x gtceu:hsss_screw')
    .inputFluids('gtceu:styrene_butadiene_rubber 288')
    .inputFluids('gtceu:soldering_alloy 432')
    .itemOutputs('kubejs:osmiridium_engine')
    .duration(100)
    .EUt(30720);
  event.recipes.gtceu.bender('kubejs:americium_fin')
    .itemInputs('6x gtceu:americium_plate')
    .circuit(4)
    .itemOutputs('kubejs:americium_fin')
    .duration(100)
    .EUt(122800);
  event.recipes.gtceu.assembler('kubejs:americium_nose_cone')
    .itemInputs('4x gtceu:americium_plate')
    .itemInputs('2x gtceu:americium_round')
    .itemInputs('gtceu:annealed_copper_rod')
    .itemInputs('gtceu:annealed_copper_nugget')
    .itemInputs('4x gtceu:osmiridium_screw')
    .inputFluids('gtceu:styrene_butadiene_rubber 288')
    .itemOutputs('kubejs:americium_nose_cone')
    .duration(100)
    .EUt(122800);
  event.recipes.gtceu.assembly_line('kubejs:americium_engine')
    .itemInputs('4x gtceu:americium_plate')
    .itemInputs('gtceu:stainless_steel_rotor')
    .itemInputs('gtceu:vanadium_gallium_single_cable')
    .itemInputs('gtceu:zpm_quantum_tank')
    .itemInputs('gtceu:zpm_electric_motor')
    .itemInputs('4x gtceu:osmiridium_screw')
    .itemInputs('4x gtceu:osmiridium_round')
    .inputFluids('gtceu:styrene_butadiene_rubber 288')
    .inputFluids('gtceu:soldering_alloy 432')
    .itemOutputs('kubejs:americium_engine')
    .duration(100)
    .EUt(122800);
  event.recipes.gtceu.assembler('ad_astra:launch_pad')
    .itemInputs('4x gtceu:stainless_steel_plate')
    .itemInputs('4x gtceu:steel_plate')
    .itemOutputs('ad_astra:launch_pad')
    .duration(100)
    .EUt(480);
  //ManaSteel Stuff
  event.remove({ id: 'gtceu:wiremill/mill_mana_steel_wire' })
  event.remove({ id: 'gtceu:extruder/extrude_mana_steel_wire' })
  event.recipes.gtceu.wiremill('gtceu:manasteel_wire_recipe')
    .itemInputs('botania:manasteel_ingot')
    .itemOutputs('2x gtceu:mana_steel_single_wire')
    .duration(26)
    .EUt(GTValues.VA[GTValues.LV]);

  event.recipes.gtceu.wiremill('gtceu:manasteel_fine_wire_recipe')
    .itemInputs('gtceu:mana_steel_single_wire')
    .itemOutputs('4x gtceu:mana_steel_fine_wire')
    .duration(26)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.bender('gtceu:manasteel_plate')
    .itemInputs('botania:manasteel_ingot')
    .itemOutputs('gtceu:mana_steel_plate')
    .duration(26)
    .circuit(1)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.bender('gtceu:manasteel_plate_to_foil')
    .itemInputs('gtceu:mana_steel_plate')
    .itemOutputs('4x gtceu:mana_steel_foil')
    .duration(26)
    .circuit(1)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.bender('gtceu:manasteel_ingot_to_foil')
    .itemInputs('botania:manasteel_ingot')
    .itemOutputs('4x gtceu:mana_steel_foil')
    .duration(26)
    .circuit(10)
    .EUt(GTValues.VA[GTValues.LV]);
  let manawires = ['gtceu:mana_steel_single_cable', 'gtceu:mana_steel_double_cable', 'gtceu:mana_steel_quadruple_cable', 'gtceu:mana_steel_octal_cable', 'gtceu:mana_steel_hex_cable']
  event.remove({ output: manawires })
  event.recipes.gtceu.spooling_machine('gtceu:mana_steel_single_cable_wrapping')
    .itemInputs(['gtceu:mana_steel_single_wire', '2x ars_nouveau:magebloom_fiber'])
    .itemOutputs('gtceu:mana_steel_single_cable')
    .duration(60)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.spooling_machine('gtceu:mana_steel_double_cable_wrapping')
    .itemInputs(['gtceu:mana_steel_double_wire', '4x ars_nouveau:magebloom_fiber'])
    .itemOutputs('gtceu:mana_steel_double_cable')
    .duration(60)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.spooling_machine('gtceu:mana_steel_quad_cable_wrapping')
    .itemInputs(['gtceu:mana_steel_quadruple_wire', '8x ars_nouveau:magebloom_fiber'])
    .itemOutputs('gtceu:mana_steel_quadruple_cable')
    .duration(60)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.spooling_machine('gtceu:mana_steel_octal_cable_wrapping')
    .itemInputs(['gtceu:mana_steel_octal_wire', '16x ars_nouveau:magebloom_fiber'])
    .itemOutputs('gtceu:mana_steel_octal_cable')
    .duration(60)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.spooling_machine('gtceu:mana_steel_hex_cable_wrapping')
    .itemInputs(['gtceu:mana_steel_hex_wire', '32x ars_nouveau:magebloom_fiber'])
    .itemOutputs('gtceu:mana_steel_hex_cable')
    .duration(60)
    .EUt(GTValues.VA[GTValues.LV]);

  //LV EMITTER
  event.remove({ output: 'gtceu:lv_emitter' })
  event.recipes.gtceu.assembler('gtceu:lv_emitter_recipe')
    .itemInputs(['2x gtceu:mana_steel_single_cable', '4x gtceu:mana_steel_rod', 'gtceu:quartzite_gem', '2x #forge:circuits/lv'])
    .itemOutputs('gtceu:lv_emitter')
    .duration(40)
    .EUt(GTValues.VA[GTValues.LV]);
  //HULLS
  //MV MACHINE HULL AND CASING
  event.remove({ output: 'gtceu:mv_machine_casing' })
  event.recipes.gtceu.assembler('gtceu:mv_machine_casing_assembler')
    .itemInputs(['4x gtceu:aluminium_double_plate', '4x gtceu:mana_steel_plate'])
    .itemOutputs('gtceu:mv_machine_casing')
    .duration(40)
    .EUt(GTValues.VA[GTValues.LV]);
  event.shaped('gtceu:mv_machine_casing', [
    'AMA',
    'MWM',
    'AMA'
  ], {
    A: 'gtceu:aluminium_double_plate',
    M: 'gtceu:mana_steel_plate',
    W: '#forge:tools/wrenches'
  }
  )
  //Crafting Recipes
  //Wrought Iron Base Molds 'gtceu:mv_machine_casing'
  event.remove({ output: 'gtceu:empty_mold' })
  event.shaped('gtceu:empty_mold', [
    'HF ',
    'WW ',
    'WW '
  ], {
    W: 'gtceu:wrought_iron_plate',
    H: '#forge:tools/files',
    F: '#forge:tools/hammers'
  }
  )
  //Masonry Oven
  event.shaped('gtceu:lp_steam_masonry_oven', [
    'BBB',
    'PFP',
    'SSS'
  ], {
    B: 'gtceu:bronze_plate',
    P: 'gtceu:bronze_small_fluid_pipe',
    F: 'minecraft:furnace',
    S: 'minecraft:smooth_stone',
  })
  //HP Masonry Oven
  event.shaped('gtceu:hp_steam_masonry_oven', [
    'WWW',
    'PBP',
    'SSS'
  ], {
    W: 'gtceu:wrought_iron_plate',
    P: 'gtceu:steel_small_fluid_pipe',
    B: 'minecraft:blast_furnace',
    S: 'minecraft:smooth_stone',
  })
  //LV Circuit assembler
  event.remove({ output: 'gtceu:lv_circuit_assembler' })
  event.shaped('gtceu:lv_circuit_assembler', [
    'RCE',
    'OHO',
    'WCW'
  ], {
    W: 'gtceu:mana_steel_double_cable',
    R: 'gtceu:lv_robot_arm',
    H: 'gtceu:lv_machine_hull',
    C: '#forge:circuits/mv',
    E: 'gtceu:lv_emitter',
    O: 'gtceu:lv_conveyor_module',
  })
  //Custom Recipe Handler? - Reference - Otherwise just dump the recipe in questions JSON into event.custom()
  let drying = (dryingoutput, dryingInput, duration) => {
    event.custom({
      "type": "integrateddynamics:drying_basin",
      "item": dryingInput,
      "duration": duration,
      "result": { item: dryingoutput }
    })
  }
  drying('create:shaft', 'create:cogwheel', 40)
})
ServerEvents.tags('item', event => {
  //Exclude Hammers
  GTRegistries.MATERIALS.forEach(id => {
    event.add('ftbultimine:excluded_tools', [`gtceu:${id}_mining_hammer`])
  })
  GTRegistries.MATERIALS.forEach(id => {
    event.add('forge:viewers/hidden_from_recipe', [`gtceu:${id}_turbine_blade`])
  })
})

ServerEvents.tags('block', event => {
  GTRegistries.MATERIALS.forEach(id => {
    event.add('ftbultimine:excluded_blocks', [`gtceu:andesite_${id}_ore`, `gtceu:diorite_${id}_ore`, `gtceu:deepslate_${id}_ore`, `gtceu:${id}_ore`, `gtceu:granite_${id}_ore`, `gtceu:netherrack_${id}_ore`, `gtceu:endstone_${id}_ore`])
  })
  event.add('ftbultimine:excluded_blocks', 'minecraft:powder_snow')

  event.remove('aether:aether_portal_blocks', 'minecraft:glowstone'),
    event.add('aether:aether_portal_blocks', 'gtceu:frostproof_machine_casing')
})

ServerEvents.recipes(e => {
  // for this code to work, kubejs:incomplete_spore_blossom needs to be added to the game
  let inter = 'gtceu:lv_machine_hull' // making a variable to store the transitional item makes the code more readable
  e.recipes.create.sequenced_assembly([
    Item.of('gtceu:lv_energy_output_hatch'), // this is the item that will appear in JEI as the result
  ], 'gtceu:lv_machine_hull', [ // 'flowering_azalea_leaves' is the input
    // the transitional item is a variable, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly
    e.recipes.createDeploying(inter, [inter, 'gtceu:steel_spring']),
    e.recipes.createDeploying(inter, [inter, 'gtceu:tin_spring']),
    e.recipes.createDeploying(inter, [inter, 'gtceu:tin_spring']),
    e.recipes.createDeploying(inter, [inter, 'gtceu:rubber_plate']),
  ]).transitionalItem(inter).loops(2) // set the transitional item and the number of loops
})


