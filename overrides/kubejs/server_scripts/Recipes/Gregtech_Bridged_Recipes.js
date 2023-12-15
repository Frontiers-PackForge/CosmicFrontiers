//revamped recipes start

//Nether Reed
ServerEvents.recipes(e => {
    e.remove({output: 'betternether:nether_reed_door'})
    e.shaped('betternether:nether_reed_door', [
            'PTR',
            'PBS',
            'PPD'
        ],
        {
            T: 'betternether:nether_reed_trapdoor',
            P: 'betternether:nether_reed_planks',
            B: 'gtceu:iron_ring',
            S: 'gtceu:iron_screw',
            D: '#forge:tools/saws',
            R: '#forge:tools/screwdrivers'
        }
    )
    e.remove({output: 'betternether:nether_reed_trapdoor'})
    e.shaped('betternether:nether_reed_trapdoor', [
            'PTP',
            'TTT',
            'PTP'
        ],
        {
            T: 'minecraft:stick',
            P: 'betternether:nether_reed_slab'
        })
//Stalagnate
        e.remove({output: 'betternether:stalagnate_door'})
        e.shaped('betternether:stalagnate_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'betternether:stalagnate_trapdoor',
                P: 'betternether:stalagnate_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'betternether:stalagnate_trapdoor'})
        e.shaped('betternether:stalagnate_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'betternether:stalagnate_slab'
            })

//Willow
        e.remove({output: 'betternether:willow_door'})
        e.shaped('betternether:willow_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'betternether:willow_trapdoor',
                P: 'betternether:willow_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'betternether:willow_trapdoor'})
        e.shaped('betternether:willow_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'betternether:willow_slab'
            })
//Wart
        e.remove({output: 'betternether:wart_door'})
        e.shaped('betternether:wart_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'betternether:wart_trapdoor',
                P: 'betternether:wart_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'betternether:wart_trapdoor'})
        e.shaped('betternether:wart_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'betternether:wart_slab'
            })
//Bone-Reed
        e.remove({output: 'betternether:bone_reed_door'})
        e.shaped('betternether:bone_reed_door', [
                'PTR',
                'WBS',
                'PWD'
            ],
            {
                T: 'betternether:nether_reed_trapdoor',
                P: 'betternether:nether_reed_planks',
                W: 'betternether:bone_block',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
//Bone-Cincinnasite
        e.remove({output: 'betternether:bone_cincinnasite_door'})
        e.shaped('betternether:bone_cincinnasite_door', [
                'PTR',
                'WBS',
                'PWD'
            ],
            {
                T: 'betternether:nether_reed_trapdoor',
                P: 'betternether:nether_reed_planks',
                W: 'betternether:cincinnasite_forged',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
//Rubeus
        e.remove({output: 'betternether:rubeus_door'})
        e.shaped('betternether:rubeus_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'betternether:rubeus_trapdoor',
                P: 'betternether:rubeus_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'betternether:rubeus_trapdoor'})
        e.shaped('betternether:rubeus_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'betternether:rubeus_slab'
            })
//Mushroom Fir
        e.remove({output: 'betternether:mushroom_fir_door'})
        e.shaped('betternether:mushroom_fir_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'betternether:mushroom_fir_trapdoor',
                P: 'betternether:mushroom_fir_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'betternether:mushroom_fir_trapdoor'})
        e.shaped('betternether:mushroom_fir_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'betternether:mushroom_fir_slab'
            })
//Mushroom
        e.remove({output: 'betternether:nether_mushroom_door'})
        e.shaped('betternether:nether_mushroom_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'betternether:nether_mushroom_trapdoor',
                P: 'betternether:nether_mushroom_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'betternether:nether_mushroom_trapdoor'})
        e.shaped('betternether:nether_mushroom_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'betternether:nether_mushroom_slab'
            })
//Anchor Tree
        e.remove({output: 'betternether:anchor_tree_door'})
        e.shaped('betternether:anchor_tree_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'betternether:anchor_tree_trapdoor',
                P: 'betternether:anchor_tree_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'betternether:anchor_tree_trapdoor'})
        e.shaped('betternether:anchor_tree_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'betternether:anchor_tree_slab'
            })

//Nether Sakura
        e.remove({output: 'betternether:nether_sakura_door'})
        e.shaped('betternether:nether_sakura_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'betternether:nether_sakura_trapdoor',
                P: 'betternether:nether_sakura_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'betternether:nether_sakura_trapdoor'})
        e.shaped('betternether:nether_sakura_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'betternether:nether_sakura_slab'
            })
//Mossy Glowshroom
        e.remove({output: 'betterend:mossy_glowshroom_door'})
        e.shaped('betterend:mossy_glowshroom_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'betterend:mossy_glowshroom_trapdoor',
                P: 'betterend:mossy_glowshroom_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'betterend:mossy_glowshroom_trapdoor'})
        e.shaped('betterend:mossy_glowshroom_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'betterend:mossy_glowshroom_slab'
            })
//Pythadendron
        e.remove({output: 'betterend:pythadendron_door'})
        e.shaped('betterend:pythadendron_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'betterend:pythadendron_trapdoor',
                P: 'betterend:pythadendron_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'betterend:pythadendron_trapdoor'})
        e.shaped('betterend:pythadendron_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'betterend:pythadendron_slab'
            })
//Endlotus
        e.remove({output: 'betterend:end_lotus_door'})
        e.shaped('betterend:end_lotus_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'betterend:end_lotus_trapdoor',
                P: 'betterend:end_lotus_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'betterend:end_lotus_trapdoor'})
        e.shaped('betterend:end_lotus_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'betterend:end_lotus_slab'
            })
//Lacugrove
        e.remove({output: 'betterend:lacugrove_door'})
        e.shaped('betterend:lacugrove_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'betterend:lacugrove_trapdoor',
                P: 'betterend:lacugrove_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'betterend:lacugrove_trapdoor'})
        e.shaped('betterend:lacugrove_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'betterend:lacugrove_slab'
            })

//Dragon Tree
        e.remove({output: 'betterend:dragon_tree_door'})
        e.shaped('betterend:dragon_tree_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'betterend:dragon_tree_trapdoor',
                P: 'betterend:dragon_tree_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'betterend:dragon_tree_trapdoor'})
        e.shaped('betterend:dragon_tree_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'betterend:dragon_tree_slab'
            })
//Tenanea
        e.remove({output: 'betterend:tenanea_door'})
        e.shaped('betterend:tenanea_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'betterend:tenanea_trapdoor',
                P: 'betterend:tenanea_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'betterend:tenanea_trapdoor'})
        e.shaped('betterend:tenanea_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'betterend:tenanea_slab'
            })
//Helix Tree
        e.remove({output: 'betterend:helix_tree_door'})
        e.shaped('betterend:helix_tree_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'betterend:helix_tree_trapdoor',
                P: 'betterend:helix_tree_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'betterend:helix_tree_trapdoor'})
        e.shaped('betterend:helix_tree_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'betterend:helix_tree_slab'
            })
//Umbrella Tree
        e.remove({output: 'betterend:umbrella_tree_door'})
        e.shaped('betterend:umbrella_tree_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'betterend:umbrella_tree_trapdoor',
                P: 'betterend:umbrella_tree_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'betterend:umbrella_tree_trapdoor'})
        e.shaped('betterend:umbrella_tree_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'betterend:umbrella_tree_slab'
            })
//Jellyshroom
        e.remove({output: 'betterend:jellyshroom_door'})
        e.shaped('betterend:jellyshroom_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'betterend_jellyshroom_trapdoor',
                P: 'betterend_jellyshroomplanks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'betterend:jellyshroom_trapdoor'})
        e.shaped('betterend:jellyshroom_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'betterend_jellyshroom_slab'
            })
//Lucernia
        e.remove({output: 'betterend:lucernia_door'})
        e.shaped('betterend:lucernia_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'betterend:lucernia_trapdoor',
                P: 'betterend:lucernia_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'betterend:lucernia_trapdoor'})
        e.shaped('betterend:lucernia_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'betterend:lucernia_slab'
            })
//Thallasium
        e.remove({output: 'betterend:thallasium_door'})
        e.shaped('betterend:thallasium_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'betterend:thallasium_trapdoor',
                P: 'betterend:thallasium_ingot',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'betterend:thallasium_trapdoor'})
        e.shaped('betterend:thallasium_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'betterend:thallasium_ingot'
            })
//Terminite
        e.remove({output: 'betterend:terminite_door'})
        e.shaped('betterend:terminite_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'etterend:terminite_trapdoor',
                P: 'etterend:terminite_ingot',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'betterend:terminite_trapdoor'})
        e.shaped('betterend:terminite_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'betterend:terminite_ingot'
            })
//Pream
        e.remove({output: 'phantasm:pream_door'})
        e.shaped('phantasm:pream_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'phantasm:pream_trapdoor',
                P: 'phantasm:pream_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'phantasm:pream_trapdoor'})
        e.shaped('phantasm:pream_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'phantasm:pream_slab'
            })
//Gold
        e.remove({output: 'supplementaries:gold_door'})
        e.shaped('supplementaries:gold_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'supplementaries:gold_trapdoor',
                P: 'gtceu:gold_plate',
                B: 'gtceu:steel_ring',
                S: 'gtceu:steel_screw',
                D: '#forge:tools/hammers',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'supplementaries:gold_trapdoor'})
        e.shaped('supplementaries:gold_trapdoor', [
                'SPS',
                'PEP',
                'FPR'
            ],
            {
                T: 'minecraft:stick',
                P: 'gtceu:gold_plate',
                S: 'gtceu:gold_screw',
                E: '#minecraft:wooden_trapdoors',
                R: '#forge:tools/screwdrivers',
                F: '#forge:tools/saw'
            })
//Framed Wood
        e.remove({output: 'framedblocks:framed_door'})
        e.shaped('framedblocks:framed_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'framedblocks:framed_trapdoor',
                P: 'framedblocks:framed_cube',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'framedblocks:framed_trapdoor'})
        e.shaped('framedblocks:framed_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'framedblocks:framed_slab'
            })
