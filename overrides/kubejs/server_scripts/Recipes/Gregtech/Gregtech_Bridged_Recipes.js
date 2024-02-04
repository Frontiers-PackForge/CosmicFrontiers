//revamped recipes start

//Nether Reed
ServerEvents.recipes(e => {
//     e.remove({output: 'betternether:nether_reed_door'})
//     e.shaped('betternether:nether_reed_door', [
//             'PTR',
//             'PBS',
//             'PPD'
//         ],
//         {
//             T: 'betternether:nether_reed_trapdoor',
//             P: 'betternether:nether_reed_planks',
//             B: 'gtceu:iron_ring',
//             S: 'gtceu:iron_screw',
//             D: '#forge:tools/saws',
//             R: '#forge:tools/screwdrivers'
//         }
//     )
//     e.remove({output: 'betternether:nether_reed_trapdoor'})
//     e.shaped('betternether:nether_reed_trapdoor', [
//             'PTP',
//             'TTT',
//             'PTP'
//         ],
//         {
//             T: 'minecraft:stick',
//             P: 'betternether:nether_reed_slab'
//         })
// //Stalagnate
//         e.remove({output: 'betternether:stalagnate_door'})
//         e.shaped('betternether:stalagnate_door', [
//                 'PTR',
//                 'PBS',
//                 'PPD'
//             ],
//             {
//                 T: 'betternether:stalagnate_trapdoor',
//                 P: 'betternether:stalagnate_planks',
//                 B: 'gtceu:iron_ring',
//                 S: 'gtceu:iron_screw',
//                 D: '#forge:tools/saws',
//                 R: '#forge:tools/screwdrivers'
//             }
//         )
//         e.remove({output: 'betternether:stalagnate_trapdoor'})
//         e.shaped('betternether:stalagnate_trapdoor', [
//                 'PTP',
//                 'TTT',
//                 'PTP'
//             ],
//             {
//                 T: 'minecraft:stick',
//                 P: 'betternether:stalagnate_slab'
//             })

// //Willow
//         e.remove({output: 'betternether:willow_door'})
//         e.shaped('betternether:willow_door', [
//                 'PTR',
//                 'PBS',
//                 'PPD'
//             ],
//             {
//                 T: 'betternether:willow_trapdoor',
//                 P: 'betternether:willow_planks',
//                 B: 'gtceu:iron_ring',
//                 S: 'gtceu:iron_screw',
//                 D: '#forge:tools/saws',
//                 R: '#forge:tools/screwdrivers'
//             }
//         )
//         e.remove({output: 'betternether:willow_trapdoor'})
//         e.shaped('betternether:willow_trapdoor', [
//                 'PTP',
//                 'TTT',
//                 'PTP'
//             ],
//             {
//                 T: 'minecraft:stick',
//                 P: 'betternether:willow_slab'
//             })
// //Wart
//         e.remove({output: 'betternether:wart_door'})
//         e.shaped('betternether:wart_door', [
//                 'PTR',
//                 'PBS',
//                 'PPD'
//             ],
//             {
//                 T: 'betternether:wart_trapdoor',
//                 P: 'betternether:wart_planks',
//                 B: 'gtceu:iron_ring',
//                 S: 'gtceu:iron_screw',
//                 D: '#forge:tools/saws',
//                 R: '#forge:tools/screwdrivers'
//             }
//         )
//         e.remove({output: 'betternether:wart_trapdoor'})
//         e.shaped('betternether:wart_trapdoor', [
//                 'PTP',
//                 'TTT',
//                 'PTP'
//             ],
//             {
//                 T: 'minecraft:stick',
//                 P: 'betternether:wart_slab'
//             })
// //Bone-Reed
//         e.remove({output: 'betternether:bone_reed_door'})
//         e.shaped('betternether:bone_reed_door', [
//                 'PTR',
//                 'WBS',
//                 'PWD'
//             ],
//             {
//                 T: 'betternether:nether_reed_trapdoor',
//                 P: 'betternether:nether_reed_planks',
//                 W: 'betternether:bone_block',
//                 B: 'gtceu:iron_ring',
//                 S: 'gtceu:iron_screw',
//                 D: '#forge:tools/saws',
//                 R: '#forge:tools/screwdrivers'
//             }
//         )
// //Bone-Cincinnasite
//         e.remove({output: 'betternether:bone_cincinnasite_door'})
//         e.shaped('betternether:bone_cincinnasite_door', [
//                 'PTR',
//                 'WBS',
//                 'PWD'
//             ],
//             {
//                 T: 'betternether:nether_reed_trapdoor',
//                 P: 'betternether:nether_reed_planks',
//                 W: 'betternether:cincinnasite_forged',
//                 B: 'gtceu:iron_ring',
//                 S: 'gtceu:iron_screw',
//                 D: '#forge:tools/saws',
//                 R: '#forge:tools/screwdrivers'
//             }
//         )
// //Rubeus
//         e.remove({output: 'betternether:rubeus_door'})
//         e.shaped('betternether:rubeus_door', [
//                 'PTR',
//                 'PBS',
//                 'PPD'
//             ],
//             {
//                 T: 'betternether:rubeus_trapdoor',
//                 P: 'betternether:rubeus_planks',
//                 B: 'gtceu:iron_ring',
//                 S: 'gtceu:iron_screw',
//                 D: '#forge:tools/saws',
//                 R: '#forge:tools/screwdrivers'
//             }
//         )
//         e.remove({output: 'betternether:rubeus_trapdoor'})
//         e.shaped('betternether:rubeus_trapdoor', [
//                 'PTP',
//                 'TTT',
//                 'PTP'
//             ],
//             {
//                 T: 'minecraft:stick',
//                 P: 'betternether:rubeus_slab'
//             })
// //Mushroom Fir
//         e.remove({output: 'betternether:mushroom_fir_door'})
//         e.shaped('betternether:mushroom_fir_door', [
//                 'PTR',
//                 'PBS',
//                 'PPD'
//             ],
//             {
//                 T: 'betternether:mushroom_fir_trapdoor',
//                 P: 'betternether:mushroom_fir_planks',
//                 B: 'gtceu:iron_ring',
//                 S: 'gtceu:iron_screw',
//                 D: '#forge:tools/saws',
//                 R: '#forge:tools/screwdrivers'
//             }
//         )
//         e.remove({output: 'betternether:mushroom_fir_trapdoor'})
//         e.shaped('betternether:mushroom_fir_trapdoor', [
//                 'PTP',
//                 'TTT',
//                 'PTP'
//             ],
//             {
//                 T: 'minecraft:stick',
//                 P: 'betternether:mushroom_fir_slab'
//             })
// //Mushroom
//         e.remove({output: 'betternether:nether_mushroom_door'})
//         e.shaped('betternether:nether_mushroom_door', [
//                 'PTR',
//                 'PBS',
//                 'PPD'
//             ],
//             {
//                 T: 'betternether:nether_mushroom_trapdoor',
//                 P: 'betternether:nether_mushroom_planks',
//                 B: 'gtceu:iron_ring',
//                 S: 'gtceu:iron_screw',
//                 D: '#forge:tools/saws',
//                 R: '#forge:tools/screwdrivers'
//             }
//         )
//         e.remove({output: 'betternether:nether_mushroom_trapdoor'})
//         e.shaped('betternether:nether_mushroom_trapdoor', [
//                 'PTP',
//                 'TTT',
//                 'PTP'
//             ],
//             {
//                 T: 'minecraft:stick',
//                 P: 'betternether:nether_mushroom_slab'
//             })
// //Anchor Tree
//         e.remove({output: 'betternether:anchor_tree_door'})
//         e.shaped('betternether:anchor_tree_door', [
//                 'PTR',
//                 'PBS',
//                 'PPD'
//             ],
//             {
//                 T: 'betternether:anchor_tree_trapdoor',
//                 P: 'betternether:anchor_tree_planks',
//                 B: 'gtceu:iron_ring',
//                 S: 'gtceu:iron_screw',
//                 D: '#forge:tools/saws',
//                 R: '#forge:tools/screwdrivers'
//             }
//         )
//         e.remove({output: 'betternether:anchor_tree_trapdoor'})
//         e.shaped('betternether:anchor_tree_trapdoor', [
//                 'PTP',
//                 'TTT',
//                 'PTP'
//             ],
//             {
//                 T: 'minecraft:stick',
//                 P: 'betternether:anchor_tree_slab'
//             })

// //Nether Sakura
//         e.remove({output: 'betternether:nether_sakura_door'})
//         e.shaped('betternether:nether_sakura_door', [
//                 'PTR',
//                 'PBS',
//                 'PPD'
//             ],
//             {
//                 T: 'betternether:nether_sakura_trapdoor',
//                 P: 'betternether:nether_sakura_planks',
//                 B: 'gtceu:iron_ring',
//                 S: 'gtceu:iron_screw',
//                 D: '#forge:tools/saws',
//                 R: '#forge:tools/screwdrivers'
//             }
//         )
//         e.remove({output: 'betternether:nether_sakura_trapdoor'})
//         e.shaped('betternether:nether_sakura_trapdoor', [
//                 'PTP',
//                 'TTT',
//                 'PTP'
//             ],
//             {
//                 T: 'minecraft:stick',
//                 P: 'betternether:nether_sakura_slab'
//             })
//Mossy Glowshroom
//         e.remove({output: 'betterend:mossy_glowshroom_door'})
//         e.shaped('betterend:mossy_glowshroom_door', [
//                 'PTR',
//                 'PBS',
//                 'PPD'
//             ],
//             {
//                 T: 'betterend:mossy_glowshroom_trapdoor',
//                 P: 'betterend:mossy_glowshroom_planks',
//                 B: 'gtceu:iron_ring',
//                 S: 'gtceu:iron_screw',
//                 D: '#forge:tools/saws',
//                 R: '#forge:tools/screwdrivers'
//             }
//         )
//         e.remove({output: 'betterend:mossy_glowshroom_trapdoor'})
//         e.shaped('betterend:mossy_glowshroom_trapdoor', [
//                 'PTP',
//                 'TTT',
//                 'PTP'
//             ],
//             {
//                 T: 'minecraft:stick',
//                 P: 'betterend:mossy_glowshroom_slab'
//             })
// //Pythadendron
//         e.remove({output: 'betterend:pythadendron_door'})
//         e.shaped('betterend:pythadendron_door', [
//                 'PTR',
//                 'PBS',
//                 'PPD'
//             ],
//             {
//                 T: 'betterend:pythadendron_trapdoor',
//                 P: 'betterend:pythadendron_planks',
//                 B: 'gtceu:iron_ring',
//                 S: 'gtceu:iron_screw',
//                 D: '#forge:tools/saws',
//                 R: '#forge:tools/screwdrivers'
//             }
//         )
//         e.remove({output: 'betterend:pythadendron_trapdoor'})
//         e.shaped('betterend:pythadendron_trapdoor', [
//                 'PTP',
//                 'TTT',
//                 'PTP'
//             ],
//             {
//                 T: 'minecraft:stick',
//                 P: 'betterend:pythadendron_slab'
//             })
// //Endlotus
//         e.remove({output: 'betterend:end_lotus_door'})
//         e.shaped('betterend:end_lotus_door', [
//                 'PTR',
//                 'PBS',
//                 'PPD'
//             ],
//             {
//                 T: 'betterend:end_lotus_trapdoor',
//                 P: 'betterend:end_lotus_planks',
//                 B: 'gtceu:iron_ring',
//                 S: 'gtceu:iron_screw',
//                 D: '#forge:tools/saws',
//                 R: '#forge:tools/screwdrivers'
//             }
//         )
//         e.remove({output: 'betterend:end_lotus_trapdoor'})
//         e.shaped('betterend:end_lotus_trapdoor', [
//                 'PTP',
//                 'TTT',
//                 'PTP'
//             ],
//             {
//                 T: 'minecraft:stick',
//                 P: 'betterend:end_lotus_slab'
//             })
// //Lacugrove
//         e.remove({output: 'betterend:lacugrove_door'})
//         e.shaped('betterend:lacugrove_door', [
//                 'PTR',
//                 'PBS',
//                 'PPD'
//             ],
//             {
//                 T: 'betterend:lacugrove_trapdoor',
//                 P: 'betterend:lacugrove_planks',
//                 B: 'gtceu:iron_ring',
//                 S: 'gtceu:iron_screw',
//                 D: '#forge:tools/saws',
//                 R: '#forge:tools/screwdrivers'
//             }
//         )
//         e.remove({output: 'betterend:lacugrove_trapdoor'})
//         e.shaped('betterend:lacugrove_trapdoor', [
//                 'PTP',
//                 'TTT',
//                 'PTP'
//             ],
//             {
//                 T: 'minecraft:stick',
//                 P: 'betterend:lacugrove_slab'
//             })

// //Dragon Tree
//         e.remove({output: 'betterend:dragon_tree_door'})
//         e.shaped('betterend:dragon_tree_door', [
//                 'PTR',
//                 'PBS',
//                 'PPD'
//             ],
//             {
//                 T: 'betterend:dragon_tree_trapdoor',
//                 P: 'betterend:dragon_tree_planks',
//                 B: 'gtceu:iron_ring',
//                 S: 'gtceu:iron_screw',
//                 D: '#forge:tools/saws',
//                 R: '#forge:tools/screwdrivers'
//             }
//         )
//         e.remove({output: 'betterend:dragon_tree_trapdoor'})
//         e.shaped('betterend:dragon_tree_trapdoor', [
//                 'PTP',
//                 'TTT',
//                 'PTP'
//             ],
//             {
//                 T: 'minecraft:stick',
//                 P: 'betterend:dragon_tree_slab'
//             })
// //Tenanea
//         e.remove({output: 'betterend:tenanea_door'})
//         e.shaped('betterend:tenanea_door', [
//                 'PTR',
//                 'PBS',
//                 'PPD'
//             ],
//             {
//                 T: 'betterend:tenanea_trapdoor',
//                 P: 'betterend:tenanea_planks',
//                 B: 'gtceu:iron_ring',
//                 S: 'gtceu:iron_screw',
//                 D: '#forge:tools/saws',
//                 R: '#forge:tools/screwdrivers'
//             }
//         )
//         e.remove({output: 'betterend:tenanea_trapdoor'})
//         e.shaped('betterend:tenanea_trapdoor', [
//                 'PTP',
//                 'TTT',
//                 'PTP'
//             ],
//             {
//                 T: 'minecraft:stick',
//                 P: 'betterend:tenanea_slab'
//             })
// //Helix Tree
//         e.remove({output: 'betterend:helix_tree_door'})
//         e.shaped('betterend:helix_tree_door', [
//                 'PTR',
//                 'PBS',
//                 'PPD'
//             ],
//             {
//                 T: 'betterend:helix_tree_trapdoor',
//                 P: 'betterend:helix_tree_planks',
//                 B: 'gtceu:iron_ring',
//                 S: 'gtceu:iron_screw',
//                 D: '#forge:tools/saws',
//                 R: '#forge:tools/screwdrivers'
//             }
//         )
//         e.remove({output: 'betterend:helix_tree_trapdoor'})
//         e.shaped('betterend:helix_tree_trapdoor', [
//                 'PTP',
//                 'TTT',
//                 'PTP'
//             ],
//             {
//                 T: 'minecraft:stick',
//                 P: 'betterend:helix_tree_slab'
//             })
// //Umbrella Tree
//         e.remove({output: 'betterend:umbrella_tree_door'})
//         e.shaped('betterend:umbrella_tree_door', [
//                 'PTR',
//                 'PBS',
//                 'PPD'
//             ],
//             {
//                 T: 'betterend:umbrella_tree_trapdoor',
//                 P: 'betterend:umbrella_tree_planks',
//                 B: 'gtceu:iron_ring',
//                 S: 'gtceu:iron_screw',
//                 D: '#forge:tools/saws',
//                 R: '#forge:tools/screwdrivers'
//             }
//         )
//         e.remove({output: 'betterend:umbrella_tree_trapdoor'})
//         e.shaped('betterend:umbrella_tree_trapdoor', [
//                 'PTP',
//                 'TTT',
//                 'PTP'
//             ],
//             {
//                 T: 'minecraft:stick',
//                 P: 'betterend:umbrella_tree_slab'
//             })
// //Jellyshroom
//         e.remove({output: 'betterend:jellyshroom_door'})
//         e.shaped('betterend:jellyshroom_door', [
//                 'PTR',
//                 'PBS',
//                 'PPD'
//             ],
//             {
//                 T: 'betterend_jellyshroom_trapdoor',
//                 P: 'betterend_jellyshroom_planks',
//                 B: 'gtceu:iron_ring',
//                 S: 'gtceu:iron_screw',
//                 D: '#forge:tools/saws',
//                 R: '#forge:tools/screwdrivers'
//             }
//         )
//         e.remove({output: 'betterend:jellyshroom_trapdoor'})
//         e.shaped('betterend:jellyshroom_trapdoor', [
//                 'PTP',
//                 'TTT',
//                 'PTP'
//             ],
//             {
//                 T: 'minecraft:stick',
//                 P: 'betterend_jellyshroom_slab'
//             })
// //Lucernia
//         e.remove({output: 'betterend:lucernia_door'})
//         e.shaped('betterend:lucernia_door', [
//                 'PTR',
//                 'PBS',
//                 'PPD'
//             ],
//             {
//                 T: 'betterend:lucernia_trapdoor',
//                 P: 'betterend:lucernia_planks',
//                 B: 'gtceu:iron_ring',
//                 S: 'gtceu:iron_screw',
//                 D: '#forge:tools/saws',
//                 R: '#forge:tools/screwdrivers'
//             }
//         )
//         e.remove({output: 'betterend:lucernia_trapdoor'})
//         e.shaped('betterend:lucernia_trapdoor', [
//                 'PTP',
//                 'TTT',
//                 'PTP'
//             ],
//             {
//                 T: 'minecraft:stick',
//                 P: 'betterend:lucernia_slab'
//             })
// //Thallasium
//         e.remove({output: 'betterend:thallasium_door'})
//         e.shaped('betterend:thallasium_door', [
//                 'PTR',
//                 'PBS',
//                 'PPD'
//             ],
//             {
//                 T: 'betterend:thallasium_trapdoor',
//                 P: 'betterend:thallasium_ingot',
//                 B: 'gtceu:iron_ring',
//                 S: 'gtceu:iron_screw',
//                 D: '#forge:tools/saws',
//                 R: '#forge:tools/screwdrivers'
//             }
//         )
//         e.remove({output: 'betterend:thallasium_trapdoor'})
//         e.shaped('betterend:thallasium_trapdoor', [
//                 'PTP',
//                 'TTT',
//                 'PTP'
//             ],
//             {
//                 T: 'minecraft:stick',
//                 P: 'betterend:thallasium_ingot'
//             })
// //Terminite
//         e.remove({output: 'betterend:terminite_door'})
//         e.shaped('betterend:terminite_door', [
//                 'PTR',
//                 'PBS',
//                 'PPD'
//             ],
//             {
//                 T: 'betterend:terminite_trapdoor',
//                 P: 'betterend:terminite_ingot',
//                 B: 'gtceu:iron_ring',
//                 S: 'gtceu:iron_screw',
//                 D: '#forge:tools/saws',
//                 R: '#forge:tools/screwdrivers'
//             }
//         )
//         e.remove({output: 'betterend:terminite_trapdoor'})
//         e.shaped('betterend:terminite_trapdoor', [
//                 'PTP',
//                 'TTT',
//                 'PTP'
//             ],
//             {
//                 T: 'minecraft:stick',
//                 P: 'betterend:terminite_ingot'
//             })
// //Pream
//         e.remove({output: 'phantasm:pream_door'})
//         e.shaped('phantasm:pream_door', [
//                 'PTR',
//                 'PBS',
//                 'PPD'
//             ],
//             {
//                 T: 'phantasm:pream_trapdoor',
//                 P: 'phantasm:pream_planks',
//                 B: 'gtceu:iron_ring',
//                 S: 'gtceu:iron_screw',
//                 D: '#forge:tools/saws',
//                 R: '#forge:tools/screwdrivers'
//             }
//         )
//         e.remove({output: 'phantasm:pream_trapdoor'})
//         e.shaped('phantasm:pream_trapdoor', [
//                 'PTP',
//                 'TTT',
//                 'PTP'
//             ],
//             {
//                 T: 'minecraft:stick',
//                 P: 'phantasm:pream_slab'
//             })
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
        e.shaped('integrateddynamics:menril_door', [
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
// //Deorum
//     e.remove({output: 'forbidden_arcanus:deorum_door'})
//     e.shaped('forbidden_arcanus:deorum_door', [
//             'PTR',
//             'PBS',
//             'PPD'
//         ],
//         {
//             T: 'forbidden_arcanus:deorum_trapdoor',
//             P: 'forbidden_arcanus:deorum_ingot',
//             B: 'gtceu:steel_ring',
//             S: 'gtceu:steel_screw',
//             D: '#forge:tools/screwdrivers',
//             R: '#forge:tools/hammers'
//         }
//     )
//     e.remove({output: 'forbidden_arcanus:deorum_trapdoor'})
//     e.shaped('forbidden_arcanus:deorum_trapdoor', [
//             'PTP',
//             'TOT',
//             'ETR'
//         ],
//         {
//             T: 'forbidden_arcanus:deorum_ingot',
//             P: 'gtceu:steel_screw',
//             E: '#forge:tools/saws',
//             R: '#forge:tools/screwdrivers',
//             O: '#minecraft:wooden_trapdoors'
//         })
// //Fungyss
//     e.remove({output: 'forbidden_arcanus:fungyss_door'})
//     e.shaped('forbidden_arcanus:fungyss_door', [
//             'PTR',
//             'PBS',
//             'PPD'
//         ],
//         {
//             T: 'forbidden_arcanus:fungyss_trapdoor',
//             P: 'forbidden_arcanus:fungyss_planks',
//             B: 'gtceu:iron_ring',
//             S: 'gtceu:iron_screw',
//             D: '#forge:tools/saws',
//             R: '#forge:tools/screwdrivers'
//         }
//     )
//     e.remove({output: 'forbidden_arcanus:fungyss_trapdoor'})
//     e.shaped('forbidden_arcanus:fungyss_trapdoor', [
//             'PTP',
//             'TTT',
//             'PTP'
//         ],
//         {
//             T: 'minecraft:stick',
//             P: 'forbidden_arcanus:fungyss_slab'
//         })
// //Aurum
//     e.remove({output: 'forbidden_arcanus:aurum_door'})
//     e.shaped('forbidden_arcanus:aurum_door', [
//             'PTR',
//             'PBS',
//             'PPD'
//         ],
//         {
//             T: 'forbidden_arcanus:aurum_trapdoor',
//             P: 'forbidden_arcanus:aurum_planks',
//             B: 'gtceu:iron_ring',
//             S: 'gtceu:iron_screw',
//             D: '#forge:tools/saws',
//             R: '#forge:tools/screwdrivers'
//         }
//     )
//     e.remove({output: 'forbidden_arcanus:aurum_trapdoor'})
//     e.shaped('forbidden_arcanus:aurum_trapdoor', [
//             'PTP',
//             'TTT',
//             'PTP'
//         ],
//         {
//             T: 'minecraft:stick',
//             P: 'forbidden_arcanus:aurum_slab'
//         })
// //Edelwood
//     e.remove({output: 'forbidden_arcanus:edelwood_door'})
//     e.shaped('forbidden_arcanus:edelwood_door', [
//             'PTR',
//             'PBS',
//             'PPD'
//         ],
//         {
//             T: 'forbidden_arcanus:edelwood_trapdoor',
//             P: 'forbidden_arcanus:edelwood_planks',
//             B: 'gtceu:iron_ring',
//             S: 'gtceu:iron_screw',
//             D: '#forge:tools/saws',
//             R: '#forge:tools/screwdrivers'
//         }
//     )
//     e.remove({output: 'forbidden_arcanus:edelwood_trapdoor'})
//     e.shaped('forbidden_arcanus:edelwood_trapdoor', [
//             'PTP',
//             'TTT',
//             'PTP'
//         ],
//         {
//             T: 'minecraft:stick',
//             P: 'forbidden_arcanus:edelwood_slab'
//         })
// //Arcane Edelwood
//     e.remove({output: 'forbidden_arcanus:arcane_edelwood_door'})
//     e.shaped('forbidden_arcanus:arcane_edelwood_door', [
//             'PTR',
//             'PBS',
//             'PPD'
//         ],
//         {
//             T: 'forbidden_arcanus:arcane_edelwood_trapdoor',
//             P: 'forbidden_arcanus:arcane_edelwood_planks',
//             B: 'gtceu:iron_ring',
//             S: 'gtceu:iron_screw',
//             D: '#forge:tools/saws',
//             R: '#forge:tools/screwdrivers'
//         }
//     )
//     e.remove({output: 'forbidden_arcanus:arcane_edelwood_trapdoor'})
//     e.shaped('forbidden_arcanus:arcane_edelwood_trapdoor', [
//             'PTP',
//             'TTT',
//             'PTP'
//         ],
//         {
//             T: 'minecraft:stick',
//             P: 'forbidden_arcanus:arcane_edelwood_slab'
//         })
//Doors finished

//Plank time
//Cherry Planks
    e.remove({id: 'minecraft:cherry_planks'})
    e.shaped('4x minecraft:cherry_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'minecraft:cherry_log'
        })
    e.shaped('2x minecraft:cherry_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'minecraft:cherry_log'
        })
//Bamboo
    e.remove({id: 'minecraft:bamboo_planks'})
    e.shaped('4x minecraft:bamboo_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'minecraft:bamboo_block'
        })
    e.shaped('2x minecraft:bamboo_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'minecraft:bamboo_block'
        })
