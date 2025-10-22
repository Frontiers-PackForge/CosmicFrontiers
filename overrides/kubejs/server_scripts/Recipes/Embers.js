//A Simple "REMOVE AND HIDE" function akin to GroovyScript's Jei.yeet() function - This will tag the item for hiding from recipe viewers and remove the recipe
//This one also has a tag removal function to remove the forge:tools/hammers tag from what is removed so bear that in mind if you copy/paste this around
let yeet = (itemName) => {
  ServerEvents.recipes(event => {
    event.remove({ output: itemName })
  })
  ServerEvents.tags('item', event => {
    event.remove('forge:tools/hammers', itemName)
    event.add('c:hidden_from_recipe_viewers', itemName)
  })
}

// yeet('embers:tinker_hammer');
yeet('embers:grandhammer');
ServerEvents.recipes(event => {

  // console.log('[EMBERS.JS] - Sealing Successful')
  // event.remove({ mod: 'embers' })
})
ServerEvents.tags('item', event => {

  //Other Modded Plate Removals From the Forge Tag - Remember to Hide in EMI if needed below
  event.remove('forge:plates/iron', 'embers:iron_plate')
  event.remove('forge:plates/copper', 'embers:copper_plate')
  event.remove('forge:plates/lead', 'embers:lead_plate')
  event.remove('forge:plates/silver', 'embers:silver_plate')
  //Hiding the Above Removals from EMI
  event.add('c:hidden_from_recipe_viewers', 'embers:iron_plate')
  event.add('c:hidden_from_recipe_viewers', 'embers:copper_plate')
  event.add('c:hidden_from_recipe_viewers', 'embers:lead_plate')
  event.add('c:hidden_from_recipe_viewers', 'embers:silver_plate')
  event.remove('forge:tools/hammers', 'embers:tinker_hammer')

})
ServerEvents.recipes(event => {

  event.remove({ output: 'embers:iron_plate' })
  event.remove({ output: 'embers:copper_plate' })
  event.remove({ output: 'embers:lead_plate' })
  event.remove({ output: 'embers:silver_plate' })
  event.remove({ type: 'embers:alchemy' })


  event.recipes.gtceu.dawn_forge('frontiers:dawn_eldritch_eye')
    .itemInputs(['embers:archaic_circuit', 'embers:archaic_brick', 'embers:archaic_brick', 'minecraft:coal', 'minecraft:coal'])
    .itemOutputs('embers:eldritch_insignia')
    .emberInput(2000)
    .duration(150)
    .EUt(GTValues.VA[GTValues.LV]);

  event.recipes.gtceu.mixer('frontiers:large_mixer_dawnstone')
    .inputFluids('gtceu:gold 1152', 'gtceu:copper 288')
    .outputFluids('embers:molten_dawnstone 1440')
    .emberInput(250)
    .duration(120)
    .EUt(GTValues.VA[GTValues.LV], 2);


  event.recipes.gtceu.dawn_forge('frontiers:dusk_alloy')
    .itemInputs(['4x cosmiccore:somanone_dust', '4x cosmiccore:moondrop_gem'])
    .inputFluids('embers:molten_dawnstone 576')
    .itemOutputs('4x gtceu:faded_dusk_alloy_ingot')
    .emberInput(2000)
    .duration(120)
    .circuit(2)
    .EUt(GTValues.VA[GTValues.LV], 4);

  event.recipes.gtceu.dawn_forge('frontiers:dawn_lv_core')
    .notConsumable('embers:iron_aspectus')
    .notConsumable('embers:copper_aspectus')
    .itemInputs(['embers:ember_shard', 'gtceu:runed_steel_foil', 'embers:dawnstone_plate', 'gtceu:runed_steel_foil', 'embers:dawnstone_plate'])
    .itemOutputs('cosmiccore:lv_wildfire_core')
    .emberInput(750)
    .duration(60)
    .EUt(GTValues.VA[GTValues.LV], 4);

  event.recipes.gtceu.dawn_forge('frontiers:dawn_mv_core')
    .notConsumable('embers:iron_aspectus')
    .notConsumable('embers:copper_aspectus')
    .itemInputs(['embers:ember_crystal', 'gtceu:annealed_manasteel_foil', 'gtceu:aluminium_plate', 'gtceu:soul_stained_steel_foil', 'gtceu:aluminium_plate'])
    .itemOutputs('cosmiccore:mv_wildfire_core')
    .emberInput(750)
    .duration(120)
    .EUt(GTValues.VA[GTValues.LV], 4);

  event.recipes.gtceu.dawn_forge('frontiers:dawn_hv_core')
    .notConsumable('embers:silver_aspectus')
    .notConsumable('embers:lead_aspectus')
    .itemInputs(['embers:ember_crystal_cluster', 'gtceu:kanthal_plate', 'gtceu:faded_dusk_alloy_foil', 'gtceu:kanthal_plate', 'gtceu:galvanized_ethersteel_foil'])
    .itemOutputs('cosmiccore:hv_wildfire_core')
    .emberInput(1500)
    .duration(120)
    .EUt(GTValues.VA[GTValues.LV], 16);

  event.remove({ id: 'embers:ashen_goggles' })
  event.shaped('embers:ashen_goggles', [
    'CLC',
    'RCR',
    'GBG'
  ], {
    G: 'experienceobelisk:whisperglass',
    B: 'gtceu:double_bronze_plate',
    R: 'gtceu:steel_ring',
    L: 'cosmiccore:waxed_leather',
    C: 'projectred_core:woven_cloth'
  })
  event.remove({ id: 'embers:ember_bore' })
  event.shaped('embers:ember_bore', [
    'BPB',
    'BCB',
    'PDP'
  ], {
    C: 'embers:mechanical_core',
    B: 'embers:caminite_bricks',
    P: Item.of('tconstruct:large_plate').withNBT({ Material: 'tconstruct:cobalt' }).weakNBT(),
    D: 'gtceu:steel_drill_head'
  })

  event.recipes.occultism.ritual(
    'cosmiccore:lv_ember_input_hatch',
    [
      "gtceu:steel_block",
      "gtceu:steel_block",
      "gtceu:steel_block",
      "gtceu:steel_block",
      "gtceu:steel_block",
      "gtceu:steel_block",
      "gtceu:steel_block",
      "gtceu:steel_block",
      'embers:ember_crystal',
      'embers:ember_crystal',
      'embers:ember_crystal',
      'embers:ember_crystal',
    ],
    'embers:caminite_ring',
    'occultism:craft_djinni'
  ).dummy("kubejs:dummy_ritual_thing").id("occultism:frontiers.bad_lv_ember_hatch")

  event.recipes.occultism.ritual(
    'cosmiccore:mv_ember_input_hatch',
    [
      "gtceu:flawless_emberite_gem",
      "gtceu:faded_dusk_alloy_plate",
      "gtceu:double_soul_stained_steel_plate",
      "gtceu:double_soul_stained_steel_plate",
      "gtceu:faded_dusk_alloy_plate",
      "gtceu:flawless_emberite_gem",
      'cosmiccore:capacity_chip',
      'cosmiccore:capacity_chip',
      'cosmiccore:verbosity_chip',
      'cosmiccore:verbosity_chip',
    ],
    'gtceu:mv_machine_hull',
    'occultism:craft_djinni'
  ).dummy("kubejs:dummy_ritual_thing").id("occultism:frontiers.mv_ember_hatch")


  event.remove({ id: 'embers:dawnstone_plate_hammering' })
  event.remove({ id: 'embers:mixing/molten_dawnstone' })
  event.custom(
    {
      "type": "embers:mixing",
      "inputs": [
        {
          "amount": 2,
          "tag": "forge:copper"
        },
        {
          "amount": 8,
          "tag": "forge:gold"
        }
      ],
      "output": {
        "amount": 10,
        "tag": "forge:molten_dawnstone"
      }
    })


  event.custom(
    {
      "type": "embers:ember_activation",
      "ember": 4400,
      "input": {
        "item": "gtceu:exquisite_emberite_gem"
      }
    })
  event.custom(
    {
      "type": "embers:ember_activation",
      "ember": 3400,
      "input": {
        "item": "gtceu:flawless_emberite_gem"
      }
    })
  event.custom(
    {
      "type": "embers:ember_activation",
      "ember": 600,
      "input": {
        "item": "gtceu:flawed_emberite_gem"
      }
    })
  event.custom(
    {
      "type": "embers:ember_activation",
      "ember": 200,
      "input": {
        "item": "gtceu:chipped_emberite_gem"
      }
    })

  // source: inflictor_gem.json
  event.recipes.gtceu.dawn_forge('frontiers:dawn_inflictor_gem')
    .itemInputs(["#forge:ingots/dawnstone", "#minecraft:coals", "#minecraft:coals", "#minecraft:coals", "#forge:gems/diamond"])
    .itemOutputs("embers:inflictor_gem")
    .emberInput(500)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);

  // source: intelligent_apparatus.json
  event.recipes.gtceu.dawn_forge('frontiers:dawn_intelligent_apparatus')
    .itemInputs(["#forge:ingots/copper", "embers:archaic_circuit", "#forge:ingots/copper", "embers:archaic_circuit", "#forge:plates/copper"])
    .itemOutputs("embers:intelligent_apparatus")
    .emberInput(500)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);

  // source: iron_crystal_seed.json
  event.recipes.gtceu.dawn_forge('frontiers:dawn_iron_crystal_seed')
    .itemInputs(["#forge:ingots/iron", "#forge:ingots/iron", "#forge:ingots/iron", "#embers:crystal_seeds"])
    .itemOutputs("embers:iron_crystal_seed")
    .emberInput(500)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);

  // source: isolated_materia.json
  event.recipes.gtceu.dawn_forge('frontiers:dawn_isolated_materia')
    .itemInputs(["#forge:gems/quartz", "minecraft:clay_ball", "#forge:gems/lapis", "#forge:ingots/iron"])
    .itemOutputs("4x embers:isolated_materia")
    .emberInput(500)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);

  // source: lead_crystal_seed.json
  event.recipes.gtceu.dawn_forge('frontiers:dawn_lead_crystal_seed')
    .itemInputs(["#forge:ingots/lead", "#forge:ingots/lead", "#forge:ingots/lead", "#embers:crystal_seeds"])
    .itemOutputs("embers:lead_crystal_seed")
    .emberInput(500)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);

  // source: netherrack.json
  event.recipes.gtceu.dawn_forge('frontiers:dawn_netherrack')
    .itemInputs(["minecraft:cobblestone", "minecraft:cobblestone", "minecraft:cobblestone", "minecraft:cobblestone", "embers:ember_grit"])
    .itemOutputs("4x minecraft:netherrack")
    .emberInput(500)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);

  // source: nickel_crystal_seed.json
  event.recipes.gtceu.dawn_forge('frontiers:dawn_nickel_crystal_seed')
    .itemInputs(["#forge:ingots/nickel", "#forge:ingots/nickel", "#forge:ingots/nickel", "#embers:crystal_seeds"])
    .itemOutputs("embers:nickel_crystal_seed")
    .emberInput(500)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);

  // source: nonbeliever_amulet.json
  event.recipes.gtceu.dawn_forge('frontiers:dawn_nonbeliever_amulet')
    .itemInputs(["embers:eldritch_insignia", "embers:archaic_circuit", "embers:archaic_brick", "embers:archaic_circuit", "embers:ashen_amulet"])
    .itemOutputs("embers:nonbeliever_amulet")
    .emberInput(500)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);

  // source: shifting_scales.json
  event.recipes.gtceu.dawn_forge('frontiers:dawn_shifting_scales')
    .itemInputs(["#forge:plates/lead", "#forge:plates/lead", "#forge:plates/lead", "#forge:plates/lead", "#forge:plates/lead", "embers:ashen_fabric"])
    .itemOutputs("embers:shifting_scales")
    .emberInput(500)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);

  // source: silver_crystal_seed.json
  event.recipes.gtceu.dawn_forge('frontiers:dawn_silver_crystal_seed')
    .itemInputs(["#forge:ingots/silver", "#forge:ingots/silver", "#forge:ingots/silver", "#embers:crystal_seeds"])
    .itemOutputs("embers:silver_crystal_seed")
    .emberInput(500)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);

  // source: soul_sand.json
  event.recipes.gtceu.dawn_forge('frontiers:dawn_soul_sand')
    .itemInputs(["minecraft:sand", "minecraft:sand", "minecraft:sand", "minecraft:sand", "embers:ash"])
    .itemOutputs("4x minecraft:soul_sand")
    .emberInput(500)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);

  // source: tin_crystal_seed.json
  event.recipes.gtceu.dawn_forge('frontiers:dawn_tin_crystal_seed')
    .itemInputs(["#forge:ingots/tin", "#forge:ingots/tin", "#forge:ingots/tin", "#embers:crystal_seeds"])
    .itemOutputs("embers:tin_crystal_seed")
    .emberInput(500)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);

  // source: tyrfing.json
  event.recipes.gtceu.dawn_forge('frontiers:dawn_tyrfing')
    .itemInputs(["#forge:storage_blocks/coal", "#forge:obsidian", "#forge:ingots/lead", "#forge:ingots/lead", "embers:lead_sword"])
    .itemOutputs("embers:tyrfing")
    .emberInput(500)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);

  // source: wildfire_core.json
  event.recipes.gtceu.dawn_forge('frontiers:dawn_wildfire_core')
    .itemInputs(["#forge:ingots/dawnstone", "embers:ember_crystal_cluster", "#forge:ingots/dawnstone", "#forge:plates/copper", "embers:ancient_motive_core"])
    .itemOutputs("embers:wildfire_core")
    .emberInput(500)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);

  // source: winding_gears.json
  event.recipes.gtceu.dawn_forge('frontiers:dawn_winding_gears')
    .itemInputs(["#forge:plates/dawnstone", "#forge:plates/dawnstone", "#forge:plates/dawnstone", "#forge:plates/dawnstone", "#forge:ingots/dawnstone"])
    .itemOutputs("embers:winding_gears")
    .emberInput(500)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);

  // source: zinc_crystal_seed.json
  event.recipes.gtceu.dawn_forge('frontiers:dawn_zinc_crystal_seed')
    .itemInputs(["#forge:ingots/zinc", "#forge:ingots/zinc", "#forge:ingots/zinc", "#embers:crystal_seeds"])
    .itemOutputs("embers:zinc_crystal_seed")
    .emberInput(500)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);

  // source: adhesive.json
  event.recipes.gtceu.dawn_forge('frontiers:dawn_adhesive')
    .itemInputs(["minecraft:bone_meal", "minecraft:bone_meal", "minecraft:clay_ball"])
    .itemOutputs("6x embers:adhesive")
    .emberInput(500)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);

  // source: aluminium_crystal_seed.json
  event.recipes.gtceu.dawn_forge('frontiers:dawn_aluminium_crystal_seed')
    .itemInputs(["#forge:ingots/aluminium", "#forge:ingots/aluminium", "#forge:ingots/aluminium", "#embers:crystal_seeds"])
    .itemOutputs("embers:aluminium_crystal_seed")
    .emberInput(500)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);

  // source: ancient_motive_core.json
  event.recipes.gtceu.dawn_forge('frontiers:dawn_ancient_motive_core')
    .itemInputs(["embers:archaic_brick", "embers:archaic_brick", "embers:archaic_brick", "embers:ember_shard"])
    .itemOutputs("embers:ancient_motive_core")
    .emberInput(500)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);

  // source: archaic_brick.json
  event.recipes.gtceu.dawn_forge('frontiers:dawn_archaic_brick')
    .itemInputs(["minecraft:soul_sand", "minecraft:clay_ball", "minecraft:clay_ball", "embers:archaic_brick"])
    .itemOutputs("5x embers:archaic_brick")
    .emberInput(500)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);

  // source: ashen_fabric.json
  event.recipes.gtceu.dawn_forge('frontiers:dawn_ashen_fabric')
    .itemInputs(["#forge:dusts/ash", "#forge:dusts/ash", "#forge:string", "#forge:string", "#minecraft:wool"])
    .itemOutputs("embers:ashen_fabric")
    .emberInput(500)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);

  // source: blasting_core.json
  event.recipes.gtceu.dawn_forge('frontiers:dawn_blasting_core')
    .itemInputs(["#forge:plates/iron", "#forge:plates/iron", "#forge:plates/iron", "#forge:ingots/copper", "#forge:gunpowder"])
    .itemOutputs("embers:blasting_core")
    .emberInput(500)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);

  // source: catalytic_plug.json
  event.recipes.gtceu.dawn_forge('frontiers:dawn_catalytic_plug')
    .itemInputs(["embers:fluid_pipe", "#forge:glass/silica", "embers:fluid_pipe", "#forge:ingots/silver"])
    .itemOutputs("embers:catalytic_plug")
    .emberInput(500)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);

  // source: copper_crystal_seed.json
  event.recipes.gtceu.dawn_forge('frontiers:dawn_copper_crystal_seed')
    .itemInputs(["#forge:ingots/copper", "#forge:ingots/copper", "#forge:ingots/copper", "#embers:crystal_seeds"])
    .itemOutputs("embers:copper_crystal_seed")
    .emberInput(500)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);

  // source: ember_crystal_cluster.json
  event.recipes.gtceu.dawn_forge('frontiers:dawn_ember_crystal_cluster')
    .itemInputs(["#forge:gunpowder", "embers:ember_shard", "embers:ember_shard", "embers:ember_shard", "embers:ember_crystal"])
    .itemOutputs("embers:ember_crystal_cluster")
    .emberInput(500)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);

  // source: entropic_enumerator.json
  event.recipes.gtceu.dawn_forge('frontiers:dawn_entropic_enumerator')
    .itemInputs(["#forge:ingots/copper", "#forge:ingots/iron", "#forge:ingots/gold", "#forge:ingots/lead", "#forge:ingots/silver", "#forge:ingots/dawnstone", "embers:ashen_tile"])
    .itemOutputs("embers:entropic_enumerator")
    .emberInput(500)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);

  // source: explosion_charm.json
  event.recipes.gtceu.dawn_forge('frontiers:dawn_explosion_charm')
    .itemInputs(["embers:archaic_brick", "embers:archaic_brick", "#forge:leather", "embers:archaic_brick", "embers:ember_crystal_cluster"])
    .itemOutputs("embers:explosion_charm")
    .emberInput(500)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);

  // source: explosion_pedestal.json
  event.recipes.gtceu.dawn_forge('frontiers:dawn_explosion_pedestal')
    .itemInputs(["embers:explosion_charm", "embers:alchemy_pedestal"])
    .itemOutputs("embers:explosion_pedestal")
    .emberInput(500)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);

  // source: flame_barrier.json
  event.recipes.gtceu.dawn_forge('frontiers:dawn_flame_barrier')
    .itemInputs(["#forge:plates/dawnstone", "#forge:plates/dawnstone", "#forge:plates/dawnstone", "#forge:ingots/silver", "embers:ember_crystal"])
    .itemOutputs("embers:flame_barrier")
    .emberInput(500)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);

  // source: focal_lens.json
  event.recipes.gtceu.dawn_forge('frontiers:dawn_focal_lens')
    .itemInputs(["#forge:plates/dawnstone", "#forge:plates/silver", "#forge:plates/dawnstone", "#forge:plates/silver", "embers:ember_crystal"])
    .itemOutputs("embers:focal_lens")
    .emberInput(500)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);

  // source: glimmer_crystal.json
  event.recipes.gtceu.dawn_forge('frontiers:dawn_glimmer_crystal')
    .itemInputs(["#forge:gunpowder", "#forge:gunpowder", "embers:ember_shard", "embers:ember_shard", "#forge:gems/quartz"])
    .itemOutputs("embers:glimmer_crystal")
    .emberInput(500)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);

  // Dawnstone Casting in Dawnforge
  event.recipes.gtceu.dawn_forge('frontiers:dawnforge_casting_dawnstone_ingot')
    .inputFluids('embers:molten_dawnstone 144')
    .itemOutputs('embers:dawnstone_ingot')
    .emberInput(250)
    .duration(100)
    .circuit(1)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.dawn_forge('frontiers:dawnstone_extraction')
    .itemInputs('embers:dawnstone_ingot')
    .outputFluids('embers:molten_dawnstone 144')
    .duration(40)
    .circuit(1)
    .EUt(GTValues.VA[GTValues.LV]);

  event.recipes.gtceu.dawn_forge('frontiers:dawn_gold_crystal_seed')
    .itemInputs(["#forge:ingots/gold", "#forge:ingots/gold", "#forge:ingots/gold", "#embers:crystal_seeds"])
    .itemOutputs("embers:gold_crystal_seed")
    .emberInput(500)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);

  //Cinder hearth recipes
  event.recipes.gtceu.cinder_hearth('frontiers:cinder_hearth_grit')
    .itemInputs('embers:ember_grit')
    .perTick(true)
    .inputFluids('minecraft:water 25')
    .emberOutput(24)
    .perTick(false)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);

  event.recipes.gtceu.cinder_hearth('frontiers:cinder_hearth_shard')
    .itemInputs('embers:ember_shard')
    .perTick(true)
    .inputFluids('minecraft:water 25')
    .emberOutput(36)
    .perTick(false)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);

  event.recipes.gtceu.cinder_hearth('frontiers:cinder_hearth_crystal')
    .itemInputs('embers:ember_crystal')
    .perTick(true)
    .inputFluids('minecraft:water 25')
    .emberOutput(48)
    .perTick(false)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);


  event.recipes.gtceu.cinder_hearth('frontiers:cinder_hearth_chipped')
    .itemInputs('gtceu:chipped_emberite_gem')
    .perTick(true)
    .inputFluids('minecraft:water 25')
    .emberOutput(24)
    .perTick(false)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);


  event.recipes.gtceu.cinder_hearth('frontiers:cinder_hearth_flawed')
    .itemInputs('gtceu:flawed_emberite_gem')
    .perTick(true)
    .inputFluids('minecraft:water 25')
    .emberOutput(36)
    .perTick(false)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);


  event.recipes.gtceu.cinder_hearth('frontiers:cinder_hearth_flawless')
    .itemInputs('gtceu:flawless_emberite_gem')
    .perTick(true)
    .inputFluids('minecraft:water 25')
    .emberOutput(96)
    .perTick(false)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);

  event.recipes.gtceu.cinder_hearth('frontiers:cinder_hearth_exquisite')
    .itemInputs('gtceu:exquisite_emberite_gem')
    .perTick(true)
    .inputFluids('minecraft:water 25')
    .emberOutput(256)
    .perTick(false)
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]);




  let primaryMaterials = [
    'gtceu:bronze_ingot',
    'gtceu:runed_steel_ingot',
    'malum:soul_stained_steel_ingot',
    'gtceu:galvanized_ethersteel_ingot']

  let secondaryMaterials = [
    'gtceu:wrought_iron_ingot',
    'gtceu:steel_ingot',
    'botania:manasteel_ingot',
    'gtceu:stainless_steel_ingot']

  let machineTier = [
    'steam',
    'lv',
    'mv',
    'hv'
  ]

  primaryMaterials.forEach((primary, index) => {
    let tierType = machineTier[index]
    let secondary = secondaryMaterials[index]
    event.shaped(`cosmiccore:${tierType}_ember_emitter`, [
      ' W ',
      ' W ',
      'QAQ'
    ], {
      W: `${primary}`,
      Q: `${secondary}`,
      A: 'embers:caminite_plate'
    })




  })



})