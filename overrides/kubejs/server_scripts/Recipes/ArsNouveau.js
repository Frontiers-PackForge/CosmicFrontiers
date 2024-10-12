ServerEvents.recipes(event => {

    // event.custom({
    //     "type": "ars_nouveau:enchanting_apparatus",
    //     "keepNbtOfReagent": true,
    //     "output": {
    //       "item": "ars_nouveau:arcanist_hood"
    //     },
    //     "pedestalItems": [
    //       {
    //         "item": "ars_nouveau:magebloom_fiber"
    //       },
    //       {
    //         "item": "ars_nouveau:magebloom_fiber"
    //       },
    //       {
    //         "item": "ars_nouveau:magebloom_fiber"
    //       },
    //       {
    //         "item": "ars_nouveau:magebloom_fiber"
    //       }
    //     ],
    //     "reagent": [
    //       {
    //         "item": "minecraft:iron_helmet"
    //       }
    //     ],
    //     "sourceCost": 0
    //   })
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "ars_nouveau:sourceberry_bush",
            "ars_nouveau:sourceberry_bush",
            "minecraft:sand",
            "minecraft:sand",
        ], // input items
	    "minecraft:gunpowder", // reagent
	    'bhc:soul_heart_crystal', // output
	    1000, // source cost
	    // true // keep nbt of reagent, think like a smithing recipe
	);
    event.remove({ output: 'ars_nouveau:archwood_chest' })

    event.shaped('ars_nouveau:archwood_chest', [
        'ABA',
        'BRB',
        'ABA'
    ],
        {
            A: '#forge:logs/archwood',
            B: '#forge:planks/archwood',
            R: 'minecraft:flint',
        }
    )
})

//Time to do some Gregification
//Spellbooks
ServerEvents.recipes(e => {
    //e.remove({id: 'ars_nouveau:apprentice_spell_book'})
    //e.shaped('ars_nouveau:apprentice_spell_book', [
    //        'BAA',
    //        'ECD',
    //        ' C '
    //    ],
    //    {
    //        A: 'minecraft:iron_ingot',
    //        B: 'gtceu:iron_plate',
    //        C: 'minecraft:stick',
    //        D: '#forge:tools/hammers',
    //        E: '#forge:tools/files',
    //    }
    //)
    //e.remove({id: 'ars_nouveau:archmage_spell_book'})
    //e.shaped('ars_nouveau:archmage_spell_book', [
    //        'BAA',
    //        'ECD',
    //        ' C '
    //    ],
    //    {
    //        A: 'minecraft:iron_ingot',
    //        B: 'gtceu:iron_plate',
    //        C: 'minecraft:stick',
    //        D: '#forge:tools/hammers',
    //        E: '#forge:tools/files',
    //    }
    //)

    //Fiber Recipes
    e.remove({ id: 'ars_nouveau:magebloom_fiber' })
    e.recipes.gtceu.spooling_machine('ars_nouveau:magebloom_fiber')
        .itemInputs('ars_nouveau:magebloom')
        .itemOutputs('ars_nouveau:magebloom_fiber')
        .duration(60)
        .EUt(4);
    //Spooling Recipes

    e.remove({ output: 'ars_nouveau:blank_thread' })
    e.recipes.gtceu.spooling_machine('ars_nouveau:blank_thread')
        .itemInputs('4x ars_nouveau:magebloom_fiber')
        .itemInputs('gtceu:gold_rod')
        .itemOutputs('ars_nouveau:blank_thread')
        .duration(60)
        .EUt(4);

    //Magic Stations
    e.remove({ id: 'ars_nouveau:arcane_core' })
    e.shaped('ars_nouveau:arcane_core', [
        'ACA',
        'BDB',
        'AAA'
    ],
        {
            A: 'ars_nouveau:sourcestone',
            B: 'gtceu:gold_rod',
            C: '#gtceu:circuits/mv',
            D: 'ars_nouveau:source_gem',
        }
    )
    e.remove({ id: 'ars_nouveau:wilden_summon_alt' })
    e.shaped('ars_nouveau:arcane_core', [
        'ACA',
        'BDB',
        'AAA'
    ],
        {
            A: 'ars_nouveau:sourcestone',
            B: 'gtceu:gold_rod',
            C: '#gtceu:circuits/mv',
            D: 'ars_nouveau:source_gem',
        }
    )
    e.remove({ id: 'ars_nouveau:enchanting_apparatus' })
    e.shaped('ars_nouveau:enchanting_apparatus', [
        'BAB',
        'CDC',
        'BAB'
    ],
        {
            A: 'ars_nouveau:sourcestone',
            B: 'minecraft:gold_nugget',
            C: 'gtceu:gold_plate',
            D: 'minecraft:diamond',
        }
    )
    e.remove({ id: 'ars_nouveau:agronomic_sourcelink' })
    e.shaped('ars_nouveau:agronomic_sourcelink', [
        ' A ',
        'BCB',
        ' A '
    ],
        {
            A: 'ars_nouveau:source_gem',
            B: 'gtceu:gold_plate',
            C: 'minecraft:wheat',
        }
    )
    e.remove({ id: 'ars_nouveau:source_jar' })
    e.shaped('ars_nouveau:source_jar', [
        'CBC',
        'A A',
        'CCC'
    ],
        {
            A: '#forge:glass',
            B: 'gtceu:gold_plate',
            C: 'ars_nouveau:archwood_slab',
        }
    )
    e.remove({ id: 'ars_nouveau:relay' })
    e.shaped('ars_nouveau:relay', [
        'A A',
        'ABA',
        'A A'
    ],
        {
            A: 'gtceu:gold_rod',
            B: 'ars_nouveau:source_gem_block',
        }
    )
    e.remove({ output: 'ars_nouveau:imbuement_chamber' })
    e.shaped('ars_nouveau:imbuement_chamber', [
        'ARA',
        'A A',
        'ARA'
    ], {
        A: 'ars_nouveau:archwood_planks',
        R: 'gtceu:rose_gold_plate'
    }
    )
})