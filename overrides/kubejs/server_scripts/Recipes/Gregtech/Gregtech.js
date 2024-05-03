//A Simple "REMOVE AND HIDE" function akin to GroovyScript's Jei.yeet() function - This will tag the item for hiding from recipe viewers and remove the recipe
let yeet = (itemName) => {
  ServerEvents.recipes(event => {
    event.remove({ output: itemName })
  })
  ServerEvents.tags('item', event => {
    event.add('forge:viewers/hidden_from_recipe', itemName)
    event.add('c:hidden_from_recipe_viewers', itemName)

  })
}

ServerEvents.tags('item', event => {
  event.add('forge:lenses/ruby', 'gtceu:redstone_lens')
  event.add('forge:lenses/red', 'gtceu:redstone_lens')

})

yeet('gtceu:tiny_psi_superconductor_alpha_dust')
yeet('gtceu:small_psi_superconductor_alpha_dust')
yeet('gtceu:psi_superconductor_alpha_dust')
yeet('gtceu:tiny_psi_superconductor_beta_dust')
yeet('gtceu:small_psi_superconductor_beta_dust')
yeet('gtceu:psi_superconductor_beta_dust')
yeet('gtceu:tiny_neodymium_praseodymium_dust')
yeet('gtceu:small_neodymium_praseodymium_dust')
yeet('gtceu:neodymium_praseodymium_dust')
yeet('gtceu:tiny_magnetic_neodymium_praseodymium_dust')
yeet('gtceu:small_magnetic_neodymium_praseodymium_dust')
yeet('gtceu:magnetic_neodymium_praseodymium_dust')

