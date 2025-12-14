
ServerEvents.recipes(event => {

  //Iron Chest Recipe Removal and Addition here bc lazy lol
  event.remove({ output: 'ironchest:copper_chest' })
  event.remove({ output: 'ironchest:iron_chest' })
  event.remove({ output: 'ironchest:gold_chest' })
  event.remove({ output: 'ironchest:diamond_chest' })
  event.remove({ output: 'ironchest:crystal_chest' })
  event.remove({ output: 'ironchest:obsidian_chest' })
  event.remove({ output: 'ironchest:wood_to_copper_chest_upgrade' })
  event.remove({ output: 'ironchest:wood_to_iron_chest_upgrade' })
  event.remove({ output: 'ironchest:copper_to_iron_chest_upgrade' })
  event.remove({ output: 'ironchest:iron_to_gold_chest_upgrade' })
  event.remove({ output: 'ironchest:gold_to_diamond_chest_upgrade' })
  event.remove({ output: 'ironchest:diamond_to_crystal_chest_upgrade' })
  event.remove({ output: 'ironchest:diamond_to_obsidian_chest_upgrade' })
  event.remove({ output: 'usefulbackpacks:backpack_small' })
  event.remove({ output: 'usefulbackpacks:backpack_medium' })
  event.remove({ output: 'usefulbackpacks:backpack_large' })

  event.shaped('ironchest:copper_chest', [
    'QWQ',
    'WXW',
    'QWQ'
  ], {
    Q: 'gtceu:copper_plate',
    W: 'gtceu:double_copper_plate',
    X: 'minecraft:chest',
  })
  event.shaped('ironchest:wood_to_copper_chest_upgrade', [
    'QWQ',
    'WXW',
    'QWQ'
  ], {
    Q: 'gtceu:copper_plate',
    W: 'gtceu:double_copper_plate',
    X: '#minecraft:planks',
  })

  event.shaped('ironchest:iron_chest', [
    'QWQ',
    'WXW',
    'QWQ'
  ], {
    Q: 'gtceu:iron_plate',
    W: 'gtceu:double_iron_plate',
    X: 'ironchest:copper_chest',
  })
  event.shaped('ironchest:wood_to_iron_chest_upgrade', [
    'QWQ',
    'WXW',
    'QWQ'
  ], {
    Q: 'gtceu:iron_plate',
    W: 'gtceu:double_iron_plate',
    X: '#minecraft:planks',
  })
  event.shaped('ironchest:copper_to_iron_chest_upgrade', [
    'QWQ',
    'WXW',
    'QWQ'
  ], {
    Q: 'gtceu:iron_plate',
    W: 'gtceu:double_iron_plate',
    X: 'minecraft:copper_ingot',
  })

  event.shaped('ironchest:gold_chest', [
    'QWQ',
    'WXW',
    'QWQ'
  ], {
    Q: 'gtceu:gold_plate',
    W: 'gtceu:double_gold_plate',
    X: 'ironchest:iron_chest',
  })
  event.shaped('ironchest:iron_to_gold_chest_upgrade', [
    'QWQ',
    'WXW',
    'QWQ'
  ], {
    Q: 'gtceu:gold_plate',
    W: 'gtceu:double_gold_plate',
    X: 'minecraft:iron_ingot',
  })

  event.shaped('ironchest:diamond_chest', [
    'QQQ',
    'QXQ',
    'QQQ'
  ], {
    Q: 'gtceu:diamond_plate',
    X: 'ironchest:gold_chest',
  })
  event.shaped('ironchest:gold_to_diamond_chest_upgrade', [
    'QQQ',
    'QXQ',
    'QQQ'
  ], {
    Q: 'gtceu:diamond_plate',
    X: 'minecraft:gold_ingot',
  })

  //not sure if you want recipes for crystal/obsidian chests?
  event.shaped('ironchest:crystal_chest', [
    'QWQ',
    'WXW',
    'QWQ'
  ], {
    Q: '#c:glass',
    W: 'minecraft:obsidian',
    X: 'ironchest:diamond_chest',
  })
  event.shaped('ironchest:diamond_to_crystal_chest_upgrade', [
    'QWQ',
    'WXW',
    'QWQ'
  ], {
    Q: '#c:glass',
    W: 'minecraft:obsidian',
    X: 'minecraft:diamond',
  })

  event.shaped('ironchest:obsidian_chest', [
    'QQQ',
    'QXQ',
    'QQQ'
  ], {
    Q: 'minecraft:obsidian',
    X: 'ironchest:diamond_chest',
  })
  event.shaped('ironchest:diamond_to_obsidian_chest_upgrade', [
    'QQQ',
    'QXQ',
    'QQQ'
  ], {
    Q: 'minecraft:obsidian',
    X: 'minecraft:diamond',
  })

  event.recipes.gtceu.assembler("frontiers:skip_copper_chest")
    .itemInputs('4x gtceu:copper_plate', 'minecraft:chest')
    .itemOutputs('ironchest:copper_chest')
    .circuit(3)
    .duration(100)
    .EUt(32, 4);

  event.recipes.gtceu.assembler("frontiers:skip_iron_chest")
    .itemInputs('4x gtceu:iron_plate', 'minecraft:chest')
    .itemOutputs('ironchest:iron_chest')
    .circuit(3)
    .duration(100)
    .EUt(32, 4);

  event.recipes.gtceu.assembler("frontiers:skip_gold_chest")
    .itemInputs('4x gtceu:gold_plate', 'minecraft:chest')
    .itemOutputs('ironchest:gold_chest')
    .circuit(3)
    .duration(100)
    .EUt(32, 4);

  event.recipes.gtceu.assembler("frontiers:skip_diamond_chest")
    .itemInputs('4x gtceu:diamond_plate', 'minecraft:chest')
    .itemOutputs('ironchest:diamond_chest')
    .circuit(3)
    .duration(100)
    .EUt(32, 4);





  event.shaped('usefulbackpacks:backpack_small', [
    'WLW',
    'LCL',
    'SSS'
  ], {
    C: 'minecraft:chest',
    W: 'gtceu:wrought_iron_ring',
    L: 'minecraft:leather',
    S: 'minecraft:string',
  })

  event.shaped('usefulbackpacks:backpack_medium', [
    'SLS',
    'LBL',
    'CLW'
  ], {
    L: 'minecraft:leather', //reg leather for now
    S: 'gtceu:steel_ring',
    B: 'gtceu:bronze_crate',
    C: 'legendarysurvivaloverhaul:cold_string',
    W: 'legendarysurvivaloverhaul:warm_string',
  })

})