// //Stalagnate
//     e.remove({id: 'betternether:stalagnate_planks'})
//     e.shaped('4x betternether:stalagnate_planks', [
//             '   ',
//             ' T ',
//             ' P '
//         ],
//         {
//             T: '#forge:tools/saws',
//             P: 'betternether:stalagnate_log'
//         })
//     e.shaped('2x betternether:stalagnate_planks', [
//             '   ',
//             '   ',
//             ' P '
//         ],
//         {
//             P: 'betternether:stalagnate_log'
//         })
// //Willow
//     e.remove({id: 'betternether:willow_planks'})
//     e.shaped('4x betternether:willow_planks', [
//             '   ',
//             ' T ',
//             ' P '
//         ],
//         {
//             T: '#forge:tools/saws',
//             P: 'betternether:willow_log'
//         })
//     e.shaped('2x betternether:willow_planks', [
//             '   ',
//             '   ',
//             ' P '
//         ],
//         {
//             P: 'betternether:willow_log'
//         })
// //Wart
//     e.remove({id: 'betternether:wart_planks'})
//     e.shaped('4x betternether:wart_planks', [
//             '   ',
//             ' T ',
//             ' P '
//         ],
//         {
//             T: '#forge:tools/saws',
//             P: 'betternether:wart_log'
//         })
//     e.shaped('2x betternether:wart_planks', [
//             '   ',
//             '   ',
//             ' P '
//         ],
//         {
//             P: 'betternether:wart_log'
//         })
// //Rubeus
//     e.remove({id: 'betternether:rubeus_planks'})
//     e.shaped('4x betternether:rubeus_planks', [
//             '   ',
//             ' T ',
//             ' P '
//         ],
//         {
//             T: '#forge:tools/saws',
//             P: 'betternether:rubeus_log'
//         })
//     e.shaped('2x betternether:rubeus_planks', [
//             '   ',
//             '   ',
//             ' P '
//         ],
//         {
//             P: 'betternether:rubeus_log'
//         })
// //Mushroom Fir
//     e.remove({id: 'betternether:mushroom_fir_planks'})
//     e.shaped('4x betternether:mushroom_fir_planks', [
//             '   ',
//             ' T ',
//             ' P '
//         ],
//         {
//             T: '#forge:tools/saws',
//             P: 'betternether:mushroom_fir_log'
//         })
//     e.shaped('2x betternether:mushroom_fir_planks', [
//             '   ',
//             '   ',
//             ' P '
//         ],
//         {
//             P: 'betternether:mushroom_fir_log'
//         })
// //Mushroom
//     e.remove({id: 'betternether:nether_mushroom_planks'})
//     e.shaped('4x betternether:nether_mushroom_planks', [
//             '   ',
//             ' T ',
//             ' P '
//         ],
//         {
//             T: '#forge:tools/saws',
//             P: 'betternether:nether_mushroom_stem'
//         })
//     e.shaped('2x betternether:nether_mushroom_planks', [
//             '   ',
//             '   ',
//             ' P '
//         ],
//         {
//             P: 'betternether:nether_mushroom_stem'
//         })
// //Anchor
//     e.remove({id: 'betternether:anchor_tree_planks'})
//     e.shaped('4x betternether:anchor_tree_planks', [
//             '   ',
//             ' T ',
//             ' P '
//         ],
//         {
//             T: '#forge:tools/saws',
//             P: 'betternether:anchor_tree_log'
//         })
//     e.shaped('2x betternether:anchor_tree_planks', [
//             '   ',
//             '   ',
//             ' P '
//         ],
//         {
//             P: 'betternether:anchor_tree_log'
//         })
// //Nether Sakura
//     e.remove({id: 'betternether:nether_sakura_planks'})
//     e.shaped('4x betternether:nether_sakura_planks', [
//             '   ',
//             ' T ',
//             ' P '
//         ],
//         {
//             T: '#forge:tools/saws',
//             P: 'betternether:nether_sakura_log'
//         })
//     e.shaped('2x betternether:nether_sakura_planks', [
//             '   ',
//             '   ',
//             ' P '
//         ],
//         {
//             P: 'betternether:nether_sakura_log'
//         })
//Mossy Glowshroom
//     e.remove({id: 'betterend:mossy_glowshroom_planks'})
//     e.shaped('4x betterend:mossy_glowshroom_planks', [
//             '   ',
//             ' T ',
//             ' P '
//         ],
//         {
//             T: '#forge:tools/saws',
//             P: 'betterend:mossy_glowshroom_log'
//         })
//     e.shaped('2x betterend:mossy_glowshroom_planks', [
//             '   ',
//             '   ',
//             ' P '
//         ],
//         {
//             P: 'betterend:mossy_glowshroom_log'
//         })
// //Pythadendron
//     e.remove({id: 'betterend:pythadendron_planks'})
//     e.shaped('4x betterend:pythadendron_planks', [
//             '   ',
//             ' T ',
//             ' P '
//         ],
//         {
//             T: '#forge:tools/saws',
//             P: 'betterend:pythadendron_log'
//         })
//     e.shaped('2x betterend:pythadendron_planks', [
//             '   ',
//             '   ',
//             ' P '
//         ],
//         {
//             P: 'betterend:pythadendron_log'
//         })
// //Endlotus
//     e.remove({id: 'betterend:end_lotus_planks'})
//     e.shaped('4x betterend:end_lotus_planks', [
//             '   ',
//             ' T ',
//             ' P '
//         ],
//         {
//             T: '#forge:tools/saws',
//             P: 'betterend:end_lotus_log'
//         })
//     e.shaped('2x betterend:end_lotus_planks', [
//             '   ',
//             '   ',
//             ' P '
//         ],
//         {
//             P: 'betterend:end_lotus_log'
//         })
// //Lacugrove
//     e.remove({id: 'betterend:lacugrove_planks'})
//     e.shaped('4x betterend:lacugrove_planks', [
//             '   ',
//             ' T ',
//             ' P '
//         ],
//         {
//             T: '#forge:tools/saws',
//             P: 'betterend:lacugrove_log'
//         })
//     e.shaped('2x betterend:lacugrove_planks', [
//             '   ',
//             '   ',
//             ' P '
//         ],
//         {
//             P: 'betterend:lacugrove_log'
//         })
// //Dragon Tree
//     e.remove({id: 'betterend:dragon_tree_planks'})
//     e.shaped('4x betterend:dragon_tree_planks', [
//             '   ',
//             ' T ',
//             ' P '
//         ],
//         {
//             T: '#forge:tools/saws',
//             P: 'betterend:dragon_tree_log'
//         })
//     e.shaped('2x betterend:dragon_tree_planks', [
//             '   ',
//             '   ',
//             ' P '
//         ],
//         {
//             P: 'betterend:dragon_tree_log'
//         })
// //Tenanea
//     e.remove({id: 'betterend:tenanea_planks'})
//     e.shaped('4x betterend:tenanea_planks', [
//             '   ',
//             ' T ',
//             ' P '
//         ],
//         {
//             T: '#forge:tools/saws',
//             P: 'betterend:tenanea_log'
//         })
//     e.shaped('2x betterend:tenanea_planks', [
//             '   ',
//             '   ',
//             ' P '
//         ],
//         {
//             P: 'betterend:tenanea_log'
//         })
// //Helix Tree
//     e.remove({id: 'betterend:helix_tree_planks'})
//     e.shaped('4x betterend:helix_tree_planks', [
//             '   ',
//             ' T ',
//             ' P '
//         ],
//         {
//             T: '#forge:tools/saws',
//             P: 'betterend:helix_tree_log'
//         })
//     e.shaped('2x betterend:helix_tree_planks', [
//             '   ',
//             '   ',
//             ' P '
//         ],
//         {
//             P: 'betterend:helix_tree_log'
//         })
// //Umbrella
//     e.remove({id: 'betterend:umbrella_tree_planks'})
//     e.shaped('4x betterend:umbrella_tree_planks', [
//             '   ',
//             ' T ',
//             ' P '
//         ],
//         {
//             T: '#forge:tools/saws',
//             P: 'betterend:umbrella_tree_log'
//         })
//     e.shaped('2x betterend:umbrella_tree_planks', [
//             '   ',
//             '   ',
//             ' P '
//         ],
//         {
//             P: 'betterend:umbrella_tree_log'
//         })
// //Anchor
//     e.remove({id: 'betternether:anchor_tree_planks'})
//     e.shaped('4x betternether:anchor_tree_planks', [
//             '   ',
//             ' T ',
//             ' P '
//         ],
//         {
//             T: '#forge:tools/saws',
//             P: 'betternether:anchor_tree_log'
//         })
//     e.shaped('2x betternether:anchor_tree_planks', [
//             '   ',
//             '   ',
//             ' P '
//         ],
//         {
//             P: 'betternether:anchor_tree_log'
//         })
//Jellyshroom
//     e.remove({id: 'betterend:jellyshroom_planks'})
//     e.shaped('4x betterend:jellyshroom_planks', [
//             '   ',
//             ' T ',
//             ' P '
//         ],
//         {
//             T: '#forge:tools/saws',
//             P: 'betterend:jellyshroom_log'
//         })
//     e.shaped('2x betterend:jellyshroom_planks', [
//             '   ',
//             '   ',
//             ' P '
//         ],
//         {
//             P: 'betterend:jellyshroom_log'
//         })
// //Lucernia
//     e.remove({id: 'betterend:lucernia_planks'})
//     e.shaped('4x betterend:lucernia_planks', [
//             '   ',
//             ' T ',
//             ' P '
//         ],
//         {
//             T: '#forge:tools/saws',
//             P: 'betterend:lucernia_log'
//         })
//     e.shaped('2x betterend:lucernia_planks', [
//             '   ',
//             '   ',
//             ' P '
//         ],
//         {
//             P: 'betterend:lucernia_log'
//         })
// //Pream
//     e.remove({id: 'phantasm:pream_planks'})
//     e.shaped('4x phantasm:pream_planks', [
//             '   ',
//             ' T ',
//             ' P '
//         ],
//         {
//             T: '#forge:tools/saws',
//             P: 'phantasm:pream_log'
//         })
//     e.shaped('2x phantasm:pream_planks', [
//             '   ',
//             '   ',
//             ' P '
//         ],
//         {
//             P: 'phantasm:pream_log'
//         })
// //Undead
//     e.remove({id: 'evilcraft:crafting/undead_planks'})
//     e.shaped('4x evilcraft:undead_planks', [
//             '   ',
//             ' T ',
//             ' P '
//         ],
//         {
//             T: '#forge:tools/saws',
//             P: 'evilcraft:undead_log'
//         })
//     e.shaped('2x evilcraft:undead_planks', [
//             '   ',
//             '   ',
//             ' P '
//         ],
//         {
//             P: 'evilcraft:undead_log'
//         })
//Livingwood
    e.remove({id: 'botania:livingwood_planks'})
    e.shaped('4x botania:livingwood_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'botania:livingwood_log'
        })
    e.shaped('2x botania:livingwood_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'botania:livingwood_log'
        })