ServerEvents.recipes(event => {
  // //Lmao
  // event.remove([{ type: 'gtceu:steam_turbine' },{ type: 'gtceu:gas_turbine' },{ type: 'gtceu:combustion_generator' },{ type: 'gtceu:plasma_generator' }])

  // GTRegistries.MATERIALS.forEach(id => {
  //   event.remove(`gtceu:${id}_turbine_blade`)
  // })


  event.remove({ output: 'gtceu:psi_superconductor_alpha_single_wire', type: 'gtceu:wiremill', type: 'gtceu:extruder' },)
  event.remove({ output: 'gtceu:psi_superconductor_alpha_double_wire', type: 'gtceu:wiremill' })
  event.remove({ output: 'gtceu:psi_superconductor_alpha_quadruple_wire', type: 'gtceu:wiremill' })
  event.remove({ output: 'gtceu:psi_superconductor_alpha_octal_wire', type: 'gtceu:wiremill' })
  event.remove({ output: 'gtceu:psi_superconductor_alpha_hex_wire', type: 'gtceu:wiremill' })
  event.remove({ output: 'gtceu:psi_superconductor_beta_single_wire', type: 'gtceu:wiremill', type: 'gtceu:extruder' },)
  event.remove({ output: 'gtceu:psi_superconductor_beta_double_wire', type: 'gtceu:wiremill' })
  event.remove({ output: 'gtceu:psi_superconductor_beta_quadruple_wire', type: 'gtceu:wiremill' })
  event.remove({ output: 'gtceu:psi_superconductor_beta_octal_wire', type: 'gtceu:wiremill' })
  event.remove({ output: 'gtceu:psi_superconductor_beta_hex_wire', type: 'gtceu:wiremill' })




  event.remove({ id: 'gtceu:centrifuge/uranium_hexafluoride_separation' })
  event.remove({ output: 'gtceu:firebrick' })
  event.recipes.gtceu.alloy_smelter('firebrick_masonry')
    .itemInputs('gtceu:compressed_fireclay')
    .itemInputs('gtceu:coal_dust')
    .itemOutputs('gtceu:firebrick')
    .duration(100)
    .EUt(8);
  event.recipes.gtceu.alloy_smelter('andesite_alloy_masonry')
    .itemInputs('minecraft:andesite')
    .itemInputs('gtceu:wrought_iron_dust')
    .itemOutputs('create:andesite_alloy')
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

  event.recipes.gtceu.forming_press('gtceu:forming_press/waxed_leather')
    .itemInputs('minecraft:leather')
    .itemInputs('2x minecraft:honeycomb')
    .itemOutputs('cosmiccore:waxed_leather')
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV])
  //ManaSteel Stuff
  event.recipes.gtceu.wiremill('gtceu:manasteel_wire_recipe')
    .itemInputs('botania:manasteel_ingot')
    .itemOutputs('2x gtceu:mana_steel_single_wire')
    .duration(26)
    .EUt(GTValues.VA[GTValues.LV]);

  event.recipes.gtceu.wiremill('gtceu:manasteel_fine_wire_recipe')
    .itemInputs('gtceu:mana_steel_single_wire')
    .itemOutputs('4x gtceu:fine_mana_steel_wire')
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

  //Redstone Lense and removal of Ruby Lense
  event.remove({ output: 'gtceu:ruby_lens' })
  event.recipes.gtceu.lathe('gtceu:zanite_lens_creation')
    .itemInputs('gtceu:zanite_plate')
    .itemOutputs('gtceu:zanite_lens')
    .duration(1200)
    .EUt(GTValues.VA[GTValues.MV]);
  event.recipes.gtceu.lathe('gtceu:zanite_lens_creation_exq')
    .itemInputs('gtceu:exquisite_zanite_gem')
    .itemOutputs('gtceu:zanite_lens')
    .duration(2400)
    .EUt(GTValues.VA[GTValues.LV]);
  event.remove({ output: 'gtceu:ilc_wafer' })
  event.recipes.gtceu.laser_engraver('gtceu:ilc_1x')
    .itemInputs('gtceu:silicon_wafer')
    .notConsumable('gtceu:zanite_lens')
    .itemOutputs('gtceu:ilc_wafer')
    .duration(900)
    .EUt(GTValues.VA[GTValues.MV]);
  event.recipes.gtceu.laser_engraver('gtceu:ilc_4x')
    .itemInputs('gtceu:phosphorus_wafer')
    .notConsumable('gtceu:zanite_lens')
    .itemOutputs('4x gtceu:ilc_wafer')
    .duration(500)
    .EUt(GTValues.VA[GTValues.HV]);
  event.recipes.gtceu.laser_engraver('gtceu:ilc_8x')
    .itemInputs('gtceu:naquadah_wafer')
    .notConsumable('gtceu:zanite_lens')
    .itemOutputs('8x gtceu:ilc_wafer')
    .duration(200)
    .EUt(GTValues.VA[GTValues.EV]);
  event.recipes.gtceu.laser_engraver('gtceu:ilc_16x')
    .itemInputs('gtceu:neutronium_wafer')
    .notConsumable('gtceu:zanite_lens')
    .itemOutputs('16x gtceu:ilc_wafer')
    .duration(50)
    .EUt(GTValues.VA[GTValues.IV]);


  event.recipes.gtceu.assembler('ethersteel_smd_diode')
    .itemInputs(['gtceu:gallium_arsenide_dust', '16x gtceu:fine_galvanized_ethersteel_wire'])
    .itemOutputs('16x gtceu:smd_diode')
    .inputFluids('gtceu:polyethylene 576')
    .duration(400)
    .EUt(GTValues.VA[GTValues.HV]);
  event.recipes.gtceu.alloy_smelter('neo_prase')
    .itemInputs(['4x gtceu:praseodymium_rod', '3x gtceu:neodymium_ingot'])
    .itemOutputs('4x gtceu:neodymium_praseodymium_rod')
    .duration(200)
    .EUt(GTValues.VA[GTValues.HV]);

  event.recipes.gtceu.assembler('alpha_supercon')
    .itemInputs(['16x gtceu:virtue_meld_foil', '4x gtceu:titanium_tiny_fluid_pipe', '4x gtceu:uranium_triplatinum_double_wire', 'gtceu:hv_electric_pump'])
    .itemOutputs('16x gtceu:psi_superconductor_alpha_single_wire')
    .inputFluids('gtceu:liquid_helium 1000')
    .duration(400)
    .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.assembler('beta_supercon')
    .itemInputs(['16x gtceu:virtue_meld_foil', '4x gtceu:tungsten_steel_tiny_fluid_pipe', '4x gtceu:samarium_iron_arsenic_oxide_double_wire', 'gtceu:ev_electric_pump'])
    .itemOutputs('16x gtceu:psi_superconductor_beta_single_wire')
    .inputFluids('gtceu:liquid_helium 1000')
    .duration(400)
    .EUt(GTValues.VA[GTValues.IV]);
 //IV MOTOR
 event.remove({ output: 'gtceu:iv_electric_motor' })
 event.recipes.gtceu.assembler('gtceu:iv_electric_motor')
   .itemInputs(['2x gtceu:tungsten_steel_rod', '2x gtceu:tungsten_double_cable', '4x gtceu:virtue_meld_double_wire', 'gtceu:magnetic_neodymium_praseodymium_rod'])
   .itemOutputs('gtceu:iv_electric_motor')
   .duration(100)
   .EUt(GTValues.VA[GTValues.LV]);
 event.shaped('gtceu:iv_electric_motor', [
   'CWR',
   'WMW',
   'RWC'
 ], {
   C: 'gtceu:tungsten_double_cable',
   W: 'gtceu:virtue_meld_double_wire',
   M: 'gtceu:magnetic_neodymium_praseodymium_rod',
   R: 'gtceu:tungsten_steel_rod'
 }
 )
 //IV Grade Magnetic Rod
 event.recipes.gtceu.polarizer('gtceu:magnetic_neodymium_praseodymium_rod')
 .itemInputs('gtceu:neodymium_praseodymium_rod')
 .itemOutputs('gtceu:magnetic_neodymium_praseodymium_rod')
 .duration(72)
 .EUt(GTValues.VA[GTValues.EV]);
  //LV EMITTER
  event.remove({ output: 'gtceu:lv_emitter' })
  event.recipes.gtceu.assembler('gtceu:lv_emitter_recipe')
    .itemInputs(['2x gtceu:mana_steel_single_cable', '4x gtceu:mana_steel_rod', 'gtceu:quartzite_gem', '2x #gtceu:circuits/lv'])
    .itemOutputs('gtceu:lv_emitter')
    .duration(40)
    .EUt(GTValues.VA[GTValues.LV]);
  //HULLS
  //MV MACHINE HULL AND CASING
  event.remove({ output: 'gtceu:mv_machine_casing' })
  event.recipes.gtceu.assembler('gtceu:mv_machine_casing_assembler')
    .itemInputs(['4x gtceu:double_aluminium_plate', '4x gtceu:mana_steel_plate'])
    .itemOutputs('gtceu:mv_machine_casing')
    .duration(40)
    .EUt(GTValues.VA[GTValues.LV]);
  event.shaped('gtceu:mv_machine_casing', [
    'AMA',
    'MWM',
    'AMA'
  ], {
    A: 'gtceu:double_aluminium_plate',
    M: 'gtceu:mana_steel_plate',
    W: '#forge:tools/wrenches'
  }
  )
  //HV HULLS AND CASINGS
  //MV MACHINE HULL AND CASING
  event.remove({ output: 'gtceu:hv_machine_casing' })
  event.recipes.gtceu.assembler('gtceu:hv_machine_casing_assembler')
    .itemInputs(['4x gtceu:double_stainless_steel_plate', '4x gtceu:galvanized_ethersteel_plate'])
    .itemOutputs('gtceu:hv_machine_casing')
    .duration(40)
    .EUt(GTValues.VA[GTValues.LV]);
  event.shaped('gtceu:hv_machine_casing', [
    'AMA',
    'MWM',
    'AMA'
  ], {
    A: 'gtceu:double_stainless_steel_plate',
    M: 'gtceu:galvanized_ethersteel_plate',
    W: '#forge:tools/wrenches'
  }
  )
  //EV MACHINE HULL AND CASING
  event.remove({ output: 'gtceu:ev_machine_casing' })
  event.recipes.gtceu.assembler('gtceu:ev_machine_casing_assembler')
    .itemInputs(['4x gtceu:double_titanium_plate', '4x gtceu:luminescent_utherium_plate'])
    .itemOutputs('gtceu:ev_machine_casing')
    .duration(40)
    .EUt(GTValues.VA[GTValues.LV]);
  event.shaped('gtceu:ev_machine_casing', [
    'AMA',
    'MWM',
    'AMA'
  ], {
    A: 'gtceu:double_titanium_plate',
    M: 'gtceu:luminescent_utherium_plate',
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
    C: '#gtceu:circuits/mv',
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

ServerEvents.tags('block', event => {
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

ServerEvents.recipes(event => {
  event.recipes.gtceu.macerator('gtceu:obsidian_dust')
    .itemInputs('minecraft:obsidian')
    .itemOutputs('gtceu:obsidian_dust')
    .duration(600)
    .EUt(GTValues.VA[GTValues.LV]);


  event.remove({ id: 'gtceu:mixer/rose_gold' })
  event.recipes.gtceu.mixer('gtceu:mixer/rose_gold')
    .itemInputs(['gtceu:copper_dust', '4x gtceu:gold_dust'])
    .circuit(3)
    .itemOutputs('5x gtceu:rose_gold_dust')
    .duration(500)
    .EUt(GTValues.VA[GTValues.LV]);


  event.remove({ id: 'gtceu:smelting/dust_blue_alloy__demagnetize_from_dust' })
  event.remove({ id: 'gtceu:alloy_smelter/silver_ingot_and_electrotine_dust_into_blue_alloy' })
  event.remove({ id: 'gtceu:alloy_smelter/silver_dust_and_electrotine_dust_into_blue_alloy' })
  event.remove({ id: 'gtceu:extractor/extract_blue_alloy_dust' })
  event.remove({ id: 'gtceu:arc_furnace/arc_blue_alloy_dust' })
  event.recipes.gtceu.electric_blast_furnace('gtceu:electric_blast_furnace/blue_alloy_nitrogen')
    .itemInputs('gtceu:blue_alloy_dust')
    .inputFluids('gtceu:nitrogen 1000')
    .itemOutputs('gtceu:blue_alloy_ingot')
    .circuit(2)
    .blastFurnaceTemp(1200)
    .duration(442)
    .EUt(GTValues.VA[GTValues.MV]);


  event.recipes.gtceu.electric_blast_furnace('gtceu:electric_blast_furnace/blue_alloy')
    .itemInputs('gtceu:blue_alloy_dust')
    .itemOutputs('gtceu:blue_alloy_ingot')
    .circuit(1)
    .blastFurnaceTemp(1200)
    .duration(660)
    .EUt(GTValues.VA[GTValues.MV]);



})

//Netherite Line
ServerEvents.recipes(event => {
  event.remove({ output: 'minecraft:netherite_scrap' })
  event.recipes.gtceu.macerator('gtceu:macerator/macerate_ancient_debris')
    .itemInputs('minecraft:ancient_debris')
    .itemOutputs('gtceu:ancient_debris_dust')
    .duration(400)
    .EUt(GTValues.VA[GTValues.ULV]);


  event.recipes.gtceu.large_chemical_reactor('stupid_test_shiz')
    .itemInputs('minecraft:dirt')
    .itemOutputs('minecraft:diamond')
    .duration(200)
    .EUt(GTValues.VA[GTValues.OpV]);

  event.recipes.gtceu.chemical_bath('gtceu:chemical_bath/purify_ancient_debris')
    .itemInputs('gtceu:ancient_debris_dust')
    .inputFluids('gtceu:nether_sediment_sludge 250')
    .itemOutputs('gtceu:netherite_scrap_dust')
    .chance(0.1)
    .itemOutputs('gtceu:netherite_scrap_dust')
    .chance(0.6)
    .itemOutputs('gtceu:gold_dust')
    .duration(200)
    .EUt(GTValues.VA[GTValues.LV]);


  event.recipes.gtceu.mixer('gtceu:mixer/netherite_alloy')
    .itemInputs('2x gtceu:netherite_scrap_dust')
    .itemInputs('2x gtceu:rose_gold_dust')
    .itemOutputs('gtceu:netherite_alloy_dust')
    .duration(500)
    .EUt(GTValues.VA[GTValues.LV]);


  event.remove({ id: 'minecraft:netherite_ingot' })
  event.recipes.gtceu.electric_blast_furnace('gtceu:electric_blast_furnace/netherite_from_netherite_alloy')
    .itemInputs('gtceu:netherite_alloy_dust')
    .inputFluids('gtceu:nitrogen 1000')
    .itemOutputs('minecraft:netherite_ingot')
    .blastFurnaceTemp(1200)
    .duration(600)
    .EUt(GTValues.VA[GTValues.MV]);
  let machineTier = [
    'lv',
    'mv',
    'hv',
    'ev',
    'iv',
    'luv',
    'zpm',
    'uv'
  ]
  let tierQuadWire = [
    'copper',
    'cupronickel',
    'kanthal',
    'nichrome',
    'tungsten_steel',
    'hssg',
    'naquadah',
    'naquadah_alloy'
  ]
  let tierCable = [
    'tin',
    'copper',
    'gold',
    'aluminium',
    'platinum',
    'niobium_titanium',
    'vanadium_gallium',
    'yttrium_barium_cuprate'
  ]
  let coilTier = [
    'cupronickel',
    'kanthal',
    'nichrome',
    'tungstensteel',
    'hssg',
    'naquadah',
    'trinium',
    'tritanium'
  ]
  machineTier.forEach((tier, index) => {
    let cableMaterial = tierQuadWire[index]
    let cableType = tierCable[index]
    let coilType = coilTier[index]
    event.shaped(`gtceu:${tier}_flora_nurturer`, [
      'CAC',
      'BHB',
      'ZBZ'
    ], {
      A: 'minecraft:redstone_lamp',
      B: `gtceu:${tier}_conveyor_module`,
      C: `#gtceu:circuits/${tier}`,
      H: `gtceu:${tier}_machine_hull`,
      Z: `gtceu:${cableType}_single_cable`
    }
    )
    event.shaped(`gtceu:${tier}_nether_catalyzer`, [
      'CAC',
      'PHP',
      'ZBZ'
    ], {
      A: `gtceu:${coilType}_coil_block`,
      B: `gtceu:${tier}_conveyor_module`,
      P: `gtceu:${tier}_electric_piston`,
      C: `#gtceu:circuits/${tier}`,
      H: `gtceu:${tier}_machine_hull`,
      Z: `gtceu:${cableType}_single_cable`
    }
    )
    event.shaped(`gtceu:${tier}_spooling_machine`, [
      'CAC',
      'RHP',
      'ZAZ'
    ], {
      A: `gtceu:steel_rod`,
      P: `gtceu:${tier}_electric_motor`,
      R: `gtceu:${tier}_robot_arm`,
      C: `#gtceu:circuits/${tier}`,
      H: `gtceu:${tier}_machine_hull`,
      Z: `gtceu:${cableType}_single_cable`
    }
    )
    event.shaped(`gtceu:${tier}_mana_fluidizer`, [
      'CPC',
      'AHA',
      'ZBZ'
    ], {
      A: `gtceu:mana_steel_plate`,
      P: `gtceu:${tier}_electric_piston`,
      B: `gtceu:${tier}_electric_pump`,
      C: `#gtceu:circuits/${tier}`,
      H: `gtceu:${tier}_machine_hull`,
      Z: `gtceu:${cableType}_single_cable`
    }
    )
    event.shaped(`gtceu:${tier}_laminator`, [
      'CAC',
      'BHB',
      'ZPZ'
    ], {
      A: `gtceu:${coilType}_spring`,
      B: `gtceu:${tier}_conveyor_module`,
      C: `#gtceu:circuits/${tier}`,
      H: `gtceu:${tier}_machine_hull`,
      Z: `gtceu:${cableType}_single_cable`,
      P: `gtceu:${tier}_electric_pump`
    }
    )
    event.shaped(`gtceu:${tier}_chemical_dehydrator`, [
      'CAC',
      'BHB',
      'ZPZ'
    ], {
      A: `gtceu:${cableMaterial}_spring`,
      B: `gtceu:${tier}_electric_motor`,
      C: `#gtceu:circuits/${tier}`,
      H: `gtceu:${tier}_machine_hull`,
      Z: `gtceu:${cableType}_single_cable`,
      P: `gtceu:${tier}_electric_pump`
    }
    )
  })
  event.remove({ output: 'gtceu:alloy_blast_smelter' })
  event.shaped('gtceu:alloy_blast_smelter', [
    'PCP',
    'WFW',
    'PCP'
  ], {
    P: 'gtceu:tantalum_carbide_plate',
    C: '#gtceu:circuits/luv',
    W: 'gtceu:uranium_triplatinum_quadruple_wire',
    F: 'gtceu:ev_alloy_smelter'
  })
})

