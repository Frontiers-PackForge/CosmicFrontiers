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
    event.remove({ output: 'arseng:source_cell_housing' })

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
    event.remove({ id: 'ars_nouveau:volcanic_sourcelink' })
    event.shaped('ars_nouveau:volcanic_sourcelink', [
        ' A ',
        'BCB',
        ' A '
    ],
        {
            A: 'ars_nouveau:source_gem',
            B: 'gtceu:rose_gold_plate',
            C: 'minecraft:lava_bucket',
        }
    )
    event.remove({ id: 'ars_nouveau:alchemical_sourcelink' })
    event.shaped('ars_nouveau:alchemical_sourcelink', [
        ' A ',
        'BCB',
        ' A '
    ],
        {
            A: 'ars_nouveau:source_gem',
            B: 'gtceu:rose_gold_plate',
            C: 'minecraft:brewing_stand',
        }
    )
    event.remove({ id: 'ars_nouveau:vitalic_sourcelink' })
    event.shaped('ars_nouveau:vitalic_sourcelink', [
        ' A ',
        'BCB',
        ' A '
    ],
        {
            A: 'ars_nouveau:source_gem',
            B: 'gtceu:rose_gold_plate',
            C: 'minecraft:glistering_melon_slice',
        }
    )
    event.remove({ id: 'ars_nouveau:mycelial_sourcelink' })
    event.shaped('ars_nouveau:mycelial_sourcelink', [
        ' A ',
        'BCB',
        ' A '
    ],
        {
            A: 'ars_nouveau:source_gem',
            B: 'gtceu:rose_gold_plate',
            C: 'minecraft:mushroom_stew',
        }
    )
    event.remove({ id: 'ars_nouveau:ritual_brazier' })
    event.shaped('ars_nouveau:ritual_brazier', [
        ' B ',
        'BCB',
        ' A '
    ],
        {
            A: 'ars_nouveau:source_gem_block',
            B: 'gtceu:rose_gold_plate',
            C: 'ars_nouveau:arcane_pedestal',
        }
    )
    event.remove({ id: 'ars_nouveau:arcane_pedestal' })
    event.shaped('ars_nouveau:arcane_pedestal', [
        'BAB',
        'CBC',
        'CBC'
    ],
        {
            A: 'ars_nouveau:source_gem',
            C: 'gtceu:rose_gold_nugget',
            B: 'ars_nouveau:sourcestone',
        }
    )
    event.remove({ id: 'ars_nouveau:basic_spell_turret' })
    event.shaped('ars_nouveau:basic_spell_turret', [
        'BCB',
        'CAC',
        'BCB'
    ],
        {
            A: 'minecraft:redstone_block',
            C: 'gtceu:rose_gold_plate',
            B: 'ars_nouveau:source_gem',
        }
    )
    event.remove({ id: 'ars_nouveau:spell_prism' })
    event.shaped('ars_nouveau:spell_prism', [
        'BCB',
        'CAC',
        'BCB'
    ],
        {
            A: '#forge:storage_blocks/quartz',
            C: 'ars_nouveau:archwood_planks',
            B: 'gtceu:rose_gold_plate',
        }
    )
    event.remove({ id: 'ars_nouveau:magelight_torch' })
    event.shaped('ars_nouveau:magelight_torch', [
        'BCB',
        ' B ',
        '   '
    ],
        {
            C: 'ars_nouveau:source_gem',
            B: 'gtceu:rose_gold_nugget',
        }
    )
    event.remove({ id: 'ars_nouveau:redstone_relay' })
    event.shaped('ars_nouveau:redstone_relay', [
        'BCB',
        'BAB',
        'BCB'
    ],
        {
            A: 'ars_nouveau:source_gem_block',
            C: 'minecraft:redstone',
            B: 'gtceu:rose_gold_plate',
        }
    )
    event.remove({ id: 'ars_nouveau:scribes_table' })
    event.shaped('ars_nouveau:scribes_table', [
        'AAA',
        'C C',
        'B B'
    ],
        {
            A: 'ars_nouveau:archwood_slab',
            C: 'gtceu:rose_gold_nugget',
            B: '#forge:logs/archwood',
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
    //spellbooks
    //incase an occultism recipe is wanted instead
  //event.remove({ id: 'ars_nouveau:novice_spell_book' })
  //event.recipes.occultism.ritual(
  //  'ars_nouveau:novice_spell_book',
  //  ['minecraft:iron_sword',
  //    'minecraft:iron_pickaxe',
  //    'minecraft:iron_axe',
  //    'minecraft:iron_shovel',],
  //  'minecraft:book',
  //  'occultism:rune_ritual'
  //).dummy("kubejs:dummy_ritual_thing").id("occultism:frontiers.novice_spell_book_ritual")

  .id("malum:spirit_infusion.frontiers.apprentice_spell_book")
  event.remove({ id: 'ars_nouveau:apprentice_spell_book_upgrade' })
  event.custom(
    {
      "type": "malum:spirit_infusion",
      "extra_items": [
        {
          "count": 8,
          "item": "malum:spirit_fabric"
        },
        {
          "count": 8,
          "item": "botania:manasteel_ingot"
        },
        {
          "count": 1,
          "item": "botania:blacker_lotus"
        },
      ],
      "input": {
        "count": 1,
        "item": "ars_nouveau:novice_spell_book"
      },
      "output": {
        "count": 1,
        "item": "ars_nouveau:apprentice_spell_book"
      },
      "spirits": [
        {
          "type": "arcane",
          "count": 32
        },
        {
          "type": "aerial",
          "count": 16
        },
        {
          "type": "aqueous",
          "count": 16
        },
        {
          "type": "earthen",
          "count": 16
        },
      ]
    }
  )

  .id("malum:spirit_infusion.frontiers.archmage_spell_book")
  event.remove({ id: 'ars_nouveau:archmage_spell_book_upgrade' })
  event.custom(
    {
      "type": "malum:spirit_infusion",
      "extra_items": [
        {
          "count": 8,
          "item": "kubejs:terraweave_cloth"
        },
        {
          "count": 8,
          "item": "gtceu:galvanized_ethersteel_ingot"
        },
        {
          "count": 1,
          "item": "ars_nouveau:wilden_tribute"
        },
      ],
      "input": {
        "count": 1,
        "item": "ars_nouveau:apprentice_spell_book"
      },
      "output": {
        "count": 1,
        "item": "ars_nouveau:archmage_spell_book"
      },
      "spirits": [
        {
          "type": "arcane",
          "count": 32
        },
        {
          "type": "eldritch",
          "count": 16
        },
        {
          "type": "wicked",
          "count": 16
        },
        {
          "type": "infernal",
          "count": 16
        },
      ]
    }
  )
  //pity recipe cause the wilden dens spawn *very* rarely, should be a one time craft
  event.custom(
    {
      "type": "malum:spirit_infusion",
      "extra_items": [
        {
          "count": 8,
          "item": "minecraft:phantom_membrane"
        },
        {
          "count": 8,
          "item": "minecraft:rotten_flesh"
        },
        {
          "count": 1,
          "item": "minecraft:wither_skeleton_skull"
        },
      ],
      "input": {
        "count": 1,
        "item": "ars_nouveau:purple_archwood_log"
      },
      "output": {
        "count": 1,
        "item": "ars_nouveau:ritual_wilden_summon"
      },
      "spirits": [
        {
          "type": "arcane",
          "count": 32
        },
        {
          "type": "earthen",
          "count": 32
        },
        {
          "type": "aerial",
          "count": 16
        },
        {
          "type": "wicked",
          "count": 16
        },
      ]
    }
  )
})