//Dreamwood
    e.remove({id: 'botania:dreamwood_planks'})
    e.shaped('4x botania:dreamwood_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'botania:dreamwood_log'
        })
    e.shaped('2x botania:dreamwood_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'botania:dreamwood_log'
        })
//Fir
    e.remove({id: 'biomesoplenty:fir_planks'})
    e.shaped('4x biomesoplenty:fir_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'biomesoplenty:fir_log'
        })
    e.shaped('2x biomesoplenty:fir_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'biomesoplenty:fir_log'
        })
//Redwood
    e.remove({id: 'biomesoplenty:redwood_planks'})
    e.shaped('4x biomesoplenty:redwood_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'biomesoplenty:redwood_log'
        })
    e.shaped('2x biomesoplenty:redwood_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'biomesoplenty:redwood_log'
        })
//Mahogany
    e.remove({id: 'biomesoplenty:mahogany_planks'})
    e.shaped('4x biomesoplenty:mahogany_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'biomesoplenty:mahogany_log'
        })
    e.shaped('2x biomesoplenty:mahogany_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'biomesoplenty:mahogany_log'
        })
//Jacaranda
    e.remove({id: 'biomesoplenty:jacaranda_planks'})
    e.shaped('4x biomesoplenty:jacaranda_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'biomesoplenty:jacaranda_log'
        })
    e.shaped('2x biomesoplenty:jacaranda_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'biomesoplenty:jacaranda_log'
        })