//Framed Iron
        e.remove({output: 'framedblocks:framed_iron_door'})
        e.shaped('framedblocks:framed_iron_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'framedblocks:framed_iron_trapdoor',
                P: 'gtceu:iron_plate',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/screwdrivers',
                R: '#forge:tools/hammers'
            }
        )
        e.remove({output: 'framedblocks:framed_iron_trapdoor'})
        e.shaped('framedblocks:framed_iron_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'framedblocks:framed_cube',
                P: 'gtceu:iron_plate'
            })
//Pneumatic
        e.remove({output: 'pneumaticcraft:pneumatic_door'})
        e.shaped('pneumaticcraft:pneumatic_door', [
                'PPR',
                'PBS',
                'PPD'
            ],
            {
                P: 'pneumaticcraft:ingot_iron_compressed',
                B: 'gtceu:steel_ring',
                S: 'gtceu:steel_screw',
                D: '#forge:tools/screwdrivers',
                R: '#forge:tools/hammers'
            }
        )
//Fir
        e.remove({output: 'biomesoplenty:fir_door'})
        e.shaped('biomesoplenty:fir_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'bbiomesoplenty:fir_trapdoor',
                P: 'biomesoplenty:fir_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'biomesoplenty:fir_trapdoor'})
        e.shaped('biomesoplenty:fir_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'biomesoplenty:fir_slab'
            })
