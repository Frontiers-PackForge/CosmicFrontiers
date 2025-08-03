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
    .notConsumable('oceansdelight:guardian')
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
  event.recipes.gtceu.suffering_chamber('suffering_chamber_villager_basic')
    .notConsumable('minecraft:villager_spawn_egg')
    .soulOutput(32000)
    .duration(600)
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

})