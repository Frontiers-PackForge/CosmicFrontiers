//A Simple "REMOVE AND HIDE" function akin to GroovyScript's Jei.yeet() function - This will tag the item for hiding from recipe viewers and remove the recipe
//This one also has a tag removal function to remove the forge:tools/knives tag from what is removed so bear that in mind if you copy/paste this around
let yeet = (itemName) => {
       ServerEvents.recipes(event => {
              event.remove({ output: itemName })
       })
       ServerEvents.tags('item', event => {
              event.add('c:hidden_from_recipe_viewers', itemName)

       })
}

ServerEvents.tags('item', event => {
       event.add('thinair:heavy_breathing_equipment', 'ad_astra:space_helmet')
       event.add('thinair:heavy_breathing_equipment', 'kubejs:nano_respirator')
       event.add('thinair:breathing_equipment', 'kubejs:nano_respirator')
       event.add('gtceu:ppe_armor', 'kubejs:nano_respirator')
       event.add('gtceu:ppe_armor', 'kubejs:reinforced_respirator')
       event.add('gtceu:ppe_armor', 'thinair:respirator')
       event.add('thinair:breathing_equipment', 'kubejs:reinforced_respirator')
       event.add('curios:head', 'kubejs:reinforced_respirator')
       event.add('curios:head', 'kubejs:nano_respirator')
       event.add('curios:charm', 'gtceu:hv_item_magnet')
       event.add('curios:charm', 'gtceu:lv_item_magnet')
       event.add('frontiers:peanut', 'croptopia:peanut')
       event.add('frontiers:peanut', 'vintagedelight:peanut_crop')
       event.add('curios:charm', 'cosmiccore:portable_gravity_core')
})
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
yeet('gtceu:rtm_alloy_coil_block')
yeet('gtceu:hssg_coil_block')
yeet('gtceu:naquadah_coil_block')
yeet('gtceu:trinium_coil_block')
yeet('gtceu:tritanium_coil_block')
yeet('vintagedelight:ghost_charcoal')