//Palm
    e.remove({id: 'biomesoplenty:palm_planks'})
    e.shaped('4x biomesoplenty:palm_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'biomesoplenty:palm_log'
        })
    e.shaped('2x biomesoplenty:palm_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'biomesoplenty:palm_log'
        })
//Willow
    e.remove({id: 'biomesoplenty:willow_planks'})
    e.shaped('4x biomesoplenty:willow_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'biomesoplenty:willow_log'
        })
    e.shaped('2x biomesoplenty:willow_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'biomesoplenty:willow_log'
        })
//Dead
    e.remove({id: 'biomesoplenty:dead_planks'})
    e.shaped('4x biomesoplenty:dead_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'biomesoplenty:dead_log'
        })
    e.shaped('2x biomesoplenty:dead_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'biomesoplenty:dead_log'
        })
//Magic
    e.remove({id: 'biomesoplenty:magic_planks'})
    e.shaped('4x biomesoplenty:magic_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'biomesoplenty:magic_log'
        })
    e.shaped('2x biomesoplenty:magic_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'biomesoplenty:magic_log'
        })
//Umbran
    e.remove({id: 'biomesoplenty:umbran_planks'})
    e.shaped('4x biomesoplenty:umbran_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'biomesoplenty:umbran_log'
        })
    e.shaped('2x biomesoplenty:umbran_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'biomesoplenty:umbran_log'
        })
