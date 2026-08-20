ServerEvents.recipes(event => {
    event.custom({
        type: 'ars_nouveau:enchanting_apparatus',
        keepNbtOfReagent: false,
        pedestalItems: [
            { item: 'cosmiccore:rune_slate_arklys' },
            { item: 'cosmiccore:rune_slate_zelothar' },
            { item: 'ars_nouveau:magebloom_fiber' },
            { item: 'malum:alchemical_calx' }
        ],
        reagent: { item: 'occultism:otherstone_tablet' },
        result: {
            id: 'cosmiccore:rune_conjunction_arklythar',
            count: 1
        },
        sourceCost: 2000
    }).id('kubejs:ars_nouveau/rune_conjunction_arklythar')

    event.remove({ id: 'ars_nouveau:magebloom_fiber' })
    event.recipes.cosmiccore.spooling_machine('magebloom_fiber')
        .itemInputs('ars_nouveau:magebloom')
        .itemOutputs('ars_nouveau:magebloom_fiber')
        .duration(60)
        .EUt(GTValues.V[GTValues.ULV], 1)

    event.remove({ output: 'ars_nouveau:blank_thread' })
    event.recipes.cosmiccore.spooling_machine('blank_thread')
        .itemInputs('4x ars_nouveau:magebloom_fiber', 'gtceu:gold_rod')
        .itemOutputs('ars_nouveau:blank_thread')
        .duration(60)
        .EUt(4)

    event.remove({ id: 'ars_nouveau:arcane_core' })
    event.shaped('ars_nouveau:arcane_core', [
        'ACA',
        'BDB',
        'AAA'
    ], {
        A: 'ars_nouveau:sourcestone',
        B: 'gtceu:blue_alloy_rod',
        C: '#gtceu:circuits/mv',
        D: 'ars_nouveau:source_gem'
    })

    event.remove({ id: 'ars_nouveau:wilden_summon_alt' })
    event.remove({ id: 'ars_nouveau:enchanting_apparatus' })
    event.shaped('ars_nouveau:enchanting_apparatus', [
        'BAB',
        'CDC',
        'BAB'
    ], {
        A: 'ars_nouveau:sourcestone',
        B: 'gtceu:rose_gold_nugget',
        C: 'gtceu:rose_gold_plate',
        D: 'minecraft:diamond'
    })

    event.remove({ id: 'ars_nouveau:agronomic_sourcelink' })
    event.shaped('ars_nouveau:agronomic_sourcelink', [
        ' A ',
        'BCB',
        ' A '
    ], {
        A: 'ars_nouveau:source_gem',
        B: 'gtceu:rose_gold_plate',
        C: 'minecraft:wheat'
    })

    event.remove({ id: 'ars_nouveau:volcanic_sourcelink' })
    event.shaped('ars_nouveau:volcanic_sourcelink', [
        ' A ',
        'BCB',
        ' A '
    ], {
        A: 'ars_nouveau:source_gem',
        B: 'gtceu:rose_gold_plate',
        C: 'minecraft:lava_bucket'
    })

    event.remove({ id: 'ars_nouveau:alchemical_sourcelink' })
    event.shaped('ars_nouveau:alchemical_sourcelink', [
        ' A ',
        'BCB',
        ' A '
    ], {
        A: 'ars_nouveau:source_gem',
        B: 'gtceu:rose_gold_plate',
        C: 'minecraft:brewing_stand'
    })

    event.remove({ id: 'ars_nouveau:vitalic_sourcelink' })
    event.shaped('ars_nouveau:vitalic_sourcelink', [
        ' A ',
        'BCB',
        ' A '
    ], {
        A: 'ars_nouveau:source_gem',
        B: 'gtceu:rose_gold_plate',
        C: 'minecraft:glistering_melon_slice'
    })

    event.remove({ id: 'ars_nouveau:mycelial_sourcelink' })
    event.shaped('ars_nouveau:mycelial_sourcelink', [
        ' A ',
        'BCB',
        ' A '
    ], {
        A: 'ars_nouveau:source_gem',
        B: 'gtceu:rose_gold_plate',
        C: 'minecraft:mushroom_stew'
    })

    event.remove({ id: 'ars_nouveau:ritual_brazier' })
    event.shaped('ars_nouveau:ritual_brazier', [
        ' B ',
        'BCB',
        ' A '
    ], {
        A: 'ars_nouveau:source_gem_block',
        B: 'gtceu:rose_gold_plate',
        C: 'ars_nouveau:arcane_pedestal'
    })

    event.remove({ id: 'ars_nouveau:arcane_pedestal' })
    event.shaped('ars_nouveau:arcane_pedestal', [
        'BAB',
        'CBC',
        'CBC'
    ], {
        A: 'ars_nouveau:source_gem',
        B: 'ars_nouveau:sourcestone',
        C: 'gtceu:rose_gold_nugget'
    })

    event.remove({ id: 'ars_nouveau:basic_spell_turret' })
    event.shaped('ars_nouveau:basic_spell_turret', [
        'BCB',
        'CAC',
        'BCB'
    ], {
        A: 'minecraft:redstone_block',
        B: 'ars_nouveau:source_gem',
        C: 'gtceu:rose_gold_plate'
    })

    event.remove({ id: 'ars_nouveau:spell_prism' })
    event.shaped('ars_nouveau:spell_prism', [
        'BCB',
        'CAC',
        'BCB'
    ], {
        A: '#c:storage_blocks/quartz',
        B: 'gtceu:rose_gold_plate',
        C: 'ars_nouveau:archwood_planks'
    })

    event.remove({ id: 'ars_nouveau:magelight_torch' })
    event.shaped('ars_nouveau:magelight_torch', [
        'BCB',
        ' B '
    ], {
        B: 'gtceu:rose_gold_nugget',
        C: 'ars_nouveau:source_gem'
    })

    event.remove({ id: 'ars_nouveau:redstone_relay' })
    event.shaped('ars_nouveau:redstone_relay', [
        'BCB',
        'BAB',
        'BCB'
    ], {
        A: 'ars_nouveau:source_gem_block',
        B: 'gtceu:rose_gold_plate',
        C: 'minecraft:redstone'
    })

    event.remove({ id: 'ars_nouveau:scribes_table' })
    event.shaped('ars_nouveau:scribes_table', [
        'AAA',
        'C C',
        'B B'
    ], {
        A: 'ars_nouveau:archwood_slab',
        B: '#c:logs/archwood',
        C: 'gtceu:rose_gold_nugget'
    })

    event.remove({ id: 'ars_nouveau:source_jar' })
    event.shaped('ars_nouveau:source_jar', [
        'CBC',
        'A A',
        'CCC'
    ], {
        A: '#c:glass_blocks',
        B: 'gtceu:rose_gold_plate',
        C: 'ars_nouveau:archwood_slab'
    })

    event.remove({ id: 'ars_nouveau:relay' })
    event.shaped('ars_nouveau:relay', [
        'A A',
        'ABA',
        'A A'
    ], {
        A: 'gtceu:rose_gold_rod',
        B: 'ars_nouveau:source_gem_block'
    })

    event.shaped('ars_nouveau:relay_splitter', [
        'AGA',
        'ABA',
        'AGA'
    ], {
        A: 'gtceu:rose_gold_rod',
        B: 'ars_nouveau:source_gem_block',
        G: 'gtceu:glass_plate'
    })

    event.remove({ output: 'ars_nouveau:imbuement_chamber' })
    event.shaped('ars_nouveau:imbuement_chamber', [
        'ARA',
        'A A',
        'ARA'
    ], {
        A: 'ars_nouveau:archwood_planks',
        R: 'gtceu:rose_gold_plate'
    })

    event.remove({ output: 'ars_nouveau:void_jar' })
    event.shaped('ars_nouveau:void_jar', [
        'PHP',
        'GLG',
        'EGE'
    ], {
        P: 'gtceu:steel_plate',
        H: '#c:tools/hammers',
        G: '#c:glass_blocks',
        L: 'minecraft:lava_bucket',
        E: '#c:ender_pearls'
    })

    event.remove({ id: 'ars_nouveau:apprentice_book_upgrade' })
    event.custom({
        type: 'malum:spirit_infusion',
        carryOverComponentData: true,
        extraInputs: [
            { count: 8, item: 'malum:soulwoven_silk' },
            { count: 8, item: 'cosmiccore:nostium_ingot' },
            { count: 1, item: 'ars_nouveau:source_gem_block' }
        ],
        input: {
            count: 1,
            item: 'ars_nouveau:novice_spell_book'
        },
        result: {
            count: 1,
            id: 'ars_nouveau:apprentice_spell_book'
        },
        spirits: [
            { type: 'malum:arcane', count: 32 },
            { type: 'malum:aerial', count: 16 },
            { type: 'malum:aqueous', count: 16 },
            { type: 'malum:earthen', count: 16 }
        ]
    }).id('kubejs:ars_nouveau/apprentice_spell_book')

    event.remove({ id: 'ars_nouveau:archmage_book_upgrade' })
    event.custom({
        type: 'malum:spirit_infusion',
        carryOverComponentData: true,
        extraInputs: [
            { count: 8, item: 'cosmiccore:terraweave_cloth' },
            { count: 8, item: 'gtceu:galvanized_ethersteel_ingot' },
            { count: 1, item: 'ars_nouveau:wilden_tribute' }
        ],
        input: {
            count: 1,
            item: 'ars_nouveau:apprentice_spell_book'
        },
        result: {
            count: 1,
            id: 'ars_nouveau:archmage_spell_book'
        },
        spirits: [
            { type: 'malum:arcane', count: 32 },
            { type: 'malum:eldritch', count: 16 },
            { type: 'malum:wicked', count: 16 },
            { type: 'malum:infernal', count: 16 }
        ]
    }).id('kubejs:ars_nouveau/archmage_spell_book')

    event.custom({
        type: 'malum:spirit_infusion',
        extraInputs: [
            { count: 8, item: 'minecraft:phantom_membrane' },
            { count: 8, item: 'minecraft:rotten_flesh' },
            { count: 1, item: 'minecraft:wither_skeleton_skull' }
        ],
        input: {
            count: 1,
            item: 'ars_nouveau:purple_archwood_log'
        },
        result: {
            count: 1,
            id: 'ars_nouveau:ritual_wilden_summon'
        },
        spirits: [
            { type: 'malum:arcane', count: 32 },
            { type: 'malum:earthen', count: 32 },
            { type: 'malum:aerial', count: 16 },
            { type: 'malum:wicked', count: 16 }
        ]
    }).id('kubejs:ars_nouveau/wilden_summon_pity')
})
