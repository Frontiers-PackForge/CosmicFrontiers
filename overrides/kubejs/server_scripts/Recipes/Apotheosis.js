ServerEvents.recipes(event => {

    // event.remove({ output: ['apotheosis:beeshelf', 'apotheosis:blazing_hellshelf', 'apotheosis:crystal_seashelf', 'apotheosis:deepshelf', 'apotheosis:dormant_deepshelf', 'apotheosis:hellshelf', 'apotheosis:infused_hellshelf', 'apotheosis:pearl_endshelf', 'apotheosis:rectifier', 'apotheosis:rectifier_t3', 'apotheosis:seashelf', 'apotheosis:sightshelf', 'apotheosis:sightshelf_t2', 'apotheosis:soul_touched_deepshelf', 'apotheosis:soul_touched_sculkshelf', 'apotheosis:stoneshelf', 'apotheosis:filtering_shelf', 'apotheosis:treasure_shelf', 'apotheosis:draconic_endshelf', 'apotheosis:echoing_deepshelf', 'apotheosis:echoing_sculkshelf', 'apotheosis:endshelf', 'apotheosis:glowing_hellshelf', 'apotheosis:heart_seashelf', 'apotheosis:infused_seashelf', 'apotheosis:melonshelf', 'apotheosis:rectifier_t2'] })


    event.remove({ id: 'apotheosis:hellshelf' })

    
    event.remove({ output: 'apotheosis:hellshelf' })
    event.remove({ output: 'apotheosis:seashelf' })
    event.remove({ output: 'apotheosis:dormant_deepshelf' })


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
    event.shaped('apotheosis:hellshelf', [
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
        W: Item.of('minecraft:potion', '{Potion:"minecraft:long_water_breathing"}'),
        L: 'minecraft:prismarine_bricks',
        B: '#forge:bookshelves',
        A: 'cosmiccore:rune_slate_tenura',
        R: 'cosmiccore:rune_slate_valdris'
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