//Hellbark
    e.remove({id: 'biomesoplenty:hellbark_planks'})
    e.shaped('4x biomesoplenty:hellbark_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'biomesoplenty:hellbark_log'
        })
    e.shaped('2x biomesoplenty:hellbark_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'biomesoplenty:hellbark_log'
        })
//Menril
    e.remove({id: 'integrateddynamics:crafting/menril_planks'})
    e.shaped('4x integrateddynamics:menril_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'integrateddynamics:menril_log'
        })
    e.shaped('2x integrateddynamics:menril_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'integrateddynamics:menril_log'
        })
//Aeronos
    e.remove({id: 'ad_astra:recipes/aeronos_planks'})
    e.shaped('4x ad_astra:aeronos_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: '#ad_astra:aeronos_caps'
        })
    e.shaped('2x ad_astra:aeronos_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: '#ad_astra:aeronos_caps'
        })
//Strophar
    e.remove({id: 'ad_astra:recipes/strophar_planks'})
    e.shaped('4x ad_astra:strophar_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: '#ad_astra:strophar_caps'
        })
    e.shaped('2x ad_astra:strophar_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: '#ad_astra:strophar_caps'
        })
//Glacian
    e.remove({id: 'ad_astra:recipes/glacian_planks'})
    e.shaped('4x ad_astra:glacian_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'ad_astra:glacian_log'
        })
    e.shaped('2x ad_astra:glacian_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'ad_astra:glacian_log'
        })
