const $SoulProperty = Java.loadClass('com.ghostipedia.cosmiccore.api.capability.recipe.SoulRecipeCapability')
ServerEvents.recipes(event => {
  // event.remove({ output: Fluid.of(itemName) })
  event.recipes.gtceu.drygmy_grove('grove_zombie')
    .notConsumable('ars_nouveau:drygmy_charm')
    .notConsumable('minecraft:rotten_flesh')
    .itemOutputs('16x minecraft:rotten_flesh')
    .itemOutputs('minecraft:iron_ingot')
    .duration(6000)
    .EUt(GTValues.VA[GTValues.EV]);
  event.recipes.gtceu.drygmy_grove('grove_guardian')
    .notConsumable('ars_nouveau:drygmy_charm')
    .notConsumable('minecraft:sponge')
    .itemOutputs('32x minecraft:prismarine_shard')
    .itemOutputs('8x minecraft:prismarine_crystals')
    .itemOutputs('2x minecraft:cod')
    .duration(6000)
    .EUt(GTValues.VA[GTValues.EV]);
  // todo enderman
  event.recipes.gtceu.drygmy_grove('grove_enderman')
    .notConsumable('ars_nouveau:drygmy_charm')
    .notConsumable('gtceu:quantum_eye')
    .itemOutputs('16x minecraft:ender_pearl')
    .duration(6000)
    .EUt(GTValues.VA[GTValues.EV]);
  event.recipes.gtceu.drygmy_grove('grove_blaze')
    .notConsumable('ars_nouveau:drygmy_charm')
    .notConsumable('create:blaze_cake')
    .itemOutputs('16x minecraft:blaze_rod')
    .itemOutputs('gtceu:ash_dust')
    .duration(6000)
    .EUt(GTValues.VA[GTValues.EV]);
  event.recipes.gtceu.drygmy_grove('grove_skeleton')
    .notConsumable('ars_nouveau:drygmy_charm')
    .notConsumable('minecraft:skeleton_skull')
    .itemOutputs('32x minecraft:bone')
    .itemOutputs('4x minecraft:arrow')
    .itemOutputs('gtceu:calcium_dust')
    .duration(6000)
    .EUt(GTValues.VA[GTValues.EV]);

  event.recipes.gtceu.drygmy_grove('grove_bee')
    .notConsumable('ars_nouveau:drygmy_charm')
    .notConsumable('minecraft:honeycomb_block')
    .itemOutputs('4x minecraft:honey_block', '4x minecraft:honeycomb_block')
    .duration(3000)
    .EUt(GTValues.VA[GTValues.HV]);
  event.recipes.gtceu.dream_basin('suffering_chamber_villager_basic')
    .notConsumable('minecraft:villager_spawn_egg')
    .soulOutput(CosmicSoulTypes.Raw, 8000)
    .duration(600)
    .EUt(GTValues.VA[GTValues.EV]);

  event.recipes.gtceu.oneiric_sieve('conversion_of_raw_to_refined')
    .notConsumable('embers:ember_crystal_cluster')
    .soulInput(CosmicSoulTypes.Raw, 8000)
    .soulOutput(CosmicSoulTypes.Refined, 6000)
    .duration(300)
    .EUt(GTValues.VA[GTValues.EV]);

  event.recipes.gtceu.drygmy_grove('sculk_outbreak')
    .notConsumable('ars_nouveau:drygmy_charm')
    .notConsumable('minecraft:sculk_catalyst')
    .itemOutputs('8x minecraft:sculk')
    .duration(600)
    .EUt(GTValues.VA[GTValues.EV]);

  event.recipes.gtceu.drygmy_grove('sheep')
    .notConsumable('ars_nouveau:drygmy_charm')
    .notConsumable('minecraft:shears')
    .itemOutputs('8x minecraft:white_wool')
    .itemOutputs('8x minecraft:mutton')
    .duration(600)
    .EUt(GTValues.VA[GTValues.EV]);

  event.recipes.gtceu.drygmy_grove('grove_wilden')
    .notConsumable('ars_nouveau:drygmy_charm')
    .notConsumable('ars_nouveau:ritual_wilden_summon')
    .itemOutputs('8x ars_nouveau:wilden_horn')
    .itemOutputs('8x ars_nouveau:wilden_spike')
    .itemOutputs('8x ars_nouveau:wilden_wing')
    .duration(6000)
    .EUt(GTValues.VA[GTValues.EV]);

  event.recipes.gtceu.drygmy_grove('grove_cow')
    .notConsumable('ars_nouveau:drygmy_charm')
    .notConsumable('minecraft:bucket')
    .itemOutputs('8x minecraft:leather')
    .itemOutputs('8x minecraft:beef')
    .outputFluids('minecraft:milk 1000')
    .duration(6000)
    .EUt(GTValues.VA[GTValues.EV]);

  event.recipes.gtceu.drygmy_grove('grove_pig')
    .notConsumable('ars_nouveau:drygmy_charm')
    .notConsumable('gtceu:iron_knife')
    .itemOutputs('8x farmersdelight:ham')
    .itemOutputs('8x delightful:animal_fat')
    .duration(6000)
    .EUt(GTValues.VA[GTValues.EV]);

  event.recipes.gtceu.drygmy_grove('grove_chicken')
    .notConsumable('ars_nouveau:drygmy_charm')
    .notConsumable('minecraft:egg')
    .itemOutputs('8x minecraft:egg')
    .itemOutputs('8x minecraft:chicken')
    .itemOutputs('8x minecraft:feather')
    .duration(6000)
    .EUt(GTValues.VA[GTValues.EV]);

  event.recipes.gtceu.drygmy_grove('grove_frog')
    .notConsumable('ars_nouveau:drygmy_charm')
    .notConsumable('minecraft:frogspawn')
    .itemOutputs('8x minecraft:ochre_froglight')
    .itemOutputs('8x minecraft:verdant_froglight')
    .itemOutputs('8x minecraft:pearlescent_froglight')
    .duration(6000)
    .EUt(GTValues.VA[GTValues.EV]);

  event.recipes.gtceu.drygmy_grove('grove_ghast')
    .notConsumable('ars_nouveau:drygmy_charm')
    .notConsumable('minecraft:diamond')
    .itemOutputs('8x minecraft:gunpowder')
    .itemOutputs('8x minecraft:ghast_tear')
    .duration(6000)
    .EUt(GTValues.VA[GTValues.EV]);

  event.recipes.gtceu.drygmy_grove('grove_slime')
    .notConsumable('ars_nouveau:drygmy_charm')
    .notConsumable('botania:slime_bottle')
    .itemOutputs('8x minecraft:slime_ball')
    .duration(6000)
    .EUt(GTValues.VA[GTValues.EV]);

  event.recipes.gtceu.drygmy_grove('grove_spider')
    .notConsumable('ars_nouveau:drygmy_charm')
    .notConsumable('biomesoplenty:spider_egg')
    .itemOutputs('8x minecraft:string')
    .itemOutputs('8x minecraft:spider_eye')
    .duration(6000)
    .EUt(GTValues.VA[GTValues.EV]);

  event.recipes.gtceu.drygmy_grove('grove_horse_obliterator')
    .notConsumable('ars_nouveau:drygmy_charm')
    .notConsumable('farmersdelight:horse_feed')
    .itemOutputs('8x minecraft:leather')
    .outputFluids('gtceu:glue 1000')
    .duration(6000)
    .EUt(GTValues.VA[GTValues.EV]);

})
