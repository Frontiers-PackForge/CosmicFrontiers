
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

  event.shaped('metalbarrels:copper_barrel', ['ABA', 'BCB', 'ABA'], { A: 'gtceu:copper_plate', B: 'gtceu:double_copper_plate', C: 'minecraft:barrel' })
  event.shaped('metalbarrels:iron_barrel', ['ABA', 'BCB', 'ABA'], { A: 'gtceu:iron_plate', B: 'gtceu:double_iron_plate', C: 'metalbarrels:copper_barrel' })
  event.shaped('metalbarrels:silver_barrel', ['ABA', 'BCB', 'ABA'], { A: 'gtceu:silver_plate', B: 'gtceu:double_silver_plate', C: 'metalbarrels:iron_barrel' })
  event.shaped('metalbarrels:gold_barrel', ['ABA', 'BCB', 'ABA'], { A: 'gtceu:gold_plate', B: 'gtceu:double_gold_plate', C: 'metalbarrels:silver_barrel' })
  event.shaped('metalbarrels:diamond_barrel', ['AAA', 'ABA', 'AAA'], { A: 'gtceu:diamond_plate', B: 'metalbarrels:gold_barrel' })
  event.shaped('metalbarrels:obsidian_barrel', ['AAA', 'ABA', 'AAA'], { A: 'gtceu:dense_obsidian_plate', B: 'metalbarrels:diamond_barrel'})
  event.shaped('metalbarrels:netherite_barrel', ['ABA', 'BCB', 'ABA'], { A: 'gtceu:chrysanthium_plate', B: 'gtceu:double_chrysanthium_plate', C: 'metalbarrels:obsidian_barrel' })

  event.shaped('metalbarrels:obsidian_to_netherite', ['ABA', 'BCB', 'ABA'], { A: 'gtceu:chrysanthium_plate', B: 'gtceu:double_chrysanthium_plate', C: 'create:andesite_casing' })
  event.shaped('metalbarrels:diamond_to_obsidian', ['AAA', 'ABA', 'AAA'], { A: 'gtceu:dense_obsidian_plate', B: 'create:andesite_casing' })
  event.shaped('metalbarrels:gold_to_diamond', ['AAA', 'ABA', 'AAA'], { A: 'gtceu:diamond_plate', B: 'create:andesite_casing' })
  event.shaped('metalbarrels:silver_to_gold', ['ABA', 'BCB', 'ABA'], { A: 'gtceu:gold_plate', B: 'gtceu:double_gold_plate', C: 'create:andesite_casing' })
  event.shaped('metalbarrels:iron_to_silver', ['ABA', 'BCB', 'ABA'], { A: 'gtceu:silver_plate', B: 'gtceu:double_silver_plate', C: 'create:andesite_casing' })
  event.shaped('metalbarrels:copper_to_iron', ['ABA', 'BCB', 'ABA'], { A: 'gtceu:iron_plate', B: 'gtceu:double_iron_plate', C: 'create:andesite_casing' })
  event.shaped('metalbarrels:wood_to_copper', ['ABA', 'BCB', 'ABA'], { A: 'gtceu:copper_plate', B: 'gtceu:double_copper_plate', C: 'create:andesite_casing' })


  event.recipes.gtceu.assembler('frontiers:copper_chest')
    .itemInputs('4x gtceu:copper_plate', 'minecraft:chest')
    .itemOutputs('ironchest:copper_chest')
    .circuit(3)
    .duration(100)
    .EUt(32);

  event.recipes.gtceu.assembler('frontiers:iron_chest')
    .itemInputs('4x gtceu:iron_plate', 'minecraft:chest')
    .itemOutputs('ironchest:iron_chest')
    .circuit(3)
    .duration(100)
    .EUt(32);

  event.recipes.gtceu.assembler('frontiers:gold_chest')
    .itemInputs('4x gtceu:gold_plate', 'minecraft:chest')
    .itemOutputs('ironchest:gold_chest')
    .circuit(3)
    .duration(100)
    .EUt(32);

  event.recipes.gtceu.assembler('frontiers:diamond_chest')
    .itemInputs('4x gtceu:diamond_plate', 'minecraft:chest')
    .itemOutputs('ironchest:diamond_chest')
    .circuit(3)
    .duration(100)
    .EUt(32);

})