//Bluebright
    e.remove({id: 'blue_skies:bluebright_planks'})
    e.shaped('4x blue_skies:bluebright_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'blue_skies:bluebright_log'
        })
    e.shaped('2x blue_skies:bluebright_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'blue_skies:bluebright_log'
        })
//Bluebright
    e.remove({id: 'blue_skies:bluebright_planks'})
    e.shaped('4x blue_skies:bluebright_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'blue_skies:bluebright_log'
        })
    e.shaped('2x blue_skies:bluebright_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'blue_skies:bluebright_log'
        })
//Starlit
    e.remove({id: 'blue_skies:starlit_planks'})
    e.shaped('4x blue_skies:starlit_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'blue_skies:starlit_log'
        })
    e.shaped('2x blue_skies:starlit_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'blue_skies:starlit_log'
        })
//Frostbright
    e.remove({id: 'blue_skies:frostbright_planks'})
    e.shaped('4x blue_skies:frostbright_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'blue_skies:frostbright_log'
        })
    e.shaped('2x blue_skies:frostbright_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'blue_skies:frostbright_log'
        })
//Lunar
    e.remove({id: 'blue_skies:lunar_planks'})
    e.shaped('4x blue_skies:lunar_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'blue_skies:lunar_log'
        })
    e.shaped('2x blue_skies:lunar_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'blue_skies:lunar_log'
        })
//Dusk
    e.remove({id: 'blue_skies:dusk_planks'})
    e.shaped('4x blue_skies:dusk_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'blue_skies:dusk_log'
        })
    e.shaped('2x blue_skies:dusk_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'blue_skies:dusk_log'
        })
//Maple
    e.remove({id: 'blue_skies:maple_planks'})
    e.shaped('4x blue_skies:maple_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'blue_skies:maple_log'
        })
    e.shaped('2x blue_skies:maple_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'blue_skies:maple_log'
        })
//Crystallized
    e.remove({id: 'blue_skies:crystallized_planks'})
    e.shaped('4x blue_skies:crystallized_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'blue_skies:crystallized_log'
        })
    e.shaped('2x blue_skies:crystallized_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'blue_skies:crystallized_log'
        })
//Comet
    e.remove({id: 'blue_skies:comet_planks'})
    e.shaped('4x blue_skies:comet_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'blue_skies:comet_log'
        })
    e.shaped('2x blue_skies:comet_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'blue_skies:comet_log'
        })
//Blue Archwood
    e.remove({id: 'ars_nouveau:archwood_planks'})
    e.shaped('4x ars_nouveau:archwood_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'ars_nouveau:blue_archwood_log'
        })
    e.shaped('2x ars_nouveau:archwood_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'ars_nouveau:blue_archwood_log'
        })
//Red Archwood
    e.shaped('4x ars_nouveau:archwood_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'ars_nouveau:red_archwood_log'
        })
    e.shaped('2x ars_nouveau:archwood_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'ars_nouveau:red_archwood_log'
        })
//Purple Archwood
    e.shaped('4x ars_nouveau:archwood_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'ars_nouveau:purple_archwood_log'
        })
    e.shaped('2x ars_nouveau:archwood_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'ars_nouveau:purple_archwood_log'
        })
//Green Archwood
    e.shaped('4x ars_nouveau:archwood_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'ars_nouveau:green_archwood_log'
        })
    e.shaped('2x ars_nouveau:archwood_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'ars_nouveau:green_archwood_log'
        })
//Skyroot
    e.remove({id: 'aether:skyroot_planks'})
    e.shaped('4x aether:skyroot_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'aether:skyroot_log'
        })
    e.shaped('2x aether:skyroot_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'aether:skyroot_log'
        })
//Roseroot
    e.remove({id: 'deep_aether:roseroot_planks'})
    e.shaped('4x deep_aether:roseroot_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'deep_aether:roseroot_log'
        })
    e.shaped('2x deep_aether:roseroot_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'deep_aether:roseroot_log'
        })