//Redwood
        e.remove({output: 'biomesoplenty:redwood_door'})
        e.shaped('biomesoplenty:redwood_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'biomesoplenty:redwood_trapdoor',
                P: 'biomesoplenty:redwood_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'biomesoplenty:redwood_trapdoor'})
        e.shaped('biomesoplenty:redwood_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'biomesoplenty:redwood_slab'
            })
//Mahogany
        e.remove({output: 'biomesoplenty:mahogany_door'})
        e.shaped('biomesoplenty:mahogany_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'biomesoplenty:mahogany_trapdoor',
                P: 'biomesoplenty:mahogany_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'biomesoplenty:mahogany_trapdoor'})
        e.shaped('biomesoplenty:mahogany_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'biomesoplenty:mahogany_slab'
            })
//Jacaranda
        e.remove({output: 'biomesoplenty:jacaranda_door'})
        e.shaped('biomesoplenty:jacaranda_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'biomesoplenty:jacaranda_trapdoor',
                P: 'biomesoplenty:jacaranda_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'biomesoplenty:jacaranda_trapdoor'})
        e.shaped('biomesoplenty:jacaranda_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'biomesoplenty:jacaranda_slab'
            })
//Palm
        e.remove({output: 'biomesoplenty:palm_door'})
        e.shaped('biomesoplenty:palm_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'biomesoplenty:palm_trapdoor',
                P: 'biomesoplenty:palm_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'biomesoplenty:palm_trapdoor'})
        e.shaped('biomesoplenty:palm_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'biomesoplenty:palm_slab'
            })
