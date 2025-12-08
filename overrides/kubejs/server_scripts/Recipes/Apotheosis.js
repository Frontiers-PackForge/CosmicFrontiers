ServerEvents.recipes(event => {

    // event.remove({ output: ['apotheosis:beeshelf', 'apotheosis:blazing_hellshelf', 'apotheosis:crystal_seashelf', 'apotheosis:deepshelf', 'apotheosis:dormant_deepshelf', 'apotheosis:hellshelf', 'apotheosis:infused_hellshelf', 'apotheosis:pearl_endshelf', 'apotheosis:rectifier', 'apotheosis:rectifier_t3', 'apotheosis:seashelf', 'apotheosis:sightshelf', 'apotheosis:sightshelf_t2', 'apotheosis:soul_touched_deepshelf', 'apotheosis:soul_touched_sculkshelf', 'apotheosis:stoneshelf', 'apotheosis:filtering_shelf', 'apotheosis:treasure_shelf', 'apotheosis:draconic_endshelf', 'apotheosis:echoing_deepshelf', 'apotheosis:echoing_sculkshelf', 'apotheosis:endshelf', 'apotheosis:glowing_hellshelf', 'apotheosis:heart_seashelf', 'apotheosis:infused_seashelf', 'apotheosis:melonshelf', 'apotheosis:rectifier_t2'] })
    
    //hellshelf
    event.remove({ output: 'apotheosis:hellshelf' })
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
    event.shaped('apotheosis:blazing_hellshelf', [
        'LRL',
        'WBW',
        'LRL'
    ], {
        W: 'cosmiccore:rune_conjunction_arklythar',
        L: 'minecraft:red_nether_bricks',
        B: 'apotheosis:infused_hellshelf',
        R: 'botania:blaze_block'
    })
    event.shaped('apotheosis:glowing_hellshelf', [
        'LRL',
        'WBW',
        'LRL'
    ], {
        W: 'cosmiccore:rune_conjunction_arklythar',
        L: 'minecraft:red_nether_bricks',
        B: 'apotheosis:infused_hellshelf',
        R: 'minecraft:glowstone'
    })
    //deepshelf
    event.remove({ output: 'apotheosis:dormant_deepshelf' })
    event.shaped('apotheosis:dormant_deepshelf', [
        'LWL',
        'RBR',
        'LWL'
    ], {
        W: 'minecraft:echo_shard',
        L: 'minecraft:deepslate_tiles',
        B: '#forge:bookshelves',
        R: 'kubejs:terraweave_cloth'
    })
    event.remove({ output: 'apotheosis:echoing_deepshelf' })
    event.shaped('apotheosis:echoing_deepshelf', [
        'LWL',
        'RBR',
        'LWL'
    ], {
        W: 'minecraft:sculk_sensor',
        L: 'minecraft:deepslate_tiles',
        B: 'apotheosis:deepshelf',
        R: 'gtceu:double_terrasteel_plate'
    })
    event.remove({ output: 'apotheosis:soul_touched_deepshelf' })
    event.shaped('apotheosis:soul_touched_deepshelf', [
        'LWL',
        'RBR',
        'LWL'
    ], {
        W: 'minecraft:sculk_catalyst',
        L: 'minecraft:deepslate_tiles',
        B: 'apotheosis:deepshelf',
        R: 'gtceu:double_terrasteel_plate'
    })
    event.remove({ output: 'apotheosis:echoing_sculkshelf' })
    event.shaped('apotheosis:echoing_sculkshelf', [
        'LEL',
        'RBR',
        'LWL'
    ], {
        W: 'minecraft:sculk_shrieker',
        E: 'apotheosis:warden_tendril',
        L: 'minecraft:deepslate_tiles',
        B: 'apotheosis:echoing_deepshelf',
        R: 'gtceu:double_terrasteel_plate'
    })
    event.remove({ output: 'apotheosis:soul_touched_sculkshelf' })
    event.shaped('apotheosis:soul_touched_sculkshelf', [
        'LEL',
        'RBR',
        'LWL'
    ], {
        W: 'minecraft:sculk_shrieker',
        E: 'apotheosis:warden_tendril',
        L: 'minecraft:deepslate_tiles',
        B: 'apotheosis:soul_touched_deepshelf',
        R: 'gtceu:double_terrasteel_plate'
    })
    //endshelf
    event.remove({ output: 'apotheosis:endshelf' })
    event.shaped('apotheosis:endshelf', [
        'LWL',
        'RBR',
        'LWL'
    ], {
        W: 'botania:dragonstone',
        L: 'minecraft:end_stone_bricks',
        B: '#forge:bookshelves',
        R: 'gtceu:double_elementium_plate'
    })

    event.shaped('apotheosis:pearl_endshelf', [
        'LWL',
        'RBR',
        'LWL'
    ], {
        W: 'botania:dragonstone',
        L: 'minecraft:end_stone_bricks',
        B: 'apotheosis:endshelf',
        R: 'gtceu:double_elementium_plate'
    })
    event.shaped('apotheosis:draconic_endshelf', [
        'LWL',
        'RBR',
        'LWL'
    ], {
        W: 'botania:dragonstone_block',
        L: 'minecraft:end_stone_bricks',
        B: 'apotheosis:endshelf',
        R: 'gtceu:double_elementium_plate'
    })
    //seashelf
    event.remove({ output: 'apotheosis:seashelf' })
    event.shaped('apotheosis:seashelf', [
        'LWL',
        'ABR',
        'LEL'
    ], {
        E: 'minecraft:nautilus_shell',
        W: 'minecraft:wet_sponge',
        L: 'minecraft:prismarine_bricks',
        B: '#forge:bookshelves',
        A: 'cosmiccore:rune_slate_tenura',
        R: 'cosmiccore:rune_slate_valdris'
    })
    event.shaped('apotheosis:crystal_seashelf', [
        'LRL',
        'WBW',
        'LRL'
    ], {
        W: 'cosmiccore:rune_conjunction_arklythar',
        L: 'minecraft:prismarine_bricks',
        B: 'apotheosis:infused_seashelf',
        R: 'minecraft:sea_lantern'
    })
    event.shaped('apotheosis:heart_seashelf', [
        'LRL',
        'WBW',
        'LRL'
    ], {
        W: 'cosmiccore:rune_conjunction_arklythar',
        L: 'minecraft:prismarine_bricks',
        B: 'apotheosis:infused_seashelf',
        R: 'minecraft:heart_of_the_sea'
    })
    //misc shelf
    event.shaped('apotheosis:melonshelf', [
        'LWL',
        'RBR',
        'LWL'
    ], {
        W: 'minecraft:melon_slice',
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
    event.remove({ output: 'apotheosis:stoneshelf' })
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
    event.remove({ output: 'apotheosis:sightshelf' })
    event.shaped('apotheosis:sightshelf', [
        'LWL',
        'RBR',
        'LWL'
    ], {
        W: 'minecraft:spyglass',
        L: 'gtceu:double_rose_gold_plate',
        B: 'apotheosis:infused_hellshelf',
        R: 'cosmiccore:rune_conjunction_arklythar',
    })
    event.remove({ output: 'apotheosis:sightshelf_t2' })
    event.shaped('apotheosis:sightshelf_t2', [
        'LWL',
        'RBR',
        'LWL'
    ], {
        W: 'botania:monocle',
        L: 'gtceu:exquisite_emerald_gem',
        B: 'apotheosis:sightshelf',
        R: 'cosmiccore:rune_conjunction_arklythar',
    })
    event.remove({ output: 'apotheosis:treasure_shelf' })
    event.shaped('apotheosis:treasure_shelf', [
        'LWL',
        'RBR',
        'LWL'
    ], {
        W: 'apotheosis:deepshelf',
        L: 'gtceu:double_rose_gold_plate',
        B: 'gtceu:exquisite_emerald_gem',
        R: 'gtceu:exquisite_diamond_gem',
    })

   //rectifiers
    event.remove({ output: 'apotheosis:rectifier' })
    event.shaped('apotheosis:rectifier', [
        'LRL',
        'RBR',
        'LRL'
    ], {
        L: 'minecraft:amethyst_block',
        B: 'apotheosis:infused_seashelf',
        R: 'gtceu:double_soul_stained_steel_plate'
    })
    event.remove({ output: 'apotheosis:rectifier_t2' })
    event.shaped('apotheosis:rectifier_t2', [
        'LRL',
        'RBR',
        'LRL'
    ], {
        L: 'minecraft:amethyst_block',
        B: 'apotheosis:rectifier',
        R: 'gtceu:double_terrasteel_plate'
    })
    event.remove({ output: 'apotheosis:rectifier_t3' })
    event.shaped('apotheosis:rectifier_t3', [
        'LRL',
        'RBR',
        'LRL'
    ], {
        L: 'minecraft:amethyst_block',
        B: 'apotheosis:rectifier_t2',
        R: 'gtceu:double_elementium_plate'
    })
    //crafting stations
    event.remove({ output: 'apotheosis:simple_reforging_table' })
    event.shaped('apotheosis:simple_reforging_table', [
        'RLR',
        'LBL',
        'EEE'
    ], {
        L: 'gtceu:wrought_iron_plate',
        B: 'minecraft:enchanting_table',
        R: 'apotheosis:gem_dust',
        E: 'minecraft:stone_slab'
    })
    event.remove({ output: 'apotheosis:reforging_table' })
    event.shaped('apotheosis:reforging_table', [
        'RLR',
        'LBL',
        'EEE'
    ], {
        L: 'gtceu:double_soul_stained_steel_plate',
        B: 'apotheosis:simple_reforging_table',
        R: 'apotheosis:epic_material',
        E: 'minecraft:red_nether_brick_slab'
    })
    event.remove({ output: 'apotheosis:salvaging_table' })
    event.shaped('apotheosis:salvaging_table', [
        'LLL',
        'PBA',
        'RER'
    ], {
        L: 'gtceu:double_copper_plate',
        B: 'minecraft:smithing_table',
        R: 'apotheosis:gem_dust',
        P: 'minecraft:iron_pickaxe',
        A: 'minecraft:iron_axe',
        E: 'minecraft:magma_block'
    })
    event.remove({ output: 'apotheosis:gem_cutting_table' })
    event.shaped('apotheosis:gem_cutting_table', [
        'LEL',
        'BRB',
        'B B'
    ], {
        L: 'gtceu:double_wrought_iron_plate',
        B: 'gtceu:treated_wood_planks',
        R: 'apotheosis:gem_dust',
        E: 'minecraft:shears'
    })

    //tomes
    event.remove({ output: 'apotheosis:sigil_of_socketing' })
    event.shaped('apotheosis:sigil_of_socketing', [
        'LEL',
        'LBL',
        'LRL'
    ], {
        L: 'apotheosis:gem_dust',
        B: 'minecraft:lodestone',
        R: 'minecraft:amethyst_block',
        E: 'minecraft:netherite_ingot'
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
        L: 'gtceu:steel_plate',
        B: 'minecraft:anvil',
        R: 'minecraft:book'
    })
    event.shaped('5x apotheosis:helmet_tome', [
        'RRR',
        'RBR',
        '   '
    ], {
        B: 'gtceu:double_steel_plate',
        R: 'minecraft:book'
    })
    event.shaped('8x apotheosis:chestplate_tome', [
        'RBR',
        'RRR',
        'RRR'
    ], {
        B: 'gtceu:double_steel_plate',
        R: 'minecraft:book'
    })
    event.shaped('7x apotheosis:leggings_tome', [
        'RRR',
        'RBR',
        'R R'
    ], {
        B: 'gtceu:double_steel_plate',
        R: 'minecraft:book'
    })
    event.shaped('4x apotheosis:boots_tome', [
        'RBR',
        'R R',
        '   '
    ], {
        B: 'gtceu:double_steel_plate',
        R: 'minecraft:book'
    })
    event.shaped('2x apotheosis:weapon_tome', [
        ' R ',
        ' R ',
        ' B '
    ], {
        B: 'gtceu:long_steel_rod',
        R: 'minecraft:book'
    })
    event.shaped('3x apotheosis:bow_tome', [
        ' RS',
        'RBS',
        ' RS'
    ], {
        B: 'gtceu:long_steel_rod',
        R: 'minecraft:book',
        S: 'minecraft:string'
    })
    event.shaped('3x apotheosis:pickaxe_tome', [
        'RRR',
        ' B ',
        ' B '
    ], {
        B: 'gtceu:long_steel_rod',
        R: 'minecraft:book'
    })
    event.shaped('2x apotheosis:fishing_tome', [
        '  R',
        ' BS',
        'R S'
    ], {
        B: 'gtceu:long_steel_rod',
        R: 'minecraft:book',
        S: 'minecraft:string'
    })
    event.shaped('4x apotheosis:other_tome', [
        ' R ',
        'RBR',
        ' R '
    ], {
        B: 'gtceu:double_steel_plate',
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

  //malignant soulstone
  .id("malum:spirit_infusion.frontiers.malignant_soulstone")
  event.custom(
    {
      "type": "malum:spirit_infusion",
      "extra_items": [
        {
          "count": 1,
          "item": "malum:malignant_lead"
        },
      ],
      "input": {
        "count": 1,
        "item": "malum:block_of_raw_soulstone"
      },
    "output": {
        "type": "forge:nbt",
        "item": "apotheosis:gem",
        "nbt": {affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/malignant"}
        
    },
      "spirits": [
        {
          "type": "arcane",
          "count": 16
        },
        {
          "type": "wicked",
          "count": 16
        },
        {
          "type": "eldritch",
          "count": 16
        },
      ]
    }
  )

  //spawner recipe
  .id("malum:spirit_infusion.frontiers.spawner_infusion")
  event.custom(
    {
      "type": "malum:spirit_infusion",
      "extra_items": [
        {
          "count": 64,
          "item": "gtceu:steel_ingot"
        },
        {
          "count": 64,
          "item": "gtceu:runed_steel_ingot"
        },
        {
          "count": 32,
          "item": "malum:spirit_fabric"
        },
        {
          "count": 16,
          "item": "malum:block_of_brilliance"
        },
      ],
      "input": {
        "count": 1,
        "item": "gtceu:lv_machine_hull"
      },
    "output": {
        "item": "minecraft:spawner",
        
    },
      "spirits": [
        {
          "type": "earthen",
          "count": 64
        },
        {
          "type": "arcane",
          "count": 64
        },
        {
          "type": "wicked",
          "count": 64
        },
        {
          "type": "eldritch",
          "count": 16
        },
      ]
    }
  )


})