//Yagroot
    e.remove({id: 'deep_aether:yagroot_planks'})
    e.shaped('4x deep_aether:yagroot_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'deep_aether:yagroot_log'
        })
    e.shaped('2x deep_aether:yagroot_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'deep_aether:yagroot_log'
        })
//Cruderoot
    e.remove({id: 'deep_aether:cruderoot_planks'})
    e.shaped('4x deep_aether:cruderoot_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'deep_aether:cruderoot_log'
        })
    e.shaped('2x deep_aether:cruderoot_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'deep_aether:cruderoot_log'
        })
//Conberry
    e.remove({id: 'deep_aether:conberry_planks'})
    e.shaped('4x deep_aether:conberry_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'deep_aether:conberry_log'
        })
    e.shaped('2x deep_aether:conberry_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'deep_aether:conberry_log'
        })
//Sunroot
    e.remove({id: 'deep_aether:sunroot_planks'})
    e.shaped('4x deep_aether:sunroot_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'deep_aether:sunroot_log'
        })
    e.shaped('2x deep_aether:sunroot_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'deep_aether:sunroot_log'
        })
//Fieldsprout
    e.remove({id: 'aether_redux:fieldsprout_planks'})
    e.shaped('4x aether_redux:fieldsprout_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'aether_redux:fieldsprout_log'
        })
    e.shaped('2x aether_redux:fieldsprout_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'aether_redux:fieldsprout_log'
        })
//Blightwillow
    e.remove({id: 'aether_redux:blightwillow_planks'})
    e.shaped('4x aether_redux:blightwillow_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'aether_redux:blightwillow_log'
        })
    e.shaped('2x aether_redux:blightwillow_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'aether_redux:blightwillow_log'
        })
//Cloudcap
    e.remove({id: 'aether_redux:cloudcap_planks'})
    e.shaped('4x aether_redux:cloudcap_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: '#aether_redux:cloudcap_stems'
        })
    e.shaped('2x aether_redux:cloudcap_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: '#aether_redux:cloudcap_stems'
        })
//Springshroom
    e.remove({id: 'aether_redux:springshroom_planks'})
    e.shaped('4x aether_redux:springshroom_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: '#aether_redux:springshroom_stems'
        })
    e.shaped('2x aether_redux:springshroom_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: '#aether_redux:springshroom_stems'
        })
//Crystal
    e.remove({id: 'aether_redux:crystal_planks'})
    e.shaped('4x aether_redux:crystal_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'aether_redux:crystal_log'
        })
    e.shaped('2x aether_redux:crystal_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'aether_redux:crystal_log'
        })
//Glacia
    e.remove({id: 'aether_redux:glacia_planks'})
    e.shaped('4x aether_redux:glacia_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'aether_redux:glacia_log'
        })
    e.shaped('2x aether_redux:glacia_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'aether_redux:glacia_log'
        })
//Smogstem
    e.remove({id: 'undergarden:smogstem_planks'})
    e.shaped('4x undergarden:smogstem_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'undergarden:smogstem_log'
        })
    e.shaped('2x undergarden:smogstem_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'undergarden:smogstem_log'
        })
//Wigglewood
    e.remove({id: 'undergarden:wigglewood_planks'})
    e.shaped('4x undergarden:wigglewood_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'undergarden:wigglewood_log'
        })
    e.shaped('2x undergarden:wigglewood_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'undergarden:wigglewood_log'
        })
//Grongle
    e.remove({id: 'undergarden:grongle_planks'})
    e.shaped('4x undergarden:grongle_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'undergarden:grongle_log'
        })
    e.shaped('2x undergarden:grongle_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'undergarden:grongle_log'
        })
//Rubber
    e.remove({id: 'gtceu:shapeless/rubber_wood_planks'})
    e.shaped('4x gtceu:rubber_planks', [
            '   ',
            ' T ',
            ' P '
        ],
        {
            T: '#forge:tools/saws',
            P: 'gtceu:rubber_log'
        })
    e.shaped('2x gtceu:rubber_planks', [
            '   ',
            '   ',
            ' P '
        ],
        {
            P: 'gtceu:rubber_log'
        })
// //Fungyss
//     e.remove({id: 'forbidden_arcanus:fungyss_planks'})
//     e.shaped('4x forbidden_arcanus:fungyss_planks', [
//             '   ',
//             ' T ',
//             ' P '
//         ],
//         {
//             T: '#forge:tools/saws',
//             P: '#forbidden_arcanus:fungyss_stems'
//         })
//     e.shaped('2x forbidden_arcanus:fungyss_planks', [
//             '   ',
//             '   ',
//             ' P '
//         ],
//         {
//             P: '#forbidden_arcanus:fungyss_stems'
//         })
// //Aurum
//     e.remove({id: 'forbidden_arcanus:aurum_planks'})
//     e.shaped('4x forbidden_arcanus:aurum_planks', [
//             '   ',
//             ' T ',
//             ' P '
//         ],
//         {
//             T: '#forge:tools/saws',
//             P: 'forbidden_arcanus:aurum_log'
//         })
//     e.shaped('2x forbidden_arcanus:aurum_planks', [
//             '   ',
//             '   ',
//             ' P '
//         ],
//         {
//             P: 'forbidden_arcanus:aurum_log'
//         })
// //Edelwood
//     e.remove({id: 'forbidden_arcanus:edelwood_planks'})
//     e.shaped('4x forbidden_arcanus:edelwood_planks', [
//             '   ',
//             ' T ',
//             ' P '
//         ],
//         {
//             T: '#forge:tools/saws',
//             P: 'forbidden_arcanus:edelwood_log'
//         })
//     e.shaped('2x forbidden_arcanus:edelwood_planks', [
//             '   ',
//             '   ',
//             ' P '
//         ],
//         {
//             P: 'forbidden_arcanus:edelwood_log'
//         })

// PLANKS FINISHED
})

