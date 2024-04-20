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
       event.add('thinair:heavy_breathing_utility', 'kubejs:nano_respirator')
       event.add('thinair:breathing_equipment', 'kubejs:nano_respirator')
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

       event.remove({ output: 'architects_palette:charcoal_block' })
       event.shaped('architects_palette:charcoal_block', [
              'CC',
              'CC',
       ], {
              C: 'minecraft:charcoal'
       })
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
              .itemInputs('biomesoplenty:blackstone_bulb')
              .inputFluids(Fluid.of('minecraft:water', 1000))
              .outputFluids(Fluid.of('gtceu:nether_sediment_sludge', 1000))
              .duration(80)
              .circuit(1)
              .EUt(GTValues.VA[GTValues.LV]);
       event.recipes.gtceu.mixer('cosmiccore:sediment_sludge_mixing_good')
              .itemInputs('2x biomesoplenty:blackstone_bulb')
              .inputFluids(Fluid.of('gtceu:ethanol', 250))
              .outputFluids(Fluid.of('gtceu:nether_sediment_sludge', 1000))
              .duration(40)
              .circuit(2)
              .EUt(GTValues.VA[GTValues.LV]);
       event.recipes.gtceu.flora_nurturer('cosmiccore:pearl_cultivation')
              .notConsumable('nethersdelight:propelpearl')
              .inputFluids(Fluid.of('gtceu:nether_sediment_sludge', 500))
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



       //TODO - Mechanical Flower Recipes
       event.recipes.botania.runic_altar('gtceu:mana_simulator', ['botania:blacker_lotus', '#gtceu:circuits/mv', 'gtceu:mana_steel_plate', 'gtceu:mana_steel_plate', 'gtceu:mana_steel_plate', 'gtceu:mana_steel_plate', 'gtceu:mana_steel_octal_wire', 'gtceu:mana_steel_octal_wire'], 250000)
       event.recipes.botania.runic_altar('kubejs:mechanical_thermalily', ['botania:thermalily', 'botania:blacker_lotus', '#gtceu:circuits/mv', 'botania:rune_mana', 'gtceu:mana_steel_plate', 'gtceu:mana_steel_plate', '#gtceu:circuits/mv'], 50000)
       event.recipes.botania.runic_altar('kubejs:mechanical_munchdew', ['botania:munchdew', 'botania:blacker_lotus', '#gtceu:circuits/mv', 'botania:rune_mana', 'gtceu:mana_steel_plate', 'gtceu:mana_steel_plate', '#gtceu:circuits/mv'], 50000)
       event.recipes.botania.runic_altar('kubejs:mechanical_kekimurus', ['botania:kekimurus', 'botania:blacker_lotus', '#gtceu:circuits/mv', 'botania:rune_mana', 'gtceu:mana_steel_plate', 'gtceu:mana_steel_plate', '#gtceu:circuits/mv'], 50000)
       event.recipes.botania.runic_altar('kubejs:mechanical_entropinnyum', ['botania:entropinnyum', 'botania:blacker_lotus', '#gtceu:circuits/mv', 'botania:rune_mana', 'gtceu:mana_steel_plate', 'gtceu:mana_steel_plate', '#gtceu:circuits/mv'], 50000)
       event.recipes.botania.runic_altar('kubejs:mechanical_rosa_arcana', ['botania:rosa_arcana', 'botania:blacker_lotus', '#gtceu:circuits/mv', 'botania:rune_mana', 'gtceu:mana_steel_plate', 'gtceu:mana_steel_plate', '#gtceu:circuits/mv'], 50000)
       event.recipes.botania.runic_altar('kubejs:mechanical_rafflowsia', ['botania:rafflowsia', 'botania:blacker_lotus', '#gtceu:circuits/mv', 'botania:rune_mana', 'gtceu:mana_steel_plate', 'gtceu:mana_steel_plate', '#gtceu:circuits/mv'], 50000)











})


