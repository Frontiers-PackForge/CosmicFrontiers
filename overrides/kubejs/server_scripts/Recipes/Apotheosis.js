ServerEvents.recipes(event => {

    // event.remove({ output: ['apotheosis:beeshelf', 'apotheosis:blazing_hellshelf', 'apotheosis:crystal_seashelf', 'apotheosis:deepshelf', 'apotheosis:dormant_deepshelf', 'apotheosis:hellshelf', 'apotheosis:infused_hellshelf', 'apotheosis:pearl_endshelf', 'apotheosis:rectifier', 'apotheosis:rectifier_t3', 'apotheosis:seashelf', 'apotheosis:sightshelf', 'apotheosis:sightshelf_t2', 'apotheosis:soul_touched_deepshelf', 'apotheosis:soul_touched_sculkshelf', 'apotheosis:stoneshelf', 'apotheosis:filtering_shelf', 'apotheosis:treasure_shelf', 'apotheosis:draconic_endshelf', 'apotheosis:echoing_deepshelf', 'apotheosis:echoing_sculkshelf', 'apotheosis:endshelf', 'apotheosis:glowing_hellshelf', 'apotheosis:heart_seashelf', 'apotheosis:infused_seashelf', 'apotheosis:melonshelf', 'apotheosis:rectifier_t2'] })


    event.remove({ id: 'apotheosis:hellshelf' })

    
    event.remove({ output: 'apotheosis:hellshelf' })
    event.remove({ output: 'apotheosis:seashelf' })
    event.remove({ output: 'apotheosis:dormant_deepshelf' })
    event.remove({ output: 'apotheosis:stoneshelf' })

    event.shaped('apotheosis:hellshelf', [
        'LWL',
        'ABR',
        'LWL'
    ], {
        W: 'botania:blaze_block',
        L: 'minecraft:red_nether_bricks',
        B: '#forge:bookshelves',
        A: 'cosmiccore:rune_slate_khoruth',
        R: 'cosmiccore:rune_slate_tylomir'
    })
    event.shaped('apotheosis:dormant_deepshelf', [
        'LWL',
        'RBR',
        'LWL'
    ], {
        W: 'cosmiccore:rune_conjunction_arklythar',
        L: 'minecraft:deepslate_tiles',
        B: '#forge:bookshelves',
        R: 'minecraft:echo_shard'
    })
    event.shaped('apotheosis:seashelf', [
        'LWL',
        'ABR',
        'LWL'
    ], {
        W: Item.of('minecraft:potion', '{Potion:"long_water_breathing"}').weakNBT(),
        L: 'minecraft:prismarine_bricks',
        B: '#forge:bookshelves',
        A: 'cosmiccore:rune_slate_tenura',
        R: 'cosmiccore:rune_slate_valdris'
    })
event.shaped('apotheosis:melonshelf', [
        'LWL',
        'RBR',
        'LWL'
    ], {
        W: 'legendarysurvivaloverhaul:purified_water_bottle',
        L: 'minecraft:melon',
        B: '#forge:bookshelves',
        R: 'cosmiccore:rune_slate_tenura'
    })
    event.shaped('apotheosis:beeshelf', [
        'LWL',
        'RBR',
        'LWL'
    ], {
        W: 'minecraft:honey_bottle',
        L: 'minecraft:honeycomb_block',
        B: '#forge:bookshelves',
        R: 'cosmiccore:rune_slate_valdris'
    })
    event.shaped('apotheosis:stoneshelf', [
        'LWL',
        'RBE',
        'LWL'
    ], {
        W: 'gtceu:stone_plate',
        L: 'minecraft:polished_andesite',
        B: '#forge:bookshelves',
        R: 'cosmiccore:rune_slate_valdris',
        E: 'cosmiccore:rune_slate_tenura'
    })
    event.shaped('apotheosis:prismatic_web', [
        'LRL',
        'RBR',
        'LRL'
    ], {
        L: 'minecraft:prismarine_bricks',
        B: 'cosmiccore:rune_slate_arklys',
        R: 'minecraft:cobweb'
    })
    event.shaped('4x apotheosis:scrap_tome', [
        'LRL',
        'RBR',
        'LRL'
    ], {
        L: 'malum:soul_stained_steel_plating',
        B: 'minecraft:anvil',
        R: 'minecraft:book'
    })
    event.shaped('5x apotheosis:helmet_tome', [
        'RRR',
        'RBR',
        '   '
    ], {
        B: 'gtceu:double_soul_stained_steel_plate',
        R: 'minecraft:book'
    })
    event.shaped('8x apotheosis:chestplate_tome', [
        'RBR',
        'RRR',
        'RRR'
    ], {
        B: 'gtceu:double_soul_stained_steel_plate',
        R: 'minecraft:book'
    })
    event.shaped('7x apotheosis:leggings_tome', [
        'RRR',
        'RBR',
        'R R'
    ], {
        B: 'gtceu:double_soul_stained_steel_plate',
        R: 'minecraft:book'
    })
    event.shaped('4x apotheosis:boots_tome', [
        'RBR',
        'R R',
        '   '
    ], {
        B: 'gtceu:double_soul_stained_steel_plate',
        R: 'minecraft:book'
    })
    event.shaped('2x apotheosis:weapon_tome', [
        ' R ',
        ' R ',
        ' B '
    ], {
        B: 'gtceu:soul_stained_steel_rod',
        R: 'minecraft:book'
    })
    event.shaped('3x apotheosis:bow_tome', [
        ' RS',
        'RBS',
        ' RS'
    ], {
        B: 'gtceu:soul_stained_steel_rod',
        R: 'minecraft:book',
        S: 'minecraft:string'
    })
    event.shaped('3x apotheosis:pickaxe_tome', [
        'RRR',
        ' B ',
        ' B '
    ], {
        B: 'gtceu:soul_stained_steel_rod',
        R: 'minecraft:book'
    })
    event.shaped('2x apotheosis:fishing_tome', [
        '  R',
        ' BS',
        'R S'
    ], {
        B: 'gtceu:soul_stained_steel_rod',
        R: 'minecraft:book',
        S: 'minecraft:string'
    })
    event.shaped('4x apotheosis:other_tome', [
        ' R ',
        'RBR',
        ' R '
    ], {
        B: 'gtceu:double_soul_stained_steel_plate',
        R: 'minecraft:book'
    })


    event.recipes.occultism.ritual(
        Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/frost"}'),
        ['minecraft:packed_ice', 'minecraft:packed_ice', 'minecraft:packed_ice', 'minecraft:packed_ice', 'gtceu:exquisite_diamond_gem', 'gtceu:exquisite_diamond_gem', 'gtceu:exquisite_diamond_gem', 'gtceu:exquisite_diamond_gem'],
        'occultism:book_of_binding_bound_djinni',
        'occultism:craft_djinni'
    ).dummy('occultism:ritual_dummy/craft_dimensional_mineshaft').id("occultism:frontiers.fusion_ritual.frosting-gem-ritual")

    event.recipes.occultism.ritual(
        Item.of('apotheosis:gem', '{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/ember"}'),
        ['minecraft:magma_block', 'minecraft:magma_block', 'minecraft:magma_block', 'minecraft:magma_block', 'gtceu:exquisite_quartzite_gem', 'gtceu:exquisite_quartzite_gem', 'gtceu:exquisite_quartzite_gem', 'gtceu:exquisite_quartzite_gem'],
        'occultism:book_of_binding_bound_djinni',
        'occultism:craft_djinni'
    ).dummy('occultism:ritual_dummy/craft_dimensional_mineshaft').id("occultism:frontiers.fusion_ritual.embers-gem-ritual")




})
// ServerEvents.tags('item', event => {
//     event.add('apotheosis:rarity_materials', 'minecraft:diamond')
//   })