//CREATE SAW BRIDGING
ServerEvents.recipes(e => {
    //Stalagnate
    // e.recipes.create.cutting('betternether:stalagnate_stripped_log', 'betternether:stalagnate_log').processingTime(50)
    // e.recipes.create.cutting('6x betternether:stalagnate_planks', 'betternether:stalagnate_stripped_log').processingTime(50)
    // //Willow
    // e.recipes.create.cutting('betternether:willow_stripped_log', 'betternether:willow_log').processingTime(50)
    // e.recipes.create.cutting('6x betternether:willow_planks', 'betternether:willow_stripped_log').processingTime(50)
    // //Wart
    // e.recipes.create.cutting('betternether:wart_stripped_log', 'betternether:wart_log').processingTime(50)
    // e.recipes.create.cutting('6x betternether:wart_planks', 'betternether:wart_stripped_log').processingTime(50)
    // //Rubeus
    // e.recipes.create.cutting('betternether:rubeus_stripped_log', 'betternether:rubeus_log').processingTime(50)
    // e.recipes.create.cutting('6x betternether:rubeus_planks', 'betternether:rubeus_stripped_log').processingTime(50)
    // //Mushroom Fir
    // e.recipes.create.cutting('betternether:mushroom_fir_stripped_log', 'betternether:mushroom_fir_log').processingTime(50)
    // e.recipes.create.cutting('6x betternether:mushroom_fir_planks', 'betternether:mushroom_fir_stripped_log').processingTime(50)
    // //Anchor Tree
    // e.recipes.create.cutting('betternether:anchor_tree_stripped_log', 'betternether:anchor_tree_log').processingTime(50)
    // e.recipes.create.cutting('6x betternether:anchor_tree_planks', 'betternether:anchor_tree_stripped_log').processingTime(50)
    // //Nether Sakura
    // e.recipes.create.cutting('betternether:nether_sakura_stripped_log', 'betternether:nether_sakura_log').processingTime(50)
    // e.recipes.create.cutting('6x betternether:nether_sakura_planks', 'betternether:nether_sakura_stripped_log').processingTime(50)
    //Mossy Glowshroom
    // e.recipes.create.cutting('betterend:mossy_glowshroom_stripped_log', 'betterend:mossy_glowshroom_log').processingTime(50)
    // e.recipes.create.cutting('6x betterend:mossy_glowshroom_planks', 'betterend:mossy_glowshroom_stripped_log').processingTime(50)
    // //Pythadendron
    // e.recipes.create.cutting('betterend:pythadendron_stripped_log', 'betterend:pythadendron_fir_log').processingTime(50)
    // e.recipes.create.cutting('6x betterend:pythadendron_planks', 'betterend:pythadendron_stripped_log').processingTime(50)
    // //End Lotus
    // e.recipes.create.cutting('betterend:end_lotus_stripped_log', 'betterend:end_lotus_log').processingTime(50)
    // e.recipes.create.cutting('6x betterend:end_lotus_planks', 'betterend:end_lotus_stripped_log').processingTime(50)
    // //Lacugrove
    // e.recipes.create.cutting('betterend:lacugrove_stripped_log', 'betterend:lacugrove_log').processingTime(50)
    // e.recipes.create.cutting('6x betterend:lacugrove_planks', 'betterend:lacugrove_stripped_log').processingTime(50)
    // //Dragon Tree
    // e.recipes.create.cutting('betterend:dragon_tree_stripped_log', 'betterend:dragon_tree_log').processingTime(50)
    // e.recipes.create.cutting('6x betterend:dragon_tree_planks', 'betterend:dragon_tree_stripped_log').processingTime(50)
    // //Tenanea
    // e.recipes.create.cutting('betterend:tenanea_stripped_log', 'betterend:tenanea_log').processingTime(50)
    // e.recipes.create.cutting('6x betterend:tenanea_planks', 'betterend:tenanea_stripped_log').processingTime(50)
    // //Helix Tree
    // e.recipes.create.cutting('betterend:helix_tree_stripped_log', 'betterend:helix_tree_log').processingTime(50)
    // e.recipes.create.cutting('6x betterend:helix_tree_planks', 'betterend:helix_tree_stripped_log').processingTime(50)
    // //Umbrella Tree
    // e.recipes.create.cutting('betterend:umbrella_tree_stripped_log', 'betterend:umbrella_tree_log').processingTime(50)
    // e.recipes.create.cutting('6x betterend:umbrella_tree_planks', 'betterend:umbrella_tree_stripped_log').processingTime(50)
    // //Jellyshroom
    // e.recipes.create.cutting('betterend:jellyshroom_stripped_log', 'betterend:jellyshroom_log').processingTime(50)
    // e.recipes.create.cutting('6x betterend:jellyshroom_planks', 'betterend:jellyshroom_stripped_log').processingTime(50)
    // //Lucernia
    // e.recipes.create.cutting('betterend:lucernia_stripped_log', 'betterend:lucernia_log').processingTime(50)
    // e.recipes.create.cutting('6x betterend:lucernia_planks', 'betterend:lucernia_stripped_log').processingTime(50)
    // //Pream
    // e.recipes.create.cutting('phantasm:stripped_pream_log', 'phantasm:pream_log').processingTime(50)
    // e.recipes.create.cutting('6x phantasm:pream_planks', 'phantasm:stripped_pream_log').processingTime(50)
    //Undead
    e.recipes.create.cutting('evilcraft:undead_stripped_log', 'evilcraft:undead_log').processingTime(50)
    e.recipes.create.cutting('6x evilcraft:undead_planks', 'evilcraft:undead_stripped_log').processingTime(50)
    //Roseroot
    e.recipes.create.cutting('deep_aether:stripped_roseroot_log', 'deep_aether:roseroot_log').processingTime(50)
    e.recipes.create.cutting('6x deep_aether:roseroot_planks', 'deep_aether:stripped_roseroot_log').processingTime(50)
    //Yagroot
    e.recipes.create.cutting('deep_aether:stripped_yagroot_log', 'deep_aether:yagroot_log').processingTime(50)
    e.recipes.create.cutting('6x deep_aether:yagroot_planks', 'deep_aether:stripped_yagroot_log').processingTime(50)
    //Cruderoot
    e.recipes.create.cutting('deep_aether:stripped_cruderoot_log', 'deep_aether:cruderoot_log').processingTime(50)
    e.recipes.create.cutting('6x deep_aether:cruderoot_planks', 'deep_aether:stripped_cruderoot_log').processingTime(50)
    //Conberry
    e.recipes.create.cutting('deep_aether:stripped_conberry_log', 'deep_aether:conberry_log').processingTime(50)
    e.recipes.create.cutting('6x deep_aether:conberry_planks', 'deep_aether:stripped_conberry_log').processingTime(50)
    //Sunroot
    e.recipes.create.cutting('deep_aether:stripped_sunroot_log', 'deep_aether:sunroot_log').processingTime(50)
    e.recipes.create.cutting('6x deep_aether:sunroot_planks', 'deep_aether:stripped_sunroot_log').processingTime(50)
    //Fieldsprout
    e.recipes.create.cutting('aether_redux:stripped_fieldsprout_log', 'aether_redux:fieldsprout_log').processingTime(50)
    e.recipes.create.cutting('6x aether_redux:fieldsprout_planks', 'aether_redux:stripped_fieldsprout_log').processingTime(50)
    //Blightwillow
    e.recipes.create.cutting('aether_redux:stripped_blightwillow_log', 'aether_redux:blightwillow_log').processingTime(50)
    e.recipes.create.cutting('6x aether_redux:blightwillow_planks', 'aether_redux:stripped_blightwillow_log').processingTime(50)
    //Crystal
    e.recipes.create.cutting('aether_redux:stripped_crystal_log', 'aether_redux:crystal_log').processingTime(50)
    e.recipes.create.cutting('6x aether_redux:crystal_planks', 'aether_redux:stripped_crystal_log').processingTime(50)
    //Glacia
    e.recipes.create.cutting('aether_redux:stripped_glacia_log', 'aether_redux:glacia_log').processingTime(50)
    e.recipes.create.cutting('6x aether_redux:glacia_planks', 'aether_redux:stripped_glacia_log').processingTime(50)
    //Smogstem
    e.recipes.create.cutting('undergarden:stripped_smogstem_log', 'undergarden:smogstem_log').processingTime(50)
    e.recipes.create.cutting('6x undergarden:smogstem_planks', 'undergarden:stripped_smogstem_log').processingTime(50)
    //Wigglewood
    e.recipes.create.cutting('undergarden:stripped_wigglewood_log', 'undergarden:wigglewood_log').processingTime(50)
    e.recipes.create.cutting('6x undergarden:wigglewood_planks', 'undergarden:stripped_wigglewood_log').processingTime(50)
    //Grongle
    e.recipes.create.cutting('undergarden:stripped_grongle_log', 'undergarden:grongle_log').processingTime(50)
    e.recipes.create.cutting('6x undergarden:grongle_planks', 'undergarden:stripped_grongle_log').processingTime(50)
    //Aurum
    // e.recipes.create.cutting('forbidden_arcanus:stripped_aurum_log', 'forbidden_arcanus:aurum_log').processingTime(50)
    // e.recipes.create.cutting('6x forbidden_arcanus:aurum_planks', 'forbidden_arcanus:stripped_aurum_log').processingTime(50)

})