ServerEvents.recipes(event => {

       //MISC REMOVALS
       event.remove({ id: 'gtceu:extractor/extract_luminite_dust' })
       event.remove({ id: 'gtceu:shaped_fluid_container/casing_primitive_bricks' })
       event.remove({ id: 'gtceu:extractor/extract_luminite_ingot' })
       event.remove({ id: 'gtceu:extractor/extract_luminite_block' })
       event.remove({ id: 'gtceu:extractor/extract_luminite_nugget' })
       event.remove({ id: 'gtceu:arc_furnace/arc_empty_mold' })
       event.remove({ id: 'gtceu:macerator/macerate_empty_mold' })
       event.remove({ id: 'gtceu:arc_furnace/arc_plate_casting_mold' })
       event.remove({ id: 'gtceu:macerator/macerate_plate_casting_mold' })
       event.remove({ id: 'gtceu:macerator/macerate_gear_casting_mold' })
       event.remove({ id: 'gtceu:arc_furnace/arc_gear_casting_mold' })
       event.remove({ id: 'gtceu:arc_furnace/arc_credit_casting_mold' })
       event.remove({ id: 'gtceu:macerator/macerate_credit_casting_mold' })
       event.remove({ id: 'gtceu:macerator/macerate_bottle_casting_mold' })
       event.remove({ id: 'gtceu:arc_furnace/arc_bottle_casting_mold' })
       event.remove({ id: 'gtceu:arc_furnace/arc_ingot_casting_mold' })
       event.remove({ id: 'gtceu:macerator/macerate_ingot_casting_mold' })
       event.remove({ id: 'gtceu:macerator/macerate_ball_casting_mold' })
       event.remove({ id: 'gtceu:arc_furnace/arc_ball_casting_mold' })
       event.remove({ id: 'gtceu:arc_furnace/arc_block_casting_mold' })
       event.remove({ id: 'gtceu:macerator/macerate_block_casting_mold' })
       event.remove({ id: 'gtceu:macerator/macerate_nugget_casting_mold' })
       event.remove({ id: 'gtceu:arc_furnace/arc_nugget_casting_mold' })
       event.remove({ id: 'gtceu:arc_furnace/arc_cylinder_casting_mold' })
       event.remove({ id: 'gtceu:macerator/macerate_cylinder_casting_mold' })
       event.remove({ id: 'gtceu:macerator/macerate_anvil_casting_mold' })
       event.remove({ id: 'gtceu:arc_furnace/arc_anvil_casting_mold' })
       event.remove({ id: 'gtceu:arc_furnace/arc_name_casting_mold' })
       event.remove({ id: 'gtceu:macerator/macerate_name_casting_mold' })
       event.remove({ id: 'gtceu:macerator/macerate_small_gear_casting_mold' })
       event.remove({ id: 'gtceu:arc_furnace/arc_small_gear_casting_mold' })
       event.remove({ id: 'gtceu:arc_furnace/arc_rotor_casting_mold' })
       event.remove({ id: 'gtceu:macerator/macerate_rotor_casting_mold' })
       event.remove({ id: 'gtceu:macerator/macerate_pill_casting_mold' })
       event.remove({ id: 'gtceu:arc_furnace/arc_pill_casting_mold' })
       event.remove({ id: 'gtceu:macerator/macerate_plate_extruder_mold' })
       event.remove({ id: 'gtceu:arc_furnace/arc_plate_extruder_mold' })
       event.remove({ id: 'gtceu:arc_furnace/arc_rod_extruder_mold' })
       event.remove({ id: 'gtceu:macerator/macerate_rod_extruder_mold' })
       event.remove({ id: 'gtceu:arc_furnace/arc_rod_extruder_mold' })
       event.remove({ id: 'gtceu:arc_furnace/arc_ring_extruder_mold' })
       event.remove({ id: 'gtceu:macerator/macerate_ring_extruder_mold' })
       event.remove({ id: 'gtceu:macerator/macerate_cell_extruder_mold' })
       event.remove({ id: 'gtceu:arc_furnace/arc_cell_extruder_mold' })
       event.remove({ id: 'gtceu:arc_furnace/arc_ingot_extruder_mold' })
       event.remove({ id: 'gtceu:macerator/macerate_ingot_extruder_mold' })
       event.remove({ id: 'gtceu:macerator/macerate_wire_extruder_mold' })
       event.remove({ id: 'gtceu:arc_furnace/arc_wire_extruder_mold' })
       event.remove({ id: 'gtceu:arc_furnace/arc_tiny_pipe_extruder_mold' })
       event.remove({ id: 'gtceu:macerator/macerate_tiny_pipe_extruder_mold' })
       event.remove({ id: 'gtceu:macerator/macerate_small_pipe_extruder_mold' })
       event.remove({ id: 'gtceu:arc_furnace/arc_small_pipe_extruder_mold' })
       event.remove({ id: 'gtceu:arc_furnace/arc_normal_pipe_extruder_mold' })
       event.remove({ id: 'gtceu:macerator/macerate_normal_pipe_extruder_mold' })
       event.remove({ id: 'gtceu:macerator/macerate_large_pipe_extruder_mold' })
       event.remove({ id: 'gtceu:arc_furnace/arc_large_pipe_extruder_mold' })
       event.remove({ id: 'gtceu:arc_furnace/arc_huge_pipe_extruder_mold' })
       event.remove({ id: 'gtceu:macerator/macerate_huge_pipe_extruder_mold' })
       event.remove({ id: 'gtceu:macerator/macerate_block_extruder_mold' })
       event.remove({ id: 'gtceu:arc_furnace/arc_block_extruder_mold' })
       event.remove({ id: 'gtceu:arc_furnace/arc_gear_extruder_mold' })
       event.remove({ id: 'gtceu:macerator/macerate_gear_extruder_mold' })
       event.remove({ id: 'gtceu:macerator/macerate_bottle_extruder_mold' })
       event.remove({ id: 'gtceu:arc_furnace/arc_bottle_extruder_mold' })
       event.remove({ id: 'gtceu:arc_furnace/arc_foil_extruder_mold' })
       event.remove({ id: 'gtceu:macerator/macerate_foil_extruder_mold' })
       event.remove({ id: 'gtceu:macerator/macerate_small_gear_extruder_mold' })
       event.remove({ id: 'gtceu:arc_furnace/arc_small_gear_extruder_mold' })
       event.remove({ id: 'gtceu:arc_furnace/arc_long_rod_extruder_mold' })
       event.remove({ id: 'gtceu:macerator/macerate_long_rod_extruder_mold' })
       event.remove({ id: 'gtceu:macerator/macerate_rotor_extruder_mold' })
       event.remove({ id: 'gtceu:arc_furnace/arc_rotor_extruder_mold' })
       event.remove({ id: 'gtceu:macerator/macerate_bolt_extruder_mold' })
       event.remove({ id: 'gtceu:arc_furnace/arc_bolt_extruder_mold' })
       event.remove({ id: 'gtceu:shaped/good_circuit_board' })
       event.remove({ id: 'experienceobelisk:metamorpher/netherite_ingot_metamorphosis' })
       event.remove({ id: 'biomeswevegone:golden_apple_from_green_apple' })
       event.remove({ id: 'bhc:god_apple' })
       event.remove({ id: 'create:industrial_iron_block_from_ingots_iron_stonecutting' })


       event.remove({ id: 'paraglider:paraglider' })
       event.remove({ id: 'gtceu:alloy_smelter/rubber_bar' })
       event.shaped('paraglider:paraglider', [
              'SWS',
              'WSW',
              'S S',
       ], {
              W: 'cosmiccore:waxed_leather',
              S: 'minecraft:stick'
       })
       event.shaped('nether_remastered:seal_of_the_underworld_item', [
              'SWS',
              'WSW',
              'SWS',
       ], {
              S: 'minecraft:echo_shard',
              W: 'kubejs:seal_shards'
       })
       event.shaped('cosmiccore:drygmy_grove', [
              'PCP',
              'WSW',
              'PCP',
       ], {
              C: '#gtceu:circuits/ev',
              W: 'ars_nouveau:drygmy_charm',
              S: 'gtceu:clean_machine_casing',
              P: 'gtceu:palladium_plate'
       })
       event.shaped('gtceu:industrial_stoneworks', [
              'PCP',
              'WSW',
              'PCP',
       ], {
              C: '#gtceu:circuits/iv',
              W: 'gtceu:tungsten_grinding_head',
              S: 'gtceu:iv_rock_crusher',
              P: 'gtceu:titanium_carbide_plate'
       })
       event.shaped('gtceu:industrial_grade_floral_propagator', [
              'PCP',
              'WSW',
              'PCP',
       ], {
              C: '#gtceu:circuits/ev',
              W: 'gtceu:white_lamp',
              S: 'gtceu:ev_flora_nurturer',
              P: 'gtceu:palladium_plate'
       })
       event.shaped('kubejs:reinforced_respirator', [
              ' R ',
              'RFR',
              'CSC',
       ], {
              C: 'gtceu:charcoal_dust',
              S: 'gtceu:steel_plate',
              F: 'thinair:respirator',
              R: 'gtceu:steel_ring'

       })
       event.shaped('gtceu:molten_salt_reactor', [
              'CIC',
              'CPC',
              'CIC',
       ], {
              P: 'gtceu:titanium_pipe_casing',
              C: 'cosmiccore:high_temperature_fission_casing',
              I: 'gtceu:ev_electric_pump'
       })
       event.shaped('gtceu:pulse_heat_exchanger', [
              'CIC',
              'CPC',
              'CIC',
       ], {
              P: 'gtceu:titanium_pipe_casing',
              C: 'cosmiccore:highly_conductive_fission_casing',
              I: 'gtceu:hv_voltage_coil'
       })
       event.remove({ output: 'architects_palette:charcoal_block' })
       event.shaped('architects_palette:charcoal_block', [
              'CC',
              'CC',
       ], {
              C: 'minecraft:charcoal'
       })

       event.recipes.gtceu.assembler('ug_catalyst')
              .itemInputs(['minecraft:heart_of_the_sea', 'aether:bronze_dungeon_key', 'aether:silver_dungeon_key', 'aether:gold_dungeon_key', '#gtceu:circuits/hv',])
              .inputFluids('gtceu:source_oils 12000')
              .itemOutputs('undergarden:catalyst')
              .circuit(2)
              .duration(160)
              .EUt(GTValues.VA[GTValues.HV]);
       event.recipes.gtceu.forge_hammer('shatter_the_seal')
              .itemInputs('nether_remastered:seal_of_the_underworld_item')
              .itemOutputs('8x kubejs:seal_shards')
              .duration(160)
              .EUt(GTValues.VA[GTValues.LV]);
       event.remove({ id: 'gtceu:compressor/compress_plate_dust_treated_wood' })
       event.recipes.gtceu.compressor('treated_plank_better')
              .itemInputs('gtceu:treated_wood_dust')
              .itemOutputs('gtceu:treated_wood_plate')
              .duration(50)
              .EUt(2);
       event.remove({ id: 'gtceu:shapeless/coated_board_1x' })
       event.remove({ id: 'gtceu:shaped/coated_board' })
       event.recipes.gtceu.bender('resin_board_basic')
              .itemInputs(['gtceu:soulresin_plate', 'gtceu:treated_wood_plate'])
              .itemOutputs('gtceu:resin_circuit_board')
              .duration(50)
              .EUt(2);
       event.remove({ id: "gtceu:shaped/basic_circuit_board" })
       event.recipes.gtceu.assembler('assembled_board_bad')
              .itemInputs(['gtceu:resin_circuit_board', '8x gtceu:copper_single_wire'])
              .inputFluids('gtceu:cinderwax 288')
              .itemOutputs('gtceu:resin_printed_circuit_board')
              .duration(50)
              .EUt(4);
       event.recipes.gtceu.chemical_dehydrator('lava_to_magma_block')
              .inputFluids('minecraft:lava 1000')
              .itemOutputs('minecraft:magma_block')
              .duration(300)
              .EUt(GTValues.VA[GTValues.MV]);
       event.recipes.gtceu.chemical_dehydrator('magma_block_to_netherrack')
              .itemInputs('minecraft:magma_block')
              .itemOutputs('minecraft:netherrack')
              .duration(100)
              .EUt(GTValues.VA[GTValues.MV]);
       //Basic Circuit Shit, the steam assembler re-routes all the basic parts to be mandatory in it, as otherwise who cares.
       event.remove({ output: "gtceu:resistor" })
       event.recipes.gtceu.assembler('resistor_good')
              .itemInputs(['gtceu:coke_dust', '4x gtceu:fine_iesnium_wire'])
              .inputFluids('gtceu:soulresin 144')
              .itemOutputs('4x gtceu:resistor')
              .duration(90)
              .EUt(16);
       //TODO - A Version with Annealed Iesnium
       event.recipes.gtceu.macerator('echo_shard_shrieker')
              .itemInputs('minecraft:sculk_shrieker')
              .chancedOutput('minecraft:echo_shard', 2500, 500)
              .duration(160)
              .EUt(GTValues.VA[GTValues.LV]);
       event.recipes.gtceu.macerator('echo_shard_sensor')
              .itemInputs('minecraft:sculk_sensor')
              .chancedOutput('minecraft:echo_shard', 2500, 500)
              .duration(160)
              .EUt(GTValues.VA[GTValues.LV]);
       event.recipes.gtceu.macerator('echo_shard_catalyst')
              .itemInputs('minecraft:sculk_catalyst')
              .chancedOutput('minecraft:echo_shard', 2500, 500)
              .duration(160)
              .EUt(GTValues.VA[GTValues.LV]);
       event.recipes.gtceu.macerator('echo_shard_sculk')
              .itemInputs('minecraft:sculk')
              .chancedOutput('minecraft:echo_shard', 250, 500)
              .duration(160)
              .EUt(GTValues.VA[GTValues.LV]);
       event.recipes.gtceu.nether_catalyzer('cosmiccore:blackstone_pustule_growth')
              .itemInputs('biomesoplenty:blackstone_bulb')
              .itemOutputs('cosmiccore:blackstone_pustule')
              .duration(160)
              .EUt(GTValues.VA[GTValues.LV] / 2);
       event.recipes.gtceu.cutter('cosmiccore:blackstone_pustule_slice')
              .itemInputs('cosmiccore:blackstone_pustule')
              .itemOutputs('3x biomesoplenty:blackstone_bulb')
              .chancedOutput(Item.of('biomesoplenty:blackstone_bulb', 1), 5000, 500)
              .duration(100)
              .EUt(GTValues.VA[GTValues.LV] / 2);
       event.recipes.gtceu.cutter('stone_slab_to_pressureplate')
              .itemInputs('minecraft:stone_slab')
              .itemOutputs('4x minecraft:stone_pressure_plate')
              .duration(160)
              .EUt(GTValues.VA[GTValues.LV] / 2);
       event.recipes.gtceu.cutter('stone_plate_to_button')
              .itemInputs('minecraft:stone_pressure_plate')
              .itemOutputs('4x minecraft:stone_button')
              .duration(160)
              .EUt(GTValues.VA[GTValues.LV] / 2);
       event.recipes.gtceu.mixer('cosmiccore:bioslurry_mixing')
              .itemInputs(['2x minecraft:crimson_fungus', '2x minecraft:warped_fungus', '2x cosmiccore:blackstone_pustule', 'cosmiccore:overloaded_pearls'])
              .inputFluids('gtceu:nether_sediment_sludge 5000')
              .inputFluids('minecraft:water 5000')
              .outputFluids('gtceu:nether_bioslurry 5000')
              .duration(120)
              .circuit(2)
              .EUt(GTValues.VA[GTValues.LV])
       event.recipes.gtceu.brewery('cosmiccore:crude_source_oils')
              .itemInputs('8x kubejs:washed_magebloom')
              .inputFluids('gtceu:nether_bioslurry 2000')
              .outputFluids('gtceu:crude_source_oils 1000')
              .duration(120)
              .EUt(GTValues.VA[GTValues.LV])
       event.remove({ id: 'gtceu:macerator/macerate_netherrack' })
       event.recipes.gtceu.macerator('cosmicfrontiers:macerate_netherrack')
              .itemInputs('minecraft:netherrack')
              .itemOutputs('gtceu:netherrack_dust')
              .duration(60)
              .EUt(2)
       event.recipes.gtceu.mixer('cosmiccore:sediment_sludge_mixing')
              .itemInputs(['4x biomesoplenty:blackstone_bulb', '5x gtceu:netherrack_dust', '4x minecraft:crimson_fungus'])
              .inputFluids('biomesoplenty:blood 1000')
              .outputFluids('gtceu:nether_sediment_sludge 1000')
              .duration(80)
              .circuit(1)
              .EUt(GTValues.VA[GTValues.LV]);
       event.recipes.gtceu.mixer('cosmiccore:sediment_sludge_mixing_good')
              .itemInputs(['2x biomesoplenty:blackstone_bulb', '3x gtceu:netherrack_dust', '2x minecraft:crimson_fungus'])
              .inputFluids('gtceu:nether_sediment_sludge 1000')
              .inputFluids('minecraft:water 1000')
              .outputFluids('gtceu:nether_sediment_sludge 2000')
              .duration(80)
              .circuit(1)
              .EUt(GTValues.VA[GTValues.LV]);
       event.recipes.gtceu.flora_nurturer('cosmiccore:pearl_cultivation')
              .notConsumable('nethersdelight:propelpearl')
              .inputFluids(Fluid.of('gtceu:nether_sediment_sludge', 250))
              .itemOutputs('2x cosmiccore:overloaded_pearls')
              .itemOutputs('2x nethersdelight:propelpearl')
              .chancedOutput(Item.of('nethersdelight:propelpearl', 1), 5000, 500)
              .duration(160)
              .EUt(16);
       event.recipes.gtceu.flora_nurturer('pearl_cultivation_super')
              .notConsumable('nethersdelight:propelpearl')
              .inputFluids('gtceu:nutrient_solution 50')
              .itemOutputs('8x cosmiccore:overloaded_pearls')
              .itemOutputs('4x nethersdelight:propelpearl')
              .chancedOutput(Item.of('nethersdelight:propelpearl', 3), 5000, 500)
              .duration(160)
              .EUt(16);
       event.recipes.gtceu.flora_nurturer('cosmiccore:magebloom_cultivation')
              .notConsumable('ars_nouveau:magebloom_crop')
              .inputFluids(Fluid.of('gtceu:nether_sediment_sludge', 100))
              .itemOutputs('4x ars_nouveau:magebloom')
              .chancedOutput(Item.of('ars_nouveau:magebloom', 2), 2500, 750)
              .duration(160)
              .EUt(GTValues.VA[GTValues.LV] / 2);
       event.recipes.gtceu.flora_nurturer('cosmiccore:magebloom_cultivation_aether')
              .notConsumable('ars_nouveau:magebloom_crop')
              .inputFluids(Fluid.of('gtceu:aether_augmented_sediment', 100))
              .itemOutputs('8x ars_nouveau:magebloom')
              .chancedOutput(Item.of('ars_nouveau:magebloom', 4), 5000, 750)
              .duration(160)
              .EUt(GTValues.VA[GTValues.LV] / 2);
       event.recipes.gtceu.flora_nurturer('cosmiccore:magebloom_cultivation_nutrient_solution')
              .notConsumable('ars_nouveau:magebloom_crop')
              .inputFluids('gtceu:nutrient_solution 50')
              .itemOutputs('16x ars_nouveau:magebloom')
              .chancedOutput(Item.of('ars_nouveau:magebloom', 6), 5000, 750)
              .duration(160)
              .EUt(GTValues.VA[GTValues.LV] / 2);
       event.recipes.gtceu.mixer('cosmiccore:soul_salt_water_mixing')
              .itemInputs('4x legendarysurvivaloverhaul:ice_fern_leaf')
              .inputFluids(Fluid.of('minecraft:water', 4000))
              .outputFluids(Fluid.of('gtceu:salt_water', 2000))
              .duration(160)
              .EUt(GTValues.VA[GTValues.LV] / 2);
       event.recipes.gtceu.mana_simulator('cosmiccore:mechanical_thermalily')
              .notConsumable('kubejs:mechanical_thermalily')
              .inputFluids('minecraft:lava 1000')
              .outputFluids(Fluid.of('gtceu:potent_mana', 2000))
              .duration(900)
              .EUt(GTValues.VA[GTValues.EV]);
       event.recipes.gtceu.mana_simulator('cosmiccore:mechanical_rafflowsia')
              .notConsumable('kubejs:mechanical_rafflowsia')
              .itemInputs('10x #minecraft:flowers')
              .outputFluids(Fluid.of('gtceu:potent_mana', 2500))
              .duration(900)
              .EUt(GTValues.VA[GTValues.EV]);
       event.recipes.gtceu.mana_simulator('cosmiccore:mechanical_munchdew')
              .notConsumable('kubejs:mechanical_munchdew')
              .itemInputs('100x #minecraft:leaves')
              .outputFluids(Fluid.of('gtceu:potent_mana', 2000))
              .duration(1600)
              .EUt(GTValues.VA[GTValues.EV]);
       event.recipes.gtceu.mana_simulator('cosmiccore:mechanical_kekimurus')
              .notConsumable('kubejs:mechanical_kekimurus')
              .itemInputs('minecraft:cake')
              .outputFluids(Fluid.of('gtceu:potent_mana', 3000))
              .duration(450)
              .EUt(GTValues.VA[GTValues.EV]);
       event.recipes.gtceu.mana_simulator('cosmiccore:mechanical_arcana')
              .notConsumable('kubejs:mechanical_rosa_arcana')
              .inputFluids('experienceobelisk:cognitium 500')
              .outputFluids(Fluid.of('gtceu:potent_mana', 2000))
              .duration(900)
              .EUt(GTValues.VA[GTValues.EV]);
       event.recipes.gtceu.mana_simulator('cosmiccore:mechanical_entropinnyum')
              .notConsumable('kubejs:mechanical_entropinnyum')
              .itemInputs('4x minecraft:tnt')
              .outputFluids(Fluid.of('gtceu:potent_mana', 3000))
              .duration(120)
              .EUt(GTValues.VA[GTValues.EV]);
       event.recipes.gtceu.extractor('luminite_fluid_extract')
              .itemInputs('gtceu:luminite_ingot')
              .outputFluids(Fluid.of('gtceu:luminite', 144))
              .duration(48)
              .EUt(GTValues.VA[GTValues.HV]);
       event.recipes.gtceu.autoclave('lumi_utherium_bad')
              .inputFluids('gtceu:luminite 144')
              .itemInputs('2x gtceu:utherium_dust')
              .itemOutputs('gtceu:luminescent_utherium_ingot')
              .duration(480)
              .EUt(GTValues.VA[GTValues.HV]);
       event.recipes.gtceu.autoclave('lumi_utherium_good')
              .inputFluids('gtceu:luminite 144')
              .itemInputs('gtceu:utherium_gem')
              .itemOutputs('gtceu:luminescent_utherium_ingot')
              .duration(120)
              .EUt(GTValues.VA[GTValues.HV]);
       event.recipes.gtceu.alloy_blast_smelter('virtue_meld_molten_bad')
              .inputFluids('gtceu:galvanized_ethersteel 2304')
              .inputFluids('gtceu:luminite 1152')
              .itemInputs('8x gtceu:luminescent_utherium_ingot')
              .itemInputs('8x botania:life_essence')
              .outputFluids('gtceu:molten_virtue_meld 4608')
              .blastFurnaceTemp(4500)
              .circuit(4)
              .duration(9600)
              .EUt(GTValues.VA[GTValues.EV]);
       event.recipes.gtceu.alloy_blast_smelter('virtue_meld_molten_good')
              .notConsumableFluid('gtceu:molten_virtue_meld 1152')
              .inputFluids('gtceu:luminite 1152')
              .itemInputs('16x gtceu:luminescent_utherium_ingot')
              .outputFluids('gtceu:molten_virtue_meld 4608')
              .duration(4800)
              .circuit(14)
              .blastFurnaceTemp(4500)
              .EUt(GTValues.VA[GTValues.EV]);
       event.recipes.gtceu.vacuum_freezer('virtue_meld_cooling')
              .notConsumable('gtceu:ingot_casting_mold')
              .inputFluids('gtceu:molten_virtue_meld 144')
              .itemOutputs('gtceu:virtue_meld_ingot')
              .duration(300)
              .EUt(GTValues.VA[GTValues.HV]);
       event.recipes.gtceu.electric_blast_furnace('luminite_blasting_slow')
              .itemInputs('gtceu:luminite_dust')
              .itemOutputs('gtceu:hot_luminite_ingot')
              .circuit(1)
              .blastFurnaceTemp(3600)
              .duration(2400)
              .EUt(GTValues.VA[GTValues.HV]);
       event.recipes.gtceu.vacuum_freezer('luminite_cooling')
              .itemInputs('gtceu:hot_luminite_ingot')
              .inputFluids('gtceu:ethane 250')
              .itemOutputs('gtceu:luminite_ingot')
              .duration(160)
              .EUt(GTValues.VA[GTValues.HV]);
       event.recipes.gtceu.electric_blast_furnace('luminite_blasting_fast')
              .itemInputs('gtceu:luminite_dust')
              .inputFluids('gtceu:helium 100')
              .itemOutputs('gtceu:hot_luminite_ingot')
              .circuit(2)
              .blastFurnaceTemp(3600)
              .duration(1800)
              .EUt(GTValues.VA[GTValues.HV])
       event.recipes.gtceu.electric_blast_furnace('manasteel_first')
              .itemInputs(['8x gtceu:blue_alloy_ingot', '8x botania:manaweave_cloth'])
              .inputFluids('gtceu:crude_source_oils 250')
              .itemOutputs(['12x botania:manasteel_ingot', '2x botania:manaweave_cloth'])
              .circuit(1)
              .blastFurnaceTemp(900)
              .duration(2400)
              .EUt(GTValues.VA[GTValues.MV]);
       event.recipes.gtceu.spooling_machine('mana_string_awful')
              .itemInputs(['legendarysurvivaloverhaul:cold_string', 'malum:arcane_spirit'])
              .itemOutputs('botania:mana_string')
              .duration(60)
              .EUt(GTValues.VA[GTValues.LV]);
       event.recipes.gtceu.assembler('nano_space_default')
              .itemInputs(['gtceu:nanomuscle_chestplate', '2x ad_astra:large_gas_tank'])
              .itemOutputs(Item.of('cosmiccore:space_nanomuscle_chestplate', '{affix_data:{sockets:0}}'))
              .circuit(1)
              .duration(600)
              .EUt(GTValues.VA[GTValues.HV]);
       event.recipes.gtceu.assembler('adv_nano_space_default')
              .itemInputs(['gtceu:advanced_nanomuscle_chestplate', '2x ad_astra:large_gas_tank'])
              .itemOutputs(Item.of('cosmiccore:space_advanced_nanomuscle_chestplate', '{affix_data:{sockets:0}}'))
              .circuit(1)
              .duration(600)
              .EUt(GTValues.VA[GTValues.HV]);
       event.recipes.gtceu.assembler('reactor_casing_default')
              .itemInputs(['gtceu:titanium_frame', '4x gtceu:double_lead_plate', '2x gtceu:beryllium_plate'])
              .itemOutputs('cosmiccore:high_temperature_fission_casing')
              .circuit(2)
              .duration(160)
              .EUt(GTValues.VA[GTValues.EV]);
       event.recipes.gtceu.assembler('heat_exchanger_default')
              .itemInputs(['gtceu:titanium_frame', '4x gtceu:stainless_steel_plate', '2x gtceu:annealed_copper_plate'])
              .itemOutputs('cosmiccore:highly_conductive_fission_casing')
              .circuit(2)
              .duration(160)
              .EUt(GTValues.VA[GTValues.EV]);
       event.recipes.gtceu.assembler('virtue_casing')
              .itemInputs(['cosmiccore:resonant_virtue_meld_frame', '6x cosmiccore:resonant_virtue_meld_plate'])
              .itemOutputs('cosmiccore:highly_conductive_fission_casing')
              .circuit(6)
              .duration(320)
              .EUt(GTValues.VA[GTValues.IV]);
       event.recipes.gtceu.assembler('naq_pressure_casing')
              .itemInputs(['gtceu:tungsten_frame', '6x gtceu:naquadah_plate'])
              .itemOutputs('cosmiccore:naquadah_pressure_resistant_casing')
              .circuit(6)
              .duration(320)
              .EUt(GTValues.VA[GTValues.IV]);
       event.recipes.gtceu.assembler('phenolic_board_good')
              .itemInputs('botania:manaweave_cloth')
              .inputFluids('gtceu:glue 100')
              .itemOutputs('3x gtceu:phenolic_circuit_board')
              .circuit(1)
              .duration(20)
              .EUt(GTValues.VA[GTValues.LV]);
       // event.shaped('skilltree:wisdom_scroll', [
       //        'SWS',
       //        'WDW',
       //        'SWS',
       // ], {
       //        S: 'minecraft:paper',
       //        W: 'paraglider:spirit_orb',
       //        D: 'apotheosis:gem_dust'
       // })
       event.shaped('gtceu:leaching_plant', [
              'QSQ',
              'DCD',
              'WSW',
       ], {
              S: '#gtceu:circuits/ev',
              W: 'gtceu:ev_conveyor_module',
              D: 'gtceu:ev_electric_pump',
              C: 'gtceu:clean_machine_casing',
              Q: 'gtceu:aluminium_drum'
       })
       event.shaped('cosmiccore:space_advanced_nanomuscle_chestplate', [
              'CJS',
              'WAW',
              'PIP',
       ], {
              C: '#forge:tools/wire_cutters',
              J: 'gtceu:advanced_electric_jetpack',
              S: '#forge:tools/screwdrivers',
              A: 'cosmiccore:space_nanomuscle_chestplate',
              W: 'gtceu:lpic_chip',
              I: '#gtceu:circuits/iv',
              P: 'gtceu:platinum_quadruple_wire'

       })
       event.remove({ type: 'architects_palette:warping' })
       event.recipes.gtceu.nether_catalyzer('nebulite')
              .itemInputs('minecraft:diorite')
              .itemOutputs('architects_palette:nebulite')
              .duration(10)
              .EUt(GTValues.VA[GTValues.LV] / 2);
       event.recipes.gtceu.nether_catalyzer('architects_palette:entrails')
              .itemInputs('architects_palette:rotten_flesh_block')
              .itemOutputs('architects_palette:entrails')
              .duration(10)
              .EUt(GTValues.VA[GTValues.LV] / 2);
       event.recipes.gtceu.nether_catalyzer('architects_palette:esoterrack')
              .itemInputs('minecraft:andesite')
              .itemOutputs('architects_palette:esoterrack')
              .duration(10)
              .EUt(GTValues.VA[GTValues.LV] / 2);
       event.recipes.gtceu.nether_catalyzer('architects_palette:hadaline_lamp')
              .itemInputs('architects_palette:abyssaline_lamp')
              .itemOutputs('architects_palette:hadaline_lamp')
              .duration(10)
              .EUt(GTValues.VA[GTValues.LV] / 2);
       event.recipes.gtceu.nether_catalyzer('architects_palette:twisted_leaves')
              .itemInputs('#minecraft:leaves')
              .itemOutputs('architects_palette:twisted_leaves')
              .duration(10)
              .EUt(GTValues.VA[GTValues.LV] / 2);
       event.recipes.gtceu.nether_catalyzer('architects_palette:twisted_sapling')
              .itemInputs('#minecraft:saplings')
              .itemOutputs('architects_palette:twisted_sapling')
              .duration(10)
              .EUt(GTValues.VA[GTValues.LV] / 2);
       event.recipes.gtceu.nether_catalyzer('architects_palette:moonshale')
              .itemInputs('minecraft:stone')
              .itemOutputs('architects_palette:moonshale')
              .duration(10)
              .EUt(GTValues.VA[GTValues.LV] / 2);
       event.recipes.gtceu.nether_catalyzer('architects_palette:moonshale_bricks')
              .itemInputs('minecraft:stone_bricks')
              .itemOutputs('architects_palette:moonshale_bricks')
              .duration(10)
              .EUt(GTValues.VA[GTValues.LV] / 2);
       event.recipes.gtceu.nether_catalyzer('architects_palette:craterstone')
              .itemInputs('minecraft:cobblestone')
              .itemOutputs('architects_palette:craterstone')
              .duration(10)
              .EUt(GTValues.VA[GTValues.LV] / 2);
       event.recipes.gtceu.nether_catalyzer('architects_palette:hadaline_tiles')
              .itemInputs('architects_palette:abyssaline_tiles')
              .itemOutputs('architects_palette:hadaline_tiles')
              .duration(10)
              .EUt(GTValues.VA[GTValues.LV] / 2);
       event.recipes.gtceu.nether_catalyzer('architects_palette:warpstone')
              .itemInputs('minecraft:clay')
              .itemOutputs('architects_palette:warpstone')
              .duration(10)
              .EUt(GTValues.VA[GTValues.LV] / 2);
       event.recipes.gtceu.nether_catalyzer('architects_palette:hadaline')
              .itemInputs('architects_palette:abyssaline')
              .itemOutputs('architects_palette:hadaline')
              .duration(10)
              .EUt(GTValues.VA[GTValues.LV] / 2);
       event.recipes.gtceu.nether_catalyzer('architects_palette:twisted_log')
              .itemInputs('#minecraft:logs')
              .itemOutputs('architects_palette:twisted_log')
              .duration(10)
              .EUt(GTValues.VA[GTValues.LV] / 2);
       event.recipes.gtceu.nether_catalyzer('architects_palette:onyx')
              .itemInputs('minecraft:granite')
              .itemOutputs('architects_palette:onyx')
              .duration(10)
              .EUt(GTValues.VA[GTValues.LV] / 2);
       event.recipes.gtceu.nether_catalyzer('architects_palette:moonstone')
              .itemInputs('architects_palette:sunstone')
              .itemOutputs('architects_palette:moonstone')
              .duration(10)
              .EUt(GTValues.VA[GTValues.LV] / 2);
       event.recipes.gtceu.nether_catalyzer('architects_palette:hadaline_plating')
              .itemInputs('architects_palette:abyssaline_plating')
              .itemOutputs('architects_palette:hadaline_plating')
              .duration(10)
              .EUt(GTValues.VA[GTValues.LV] / 2);
       event.recipes.gtceu.nether_catalyzer('architects_palette:chiseled_hadaline_bricks')
              .itemInputs('architects_palette:chiseled_abyssaline_bricks')
              .itemOutputs('architects_palette:chiseled_hadaline_bricks')
              .duration(10)
              .EUt(GTValues.VA[GTValues.LV] / 2);
       event.recipes.gtceu.nether_catalyzer('architects_palette:hadaline_bricks')
              .itemInputs('architects_palette:abyssaline_bricks')
              .itemOutputs('architects_palette:hadaline_bricks')
              .duration(10)
              .EUt(GTValues.VA[GTValues.LV] / 2);
       event.recipes.gtceu.nether_catalyzer('architects_palette:hadaline_pillar')
              .itemInputs('architects_palette:abyssaline_pillar')
              .itemOutputs('architects_palette:hadaline_pillar')
              .duration(10)
              .EUt(GTValues.VA[GTValues.LV] / 2);




       //TODO - Mechanical Flower Recipes
       event.recipes.botania.runic_altar('gtceu:mana_simulator', ['#gtceu:circuits/ev', 'gtceu:terrasteel_octal_wire', 'gtceu:terrasteel_octal_wire', 'gtceu:terrasteel_plate', 'gtceu:terrasteel_plate', 'gtceu:terrasteel_plate', 'gtceu:terrasteel_plate', 'botania:gourmaryllis', 'botania:entropinnyum', '#gtceu:circuits/ev', 'botania:narslimmus', 'botania:spectrolus', 'botania:blacker_lotus'], 250000)
       event.recipes.botania.runic_altar('kubejs:mechanical_thermalily', ['botania:thermalily', 'botania:blacker_lotus', '#gtceu:circuits/ev', 'botania:rune_mana', 'gtceu:manasteel_plate', 'gtceu:manasteel_plate', '#gtceu:circuits/ev'], 50000)
       event.recipes.botania.runic_altar('kubejs:mechanical_munchdew', ['botania:munchdew', 'botania:blacker_lotus', '#gtceu:circuits/ev', 'botania:rune_mana', 'gtceu:manasteel_plate', 'gtceu:manasteel_plate', '#gtceu:circuits/ev'], 50000)
       event.recipes.botania.runic_altar('kubejs:mechanical_kekimurus', ['botania:kekimurus', 'botania:blacker_lotus', '#gtceu:circuits/ev', 'botania:rune_mana', 'gtceu:manasteel_plate', 'gtceu:manasteel_plate', '#gtceu:circuits/ev'], 50000)
       event.recipes.botania.runic_altar('kubejs:mechanical_entropinnyum', ['botania:entropinnyum', 'botania:blacker_lotus', '#gtceu:circuits/ev', 'botania:rune_mana', 'gtceu:manasteel_plate', 'gtceu:manasteel_plate', '#gtceu:circuits/ev'], 50000)
       event.recipes.botania.runic_altar('kubejs:mechanical_rosa_arcana', ['botania:rosa_arcana', 'botania:blacker_lotus', '#gtceu:circuits/ev', 'botania:rune_mana', 'gtceu:manasteel_plate', 'gtceu:manasteel_plate', '#gtceu:circuits/ev'], 50000)
       event.recipes.botania.runic_altar('kubejs:mechanical_rafflowsia', ['botania:rafflowsia', 'botania:blacker_lotus', '#gtceu:circuits/ev', 'botania:rune_mana', 'gtceu:manasteel_plate', 'gtceu:manasteel_plate', '#gtceu:circuits/ev'], 50000)

       //Sleeping Bags & Antiblocks or I guess anything with the 16 dyes
       let dye = [
              'white',
              'orange',
              'magenta',
              'light_blue',
              'yellow',
              'lime',
              'pink',
              'gray',
              'light_gray',
              'cyan',
              'purple',
              'blue',
              'brown',
              'green',
              'red',
              'black'
       ]
       dye.forEach(dye => {
              event.remove({ id: `comforts:sleeping_bag_${dye}` })
              event.shaped(`comforts:sleeping_bag_${dye}`, [
                     '   ',
                     'WCC',
                     'LLL'
              ], {
                     W: `minecraft:${dye}_wool`,
                     C: `minecraft:${dye}_carpet`,
                     L: 'cosmiccore:waxed_leather'
              })
              event.shaped(`3x cosmiccore:antiblock_${dye}`, [
                     'GDG',
                     'GAG',
                     'GDG'
              ], {
                     G: 'minecraft:glass',
                     D: 'minecraft:glowstone_dust',
                     A: `minecraft:${dye}_dye`
              })
              event.recipes.gtceu.assembler(`cosmiccore:antiblock_${dye}`)
                     .itemInputs('8x minecraft:glass', '2x minecraft:glowstone_dust')
                     .inputFluids(`gtceu:${dye}_dye 144`)
                     .itemOutputs(`8x cosmiccore:antiblock_${dye}`)
                     .circuit(11)
                     .duration(80)
                     .EUt(GTValues.VA[GTValues.LV])
       })
       // replace all recipes kube can access using ender pearl to use pearl tag 
       event.replaceInput({ input: 'minecraft:ender_pearl' }, 'minecraft:ender_pearl', '#forge:ender_pearls')
       // allow ender overhaul pearls to be made into regular pearls using shapeless or extractor for potential high parallels
       event.shapeless('ender_pearl', '#endermanoverhaul:ender_pearls')
       event.recipes.gtceu.extractor('ender_pearl')
              .itemInputs('#endermanoverhaul:ender_pearls')
              .itemOutputs('minecraft:ender_pearl')
              .duration(100)
              .EUt(4)
})
