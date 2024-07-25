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
       event.add('gtceu:ppe_armor', 'kubejs:rebreather')
       event.add('gtceu:ppe_armor', 'thinair:respirator')
       event.add('thinair:breathing_equipment', 'kubejs:rebreather')
       event.add('curios:head', 'kubejs:rebreather')
       event.add('curios:head', 'kubejs:nano_respirator')
       event.add('curios:charm', 'gtceu:hv_item_magnet')
       event.add('curios:charm', 'gtceu:lv_item_magnet')

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
yeet('vintagedelight:ghost_charcoal')

ServerEvents.recipes(event => {

       //MISC REMOVALS
       event.remove({ id: 'gtceu:extractor/extract_luminite_dust' })
       event.remove({ id: 'gtceu:extractor/extract_luminite_ingot' })
       event.remove({ id: 'gtceu:extractor/extract_luminite_block' })
       event.remove({ id: 'gtceu:extractor/extract_luminite_nugget' })

       event.remove({ id: 'paraglider:paraglider' })
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
       event.shaped('gtceu:molten_salt_reactor', [
              'CIC',
              'CPC',
              'CIC',
       ], {
              P: 'gtceu:titanium_pipe_casing',
              C: 'cosmiccore:high_temperature_fission_casing',
              I: 'gtceu:ev_electric_pump'
       })
       event.remove({ output: 'architects_palette:charcoal_block' })
       event.shaped('architects_palette:charcoal_block', [
              'CC',
              'CC',
       ], {
              C: 'minecraft:charcoal'
       })
       event.recipes.gtceu.forge_hammer('shatter_the_seal')
              .itemInputs('nether_remastered:seal_of_the_underworld_item')
              .itemOutputs('8x kubejs:seal_shards')
              .duration(160)
              .EUt(GTValues.VA[GTValues.LV]);
       event.recipes.gtceu.macerator('echo_shard_schizm')
              .itemInputs('minecraft:sculk_catalyst')
              .chancedOutput('minecraft:echo_shard', 2500, 500)
              .duration(160)
              .EUt(GTValues.VA[GTValues.LV]);
       event.recipes.gtceu.macerator('echo_shard_schizm_worse')
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
              .duration(160)
              .EUt(GTValues.VA[GTValues.LV] / 2);
       event.recipes.gtceu.mixer('cosmiccore:sediment_sludge_mixing')
              .itemInputs('3x biomesoplenty:blackstone_bulb')
              .inputFluids(Fluid.of('biomesoplenty:blood', 1000))
              .outputFluids(Fluid.of('gtceu:nether_sediment_sludge', 750))
              .duration(80)
              .circuit(1)
              .EUt(GTValues.VA[GTValues.LV]);
       event.recipes.gtceu.mixer('cosmiccore:sediment_sludge_mixing_good')
              .itemInputs('2x biomesoplenty:blackstone_bulb')
              .inputFluids(Fluid.of('gtceu:ethanol', 250))
              .outputFluids(Fluid.of('gtceu:nether_sediment_sludge', 1500))
              .duration(40)
              .circuit(2)
              .EUt(GTValues.VA[GTValues.LV]);
       event.recipes.gtceu.flora_nurturer('cosmiccore:pearl_cultivation')
              .notConsumable('nethersdelight:propelpearl')
              .inputFluids(Fluid.of('gtceu:nether_sediment_sludge', 750))
              .itemOutputs('2x cosmiccore:overloaded_pearls')
              .itemOutputs('2x nethersdelight:propelpearl')
              .chancedOutput(Item.of('nethersdelight:propelpearl', 1), 5000, 500)
              .duration(160)
              .EUt(16);
       event.recipes.gtceu.nether_catalyzer('cosmiccore:pearl_catalyzing')
              .itemInputs('cosmiccore:overloaded_pearls')
              .outputFluids(Fluid.of('gtceu:ethanol', 250))
              .duration(120)
              .EUt(GTValues.VA[GTValues.LV]);
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
       event.recipes.gtceu.flora_nurturer('cosmiccore:soul_cultivation')
              .notConsumable('cold_sweat:soul_sprout')
              .notConsumable('minecraft:soul_sand')
              .inputFluids(Fluid.of('gtceu:nether_sediment_sludge', 500))
              .itemOutputs('cold_sweat:soul_sprout')
              .chancedOutput(Item.of('cold_sweat:soul_sprout', 1), 2500, 500)
              .duration(160)
              .EUt(GTValues.VA[GTValues.LV] / 2);
       event.recipes.gtceu.mixer('cosmiccore:soul_salt_water_mixing')
              .itemInputs('4x cold_sweat:soul_sprout')
              .inputFluids(Fluid.of('minecraft:water', 4000))
              .outputFluids(Fluid.of('gtceu:salt_water', 2000))
              .duration(160)
              .EUt(GTValues.VA[GTValues.LV] / 2);
       event.recipes.gtceu.mana_simulator('cosmiccore:mechanical_thermalily')
              .notConsumable('kubejs:mechanical_thermalily')
              .inputFluids('minecraft:lava 1000')
              .outputFluids(Fluid.of('gtceu:potent_mana', 2000))
              .duration(900)
              .EUt(GTValues.VA[GTValues.LV]);
       event.recipes.gtceu.mana_simulator('cosmiccore:mechanical_rafflowsia')
              .notConsumable('kubejs:mechanical_rafflowsia')
              .itemInputs('10x #minecraft:flowers')
              .outputFluids(Fluid.of('gtceu:potent_mana', 2500))
              .duration(900)
              .EUt(GTValues.VA[GTValues.LV]);
       event.recipes.gtceu.mana_simulator('cosmiccore:mechanical_munchdew')
              .notConsumable('kubejs:mechanical_munchdew')
              .itemInputs('100x #minecraft:leaves')
              .outputFluids(Fluid.of('gtceu:potent_mana', 2000))
              .duration(1600)
              .EUt(GTValues.VA[GTValues.LV]);
       event.recipes.gtceu.mana_simulator('cosmiccore:mechanical_kekimurus')
              .notConsumable('kubejs:mechanical_kekimurus')
              .itemInputs('minecraft:cake')
              .outputFluids(Fluid.of('gtceu:potent_mana', 3000))
              .duration(450)
              .EUt(GTValues.VA[GTValues.LV]);
       event.recipes.gtceu.mana_simulator('cosmiccore:mechanical_arcana')
              .notConsumable('kubejs:mechanical_rosa_arcana')
              .inputFluids('experienceobelisk:cognitium 500')
              .outputFluids(Fluid.of('gtceu:potent_mana', 2000))
              .duration(900)
              .EUt(GTValues.VA[GTValues.LV]);
       event.recipes.gtceu.mana_simulator('cosmiccore:mechanical_entropinnyum')
              .notConsumable('kubejs:mechanical_entropinnyum')
              .itemInputs('4x minecraft:tnt')
              .outputFluids(Fluid.of('gtceu:potent_mana', 3000))
              .duration(120)
              .EUt(GTValues.VA[GTValues.LV]);
       event.recipes.gtceu.extractor('luminite_fluid_extract')
              .itemInputs('gtceu:luminite_ingot')
              .outputFluids(Fluid.of('gtceu:luminite', 144))
              .duration(48)
              .EUt(GTValues.VA[GTValues.HV]);
       event.recipes.gtceu.autoclave('lumi_utherium_bad')
              .inputFluids('gtceu:luminite 144')
              .itemInputs('2x gtceu:utherium_dust')
              .itemOutputs('gtceu:luminescent_utherium_gem')
              .duration(480)
              .EUt(GTValues.VA[GTValues.HV]);
       event.recipes.gtceu.autoclave('lumi_utherium_good')
              .inputFluids('gtceu:luminite 144')
              .itemInputs('gtceu:utherium_gem')
              .itemOutputs('gtceu:luminescent_utherium_gem')
              .duration(120)
              .EUt(GTValues.VA[GTValues.HV]);
       event.recipes.gtceu.alloy_blast_smelter('virtue_meld_molten_bad')
              .inputFluids('gtceu:galvanized_ethersteel 2304')
              .inputFluids('gtceu:luminite 1152')
              .itemInputs('8x gtceu:luminescent_utherium_gem')
              .itemInputs('8x botania:life_essence')
              .outputFluids('gtceu:molten_virtue_meld 4608')
              .blastFurnaceTemp(4500)
              .circuit(4)
              .duration(9600)
              .EUt(GTValues.VA[GTValues.EV]);
       event.recipes.gtceu.alloy_blast_smelter('virtue_meld_molten_good')
              .chancedFluidInput(Fluid.of('gtceu:molten_virtue_meld', 1152), 0, 0)
              .inputFluids('gtceu:luminite 1152')
              .itemInputs('16x gtceu:luminescent_utherium_gem')
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
              .itemOutputs('gtceu:luminite_ingot')
              .circuit(1)
              .blastFurnaceTemp(3600)
              .duration(2400)
              .EUt(GTValues.VA[GTValues.HV]);
       event.recipes.gtceu.electric_blast_furnace('luminite_blasting_fast')
              .itemInputs('gtceu:luminite_dust')
              .inputFluids('gtceu:helium 1000')
              .itemOutputs('gtceu:luminite_ingot')
              .circuit(2)
              .blastFurnaceTemp(3600)
              .duration(1800)
              .EUt(GTValues.VA[GTValues.HV]);
       // event.recipes.gtceu.assembler('scroll_not_as_bad')
       //        .itemInputs(['ars_nouveau:blank_parchment', '6x paraglider:spirit_orb', '2x apotheosis:gem_dust'])
       //        .inputFluids('gtceu:source_oils 100')
       //        .itemOutputs('2x skilltree:wisdom_scroll')
       //        .circuit(1)
       //        .duration(600)
       //        .EUt(GTValues.VA[GTValues.LV]);
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


       //TODO - Mechanical Flower Recipes
       event.recipes.botania.runic_altar('gtceu:mana_simulator', ['botania:blacker_lotus', '#gtceu:circuits/mv', 'gtceu:manasteel_plate', 'gtceu:manasteel_plate', 'gtceu:manasteel_plate', 'gtceu:manasteel_plate', 'gtceu:manasteel_octal_wire', 'gtceu:manasteel_octal_wire'], 250000)
       event.recipes.botania.runic_altar('kubejs:mechanical_thermalily', ['botania:thermalily', 'botania:blacker_lotus', '#gtceu:circuits/mv', 'botania:rune_mana', 'gtceu:manasteel_plate', 'gtceu:manasteel_plate', '#gtceu:circuits/mv'], 50000)
       event.recipes.botania.runic_altar('kubejs:mechanical_munchdew', ['botania:munchdew', 'botania:blacker_lotus', '#gtceu:circuits/mv', 'botania:rune_mana', 'gtceu:manasteel_plate', 'gtceu:manasteel_plate', '#gtceu:circuits/mv'], 50000)
       event.recipes.botania.runic_altar('kubejs:mechanical_kekimurus', ['botania:kekimurus', 'botania:blacker_lotus', '#gtceu:circuits/mv', 'botania:rune_mana', 'gtceu:manasteel_plate', 'gtceu:manasteel_plate', '#gtceu:circuits/mv'], 50000)
       event.recipes.botania.runic_altar('kubejs:mechanical_entropinnyum', ['botania:entropinnyum', 'botania:blacker_lotus', '#gtceu:circuits/mv', 'botania:rune_mana', 'gtceu:manasteel_plate', 'gtceu:manasteel_plate', '#gtceu:circuits/mv'], 50000)
       event.recipes.botania.runic_altar('kubejs:mechanical_rosa_arcana', ['botania:rosa_arcana', 'botania:blacker_lotus', '#gtceu:circuits/mv', 'botania:rune_mana', 'gtceu:manasteel_plate', 'gtceu:manasteel_plate', '#gtceu:circuits/mv'], 50000)
       event.recipes.botania.runic_altar('kubejs:mechanical_rafflowsia', ['botania:rafflowsia', 'botania:blacker_lotus', '#gtceu:circuits/mv', 'botania:rune_mana', 'gtceu:manasteel_plate', 'gtceu:manasteel_plate', '#gtceu:circuits/mv'], 50000)

       //Sleeping Bags
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
              event.remove({ id: `comforts:sleeping_bag_${dye}`})
              event.shaped(`comforts:sleeping_bag_${dye}`, [
                     '   ',
                     'WCC',
                     'LLL'
              ], {
                     W: `minecraft:${dye}_wool`,
                     C: `minecraft:${dye}_carpet`,
                     L: 'cosmiccore:waxed_leather'
              })
       })
})

