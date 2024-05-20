//revamped recipes start

//Nether Reed
ServerEvents.recipes(e => {
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
})

//CREATE SAW BRIDGING
ServerEvents.recipes(e => {
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