//Willow
        e.remove({output: 'biomesoplenty:willow_door'})
        e.shaped('biomesoplenty:willow_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'biomesoplenty:willow_trapdoor',
                P: 'biomesoplenty:willow_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'biomesoplenty:willow_trapdoor'})
        e.shaped('biomesoplenty:willow_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'biomesoplenty:willow_slab'
            })
//Dead
        e.remove({output: 'biomesoplenty:dead_door'})
        e.shaped('biomesoplenty:dead_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'biomesoplenty:dead_trapdoor',
                P: 'biomesoplenty:dead_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'biomesoplenty:dead_trapdoor'})
        e.shaped('biomesoplenty:dead_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'biomesoplenty:dead_slab'
            })
//Magic
        e.remove({output: 'biomesoplenty:magic_door'})
        e.shaped('biomesoplenty:magic_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'biomesoplenty:magic_trapdoor',
                P: 'biomesoplenty:magic_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'biomesoplenty:magic_trapdoor'})
        e.shaped('biomesoplenty:magic_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'biomesoplenty:magic_slab'
            })

//Umbran
        e.remove({output: 'biomesoplenty:umbran_door'})
        e.shaped('biomesoplenty:umbran_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'biomesoplenty:umbran_trapdoor',
                P: 'biomesoplenty:umbran_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'biomesoplenty:umbran_trapdoor'})
        e.shaped('biomesoplenty:umbran_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'biomesoplenty:umbran_slab'
            })
//Hellbark
        e.remove({output: 'biomesoplenty:hellbark_door'})
        e.shaped('biomesoplenty:hellbark_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'biomesoplenty:hellbark_trapdoor',
                P: 'biomesoplenty:hellbark_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'biomesoplenty:hellbark_trapdoor'})
        e.shaped('biomesoplenty:hellbark_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'biomesoplenty:hellbark_slab'
            })
