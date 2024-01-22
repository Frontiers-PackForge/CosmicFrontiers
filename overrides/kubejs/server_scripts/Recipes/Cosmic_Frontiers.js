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
       // event.remove({ output: 'gtceu:firebrick' })
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
              .inputFluids(Fluid.of('gtceu:nether_sediment_sludge', 250))
              .itemOutputs('2x ars_nouveau:magebloom')
              .chancedOutput(Item.of('ars_nouveau:magebloom', 1), 2500, 750)
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
              .EUt(GTValues.VA[GTValues.HV]);
       event.recipes.gtceu.mana_simulator('cosmiccore:mechanical_rafflowsia')
              .notConsumable('kubejs:mechanical_rafflowsia')
              .itemInputs('10x #minecraft:flowers')
              .outputFluids(Fluid.of('gtceu:potent_mana', 2500))
              .duration(900)
              .EUt(GTValues.VA[GTValues.HV]);
       event.recipes.gtceu.mana_simulator('cosmiccore:mechanical_munchdew')
              .notConsumable('kubejs:mechanical_munchdew')
              .itemInputs('100x #minecraft:leaves')
              .outputFluids(Fluid.of('gtceu:potent_mana', 2000))
              .duration(1600)
              .EUt(GTValues.VA[GTValues.HV]);
       event.recipes.gtceu.mana_simulator('cosmiccore:mechanical_kekimurus')
              .notConsumable('kubejs:mechanical_kekimurus')
              .itemInputs('minecraft:cake')
              .outputFluids(Fluid.of('gtceu:potent_mana', 3000))
              .duration(450)
              .EUt(GTValues.VA[GTValues.HV]);
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




       event.recipes.botania.runic_altar('gtceu:mana_simulator', ['botania:blacker_lotus', 'gtceu:good_integrated_circuit', 'gtceu:mana_steel_plate','gtceu:mana_steel_plate','gtceu:mana_steel_plate','gtceu:mana_steel_plate','gtceu:mana_steel_octal_wire','gtceu:mana_steel_octal_wire'], 250000)










})


