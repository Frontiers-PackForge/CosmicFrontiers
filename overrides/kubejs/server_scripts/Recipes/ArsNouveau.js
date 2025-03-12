ServerEvents.recipes(event => {

    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": false,
        "output": {
          "item": "cosmiccore:rune_conjunction_arklythar"
        },
        "pedestalItems": [
          {
            "item": "cosmiccore:rune_slate_arklys"
          },
          {
            "item": "cosmiccore:rune_slate_zelothar"
          },
          {
            "item": "ars_nouveau:magebloom_fiber"
          },
          {
            "item": "malum:alchemical_calx"
          }
        ],
        "reagent": [
          {
            "item": "occultism:otherstone_tablet"
          }
        ],
        "sourceCost": 2000
      })
    event.remove({id:'occultism:ritual/craft_stabilizer_tier3'})
    event.remove({id:'ars_ocultas:craft_stabilizer_tier4'})
    event.remove({id:'occultism:ritual/craft_stabilizer_tier4'})
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
ServerEvents.recipes(event => {
    //event.remove({id: 'ars_nouveau:apprentice_spell_book'})
    //event.shaped('ars_nouveau:apprentice_spell_book', [
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
    //event.remove({id: 'ars_nouveau:archmage_spell_book'})
    //event.shaped('ars_nouveau:archmage_spell_book', [
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
    event.remove({ id: 'ars_nouveau:magebloom_fiber' })
    event.recipes.gtceu.spooling_machine('ars_nouveau:magebloom_fiber')
        .itemInputs('ars_nouveau:magebloom')
        .itemOutputs('ars_nouveau:magebloom_fiber')
        .duration(60)
        .EUt(4);
    //Spooling Recipes

    event.remove({ output: 'ars_nouveau:blank_thread' })
    event.recipes.gtceu.spooling_machine('ars_nouveau:blank_thread')
        .itemInputs('4x ars_nouveau:magebloom_fiber')
        .itemInputs('gtceu:gold_rod')
        .itemOutputs('ars_nouveau:blank_thread')
        .duration(60)
        .EUt(4);

    //Magic Stations
    event.remove({ id: 'ars_nouveau:arcane_core' })
    event.shaped('ars_nouveau:arcane_core', [
        'ACA',
        'BDB',
        'AAA'
    ],
        {
            A: 'ars_nouveau:sourcestone',
            B: 'gtceu:blue_alloy_rod',
            C: '#gtceu:circuits/mv',
            D: 'ars_nouveau:source_gem',
        }
    )
    event.remove({ id: 'ars_nouveau:wilden_summon_alt' })
    event.remove({ id: 'ars_nouveau:enchanting_apparatus' })
    event.shaped('ars_nouveau:enchanting_apparatus', [
        'BAB',
        'CDC',
        'BAB'
    ],
        {
            A: 'ars_nouveau:sourcestone',
            B: 'gtceu:rose_gold_nugget',
            C: 'gtceu:rose_gold_plate',
            D: 'minecraft:diamond',
        }
    )
    event.remove({ id: 'ars_nouveau:agronomic_sourcelink' })
    event.shaped('ars_nouveau:agronomic_sourcelink', [
        ' A ',
        'BCB',
        ' A '
    ],
        {
            A: 'ars_nouveau:source_gem',
            B: 'gtceu:rose_gold_plate',
            C: 'minecraft:wheat',
        }
    )
    event.remove({ id: 'ars_nouveau:source_jar' })
    event.shaped('ars_nouveau:source_jar', [
        'CBC',
        'A A',
        'CCC'
    ],
        {
            A: '#forge:glass',
            B: 'gtceu:rose_gold_plate',
            C: 'ars_nouveau:archwood_slab',
        }
    )
    event.remove({ id: 'ars_nouveau:relay' })
    event.shaped('ars_nouveau:relay', [
        'A A',
        'ABA',
        'A A'
    ],
        {
            A: 'gtceu:rose_gold_rod',
            B: 'ars_nouveau:source_gem_block',
        }
    )
    event.shaped('ars_nouveau:relay_splitter', [
        'AGA',
        'ABA',
        'AGA'
    ],
        {
            A: 'gtceu:rose_gold_rod',
            B: 'ars_nouveau:source_gem_block',
            G: 'gtceu:glass_plate'
        }
    )
    event.remove({ output: 'ars_nouveau:imbuement_chamber' })
    event.shaped('ars_nouveau:imbuement_chamber', [
        'ARA',
        'A A',
        'ARA'
    ], {
        A: 'ars_nouveau:archwood_planks',
        R: 'gtceu:rose_gold_plate'
    }
    )
})