//Menril
        e.remove({output: 'integrateddynamics:menril_door'})
        e.shaped('betternether:nether_reed_door', [
                'PPR',
                'PBS',
                'PPD'
            ],
            {
                P: 'integrateddynamics:menril_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
//Steel
        e.remove({output: 'ad_astra:steel_door'})
        e.shaped('ad_astra:steel_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'ad_astra:steel_trapdoor',
                P: 'gtceu:steel_plate',
                B: 'gtceu:steel_ring',
                S: 'gtceu:steel_screw',
                D: '#forge:tools/screwdrivers',
                R: '#forge:tools/hammers'
            }
        )
        e.remove({output: 'ad_astra:steel_trapdoor'})
        e.shaped('ad_astra:steel_trapdoor', [
                'TPT',
                'PDP',
                'RPS'
            ],
            {
                T: 'gtceu:steel_screw',
                P: 'gtceu:steel_plate',
                D: '#minecraft:wooden_trapdoors',
                S: '#forge:tools/screwdrivers',
                R: '#forge:tools/saws'
            })
//Aeronos
        e.remove({output: 'ad_astra:aeronos_door'})
        e.shaped('ad_astra:aeronos_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'ad_astra:aeronos_trapdoor',
                P: 'ad_astra:aeronos_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'ad_astra:aeronos_trapdoor'})
        e.shaped('ad_astra:aeronos_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'ad_astra:aeronos_slab'
            })
//Strophar
        e.remove({output: 'ad_astra:strophar_door'})
        e.shaped('ad_astra:strophar_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'ad_astra:strophar_trapdoor',
                P: 'ad_astra:strophar_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'ad_astra:strophar_trapdoor'})
        e.shaped('ad_astra:strophar_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'ad_astra:strophar_slab'
            })
//Glacian
        e.remove({output: 'ad_astra:glacian_door'})
        e.shaped('ad_astra:glacian_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'ad_astra:glacian_trapdoor',
                P: 'ad_astra:glacian_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'ad_astra:glacian_trapdoor'})
        e.shaped('ad_astra:glacian_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'ad_astra:glacian_slab'
            })
//Bluebright
        e.remove({output: 'blue_skies:bluebright_door'})
        e.shaped('blue_skies:bluebright_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'blue_skies:bluebright_trapdoor',
                P: 'blue_skies:bluebright_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'blue_skies:bluebright_trapdoor'})
        e.shaped('blue_skies:bluebright_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'blue_skies:bluebright_slab'
            })
//Starlit
        e.remove({output: 'blue_skies:starlit_door'})
        e.shaped('blue_skies:starlit_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'blue_skies:starlit_trapdoor',
                P: 'blue_skies:starlit_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'blue_skies:starlit_trapdoor'})
        e.shaped('blue_skies:starlit_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'blue_skies:starlit_slab'
            })
//Frostbright
        e.remove({output: 'blue_skies:frostbright_door'})
        e.shaped('blue_skies:frostbright_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'blue_skies:frostbright_trapdoor',
                P: 'blue_skies:frostbright_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'blue_skies:frostbright_trapdoor'})
        e.shaped('blue_skies:frostbright_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'blue_skies:frostbright_slab'
            })
//Lunar
        e.remove({output: 'blue_skies:lunar_door'})
        e.shaped('blue_skies:lunar_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'blue_skies:lunar_trapdoor',
                P: 'blue_skies:lunar_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'blue_skies:lunar_trapdoor'})
        e.shaped('blue_skies:lunar_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'blue_skies:lunar_slab'
            })
//Dusk
        e.remove({output: 'blue_skies:dusk_door'})
        e.shaped('blue_skies:dusk_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'blue_skies:dusk_trapdoor',
                P: 'blue_skies:dusk_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'blue_skies:dusk_trapdoor'})
        e.shaped('blue_skies:dusk_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'blue_skies:dusk_slab'
            })
//Maple
        e.remove({output: 'blue_skies:maple_door'})
        e.shaped('blue_skies:maple_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'blue_skies:maple_trapdoor',
                P: 'blue_skies:maple_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'blue_skies:maple_trapdoor'})
        e.shaped('blue_skies:maple_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'blue_skies:maple_slab'
            })
//Comet
        e.remove({output: 'blue_skies:comet_door'})
        e.shaped('blue_skies:comet_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'blue_skies:comet_trapdoor',
                P: 'blue_skies:comet_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'blue_skies:comet_trapdoor'})
        e.shaped('blue_skies:comet_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'bblue_skies:comet_slab'
            })
//Crystallized
        e.remove({output: 'blue_skies:crystallized_door'})
        e.shaped('blue_skies:crystallized_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'blue_skies:crystallized_trapdoor',
                P: 'blue_skies:crystallized_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'blue_skies:crystallized_trapdoor'})
        e.shaped('blue_skies:crystallized_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'blue_skies:crystallized_slab'
            })
//Archwood
        e.remove({output: 'ars_nouveau:archwood_door'})
        e.shaped('ars_nouveau:archwood_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'ars_nouveau:archwood_trapdoor',
                P: 'ars_nouveau:archwood_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'ars_nouveau:archwood_trapdoor'})
        e.shaped('ars_nouveau:archwood_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'ars_nouveau:archwood_slab'
            })
//Skyroot
        e.remove({output: 'aether:skyroot_door'})
        e.shaped('aether:skyroot_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'aether:skyroot_trapdoor',
                P: 'aether:skyroot_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'aether:skyroot_trapdoor'})
        e.shaped('aether:skyroot_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'aether:skyroot_slab'
            })
//Roseroot
        e.remove({output: 'deep_aether:roseroot_door'})
        e.shaped('deep_aether:roseroot_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'deep_aether:roseroot_trapdoor',
                P: 'deep_aether:roseroot_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'deep_aether:roseroot_trapdoor'})
        e.shaped('deep_aether:roseroot_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'deep_aether:roseroot_slab'
            })
//Yagroot
        e.remove({output: 'deep_aether:yagroot_door'})
        e.shaped('deep_aether:yagroot_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'deep_aether:yagroot_trapdoor',
                P: 'deep_aether:yagroot_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'deep_aether:yagroot_trapdoor'})
        e.shaped('deep_aether:yagroot_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'deep_aether:yagroot_slab'
            })
//Cruderoot
        e.remove({output: 'deep_aether:cruderoot_door'})
        e.shaped('deep_aether:cruderoot_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'deep_aether:cruderoot_trapdoor',
                P: 'deep_aether:cruderoot_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'deep_aether:cruderoot_trapdoor'})
        e.shaped('deep_aether:cruderoot_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'deep_aether:cruderoot_slab'
            })
//Conberry
        e.remove({output: 'deep_aether:conberry_door'})
        e.shaped('deep_aether:conberry_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'deep_aether:conberry_trapdoor',
                P: 'deep_aether:conberry_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'deep_aether:conberry_trapdoor'})
        e.shaped('deep_aether:conberry_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'deep_aether:conberry_slab'
            })

//Sunroot
        e.remove({output: 'deep_aether:sunroot_door'})
        e.shaped('deep_aether:sunroot_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'deep_aether:sunroot_trapdoor',
                P: 'deep_aether:sunroot_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'deep_aether:sunroot_trapdoor'})
        e.shaped('deep_aether:sunroot_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'deep_aether:sunroot_slab'
            })
//Fieldsprout
        e.remove({output: 'aether_redux:fieldsprout_door'})
        e.shaped('aether_redux:fieldsprout_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'aether_redux:fieldsprout_trapdoor',
                P: 'aether_redux:fieldsprout_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'aether_redux:fieldsprout_trapdoor'})
        e.shaped('aether_redux:fieldsprout_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'aether_redux:fieldsprout_slab'
            })
//Blightwillow
        e.remove({output: 'aether_redux:blightwillow_door'})
        e.shaped('aether_redux:blightwillow_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'aether_redux:blightwillow_trapdoor',
                P: 'aether_redux:blightwillow_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'aether_redux:blightwillow_trapdoor'})
        e.shaped('aether_redux:blightwillow_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'aether_redux:blightwillow_slab'
            })
//Cloudcap
        e.remove({output: 'aether_redux:cloudcap_door'})
        e.shaped('aether_redux:cloudcap_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'aether_redux:cloudcap_trapdoor',
                P: 'aether_redux:cloudcap_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'aether_redux:cloudcap_trapdoor'})
        e.shaped('aether_redux:cloudcap_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'aether_redux:cloudcap_slab'
            })
//Springshroom
        e.remove({output: 'aether_redux:springshroom_door'})
        e.shaped('aether_redux:springshroom_door', [
                'PTR',
                'PBS',
                'PPD'
            ],
            {
                T: 'aether_redux:springshroom_trapdoor',
                P: 'aether_redux:springshroom_planks',
                B: 'gtceu:iron_ring',
                S: 'gtceu:iron_screw',
                D: '#forge:tools/saws',
                R: '#forge:tools/screwdrivers'
            }
        )
        e.remove({output: 'aether_redux:springshroom_trapdoor'})
        e.shaped('aether_redux:springshroom_trapdoor', [
                'PTP',
                'TTT',
                'PTP'
            ],
            {
                T: 'minecraft:stick',
                P: 'aether_redux:springshroom_slab'
            })
//Crystal
    e.remove({output: 'aether_redux:crystal_door'})
    e.shaped('aether_redux:crystal_door', [
            'PTR',
            'PBS',
            'PPD'
        ],
        {
            T: 'aether_redux:crystal_trapdoor',
            P: 'aether_redux:crystal_planks',
            B: 'gtceu:iron_ring',
            S: 'gtceu:iron_screw',
            D: '#forge:tools/saws',
            R: '#forge:tools/screwdrivers'
        }
    )
    e.remove({output: 'aether_redux:crystal_trapdoor'})
    e.shaped('aether_redux:crystal_trapdoor', [
            'PTP',
            'TTT',
            'PTP'
        ],
        {
            T: 'minecraft:stick',
            P: 'aether_redux:crystal_slab'
        })
//Glacia
    e.remove({output: 'aether_redux:glacia_door'})
    e.shaped('aether_redux:glacia_door', [
            'PTR',
            'PBS',
            'PPD'
        ],
        {
            T: 'aether_redux:glacia_trapdoor',
            P: 'aether_redux:glacia_planks',
            B: 'gtceu:iron_ring',
            S: 'gtceu:iron_screw',
            D: '#forge:tools/saws',
            R: '#forge:tools/screwdrivers'
        }
    )
    e.remove({output: 'aether_redux:glacia_trapdoor'})
    e.shaped('aether_redux:glacia_trapdoor', [
            'PTP',
            'TTT',
            'PTP'
        ],
        {
            T: 'minecraft:stick',
            P: 'aether_redux:glacia_slab'
        })
//Smogstem
    e.remove({output: 'undergarden:smogstem_door'})
    e.shaped('undergarden:smogstem_door', [
            'PTR',
            'PBS',
            'PPD'
        ],
        {
            T: 'undergarden:smogstem_trapdoor',
            P: 'undergarden:smogstem_planks',
            B: 'gtceu:iron_ring',
            S: 'gtceu:iron_screw',
            D: '#forge:tools/saws',
            R: '#forge:tools/screwdrivers'
        }
    )
    e.remove({output: 'undergarden:smogstem_trapdoor'})
    e.shaped('undergarden:smogstem_trapdoor', [
            'PTP',
            'TTT',
            'PTP'
        ],
        {
            T: 'minecraft:stick',
            P: 'undergarden:smogstem_slab'
        })
//Wigglewood
    e.remove({output: 'undergarden:wigglewood_door'})
    e.shaped('undergarden:wigglewood_door', [
            'PTR',
            'PBS',
            'PPD'
        ],
        {
            T: 'undergarden:wigglewood_trapdoor',
            P: 'undergarden:wigglewood_planks',
            B: 'gtceu:iron_ring',
            S: 'gtceu:iron_screw',
            D: '#forge:tools/saws',
            R: '#forge:tools/screwdrivers'
        }
    )
    e.remove({output: 'undergarden:wigglewood_trapdoor'})
    e.shaped('undergarden:wigglewood_trapdoor', [
            'PTP',
            'TTT',
            'PTP'
        ],
        {
            T: 'minecraft:stick',
            P: 'undergarden:wigglewood_slab'
        })
//Grongle
    e.remove({output: 'undergarden:grongle_door'})
    e.shaped('undergarden:grongle_door', [
            'PTR',
            'PBS',
            'PPD'
        ],
        {
            T: 'undergarden:grongle_trapdoor',
            P: 'undergarden:grongle_planks',
            B: 'gtceu:iron_ring',
            S: 'gtceu:iron_screw',
            D: '#forge:tools/saws',
            R: '#forge:tools/screwdrivers'
        }
    )
    e.remove({output: 'undergarden:grongle_trapdoor'})
    e.shaped('undergarden:grongle_trapdoor', [
            'PTP',
            'TTT',
            'PTP'
        ],
        {
            T: 'minecraft:stick',
            P: 'undergarden:grongle_slab'
        })
//Deorum
    e.remove({output: 'forbidden_arcanus:deorum_door'})
    e.shaped('forbidden_arcanus:deorum_door', [
            'PTR',
            'PBS',
            'PPD'
        ],
        {
            T: 'forbidden_arcanus:deorum_trapdoor',
            P: 'forbidden_arcanus:deorum_ingot',
            B: 'gtceu:steel_ring',
            S: 'gtceu:steel_screw',
            D: '#forge:tools/screwdrivers',
            R: '#forge:tools/hammers'
        }
    )
    e.remove({output: 'forbidden_arcanus:deorum_trapdoor'})
    e.shaped('forbidden_arcanus:deorum_trapdoor', [
            'PTP',
            'TOT',
            'ETR'
        ],
        {
            T: 'forbidden_arcanus:deorum_ingot',
            P: 'gtceu:steel_screw',
            E: '#forge:tools/saws',
            R: '#forge:tools/screwdrivers',
            O: '#minecraft:wooden_trapdoors'
        })
//Fungyss
    e.remove({output: 'forbidden_arcanus:fungyss_door'})
    e.shaped('forbidden_arcanus:fungyss_door', [
            'PTR',
            'PBS',
            'PPD'
        ],
        {
            T: 'forbidden_arcanus:fungyss_trapdoor',
            P: 'forbidden_arcanus:fungyss_planks',
            B: 'gtceu:iron_ring',
            S: 'gtceu:iron_screw',
            D: '#forge:tools/saws',
            R: '#forge:tools/screwdrivers'
        }
    )
    e.remove({output: 'forbidden_arcanus:fungyss_trapdoor'})
    e.shaped('forbidden_arcanus:fungyss_trapdoor', [
            'PTP',
            'TTT',
            'PTP'
        ],
        {
            T: 'minecraft:stick',
            P: 'forbidden_arcanus:fungyss_slab'
        })
//Aurum
    e.remove({output: 'forbidden_arcanus:aurum_door'})
    e.shaped('forbidden_arcanus:aurum_door', [
            'PTR',
            'PBS',
            'PPD'
        ],
        {
            T: 'forbidden_arcanus:aurum_trapdoor',
            P: 'forbidden_arcanus:aurum_planks',
            B: 'gtceu:iron_ring',
            S: 'gtceu:iron_screw',
            D: '#forge:tools/saws',
            R: '#forge:tools/screwdrivers'
        }
    )
    e.remove({output: 'forbidden_arcanus:aurum_trapdoor'})
    e.shaped('forbidden_arcanus:aurum_trapdoor', [
            'PTP',
            'TTT',
            'PTP'
        ],
        {
            T: 'minecraft:stick',
            P: 'forbidden_arcanus:aurum_slab'
        })
//Edelwood
    e.remove({output: 'forbidden_arcanus:edelwood_door'})
    e.shaped('forbidden_arcanus:edelwood_door', [
            'PTR',
            'PBS',
            'PPD'
        ],
        {
            T: 'forbidden_arcanus:edelwood_trapdoor',
            P: 'forbidden_arcanus:edelwood_planks',
            B: 'gtceu:iron_ring',
            S: 'gtceu:iron_screw',
            D: '#forge:tools/saws',
            R: '#forge:tools/screwdrivers'
        }
    )
    e.remove({output: 'forbidden_arcanus:edelwood_trapdoor'})
    e.shaped('forbidden_arcanus:edelwood_trapdoor', [
            'PTP',
            'TTT',
            'PTP'
        ],
        {
            T: 'minecraft:stick',
            P: 'forbidden_arcanus:edelwood_slab'
        })
//Arcane Edelwood
    e.remove({output: 'forbidden_arcanus:arcane_edelwood_door'})
    e.shaped('forbidden_arcanus:arcane_edelwood_door', [
            'PTR',
            'PBS',
            'PPD'
        ],
        {
            T: 'forbidden_arcanus:arcane_edelwood_trapdoor',
            P: 'forbidden_arcanus:arcane_edelwood_planks',
            B: 'gtceu:iron_ring',
            S: 'gtceu:iron_screw',
            D: '#forge:tools/saws',
            R: '#forge:tools/screwdrivers'
        }
    )
    e.remove({output: 'forbidden_arcanus:arcane_edelwood_trapdoor'})
    e.shaped('forbidden_arcanus:arcane_edelwood_trapdoor', [
            'PTP',
            'TTT',
            'PTP'
        ],
        {
            T: 'minecraft:stick',
            P: 'forbidden_arcanus:arcane_edelwood_slab'
        })
//Doors finished
})
