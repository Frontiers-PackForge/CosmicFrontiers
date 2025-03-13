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
  event.add('c:hidden_from_recipe_viewers', 'gtceu:lp_steam_bender')
  event.add('c:hidden_from_recipe_viewers', 'gtceu:lp_steam_wiremill')
  event.remove('minecraft:planks', 'gtceu:treated_wood_planks')
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
yeet('botania:endoflame')
yeet(/gtceu:(.*)butchery_knife$/)

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
  // event.remove({ type: 'gtceu:fusion_reactor' })
  event.remove({ type: 'gtceu:plasma_turbine' })
  event.remove({ id: 'gtceu:smelting/smelt_dust_blue_alloy_to_ingot' })
  event.remove({ id: 'gtceu:centrifuge/deuterium_separation' })
  event.remove({ id: 'gtceu:centrifuge/uranium_hexafluoride_separation' })
  event.remove({ id: 'ae2:network/cables/smart_fluix' })
  event.remove({ output: 'gtceu:firebrick' })
  event.remove({ output: 'gtceu:flint_knife' })
  event.remove({ id: 'emi:crafting/repairing/gtceu/flint_knife' })
  event.remove({ id: 'gtceu:centrifuge/rare_earth_separation' })

  event.replaceInput(
    { output: 'gtceu:hp_steam_solar_boiler' },
    'gtceu:steel_brick_casing',
    'gtceu:lp_steam_solar_boiler'
  )
  event.replaceInput(
    { output: 'gtceu:hp_steam_solid_boiler' },
    'minecraft:furnace',
    'gtceu:lp_steam_solid_boiler'
  )
  event.replaceInput(
    { output: 'gtceu:hp_steam_liquid_boiler' },
    'gtceu:steel_brick_casing',
    'gtceu:lp_steam_liquid_boiler'
  )
  event.replaceInput({ output: 'gtceu:palladium_substation' },
    'gtceu:iridium_frame',
    'gtceu:luminescent_utherium_frame'
  )
  event.replaceInput({ output: 'gtceu:sturdy_machine_casing' },
    'gtceu:europium_frame',
    'gtceu:hssg_frame'
  )
  event.replaceInput({ output: 'gtceu:heat_vent' },
    'gtceu:tantalum_carbide_plate',
    'gtceu:titanium_carbide_plate'
  )

  event.replaceInput({ output: 'gtceu:heat_vent' },
    'gtceu:tantalum_carbide_plate',
    'gtceu:titanium_carbide_plate'
  )

  event.replaceInput({ output: 'gtceu:iv_extruder' },
    'gtceu:rtm_alloy_quadruple_wire',
    'cosmiccore:prismatic_tungstensteel_quadruple_wire'
  )

  event.recipes.gtceu.spooling_machine('frontiers_ethersteel_lattice')
    .itemInputs(['gtceu:carbon_fiber_mesh', '8x gtceu:fine_galvanized_ethersteel_wire'])
    .inputFluids('gtceu:polytetrafluoroethylene 144')
    .itemOutputs('kubejs:carbon_ethersteel_lattice')
    .duration(220)
    .EUt(GTValues.VA[GTValues.HV]);
  event.recipes.gtceu.spooling_machine('sylvan_nano_lattice')
    .itemInputs(['gtceu:graphene_foil', 'botania:pixie_dust'])
    .inputFluids('cosmiccore:prisma 250')
    .itemOutputs('kubejs:resplendent_sylvan_nanolattice')
    .duration(220)
    .EUt(GTValues.VA[GTValues.EV]);
  event.recipes.gtceu.alloy_smelter('firebrick_masonry')
    .itemInputs('gtceu:compressed_fireclay')
    .itemInputs('gtceu:coal_dust')
    .itemOutputs('gtceu:firebrick')
    .duration(10)
    .EUt(8);
  event.recipes.gtceu.electrolyzer('trifluoride_elec')
    .itemInputs('4x gtceu:antimony_trifluoride_dust')
    .itemOutputs('gtceu:antimony_dust')
    .outputFluids('gtceu:fluorine 3000')
    .duration(40)
    .EUt(GTValues.VA[GTValues.HV]);
  event.recipes.gtceu.electrolyzer('mn_hydroxide_elec')
    .itemInputs('5x gtceu:manganese_hydroxide_dust')
    .itemOutputs('gtceu:manganese_dust')
    .outputFluids('gtceu:oxygen 2000')
    .outputFluids('gtceu:hydrogen 2000')
    .duration(80)
    .EUt(GTValues.VA[GTValues.HV]);
  event.recipes.gtceu.chemical_reactor('iron_hydroxide_reproc')
    .itemInputs('5x gtceu:iron_hydroxide_dust')
    .inputFluids('gtceu:hydrogen 2000')
    .itemOutputs('gtceu:iron_dust')
    .outputFluids('minecraft:water 2000')
    .duration(200)
    .EUt(GTValues.VA[GTValues.HV]);
  event.recipes.gtceu.alloy_smelter('andesite_alloy_masonry')
    .itemInputs('minecraft:andesite')
    .itemInputs('gtceu:wrought_iron_dust')
    .itemOutputs('create:andesite_alloy')
    .duration(100)
    .EUt(8);
  event.remove('gtceu:macerator/macerate_nether_bricks')
  event.recipes.gtceu.macerator('gtceu:nether_brick_dust_shred')
    .itemInputs('minecraft:nether_bricks')
    .itemOutputs('gtceu:nether_brick_dust_dust')
    .duration(40)
    .EUt(16);
  event.recipes.gtceu.macerator('frontiers:moonstone_dust_shred')
    .itemInputs('ad_astra:moon_stone')
    .itemOutputs('gtceu:moon_stone_dust')
    .duration(40)
    .EUt(2);
  event.recipes.gtceu.macerator('frontiers:moonstone_dust_shred_cobble')
    .itemInputs('ad_astra:moon_cobblestone')
    .itemOutputs('gtceu:moon_stone_dust')
    .duration(40)
    .EUt(2);
  event.recipes.gtceu.centrifuge('frontiers:moonstone_dust_centrifuge_resources')
    .itemInputs('gtceu:moon_stone_dust')
    .itemOutputs('gtceu:silicon_dioxide_dust')
    .chancedOutput('gtceu:bauxite_dust', 3500, 0)
    .chancedOutput('croptopia:cheese', 1500, 0)
    .outputFluids('gtceu:helium 120')
    .duration(160)
    .EUt(GTValues.VA[GTValues.MV] * 0.75);
  event.remove({ id: 'gtceu:compressor/compressed_fireclay' })
  event.recipes.gtceu.compressor('compressed_fireclay')
    .itemInputs('cosmiccore:fireclay_ball')
    .itemOutputs('gtceu:compressed_fireclay')
    .duration(100)
    .EUt(12)
  event.remove({ id: 'gtceu:mixer/concrete_from_marble' })
  event.remove({ id: 'gtceu:mixer/concrete_from_clay' })
  event.remove({ id: 'gtceu:create_mixer/concrete_from_clay' })
  event.remove({ id: 'gtceu:create_mixer/concrete_from_marble' })
  event.remove({ id: 'gtceu:shaped/casing_primitive_bricks' })
  event.recipes.gtceu.fluid_solidifier('firebricks')
    .itemInputs('6x gtceu:firebrick')
    .inputFluids('gtceu:concrete 500')
    .itemOutputs('gtceu:firebricks')
    .duration(60)
    .EUt(12)
  event.remove({ output: 'gtceu:fireclay_dust' })
  event.recipes.gtceu.forming_press('waxed_leather_forming')
    .itemInputs('minecraft:leather')
    .itemInputs('2x minecraft:honeycomb')
    .itemOutputs('cosmiccore:waxed_leather')
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV])
  event.recipes.gtceu.mixer('fireclay_dust_mixing')
    .itemInputs(['2x #forge:dusts/ash', 'gtceu:brick_dust', 'gtceu:clay_dust'])
    .inputFluids('minecraft:water 500')
    .itemOutputs('4x cosmiccore:fireclay_ball')
    .duration(200)
    .EUt(2)
  event.shaped('gtceu:industrial_primitive_blast_furnace', [
    'WSH',
    'SCS',
    'FSF'
  ], {
    C: 'gtceu:primitive_blast_furnace',
    F: 'gtceu:firebricks',
    S: 'gtceu:steel_plate',
    H: '#forge:tools/hammers',
    W: '#forge:tools/wrenches'
  })
  event.remove({ id: 'clickmachine:auto_clicker' })
  event.shaped('clickmachine:auto_clicker', [
    'PRP',
    'PCP',
    'PWP'
  ], {
    P: 'gtceu:double_wrought_iron_plate',
    R: 'ulvcovm:ulv_robot_arm',
    C: 'gtceu:ulv_machine_hull',
    W: '#gtceu:circuits/ulv',
  })
  event.shaped('gtceu:treated_wood_plate', [
    ' S ',
    ' P ',
    '   '
  ], {
    P: 'gtceu:treated_wood_slab',
    S: '#forge:tools/saws'
  })
  event.shaped('gtceu:high_pressure_assembler', [
    'VRV',
    'RCR',
    'BBB'
  ], {
    B: 'cosmiccore:steel_plated_bronze_casing',
    C: 'gtceu:steel_machine_casing',
    V: 'gtceu:vacuum_tube',
    R: 'ulvcovm:ulv_robot_arm'
  })
  event.shaped('2x cosmiccore:steel_plated_bronze_casing', [
    'PRP',
    'RCR',
    'PRP'
  ], {
    C: 'gtceu:bronze_machine_casing',
    R: 'gtceu:steel_rod',
    P: 'gtceu:steel_plate'
  })
  event.recipes.gtceu.assembler('gtceu:treated_wood_dust_shred')
    .itemInputs(['gtceu:bronze_machine_casing', '4x gtceu:steel_rod', '4x gtceu:steel_plate'])
    .itemOutputs('2x cosmiccore:steel_plated_bronze_casing')
    .duration(40)
    .EUt(16);
  event.recipes.gtceu.macerator('gtceu:treated_wood_dust_shred')
    .itemInputs('gtceu:treated_wood_planks')
    .itemOutputs('gtceu:treated_wood_dust')
    .duration(40)
    .EUt(8);
  //ManaSteel Stuff
  event.recipes.gtceu.wiremill('gtceu:manasteel_wire_recipe')
    .itemInputs('botania:manasteel_ingot')
    .itemOutputs('2x gtceu:manasteel_single_wire')
    .circuit(1)
    .duration(26)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.wiremill('gtceu:manasteel_wire_recipe2x')
    .itemInputs('botania:manasteel_ingot')
    .itemOutputs('gtceu:manasteel_double_wire')
    .circuit(2)
    .duration(52)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.wiremill('gtceu:manasteel_wire_recipe4x')
    .itemInputs('2x botania:manasteel_ingot')
    .itemOutputs('gtceu:manasteel_quadruple_wire')
    .circuit(4)
    .duration(104)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.wiremill('gtceu:manasteel_wire_recipe8x')
    .itemInputs('4x botania:manasteel_ingot')
    .itemOutputs('gtceu:manasteel_octal_wire')
    .circuit(8)
    .duration(208)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.wiremill('gtceu:manasteel_wire_recipe16x')
    .itemInputs('8x botania:manasteel_ingot')
    .itemOutputs('gtceu:manasteel_hex_wire')
    .circuit(16)
    .duration(416)
    .EUt(GTValues.VA[GTValues.LV]);

  event.recipes.gtceu.bender('gtceu:manasteel_plate')
    .itemInputs('botania:manasteel_ingot')
    .itemOutputs('gtceu:manasteel_plate')
    .duration(26)
    .circuit(1)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.bender('gtceu:manasteel_plate_to_foil')
    .itemInputs('gtceu:manasteel_plate')
    .itemOutputs('4x gtceu:manasteel_foil')
    .duration(26)
    .circuit(1)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.bender('gtceu:manasteel_ingot_to_foil')
    .itemInputs('botania:manasteel_ingot')
    .itemOutputs('4x gtceu:manasteel_foil')
    .duration(26)
    .circuit(10)
    .EUt(GTValues.VA[GTValues.LV]);
  let manawires = ['gtceu:manasteel_single_cable', 'gtceu:manasteel_double_cable', 'gtceu:manasteel_quadruple_cable', 'gtceu:manasteel_octal_cable', 'gtceu:manasteel_hex_cable']
  event.remove({ output: manawires })
  event.recipes.gtceu.spooling_machine('gtceu:manasteel_single_cable_wrapping')
    .itemInputs(['gtceu:manasteel_single_wire', '2x botania:manaweave_cloth'])
    .itemOutputs('gtceu:manasteel_single_cable')
    .duration(60)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.spooling_machine('gtceu:manasteel_double_cable_wrapping')
    .itemInputs(['gtceu:manasteel_double_wire', '4x botania:manaweave_cloth'])
    .itemOutputs('gtceu:manasteel_double_cable')
    .duration(60)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.spooling_machine('gtceu:manasteel_quad_cable_wrapping')
    .itemInputs(['gtceu:manasteel_quadruple_wire', '8x botania:manaweave_cloth'])
    .itemOutputs('gtceu:manasteel_quadruple_cable')
    .duration(60)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.spooling_machine('gtceu:manasteel_octal_cable_wrapping')
    .itemInputs(['gtceu:manasteel_octal_wire', '16x botania:manaweave_cloth'])
    .itemOutputs('gtceu:manasteel_octal_cable')
    .duration(60)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.spooling_machine('gtceu:manasteel_hex_cable_wrapping')
    .itemInputs(['gtceu:manasteel_hex_wire', '32x botania:manaweave_cloth'])
    .itemOutputs('gtceu:manasteel_hex_cable')
    .duration(60)
    .EUt(GTValues.VA[GTValues.LV]);

  //Redstone Lense and removal of Ruby Lense
  event.remove({ output: 'gtceu:ruby_lens' })
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
  event.recipes.gtceu.arc_furnace('annealed_manasteel')
    .itemInputs('botania:manasteel_ingot')
    .inputFluids('gtceu:oxygen 126')
    .itemOutputs('gtceu:annealed_manasteel_ingot')
    .duration(50)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.electric_blast_furnace('bad_chrome')
    .itemInputs('16x gtceu:chromite_dust')
    .itemOutputs('2x gtceu:chromium_nugget')
    .duration(600)
    .circuit(2)
    .blastFurnaceTemp(1700)
    .EUt(GTValues.VA[GTValues.MV]);
  event.recipes.gtceu.assembler('alpha_supercon')
    .itemInputs(['16x gtceu:galvanized_ethersteel_foil', '4x gtceu:titanium_tiny_fluid_pipe', '4x gtceu:luminescent_utherium_double_wire', 'gtceu:hv_electric_pump'])
    .itemOutputs('16x gtceu:psi_superconductor_alpha_single_wire')
    .inputFluids('gtceu:liquid_helium 250')
    .duration(400)
    .EUt(GTValues.VA[GTValues.EV]);
  event.recipes.gtceu.assembler('beta_supercon')
    .itemInputs(['16x gtceu:virtue_meld_foil', '4x gtceu:tungsten_steel_tiny_fluid_pipe', '4x gtceu:virtue_meld_double_wire', 'gtceu:ev_electric_pump'])
    .itemOutputs('16x gtceu:psi_superconductor_beta_single_wire')
    .inputFluids('gtceu:liquid_helium 250')
    .duration(400)
    .EUt(GTValues.VA[GTValues.IV]);
  event.shaped('gtceu:large_lithographic_processor', [
    'PRP',
    'GCG',
    'BBB'
  ], {
    P: 'gtceu:double_hsse_plate',
    R: 'gtceu:iv_voltage_coil',
    G: 'gtceu:iv_conveyor_module',
    C: 'gtceu:iv_aio_lithography_processor',
    B: 'gtceu:plascrete'
  })
  event.shaped('gtceu:steam_mixing_vessel', [
    'PRP',
    'GCG',
    'BBB'
  ], {
    P: 'gtceu:bronze_normal_fluid_pipe',
    R: 'gtceu:bronze_rotor',
    G: 'ulvcovm:ulv_electric_motor',
    C: 'gtceu:bronze_brick_casing',
    B: 'minecraft:bricks'
  })
  event.shaped('gtceu:hp_steam_bender', [
    'PWP',
    'MCM',
    'FFF'
  ], {
    M: 'ulvcovm:ulv_electric_motor',
    P: 'ulvcovm:ulv_electric_piston',
    C: 'gtceu:steel_brick_casing',
    F: 'gtceu:firebricks',
    W: '#forge:tools/hammers'
  })
  event.shaped('gtceu:hp_steam_wiremill', [
    'MWM',
    'FCF',
    'MFM'
  ], {
    M: 'ulvcovm:ulv_electric_motor',
    C: 'gtceu:steel_brick_casing',
    F: 'gtceu:firebricks',
    W: '#forge:tools/hammers'
  })
  event.remove({ id: 'gtceu:shaped/steel_bricks_hull' })
  event.shaped('gtceu:steel_brick_casing', [
    'PPP',
    'PHP',
    'BBB'
  ], {
    B: 'gtceu:firebricks',
    H: '#forge:tools/hammers',
    P: 'gtceu:steel_plate'
  })
  event.remove({ id: 'gtceu:shapeless/integrated_circuit' })
  event.shapeless('gtceu:programmed_circuit', [
    'gtceu:vacuum_tube'
  ])

  event.shaped('gtceu:steam_caster', [
    'CBC',
    'QGH',
    'PPP'
  ], {
    P: 'gtceu:bronze_normal_fluid_pipe',
    H: 'minecraft:hopper',
    G: 'gtceu:coke_oven_bricks',
    C: 'gtceu:bronze_frame',
    B: 'minecraft:cauldron',
    Q: 'ulvcovm:ulv_electric_piston'
  })
  event.shaped('gtceu:steam_fluid_input_hatch', [
    ' G ',
    ' C ',
    '   '
  ], {
    G: 'minecraft:glass',
    C: 'gtceu:bronze_machine_casing'
  })
  event.shaped('gtceu:steam_fluid_output_hatch', [
    ' C ',
    ' G ',
    '   '
  ], {
    G: 'minecraft:glass',
    C: 'gtceu:bronze_machine_casing'
  })
  event.remove({ id: 'gtceu:shaped/sword_flint' })
  event.remove({ id: 'gtceu:shaped/knife_flint' })
  //FLINT KNIFE / SWORD
  event.shaped(Item.of('gtceu:flint_knife', '{DisallowContainerItem:0b,GT.Behaviours:{},GT.Tool:{AttackDamage:1.0f,AttackSpeed:3.0f,Damage:0,Enchantability:5,MaxDamage:63},HideFlags:2,RepairCost:0}'), [
    '   ',
    ' F ',
    ' S '
  ], {
    F: 'minecraft:flint',
    S: 'minecraft:stick',
  })
  event.shaped(Item.of('gtceu:flint_sword', '{DisallowContainerItem:0b,GT.Behaviours:{},GT.Tool:{AttackDamage:4.0f,AttackSpeed:-2.4f,Damage:0,Enchantability:5,MaxDamage:63},HideFlags:2,RepairCost:0}'), [
    ' F ',
    ' F ',
    ' S '
  ], {
    F: 'minecraft:flint',
    S: 'minecraft:stick',
  })
  event.recipes.gtceu.compressor('gtceu:magnetic_neodymium_praseodymium_rod')
    .itemInputs('9x gtceu:obsidian_plate')
    .itemOutputs('gtceu:dense_obsidian_plate')
    .duration(240)
    .EUt(GTValues.VA[GTValues.HV]);
  //IV Grade Magnetic Rod
  event.recipes.gtceu.polarizer('gtceu:magnetic_neodymium_praseodymium_rod')
    .itemInputs('gtceu:neodymium_praseodymium_rod')
    .itemOutputs('gtceu:magnetic_neodymium_praseodymium_rod')
    .duration(72)
    .EUt(GTValues.VA[GTValues.EV]);
  //LV EMITTER
  event.remove({ output: 'gtceu:lv_emitter' })
  event.recipes.gtceu.assembler('gtceu:lv_emitter_recipe')
    .itemInputs(['2x gtceu:manasteel_single_cable', '4x gtceu:manasteel_rod', 'gtceu:quartzite_gem', '2x #gtceu:circuits/lv'])
    .itemOutputs('gtceu:lv_emitter')
    .duration(40)
    .EUt(GTValues.VA[GTValues.LV]);
  //HULLS
  //LV MACHINE HULL AND CASING
  event.remove({ output: 'gtceu:lv_machine_casing' })
  event.recipes.gtceu.assembler('gtceu:lv_machine_casing_assembler')
    .itemInputs(['4x gtceu:double_runed_steel_plate', '4x gtceu:steel_plate'])
    .itemOutputs('gtceu:lv_machine_casing')
    .circuit(8)
    .duration(40)
    .EUt(GTValues.VA[GTValues.LV]);
  event.shaped('gtceu:lv_machine_casing', [
    'AMA',
    'MWM',
    'AMA'
  ], {
    A: 'gtceu:double_runed_steel_plate',
    M: 'gtceu:steel_plate',
    W: '#forge:tools/wrenches'
  })
  //MV MACHINE HULL AND COMPONENT
  event.remove({ output: 'gtceu:mv_machine_casing' })
  event.recipes.gtceu.assembler('gtceu:mv_machine_casing_assembler')
    .itemInputs(['4x gtceu:double_aluminium_plate', '4x malum:soul_stained_steel_plating'])
    .itemOutputs('gtceu:mv_machine_casing')
    .circuit(8)
    .duration(40)
    .EUt(GTValues.VA[GTValues.LV]);
  event.shaped('gtceu:mv_machine_casing', [
    'AMA',
    'MWM',
    'AMA'
  ], {
    A: 'gtceu:double_aluminium_plate',
    M: 'malum:soul_stained_steel_plating',
    W: '#forge:tools/wrenches'
  })
  //['2x gtceu:manasteel_single_cable', 'gtceu:mv_machine_casing', '2x malum:spirit_fabric', 'gtceu:double_aluminium_plate']
  event.remove({ id: 'gtceu:shaped/mv_machine_hull' })
  event.remove({ id: 'gtceu:assembler/hull_mv_annealed' })
  event.remove({ id: 'gtceu:assembler/hull_mv' })
  event.shaped('gtceu:mv_machine_hull', [
    'PMP',
    'WCW',
    'PSP'
  ], {
    P: 'malum:spirit_fabric',
    M: 'gtceu:double_aluminium_plate',
    W: 'gtceu:annealed_manasteel_single_cable',
    C: 'gtceu:mv_machine_casing',
    S: 'gtceu:cupronickel_spring'
  })
  event.recipes.gtceu.assembler('gtceu:assembler_hull_mv')
    .itemInputs(['2x gtceu:annealed_manasteel_single_cable', 'gtceu:mv_machine_casing', '2x malum:spirit_fabric'])
    .inputFluids('gtceu:polyethylene 288')
    .itemOutputs('gtceu:mv_machine_hull')
    .duration(50)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.spooling_machine('frontiers:spirit_fabric_hv')
    .itemInputs(['botania:manaweave_cloth', 'malum:aerial_spirit'])
    .inputFluids('gtceu:styrene 288')
    .itemOutputs('malum:spirit_fabric')
    .duration(50)
    .EUt(GTValues.VA[GTValues.HV]);
  //MOTOR
  event.remove({ id: 'gtceu:assembler/electric_motor_mv' })
  event.remove({ id: 'gtceu:shaped/electric_motor_mv' })
  event.recipes.gtceu.assembler('gtceu:new_mv_motor')
    .itemInputs(['2x gtceu:copper_single_cable', '2x gtceu:soul_stained_steel_rod', 'gtceu:magnetic_steel_rod', '4x gtceu:cupronickel_double_wire'])
    .itemOutputs('gtceu:mv_electric_motor')
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);
  event.shaped('gtceu:mv_electric_motor', [
    'CWR',
    'WMW',
    'RWC'
  ], {
    C: 'gtceu:copper_single_cable',
    R: 'gtceu:soul_stained_steel_rod',
    M: 'gtceu:magnetic_steel_rod',
    W: 'gtceu:cupronickel_double_wire'
  })
  //PISTON
  event.remove({ id: 'gtceu:assembler/electric_piston_mv' })
  event.remove({ id: 'gtceu:shaped/electric_piston_mv' })
  event.recipes.gtceu.assembler('gtceu:new_mv_piston')
    .itemInputs(['2x gtceu:copper_single_cable', '2x gtceu:soul_stained_steel_rod', '3x malum:soul_stained_steel_plating', 'gtceu:mv_electric_motor', 'gtceu:small_soul_stained_steel_gear'])
    .itemOutputs('gtceu:mv_electric_piston')
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);
  event.shaped('gtceu:mv_electric_piston', [
    'PPP',
    'CRR',
    'CMG'
  ], {
    P: 'malum:soul_stained_steel_plating',
    R: 'gtceu:soul_stained_steel_rod',
    G: 'gtceu:small_soul_stained_steel_gear',
    C: 'gtceu:copper_single_cable',
    M: 'gtceu:mv_electric_motor'
  })
  //ROBOARM (TODO)
  event.remove({ id: 'gtceu:shaped/robot_arm_mv' })
  event.remove({ id: 'gtceu:assembler/robot_arm_mv' })
  event.recipes.gtceu.assembler('gtceu:new_mv_robot_arm')
    .itemInputs(['3x gtceu:copper_single_cable', '2x gtceu:soul_stained_steel_rod', '2x gtceu:mv_electric_motor', 'gtceu:mv_electric_piston', '#gtceu:circuits/mv'])
    .itemOutputs('gtceu:mv_robot_arm')
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);
  event.shaped('gtceu:mv_robot_arm', [
    'CCC',
    'RGR',
    'PMG'
  ], {
    P: 'gtceu:mv_electric_piston',
    R: 'gtceu:mv_electric_motor',
    G: 'gtceu:soul_stained_steel_rod',
    C: 'gtceu:copper_single_cable',
    M: '#gtceu:circuits/mv'
  })
  //HV HULLS AND COMPONENTS
  event.remove({ output: 'gtceu:hv_machine_casing' })
  event.recipes.gtceu.assembler('gtceu:hv_machine_casing_assembler')
    .itemInputs(['4x gtceu:double_stainless_steel_plate', '4x gtceu:galvanized_ethersteel_plate'])
    .itemOutputs('gtceu:hv_machine_casing')
    .circuit(8)
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
  })
  event.remove({ id: 'gtceu:shaped/hv_machine_hull' })
  event.remove({ id: 'gtceu:assembler/hull_hv' })
  event.shaped('gtceu:hv_machine_hull', [
    'PMP',
    'WCW',
    'PSP'
  ], {
    P: 'kubejs:terraweave_cloth',
    M: 'gtceu:double_aluminium_plate',
    W: 'gtceu:terrasteel_single_cable',
    C: 'gtceu:hv_machine_casing',
    S: 'gtceu:kanthal_spring'
  })
  event.recipes.gtceu.assembler('gtceu:assembler_hull_hv')
    .itemInputs(['2x gtceu:terrasteel_single_cable', 'gtceu:hv_machine_casing', '2x kubejs:terraweave_cloth'])
    .inputFluids('gtceu:polyethylene 288')
    .itemOutputs('gtceu:hv_machine_hull')
    .duration(50)
    .EUt(GTValues.VA[GTValues.LV]);
  //HV MOTOR
  //MOTOR
  event.remove({ id: 'gtceu:assembler/electric_motor_hv' })
  event.remove({ id: 'gtceu:shaped/electric_motor_hv' })
  event.recipes.gtceu.assembler('gtceu:new_hv_motor')
    .itemInputs(['2x gtceu:terrasteel_double_cable', '2x gtceu:galvanized_ethersteel_rod', 'gtceu:magnetic_steel_rod', '4x gtceu:kanthal_double_wire'])
    .itemOutputs('gtceu:hv_electric_motor')
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);
  event.shaped('gtceu:hv_electric_motor', [
    'CWR',
    'WMW',
    'RWC'
  ], {
    C: 'gtceu:terrasteel_double_cable',
    R: 'gtceu:galvanized_ethersteel_rod',
    M: 'gtceu:magnetic_steel_rod',
    W: 'gtceu:kanthal_double_wire'
  })
  //PISTON
  event.remove({ id: 'gtceu:assembler/electric_piston_hv' })
  event.remove({ id: 'gtceu:shaped/electric_piston_hv' })
  event.recipes.gtceu.assembler('gtceu:new_hv_piston')
    .itemInputs(['2x gtceu:terrasteel_single_cable', '2x gtceu:galvanized_ethersteel_rod', '3x gtceu:galvanized_ethersteel_plate', 'gtceu:hv_electric_motor', 'gtceu:small_galvanized_ethersteel_gear'])
    .itemOutputs('gtceu:hv_electric_piston')
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);
  event.shaped('gtceu:hv_electric_piston', [
    'PPP',
    'CRR',
    'CMG'
  ], {
    P: 'gtceu:galvanized_ethersteel_plate',
    R: 'gtceu:galvanized_ethersteel_rod',
    G: 'gtceu:small_galvanized_ethersteel_gear',
    C: 'gtceu:terrasteel_single_cable',
    M: 'gtceu:hv_electric_motor'
  })
  //ROBOARM
  event.remove({ id: 'gtceu:shaped/robot_arm_hv' })
  event.remove({ id: 'gtceu:assembler/robot_arm_hv' })
  event.recipes.gtceu.assembler('gtceu:new_hv_robot_arm')
    .itemInputs(['3x gtceu:terrasteel_single_cable', '2x gtceu:galvanized_ethersteel_rod', '2x gtceu:hv_electric_motor', 'gtceu:hv_electric_piston', '#gtceu:circuits/hv'])
    .itemOutputs('gtceu:hv_robot_arm')
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);
  event.shaped('gtceu:hv_robot_arm', [
    'CCC',
    'RGR',
    'PMG'
  ], {
    P: 'gtceu:hv_electric_piston',
    R: 'gtceu:hv_electric_motor',
    G: 'gtceu:galvanized_ethersteel_rod',
    C: 'gtceu:terrasteel_single_cable',
    M: '#gtceu:circuits/hv'
  })
  //EV MACHINE HULL AND CASING AND PARTS
  event.remove({ output: 'gtceu:ev_machine_casing' })
  event.recipes.gtceu.assembler('gtceu:ev_machine_casing_assembler')
    .itemInputs(['4x gtceu:double_titanium_plate', '4x gtceu:luminescent_utherium_plate'])
    .itemOutputs('gtceu:ev_machine_casing')
    .duration(40)
    .circuit(8)
    .EUt(GTValues.VA[GTValues.LV]);
  event.shaped('gtceu:ev_machine_casing', [
    'AMA',
    'MWM',
    'AMA'
  ], {
    A: 'gtceu:double_titanium_plate',
    M: 'gtceu:luminescent_utherium_plate',
    W: '#forge:tools/wrenches'
  })
  //EV Hulls
  event.remove({ id: 'gtceu:shaped/ev_machine_hull' })
  event.remove({ id: 'gtceu:assembler/hull_ev' })
  event.shaped('gtceu:ev_machine_hull', [
    'PMP',
    'WCW',
    'PSP'
  ], {
    P: 'kubejs:carbon_ethersteel_lattice',
    M: 'gtceu:double_luminescent_utherium_plate',
    W: 'gtceu:black_steel_single_cable',
    C: 'gtceu:ev_machine_casing',
    S: 'gtceu:nichrome_spring'
  })
  event.recipes.gtceu.assembler('gtceu:assembler_hull_ev')
    .itemInputs(['2x gtceu:black_steel_single_cable', 'gtceu:ev_machine_casing', '2x kubejs:carbon_ethersteel_lattice'])
    .inputFluids('gtceu:polytetrafluoroethylene 288')
    .itemOutputs('gtceu:ev_machine_hull')
    .duration(50)
    .EUt(GTValues.VA[GTValues.LV]);
  //START HERE
  event.remove({ id: 'gtceu:assembler/electric_motor_ev' })
  event.remove({ id: 'gtceu:shaped/electric_motor_ev' })
  event.recipes.gtceu.assembler('gtceu:new_ev_motor')
    .itemInputs(['2x gtceu:black_steel_quadruple_cable', '2x gtceu:luminescent_utherium_rod', 'gtceu:magnetic_neodymium_rod', '4x gtceu:nichrome_quadruple_wire'])
    .itemOutputs('gtceu:ev_electric_motor')
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);
  event.shaped('gtceu:ev_electric_motor', [
    'CWR',
    'WMW',
    'RWC'
  ], {
    C: 'gtceu:black_steel_quadruple_cable',
    R: 'gtceu:luminescent_utherium_rod',
    M: 'gtceu:magnetic_neodymium_rod',
    W: 'gtceu:nichrome_quadruple_wire'
  })
  //PISTON
  event.remove({ id: 'gtceu:assembler/electric_piston_ev' })
  event.remove({ id: 'gtceu:shaped/electric_piston_ev' })
  event.recipes.gtceu.assembler('gtceu:new_ev_piston')
    .itemInputs(['2x gtceu:black_steel_single_cable', '2x gtceu:luminescent_utherium_rod', '3x gtceu:luminescent_utherium_plate', 'gtceu:ev_electric_motor', 'gtceu:small_luminescent_utherium_gear'])
    .itemOutputs('gtceu:ev_electric_piston')
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);
  event.shaped('gtceu:ev_electric_piston', [
    'PPP',
    'CRR',
    'CMG'
  ], {
    P: 'gtceu:luminescent_utherium_plate',
    R: 'gtceu:luminescent_utherium_rod',
    G: 'gtceu:small_luminescent_utherium_gear',
    C: 'gtceu:black_steel_single_cable',
    M: 'gtceu:ev_electric_motor'
  })
  //ROBOARM
  event.remove({ id: 'gtceu:shaped/robot_arm_ev' })
  event.remove({ id: 'gtceu:assembler/robot_arm_ev' })
  event.recipes.gtceu.assembler('gtceu:new_ev_robot_arm')
    .itemInputs(['3x gtceu:black_steel_single_cable', '2x gtceu:luminescent_utherium_rod', '2x gtceu:ev_electric_motor', 'gtceu:ev_electric_piston', '#gtceu:circuits/ev'])
    .itemOutputs('gtceu:ev_robot_arm')
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);
  event.shaped('gtceu:ev_robot_arm', [
    'CCC',
    'RGR',
    'PMG'
  ], {
    P: 'gtceu:ev_electric_piston',
    R: 'gtceu:ev_electric_motor',
    G: 'gtceu:luminescent_utherium_rod',
    C: 'gtceu:black_steel_single_cable',
    M: '#gtceu:circuits/ev'
  })
  //IV MACHINE PARTS
  event.remove({ output: 'gtceu:iv_machine_casing' })
  event.recipes.gtceu.assembler('gtceu:iv_machine_casing_assembler')
    .itemInputs(['4x gtceu:double_platinum_plate', '4x gtceu:virtue_meld_plate'])
    .itemOutputs('gtceu:iv_machine_casing')
    .duration(40)
    .circuit(8)
    .EUt(GTValues.VA[GTValues.LV]);
  event.shaped('gtceu:iv_machine_casing', [
    'AMA',
    'MWM',
    'AMA'
  ], {
    A: 'gtceu:double_platinum_plate',
    M: 'gtceu:virtue_meld_plate',
    W: '#forge:tools/wrenches'
  })
  event.remove({ id: 'gtceu:shaped/iv_machine_hull' })
  event.remove({ id: 'gtceu:assembler/hull_iv' })
  event.shaped('gtceu:iv_machine_hull', [
    'PMP',
    'WCW',
    'PSP'
  ], {
    P: 'kubejs:resplendent_sylvan_nanolattice',
    M: 'gtceu:double_virtue_meld_plate',
    W: 'gtceu:tungsten_steel_single_cable',
    C: 'gtceu:iv_machine_casing',
    S: 'cosmiccore:prismatic_tungstensteel_spring'
  })
  event.recipes.gtceu.assembler('gtceu:assembler_hull_iv')
    .itemInputs(['2x gtceu:tungsten_steel_single_cable', 'gtceu:iv_machine_casing', '2x kubejs:resplendent_sylvan_nanolattice'])
    .inputFluids('gtceu:polytetrafluoroethylene 576')
    .itemOutputs('gtceu:iv_machine_hull')
    .duration(50)
    .EUt(GTValues.VA[GTValues.LV]);
  //START HERE
  //MOTOR
  event.remove({ id: 'gtceu:assembler/electric_motor_iv' })
  event.remove({ id: 'gtceu:shaped/electric_motor_iv' })
  event.recipes.gtceu.assembler('gtceu:new_iv_motor')
    .itemInputs(['2x gtceu:elementium_quadruple_cable', '2x cosmiccore:prismatic_tungstensteel_rod', 'gtceu:magnetic_neodymium_praseodymium_rod', '4x gtceu:virtue_meld_octal_wire'])
    .itemOutputs('gtceu:iv_electric_motor')
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);
  event.shaped('gtceu:iv_electric_motor', [
    'CWR',
    'WMW',
    'RWC'
  ], {
    C: 'gtceu:elementium_quadruple_cable',
    R: 'cosmiccore:prismatic_tungstensteel_rod',
    M: 'gtceu:magnetic_neodymium_praseodymium_rod',
    W: 'gtceu:virtue_meld_octal_wire'
  })
  //PISTON
  event.remove({ id: 'gtceu:assembler/electric_piston_iv' })
  event.remove({ id: 'gtceu:shaped/electric_piston_iv' })
  event.recipes.gtceu.assembler('gtceu:new_iv_piston')
    .itemInputs(['2x gtceu:elementium_single_cable', '2x cosmiccore:prismatic_tungstensteel_rod', '3x cosmiccore:prismatic_tungstensteel_plate', 'gtceu:iv_electric_motor', 'cosmiccore:small_prismatic_tungstensteel_gear'])
    .itemOutputs('gtceu:iv_electric_piston')
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);
  event.shaped('gtceu:iv_electric_piston', [
    'PPP',
    'CRR',
    'CMG'
  ], {
    P: 'cosmiccore:prismatic_tungstensteel_plate',
    R: 'cosmiccore:prismatic_tungstensteel_rod',
    G: 'cosmiccore:small_prismatic_tungstensteel_gear',
    C: 'gtceu:elementium_single_cable',
    M: 'gtceu:iv_electric_motor'
  })
  //ROBOARM
  event.remove({ id: 'gtceu:shaped/robot_arm_iv' })
  event.remove({ id: 'gtceu:assembler/robot_arm_iv' })
  event.recipes.gtceu.assembler('gtceu:new_iv_robot_arm')
    .itemInputs(['3x gtceu:elementium_single_cable', '2x cosmiccore:prismatic_tungstensteel_rod', '2x gtceu:iv_electric_motor', 'gtceu:iv_electric_piston', '#gtceu:circuits/iv'])
    .itemOutputs('gtceu:iv_robot_arm')
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);
  event.shaped('gtceu:iv_robot_arm', [
    'CCC',
    'RGR',
    'PMG'
  ], {
    P: 'gtceu:iv_electric_piston',
    R: 'gtceu:iv_electric_motor',
    G: 'cosmiccore:prismatic_tungstensteel_rod',
    C: 'gtceu:elementium_single_cable',
    M: '#gtceu:circuits/iv'
  })
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
  event.shaped('cosmiccore:hardened_resin', [
    'WWW',
    'WFW',
    'WWW'
  ], {
    W: 'gtceu:sticky_resin',
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
    W: 'gtceu:manasteel_double_cable',
    R: 'gtceu:lv_robot_arm',
    H: 'gtceu:lv_machine_hull',
    C: '#gtceu:circuits/mv',
    E: 'gtceu:lv_emitter',
    O: 'gtceu:lv_conveyor_module',
  })
  //   //Custom Recipe Handler? - Reference - Otherwise just dump the recipe in questions JSON into event.custom()
  //   let drying = (dryingoutput, dryingInput, duration) => {
  //     event.custom({
  //       "type": "integrateddynamics:drying_basin",
  //       "item": dryingInput,
  //       "duration": duration,
  //       "result": { item: dryingoutput }
  //     })
  //   }
  //   drying('create:shaft', 'create:cogwheel', 40)
})

ServerEvents.tags('block', event => {
  event.remove('aether:aether_portal_blocks', 'minecraft:glowstone'),
    event.add('aether:aether_portal_blocks', 'gtceu:frostproof_machine_casing')
  event.add('ae2:blacklisted/spatial', 'minecraft:netherite_block')
  event.add('ae2:blacklisted/storage_bus', 'create:vault')
})

// ServerEvents.recipes(e => {
//   // for this code to work, kubejs:incomplete_spore_blossom needs to be added to the game
//   let inter = 'gtceu:lv_machine_hull' // making a variable to store the transitional item makes the code more readable
//   e.recipes.create.sequenced_assembly([
//     Item.of('gtceu:lv_energy_output_hatch'), // this is the item that will appear in JEI as the result
//   ], 'gtceu:lv_machine_hull', [ // 'flowering_azalea_leaves' is the input
//     // the transitional item is a variable, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly
//     e.recipes.createDeploying(inter, [inter, 'gtceu:steel_spring']),
//     e.recipes.createDeploying(inter, [inter, 'gtceu:tin_spring']),
//     e.recipes.createDeploying(inter, [inter, 'gtceu:tin_spring']),
//     e.recipes.createDeploying(inter, [inter, 'gtceu:rubber_plate']),
//   ]).transitionalItem(inter).loops(2) // set the transitional item and the number of loops


// })

ServerEvents.recipes(event => {


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
  event.recipes.gtceu.electric_blast_furnace('naq_smelt_pyroflux')
    .itemInputs('gtceu:naquadah_dust')
    .inputFluids('gtceu:pyroflux 1000')
    .itemOutputs('gtceu:hot_naquadah_ingot')
    .circuit(1)
    .blastFurnaceTemp(4700)
    .duration(1300)
    .EUt(GTValues.VA[GTValues.EV]);
  event.recipes.gtceu.vacuum_freezer('cool_hot_naq')
    .itemInputs('gtceu:hot_naquadah_ingot')
    .inputFluids('gtceu:liquid_helium 1000')
    .itemOutputs('gtceu:naquadah_ingot')
    .duration(320)
    .EUt(GTValues.VA[GTValues.EV]);

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
  event.recipes.gtceu.compressor('hardened_resin')
    .itemInputs('4x gtceu:sticky_resin')
    .itemOutputs('cosmiccore:hardened_resin')
    .duration(380)
    .EUt(8);
  event.recipes.gtceu.compressor('hardened_resin_good')
    .itemInputs('2x gtceu:soulresin_ingot')
    .itemOutputs('cosmiccore:hardened_resin')
    .duration(240)
    .EUt(8);
  event.recipes.gtceu.industrial_primitive_blast_furnace('resin_vulc')
    .itemInputs('2x gtceu:sulfur_dust')
    .itemInputs('8x cosmiccore:hardened_resin')
    .itemInputs('8x minecraft:charcoal')
    .inputFluids('gtceu:creosote 1000')
    .itemOutputs('16x gtceu:rubber_ingot')
    .duration(1200)
  event.recipes.gtceu.alloy_smelter('lead_cable_aweful')
    .itemInputs(['gtceu:lead_single_wire', '2x cosmiccore:hardened_resin'])
    .itemOutputs('gtceu:lead_single_cable')
    .duration(80)
    .EUt(24);

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
  event.remove({ id: 'gtceu:electric_blast_furnace/blast_tungsten_steel' })
  event.recipes.gtceu.electric_blast_furnace('tungstensteel_poor')
    .itemInputs('gtceu:tungsten_steel_dust')
    .itemOutputs('gtceu:hot_tungsten_steel_ingot')
    .duration(1000)
    .blastFurnaceTemp(4000)
    .circuit(1)
    .EUt(GTValues.VA[GTValues.EV]);
  event.remove({ id: 'gtceu:electric_blast_furnace/blast_tungsten_steel_gas' })
  event.recipes.gtceu.electric_blast_furnace('tungstensteel_good')
    .itemInputs('gtceu:tungsten_steel_dust')
    .inputFluids('gtceu:helium 100')
    .itemOutputs('gtceu:hot_tungsten_steel_ingot')
    .duration(670)
    .blastFurnaceTemp(4000)
    .circuit(2)
    .EUt(GTValues.VA[GTValues.EV]);
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
  let tierSpring = [
    'tin',
    'copper',
    'gold',
    'aluminium',
    'hsla_steel',
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
  let laminatorTier = [
    'cupronickel',
    'aluminium',
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
    let springType = tierSpring[index]
    let coilType = coilTier[index]
    let lamType = laminatorTier[index]
    if (Item.exists(`cosmiccore:${tier}_wireless_charger`)) {
      event.shaped(`cosmiccore:${tier}_wireless_charger`, [
        'CRC',
        'EHS',
        'ZCZ'
      ], {
        E: `gtceu:${tier}_emitter`,
        S: `gtceu:${tier}_sensor`,
        R: `cosmiccore:${tier}_radio_module`,
        C: `#gtceu:circuits/${tier}`,
        H: `gtceu:${tier}_machine_hull`,
        Z: `gtceu:${cableType}_single_cable`
      })
    }
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
      A: `gtceu:manasteel_plate`,
      P: `gtceu:${tier}_electric_piston`,
      B: `gtceu:${tier}_electric_pump`,
      C: `#gtceu:circuits/${tier}`,
      H: `gtceu:${tier}_machine_hull`,
      Z: `gtceu:${cableType}_single_cable`
    })

    event.shaped(`gtceu:${tier}_laminator`, [
      'CAC',
      'BHB',
      'ZPZ'
    ], {
      A: `gtceu:${springType}_spring`,
      B: `gtceu:${tier}_conveyor_module`,
      C: `#gtceu:circuits/${tier}`,
      H: `gtceu:${tier}_machine_hull`,
      Z: `gtceu:${cableType}_single_cable`,
      P: `gtceu:${tier}_electric_pump`
    }
    )
    event.shaped(`gtceu:${tier}_aio_lithography_processor`, [
      'CAC',
      'RHR',
      'ZBZ'
    ], {
      A: `gtceu:${springType}_spring`,
      B: `gtceu:${tier}_conveyor_module`,
      R: `gtceu:${tier}_robot_arm`,
      C: `#gtceu:circuits/${tier}`,
      H: `gtceu:${tier}_machine_hull`,
      Z: `gtceu:${cableType}_single_cable`
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
    event.shaped(`gtceu:${tier}_culinary_assembler`, [
      'PCP',
      'BHB',
      'ZQZ'
    ], {
      B: `gtceu:${tier}_conveyor_module`,
      C: `#gtceu:circuits/${tier}`,
      H: `gtceu:${tier}_machine_hull`,
      Z: `gtceu:${cableType}_single_cable`,
      P: `gtceu:${tier}_robot_arm`,
      Q: `farmersdelight:stove`
    }
    )
    event.shaped(`gtceu:${tier}_juicer`, [
      'PCP',
      'BHO',
      'ZQZ'
    ], {
      B: `gtceu:${tier}_conveyor_module`,
      C: `#gtceu:circuits/${tier}`,
      H: `gtceu:${tier}_machine_hull`,
      Z: `gtceu:${cableType}_single_cable`,
      P: `gtceu:${tier}_electric_piston`,
      O: `gtceu:${tier}_electric_pump`,
      Q: 'create:fluid_tank'
    }
    )
    event.shaped(`gtceu:${tier}_slicer`, [
      'CSP',
      'BQB',
      'ZHZ'
    ], {
      B: `gtceu:${tier}_conveyor_module`,
      C: `#gtceu:circuits/${tier}`,
      H: `gtceu:${tier}_machine_hull`,
      Z: `gtceu:${cableType}_single_cable`,
      P: `gtceu:${tier}_electric_piston`,
      Q: 'farmersdelight:cutting_board',
      S: 'gtceu:steel_buzz_saw_blade'
    }
    )
    event.shaped(`gtceu:${tier}_fryer`, [
      'PSP',
      'RQE',
      'ZHZ'
    ], {
      R: `gtceu:long_${cableType}_rod`,
      H: `gtceu:${tier}_machine_hull`,
      E: `gtceu:${tier}_emitter`,
      Z: `gtceu:${cableType}_single_cable`,
      P: `gtceu:${tier}_electric_piston`,
      Q: 'gtceu:steel_drum',
      S: 'createdeco:andesite_bars'
    }
    )
  })
  event.remove({ output: 'gtceu:alloy_blast_smelter' })
  event.shaped('gtceu:alloy_blast_smelter', [
    'PCP',
    'WFW',
    'PCP'
  ], {
    P: 'gtceu:titanium_carbide_plate',
    C: '#gtceu:circuits/luv',
    W: 'gtceu:elementium_quadruple_wire',
    F: 'gtceu:ev_alloy_smelter'
  })
  //Coils-new
  event.remove({ id: 'gtceu:assembler/coil_cupronickel' })
  event.recipes.gtceu.spooling_machine('coil_cupronickel')
    .itemInputs(['8x gtceu:cupronickel_double_wire', '8x gtceu:bronze_foil'])
    .inputFluids('gtceu:tin_alloy 144')
    .itemOutputs('gtceu:cupronickel_coil_block')
    .duration(200)
    .EUt(GTValues.VA[GTValues.LV]);
  event.remove({ id: 'gtceu:assembler/coil_kanthal' })
  event.recipes.gtceu.spooling_machine('coil_kanthal')
    .itemInputs(['8x gtceu:kanthal_double_wire', '8x gtceu:aluminium_foil'])
    .inputFluids('gtceu:cupronickel 144')
    .itemOutputs('gtceu:kanthal_coil_block')
    .duration(300)
    .EUt(GTValues.VA[GTValues.MV]);
  event.remove({ id: 'gtceu:assembler/coil_nichrome' })
  event.recipes.gtceu.spooling_machine('coil_nichrome')
    .itemInputs(['8x gtceu:nichrome_double_wire', '8x gtceu:galvanized_ethersteel_foil'])
    .inputFluids('gtceu:kanthal 144')
    .itemOutputs('gtceu:nichrome_coil_block')
    .duration(400)
    .EUt(GTValues.VA[GTValues.HV]);
  event.recipes.gtceu.spooling_machine('prisma_tungstensteel_coil')
    .itemInputs(['8x cosmiccore:prismatic_tungstensteel_double_wire', '8x gtceu:platinum_foil'])
    .itemOutputs('cosmiccore:prismatic_tungstensteel_coil_block')
    .inputFluids('gtceu:nichrome 144')
    .duration(500)
    .EUt(GTValues.VA[GTValues.EV]);
  //VOLTAGE COILS
  event.remove({ id: 'gtceu:assembler/voltage_coil_ulv' })
  event.remove({ id: 'gtceu:assembler/voltage_coil_lv' })
  event.remove({ id: 'gtceu:assembler/voltage_coil_mv' })
  event.remove({ id: 'gtceu:assembler/voltage_coil_hv' })
  event.remove({ id: 'gtceu:assembler/voltage_coil_ev' })
  event.remove({ id: 'gtceu:assembler/voltage_coil_iv' })
  event.remove({ id: 'gtceu:assembler/voltage_coil_luv' })
  event.remove({ id: 'gtceu:assembler/voltage_coil_zpm' })
  event.remove({ id: 'gtceu:assembler/voltage_coil_uv' })

  event.recipes.gtceu.spooling_machine('voltage_coil_ulv')
    .itemInputs(['gtceu:magnetic_iron_rod', '16x gtceu:fine_lead_wire'])
    .itemOutputs('gtceu:ulv_voltage_coil')
    .duration(200)
    .EUt(GTValues.VA[GTValues.ULV] / 2);

  event.recipes.gtceu.spooling_machine('voltage_coil_lv')
    .itemInputs(['gtceu:magnetic_iron_rod', '16x gtceu:fine_steel_wire'])
    .itemOutputs('gtceu:lv_voltage_coil')
    .duration(200)
    .EUt(GTValues.VA[GTValues.LV] / 2);

  event.recipes.gtceu.spooling_machine('voltage_coil_mv')
    .itemInputs(['gtceu:magnetic_steel_rod', '16x gtceu:fine_aluminium_wire'])
    .itemOutputs('gtceu:mv_voltage_coil')
    .duration(200)
    .EUt(GTValues.VA[GTValues.MV] / 2);

  event.recipes.gtceu.spooling_machine('voltage_coil_hv')
    .itemInputs(['gtceu:magnetic_steel_rod', '16x gtceu:fine_black_steel_wire'])
    .itemOutputs('gtceu:hv_voltage_coil')
    .duration(200)
    .EUt(GTValues.VA[GTValues.HV] / 2);

  event.recipes.gtceu.spooling_machine('voltage_coil_ev')
    .itemInputs(['gtceu:magnetic_neodymium_rod', '16x gtceu:fine_platinum_wire'])
    .itemOutputs('gtceu:ev_voltage_coil')
    .duration(200)
    .EUt(GTValues.VA[GTValues.EV] / 2);

  event.recipes.gtceu.spooling_machine('voltage_coil_iv')
    .itemInputs(['gtceu:magnetic_neodymium_praseodymium_rod', '16x gtceu:fine_iridium_wire'])
    .itemOutputs('gtceu:iv_voltage_coil')
    .duration(200)
    .EUt(GTValues.VA[GTValues.IV] / 2);


  //Radio Modules (Too lazy to do a ForEach)
  event.recipes.gtceu.assembler('radio_module_hv')
    .itemInputs(['gtceu:hv_sensor', 'gtceu:hv_emitter', 'gtceu:stainless_steel_frame', '2x gtceu:galvanized_ethersteel_double_cable', '#gtceu:circuits/hv'])
    .itemOutputs('cosmiccore:hv_radio_module')
    .duration(320)
    .EUt(GTValues.VA[GTValues.HV] / 2);
  event.recipes.gtceu.assembler('radio_module_ev')
    .itemInputs(['gtceu:ev_sensor', 'gtceu:ev_emitter', 'gtceu:titanium_frame', '2x gtceu:black_steel_double_cable', '#gtceu:circuits/ev'])
    .itemOutputs('cosmiccore:ev_radio_module')
    .duration(320)
    .EUt(GTValues.VA[GTValues.EV] / 2);
  event.recipes.gtceu.assembler('radio_module_iv')
    .itemInputs(['gtceu:iv_sensor', 'gtceu:iv_emitter', 'gtceu:tungsten_steel_frame', '2x gtceu:platinum_double_cable', '#gtceu:circuits/iv'])
    .itemOutputs('cosmiccore:iv_radio_module')
    .duration(320)
    .EUt(GTValues.VA[GTValues.IV] / 2);
  event.recipes.gtceu.assembler('radio_module_luv')
    .itemInputs(['gtceu:luv_sensor', 'gtceu:luv_emitter', 'gtceu:hssg_frame', '2x gtceu:niobium_titanium_double_cable', '#gtceu:circuits/luv'])
    .itemOutputs('cosmiccore:luv_radio_module')
    .duration(320)
    .EUt(GTValues.VA[GTValues.LuV] / 2);
  event.recipes.gtceu.assembler('radio_module_zpm')
    .itemInputs(['gtceu:zpm_sensor', 'gtceu:zpm_emitter', 'gtceu:neutronite_frame', '2x gtceu:naquadah_double_cable', '#gtceu:circuits/zpm'])
    .itemOutputs('cosmiccore:zpm_radio_module')
    .duration(320)
    .EUt(GTValues.VA[GTValues.ZPM] / 2);
  event.recipes.gtceu.assembler('radio_module_uv')
    .itemInputs(['gtceu:uv_sensor', 'gtceu:uv_emitter', 'cosmiccore:ichorium_frame', '2x cosmiccore:living_igniclad_double_cable', '#gtceu:circuits/uv'])
    .itemOutputs('cosmiccore:uv_radio_module')
    .duration(320)
    .EUt(GTValues.VA[GTValues.UV] / 2);

})

