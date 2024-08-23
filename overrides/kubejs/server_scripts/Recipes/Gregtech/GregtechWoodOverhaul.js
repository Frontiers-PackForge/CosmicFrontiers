ServerEvents.recipes(event => {

    //Big Nuking of Recipes Section
    //Wooden Parts, Planks/Wood/Logs will need special treatment - that or i'm just too stupid with regex to figure it out quite yet. ~G
    //IDEALLY We'd like to regex by recipe ID here, might need to unskill issue my JS skills for that though... OR JUST UNDERSTAND THIS BETTER WAAAAH

    //remove Trapdoors/Doors
    event.remove({ id: /^(?!gtceu:)^(?!minecraft:)([^:]+):(.*)door$/ })
    //remove fences
    event.remove({ id: /^(?!gtceu:)([^:]+):(.*)fence$/ })
    //fence gate
    event.remove({ id: /^(?!gtceu:)([^:]+):(.*)fence_gate$/ })
    //remove signs (hanging included)
    event.remove({ id: /^(?!gtceu:)([^:]+):(.*)sign$/ })
    //remove pressureplates
    event.remove({ id: /^(?!gtceu:)([^:]+):(.*)_pressure_plate$/ })
    //remove button
    event.remove({ id: /^(?!gtceu:)([^:]+):(.*)_button$/ })
    //Remove Boats
    event.remove({ id: /^(?!gtceu:)([^:]+):(.*)_boat$/ })

    event.remove({ id: 'gtceu:shapeless/rubber_wood_planks' })

    //Holy Shit Aether piss off already.

    event.remove({ id: 'aether:skyroot_cartography_table' })
    event.remove({ id: 'aether:skyroot_fletching_table' })
    event.remove({ id: 'aether:skyroot_smithing_table' })
    event.remove({ id: 'aether:skyroot_grindstone' })
    event.remove({ id: 'aether:skyroot_grindstone_holystone_slab' })
    event.remove({ id: 'aether:skyroot_loom' })
    event.remove({ id: 'aether:skyroot_note_block' })
    event.remove({ id: 'aether:skyroot_beehive' })
    event.remove({ id: 'aether:skyroot_barrel' })
    event.remove({ id: 'aether:skyroot_tripwire_hook' })
    event.remove({ id: 'aether:skyroot_iron_vanilla_shield' })
    event.remove({ id: 'aether:skyroot_zanite_vanilla_shield' })
    event.remove({ id: 'aether:skyroot_stairs' })
    event.remove({ id: 'aether:skyroot_slab' })
    event.remove({ id: 'minecraft:kjs/aether_skyroot_fence' })
    event.remove({ id: 'aether:skyroot_bed' })
    event.remove({ id: 'aether:skyroot_stick' })


    //DANGEROUS : WOOD PLANK REMOVALS - BY RECIPE - if something is broken attempt to check it against this matcher first
    event.remove({ id: /^(?!gtceu:)([^:]+):(.*)_planks$/ })
    //It is too destructive to remove Slabs/stairs en-mass. and TBH we should be removing the recipes in the loop god this file FUCKING SUCKS.
    //forgive me for the sins im about to commit
    let woodType = [
        'fir',//index 0
        'redwood',//index 1
        'mahogany',//index 2
        'jacaranda',//index 3
        'palm',//index 4
        'willow',//index 5
        'dead',//index 6
        'magic',//index 7
        'umbran',//index 8
        'hellbark',//index 9
        //deep_aether
        'roseroot', //index 10
        'yagroot', //index 11
        'cruderoot', //index 12
        'conberry', //index 13
        'sunroot', //index 14
        //undergarden
        'grongle', //index 15
        'wigglewood', //index 16
        'smogstem', //index 17
        //Ad Astra
        'glacian', //index 18
        'strophar', //index 19
        'aeronos', //index 20
        //IntDynamics
        'menril', //index 21
        //Aether
        'skyroot', //index 22
        //GTCEU
        'rubber', //index 23
        //architect pallets
        'twisted', //index 25
        //BiomesWeve Gone Index 26-49
        'aspen',
        'baobab',
        'blue_enchanted',
        'cika',
        'cypress',
        'ebony',
        'fir',
        'florus',
        'green_enchanted',
        'holly',
        'ironwood',
        'jacaranda',
        'mahogany',
        'maple',
        'palm',
        'pine',
        'rainbow_eucalyptus',
        'redwood',
        'sakura',
        'skyris',
        'white_mangrove',
        'willow',
        'witch_hazel',
        'zelkova'

    ]
    let mcWood = [
        'minecraft:oak',
        'minecraft:birch',
        'minecraft:dark_oak',
        'minecraft:acacia',
        'minecraft:jungle',
        'minecraft:spruce',
        'minecraft:cherry',
        'minecraft:mangrove',
        'minecraft:bamboo',
        'minecraft:crimson',
        'minecraft:warped'
    ]
    let mcWood2 = [
        'oak',
        'birch',
        'dark_oak',
        'acacia',
        'jungle',
        'spruce',
        'cherry',
        'mangrove',
        'bamboo',
        'crimson',
        'warped'
    ]
    mcWood2.forEach((woodType, index, recipe) => {
        if (Item.exists(`minecraft:stripped_${woodType}_log`)) {
            event.recipes.gtceu.cutter(`minecraft:stripped_${woodType}_cutting`)
                .itemInputs(`minecraft:stripped_${woodType}_log`)
                .itemOutputs([`6x minecraft:${woodType}_planks`, '2x gtceu:wood_dust'])
                .duration(200)
                .EUt(7);
        }
        if (Item.exists(`minecraft:${woodType}_wood`)) {
            event.recipes.gtceu.cutter(`minecraft:${woodType}_wood_cutting`)
                .itemInputs(`minecraft:${woodType}_wood`)
                .itemOutputs([`6x minecraft:${woodType}_planks`, '2x gtceu:wood_dust'])
                .duration(200)
                .EUt(7);
        }
        if (Item.exists(`minecraft:stripped_${woodType}_wood`)) {
            event.recipes.gtceu.cutter(`minecraft:stripped_${woodType}_wood_cutting`)
                .itemInputs(`minecraft:stripped_${woodType}_wood`)
                .itemOutputs([`6x minecraft:${woodType}_planks`, '2x gtceu:wood_dust'])
                .duration(200)
                .EUt(7);
        }
        //Stripped log -> planks
        if (Item.exists(`minecraft:stripped_${woodType}_log`)) {
            event.shaped(`4x minecraft:${woodType}_planks`, [
                '   ',
                ' T ',
                ' P '
            ],
                {
                    T: '#forge:tools/saws',
                    P: `minecraft:stripped_${woodType}_log`
                })
        }
        if (Item.exists(`minecraft:stripped_${woodType}_log`)) {
            event.shaped(`2x minecraft:${woodType}_planks`, [
                '   ',
                '   ',
                ' P '
            ],
                {
                    P: `minecraft:stripped_${woodType}_log`
                })
        }
        //Wood -> Planks
        if (Item.exists(`minecraft:${woodType}_wood`)) {
            event.shaped(`4x minecraft:${woodType}_planks`, [
                '   ',
                ' T ',
                ' P '
            ],
                {
                    T: '#forge:tools/saws',
                    P: `minecraft:${woodType}_wood`
                })
        }
        if (Item.exists(`minecraft:${woodType}_wood`)) {
            event.shaped(`2x minecraft:${woodType}_planks`, [
                '   ',
                '   ',
                ' P '
            ],
                {
                    P: `minecraft:${woodType}_wood`
                })
        }
        //Stripped Wood -> Planks
        if (Item.exists(`minecraft:stripped_${woodType}_wood`)) {
            event.shaped(`4x minecraft:${woodType}_planks`, [
                '   ',
                ' T ',
                ' P '
            ],
                {
                    T: '#forge:tools/saws',
                    P: `minecraft:stripped_${woodType}_wood`
                })
        }
        if (Item.exists(`minecraft:stripped_${woodType}_wood`)) {
            event.shaped(`2x minecraft:${woodType}_planks`, [
                '   ',
                '   ',
                ' P '
            ],
                {
                    P: `minecraft:stripped_${woodType}_wood`
                })
        }
    })

    mcWood.forEach((woodType, index, recipe) => {

        //Sign
        if (Item.exists(`${woodType}_sign`)) {
            event.recipes.gtceu.assembler(`${woodType}_sign`)
                .itemInputs([`6x ${woodType}_planks`, 'minecraft:stick'])
                .itemOutputs(`4x ${woodType}_sign`)
                .circuit(3)
                .duration(100)
                .EUt(4);
            event.shaped(`2x ${woodType}_sign`, [
                'PPP',
                'PPP',
                'FSW'
            ],
                {
                    P: `${woodType}_planks`,
                    W: `#forge:tools/saws`,
                    S: 'minecraft:stick',
                    F: '#forge:tools/files',
                })
        }
        //Sign Hanging
        if (Item.exists(`${woodType}_hanging_sign`)) {
            event.recipes.gtceu.assembler(`${woodType}_hanging_sign`)
                .itemInputs([`6x ${woodType}_planks`, 'minecraft:chain'])
                .itemOutputs(`${woodType}_hanging_sign`)
                .circuit(4)
                .duration(100)
                .EUt(4);
            event.shaped(`2x ${woodType}_hanging_sign`, [
                'SRS',
                'PPP',
                'PPP'
            ],
                {
                    P: `${woodType}_planks`,
                    S: 'minecraft:chain',
                    R: 'gtceu:iron_ring'
                })
        }
        //Pressureplate 
        if (Item.exists(`${woodType}_pressure_plate`)) {
            event.recipes.gtceu.cutter(`${woodType}_pressure_plate`)
                .itemInputs(`${woodType}_slab`)
                .itemOutputs(`4x ${woodType}_pressure_plate`)
                .duration(100)
                .EUt(4);
            event.shaped(`2x ${woodType}_pressure_plate`, [
                '   ',
                ' S ',
                ' P '
            ],
                {
                    P: `${woodType}_slab`,
                    S: `#forge:tools/saws`
                })
        }
        //Button 
        if (Item.exists(`${woodType}_button`)) {
            event.recipes.gtceu.cutter(`${woodType}_button`)
                .itemInputs(`${woodType}_pressure_plate`)
                .itemOutputs(`4x ${woodType}_button`)
                .duration(100)
                .EUt(4);
            event.shaped(`2x ${woodType}_button`, [
                '   ',
                ' S ',
                ' P '
            ],
                {
                    P: `${woodType}_pressure_plate`,
                    S: `#forge:tools/saws`
                })
        }
    })
    woodType.forEach((woodType, index, recipe) => {
        var modID;
        if (index < 10) {
            modID = 'biomesoplenty'
        } else if (index >= 10 && index <= 14) {
            modID = 'deep_aether'
        } else if (index >= 15 && index <= 17) {
            modID = 'undergarden'
        } else if (index >= 18 && index <= 20) {
            modID = 'ad_astra'
        } else if (index === 21) {
            modID = 'integrateddynamics'
        } else if (index === 22) {
            modID = 'aether'
        } else if (index === 23) {
            modID = 'gtceu'
        } else if (index === 24) {
            modID = 'architects_palette'
        } else if (index >= 25) {
            modID = 'biomeswevegone'
        }

        if (Item.exists(`${modID}:${woodType}_log`)) {
            event.recipes.gtceu.cutter(`${modID}:${woodType}_cutting`)
                .itemInputs(`${modID}:${woodType}_log`)
                .itemOutputs([`6x ${modID}:${woodType}_planks`, '2x gtceu:wood_dust'])
                .duration(200)
                .EUt(7);
        }
        if (Item.exists(`${modID}:stripped_${woodType}_log`)) {
            event.recipes.gtceu.cutter(`${modID}:stripped_${woodType}_cutting`)
                .itemInputs(`${modID}:stripped_${woodType}_log`)
                .itemOutputs([`6x ${modID}:${woodType}_planks`, '2x gtceu:wood_dust'])
                .duration(200)
                .EUt(7);
        }
        if (Item.exists(`${modID}:${woodType}_wood`)) {
            event.recipes.gtceu.cutter(`${modID}:${woodType}_wood_cutting`)
                .itemInputs(`${modID}:${woodType}_wood`)
                .itemOutputs([`6x ${modID}:${woodType}_planks`, '2x gtceu:wood_dust'])
                .duration(200)
                .EUt(7);
        }
        if (Item.exists(`${modID}:stripped_${woodType}_wood`)) {
            event.recipes.gtceu.cutter(`${modID}:stripped_${woodType}_wood_cutting`)
                .itemInputs(`${modID}:stripped_${woodType}_wood`)
                .itemOutputs([`6x ${modID}:${woodType}_planks`, '2x gtceu:wood_dust'])
                .duration(200)
                .EUt(7);
        }
        //Log -> Plank
        if (Item.exists(`${modID}:${woodType}_log`)) {
            event.shaped(`4x ${modID}:${woodType}_planks`, [
                '   ',
                ' T ',
                ' P '
            ],
                {
                    T: '#forge:tools/saws',
                    P: `${modID}:${woodType}_log`
                })
        }
        if (Item.exists(`${modID}:${woodType}_log`)) {
            event.shaped(`2x ${modID}:${woodType}_planks`, [
                '   ',
                '   ',
                ' P '
            ],
                {
                    P: `${modID}:${woodType}_log`
                })
        }
        //Stripped log -> planks
        if (Item.exists(`${modID}:stripped_${woodType}_log`)) {
            event.shaped(`4x ${modID}:${woodType}_planks`, [
                '   ',
                ' T ',
                ' P '
            ],
                {
                    T: '#forge:tools/saws',
                    P: `${modID}:stripped_${woodType}_log`
                })
        }
        if (Item.exists(`${modID}:stripped_${woodType}_log`)) {
            event.shaped(`2x ${modID}:${woodType}_planks`, [
                '   ',
                '   ',
                ' P '
            ],
                {
                    P: `${modID}:stripped_${woodType}_log`
                })
        }
        //Wood -> Planks
        if (Item.exists(`${modID}:${woodType}_wood`)) {
            event.shaped(`4x ${modID}:${woodType}_planks`, [
                '   ',
                ' T ',
                ' P '
            ],
                {
                    T: '#forge:tools/saws',
                    P: `${modID}:${woodType}_wood`
                })
        }
        if (Item.exists(`${modID}:${woodType}_wood`)) {
            event.shaped(`2x ${modID}:${woodType}_planks`, [
                '   ',
                '   ',
                ' P '
            ],
                {
                    P: `${modID}:${woodType}_wood`
                })
        }
        //Slabs - This makes me want to drop myself down a flight of stairs.
        // I hate this entire file with a burning passion but hey it's better than like 5000 manual recipes...
        if (Item.exists(`${modID}:${woodType}_slab`)) {
            event.remove({ output: `${modID}:${woodType}_slab` })
            event.shaped(`2x ${modID}:${woodType}_slab`, [
                '   ',
                '   ',
                'TP '
            ],
                {
                    T: '#forge:tools/saws',
                    P: `${modID}:${woodType}_planks`
                })
            event.recipes.gtceu.cutter(`${modID}:${woodType}_slab_slicy`)
                .itemInputs(`${modID}:${woodType}_planks`)
                .itemOutputs(`2x ${modID}:${woodType}_slab`)
                .duration(100)
                .EUt(4);
        }
        //Stairs
        if (Item.exists(`${modID}:${woodType}_stairs`)) {
            event.remove({ output: `${modID}:${woodType}_stairs` })
            event.shaped(`4x ${modID}:${woodType}_stairs`, [
                'W  ',
                'WW ',
                'WWW'
            ],
                {
                    W: `${modID}:${woodType}_planks`
                })
            event.recipes.gtceu.assembler(`${modID}:${woodType}_stairs_put_together`)
                .itemInputs(`6x ${modID}:${woodType}_planks`)
                .itemOutputs(`4x ${modID}:${woodType}_stairs`)
                .circuit(7)
                .duration(100)
                .EUt(4);
        }

        //Stripped Wood -> Planks
        if (Item.exists(`${modID}:stripped_${woodType}_wood`)) {
            event.shaped(`4x ${modID}:${woodType}_planks`, [
                '   ',
                ' T ',
                ' P '
            ],
                {
                    T: '#forge:tools/saws',
                    P: `${modID}:stripped_${woodType}_wood`
                })
        }
        if (Item.exists(`${modID}:stripped_${woodType}_wood`)) {
            event.shaped(`2x ${modID}:${woodType}_planks`, [
                '   ',
                '   ',
                ' P '
            ],
                {
                    P: `${modID}:stripped_${woodType}_wood`
                })
        }
        //Door
        if (Item.exists(`${modID}:${woodType}_door`) && !Item.of('integrateddynamics:menril_door')) {
            event.shaped(`2x ${modID}:${woodType}_door`, [
                'PTD',
                'PRS',
                'PPW'
            ],
                {
                    P: `${modID}:${woodType}_planks`,
                    T: `${modID}:${woodType}_trapdoor`,
                    W: `#forge:tools/saws`,
                    S: 'gtceu:iron_screw',
                    R: 'gtceu:iron_ring',
                    D: '#forge:tools/screwdrivers',
                })
            event.recipes.gtceu.assembler(`${modID}:${woodType}_door`)
                .itemInputs([`5x ${modID}:${woodType}_planks`])
                .itemOutputs(`3x ${modID}:${woodType}_door`)
                .inputFluids('gtceu:iron 16')
                .circuit(3)
                .duration(100)
                .EUt(4);
        }
        //MenrilDoorPath
        if (Item.exists(`${modID}:${woodType}_door`) && Item.of('integrateddynamics:menril_door')) {
            event.shaped(`2x ${modID}:${woodType}_door`, [
                'PPD',
                'PRS',
                'PPW'
            ],
                {
                    P: `${modID}:${woodType}_planks`,
                    W: `#forge:tools/saws`,
                    S: 'gtceu:iron_screw',
                    R: 'gtceu:iron_ring',
                    D: '#forge:tools/screwdrivers',
                })
            event.recipes.gtceu.assembler(`${modID}:${woodType}_door`)
                .itemInputs([`4x ${modID}:${woodType}_planks`, `${modID}:${woodType}_trapdoor`])
                .itemOutputs(`3x ${modID}:${woodType}_door`)
                .inputFluids('gtceu:iron 16')
                .circuit(3)
                .duration(100)
                .EUt(4);
        }
        //Trapdoor
        if (Item.exists(`${modID}:${woodType}_trapdoor`)) {
            event.shaped(`2x ${modID}:${woodType}_trapdoor`, [
                '   ',
                'PPP',
                'PPP'
            ],
                {
                    P: `${modID}:${woodType}_slab`
                })
            event.recipes.gtceu.assembler(`${modID}:${woodType}_trapdoor`)
                .itemInputs(`3x ${modID}:${woodType}_slab`)
                .itemOutputs(`3x ${modID}:${woodType}_trapdoor`)
                .circuit(6)
                .duration(100)
                .EUt(4);
        }
        //Sign
        if (Item.exists(`${modID}:${woodType}_sign`)) {
            event.recipes.gtceu.assembler(`${modID}:${woodType}_sign`)
                .itemInputs([`6x ${modID}:${woodType}_planks`, 'minecraft:stick'])
                .itemOutputs(`4x ${modID}:${woodType}_sign`)
                .circuit(3)
                .duration(100)
                .EUt(4);
            event.shaped(`2x ${modID}:${woodType}_sign`, [
                'PPP',
                'PPP',
                'FSW'
            ],
                {
                    P: `${modID}:${woodType}_planks`,
                    W: `#forge:tools/saws`,
                    S: 'minecraft:stick',
                    F: '#forge:tools/files',
                })
        }
        //Sign
        if (Item.exists(`${modID}:${woodType}_hanging_sign`)) {
            event.recipes.gtceu.assembler(`${modID}:${woodType}_hanging_sign`)
                .itemInputs([`6x ${modID}:${woodType}_planks`, 'minecraft:chain'])
                .itemOutputs(`${modID}:${woodType}_hanging_sign`)
                .circuit(4)
                .duration(100)
                .EUt(4);
            event.shaped(`2x ${modID}:${woodType}_hanging_sign`, [
                'SRS',
                'PPP',
                'PPP'
            ],
                {
                    P: `${modID}:${woodType}_planks`,
                    S: 'minecraft:chain',
                    R: 'gtceu:iron_ring'
                })
        }
        //Pressureplate 
        if (Item.exists(`${modID}:${woodType}_pressure_plate`)) {
            event.recipes.gtceu.cutter(`${modID}:${woodType}_pressure_plate`)
                .itemInputs(`${modID}:${woodType}_slab`)
                .itemOutputs(`4x ${modID}:${woodType}_pressure_plate`)
                .duration(100)
                .EUt(4);
            event.shaped(`2x ${modID}:${woodType}_pressure_plate`, [
                '   ',
                ' S ',
                ' P '
            ],
                {
                    P: `${modID}:${woodType}_slab`,
                    S: `#forge:tools/saws`
                })
        }
        //Button 
        if (Item.exists(`${modID}:${woodType}_button`)) {
            event.recipes.gtceu.cutter(`${modID}:${woodType}_button`)
                .itemInputs(`${modID}:${woodType}_pressure_plate`)
                .itemOutputs(`4x ${modID}:${woodType}_button`)
                .duration(100)
                .EUt(4);
            event.shaped(`2x ${modID}:${woodType}_button`, [
                '   ',
                ' S ',
                ' P '
            ],
                {
                    P: `${modID}:${woodType}_pressure_plate`,
                    S: `#forge:tools/saws`
                })
        }
        //
        //BOAT 
        if (Item.exists(`${modID}:${woodType}_boat`)) {
            event.recipes.gtceu.assembler(`${modID}:${woodType}_planks`)
                .itemInputs(`5x ${modID}:${woodType}_planks`)
                .itemOutputs(`4x ${modID}:${woodType}_boat`)
                .duration(100)
                .EUt(4);
            event.shaped(`2x ${modID}:${woodType}_button`, [
                'S S',
                'S S',
                'PPP '
            ],
                {
                    P: `${modID}:${woodType}_planks`,
                    S: `${modID}:${woodType}_slab`,
                    K: `forge:tools/knives`,
                    W: `minecraft:tools/shovels`
                })
        }
        //CHEST-BOAT
        if (Item.exists(`${modID}:${woodType}_chest_boat`)) {
            event.shapeless(`${modID}:${woodType}_chest_boat`, [
                `${modID}:${woodType}_boat`,
                `minecraft:chest`
            ])
        }
        //FENCE
        if (Item.exists(`${modID}:${woodType}_fence`)) {
            event.recipes.gtceu.assembler(`${modID}:${woodType}_fence`)
                .itemInputs(`${modID}:${woodType}_planks`)
                .itemOutputs(`${modID}:${woodType}_fence`)
                .circuit(1)
                .duration(100)
                .EUt(4);
            event.shaped(`${modID}:${woodType}_fence`, [
                'PSP',
                'PSP',
                'PSP'
            ],
                {
                    P: `${modID}:${woodType}_planks`,
                    S: `minecraft:stick`
                })
        }
        //FENCE GATE
        if (Item.exists(`${modID}:${woodType}_fence_gate`)) {
            event.shaped(`2x ${modID}:${woodType}_fence_gate`, [
                'QWQ',
                'SPS',
                'SPS'
            ],
                {
                    P: `${modID}:${woodType}_planks`,
                    S: `minecraft:stick`,
                    W: `#forge:tools/screwdrivers`,
                    Q: `gtceu:iron_screw`
                })
            event.shaped(`2x ${modID}:${woodType}_fence_gate`, [
                'Q Q',
                'SPS',
                'SPS'
            ],
                {
                    P: `${modID}:${woodType}_planks`,
                    S: `minecraft:stick`,
                    Q: `minecraft:flint`
                })
            event.recipes.gtceu.assembler(`${modID}:${woodType}_fence_gate`)
                .itemInputs([`2x ${modID}:${woodType}_planks`, "2x minecraft:stick"])
                .itemOutputs(`${modID}:${woodType}_fence_gate`)
                .circuit(2)
                .duration(100)
                .EUt(4);
        }



        // event.recipes.create.cutting(`6x ${modID}:undead_planks`, `${modID}:undead_stripped_log`).processingTime(50)
    })




    // LMAO ARCHWOOD GOD FUCK

    let archWood = ['ars_nouveau:blue_archwood', 'ars_nouveau:red_archwood', 'ars_nouveau:green_archwood', 'ars_nouveau:purple_archwood']


    archWood.forEach((woodType, index, recipe) => {
        if (Item.exists(`${woodType}_log`)) {
            event.recipes.gtceu.cutter(`${woodType}_cutting`)
                .itemInputs(`${woodType}_log`)
                .itemOutputs([`6x ars_nouveau:archwood_planks`, '2x gtceu:wood_dust'])
                .duration(200)
                .EUt(7);
        }
        if (Item.exists(`stripped_${woodType}_log`)) {
            event.recipes.gtceu.cutter(`stripped_${woodType}_cutting`)
                .itemInputs(`stripped_${woodType}_log`)
                .itemOutputs([`6x ars_nouveau:archwood_planks`, '2x gtceu:wood_dust'])
                .duration(200)
                .EUt(7);
        }
        if (Item.exists(`${woodType}_wood`)) {
            event.recipes.gtceu.cutter(`${woodType}_wood_cutting`)
                .itemInputs(`${woodType}_wood`)
                .itemOutputs([`6x ars_nouveau:archwood_planks`, '2x gtceu:wood_dust'])
                .duration(200)
                .EUt(7);
        }
        if (Item.exists(`stripped_${woodType}_wood`)) {
            event.recipes.gtceu.cutter(`stripped_${woodType}_wood_cutting`)
                .itemInputs(`stripped_${woodType}_wood`)
                .itemOutputs([`6x ars_nouveau:archwood_planks`, '2x gtceu:wood_dust'])
                .duration(200)
                .EUt(7);
        }
        //Log -> Plank
        if (Item.exists(`${woodType}_log`)) {
            event.shaped(`4x ars_nouveau:archwood_planks`, [
                '   ',
                ' T ',
                ' P '
            ],
                {
                    T: '#forge:tools/saws',
                    P: `${woodType}_log`
                })
        }
        if (Item.exists(`${woodType}_log`)) {
            event.shaped(`2x ars_nouveau:archwood_planks`, [
                '   ',
                '   ',
                ' P '
            ],
                {
                    P: `ars_nouveau:archwood_log`
                })
        }
        //Stripped log -> planks
        if (Item.exists(`stripped_${woodType}_log`)) {
            event.shaped(`4x ars_nouveau:archwood_planks`, [
                '   ',
                ' T ',
                ' P '
            ],
                {
                    T: '#forge:tools/saws',
                    P: `stripped_${woodType}_log`
                })
        }
        if (Item.exists(`stripped_${woodType}_log`)) {
            event.shaped(`2x ars_nouveau:archwood_planks`, [
                '   ',
                '   ',
                ' P '
            ],
                {
                    P: `stripped_${woodType}_log`
                })
        }
        //Wood -> Planks
        if (Item.exists(`${woodType}_wood`)) {
            event.shaped(`4x ars_nouveau:archwood_planks`, [
                '   ',
                ' T ',
                ' P '
            ],
                {
                    T: '#forge:tools/saws',
                    P: `${woodType}_wood`
                })
        }
        if (Item.exists(`${woodType}_wood`)) {
            event.shaped(`2x ars_nouveau:archwood_planks`, [
                '   ',
                '   ',
                ' P '
            ],
                {
                    P: `${woodType}_wood`
                })
        }
        //Stripped Wood -> Planks
        if (Item.exists(`stripped_${woodType}_wood`)) {
            event.shaped(`4x ars_nouveau:archwood_planks`, [
                '   ',
                ' T ',
                ' P '
            ],
                {
                    T: '#forge:tools/saws',
                    P: `stripped_${woodType}_wood`
                })
        }
        if (Item.exists(`stripped_${woodType}_wood`)) {
            event.shaped(`2x ars_nouveau:archwood_planks`, [
                '   ',
                '   ',
                ' P '
            ],
                {
                    P: `stripped_${woodType}_wood`
                })
        }


        // event.recipes.create.cutting(`6x ${modID}:undead_planks`, `${modID}:undead_stripped_log`).processingTime(50)
    })
})
ServerEvents.recipes(event => {
    //Door
    if (Item.exists(`ars_nouveau:archwood_door`)) {
        event.shaped(`2x ars_nouveau:archwood_door`, [
            'PTD',
            'PRS',
            'PPW'
        ],
            {
                P: `ars_nouveau:archwood_planks`,
                T: `ars_nouveau:archwood_trapdoor`,
                W: `#forge:tools/saws`,
                S: 'gtceu:iron_screw',
                R: 'gtceu:iron_ring',
                D: '#forge:tools/screwdrivers',
            })
        event.recipes.gtceu.assembler(`ars_nouveau:archwood_door`)
            .itemInputs([`5x ars_nouveau:archwood_planks`, `1x ars_nouveau:archwood_trapdoor`])
            .itemOutputs(`3x ars_nouveau:archwood_door`)
            .inputFluids('gtceu:iron 16')
            .circuit(3)
            .duration(100)
            .EUt(4);
    }
    //Trapdoor
    if (Item.exists(`ars_nouveau:archwood_trapdoor`)) {
        event.shaped(`2x ars_nouveau:archwood_trapdoor`, [
            '   ',
            'PPP',
            'PPP'
        ],
            {
                P: `ars_nouveau:archwood_slab`
            })
        event.recipes.gtceu.assembler(`ars_nouveau:archwood_trapdoor`)
            .itemInputs(`3x ars_nouveau:archwood_slab`)
            .itemOutputs(`3x ars_nouveau:archwood_trapdoor`)
            .circuit(6)
            .duration(100)
            .EUt(4);
    }
    //Sign
    if (Item.exists(`ars_nouveau:archwood_sign`)) {
        event.recipes.gtceu.assembler(`ars_nouveau:archwood_sign`)
            .itemInputs([`6x ars_nouveau:archwood_planks`, 'minecraft:stick'])
            .itemOutputs(`4x ars_nouveau:archwood_sign`)
            .circuit(3)
            .duration(100)
            .EUt(4);
        event.shaped(`2x ars_nouveau:archwood_sign`, [
            'PPP',
            'PPP',
            'FSW'
        ],
            {
                P: `ars_nouveau:archwood_planks`,
                W: `#forge:tools/saws`,
                S: 'minecraft:stick',
                F: '#forge:tools/files',
            })
    }
    //Sign
    if (Item.exists(`ars_nouveau:archwood_hanging_sign`)) {
        event.recipes.gtceu.assembler(`ars_nouveau:archwood_hanging_sign`)
            .itemInputs([`6x ars_nouveau:archwood_planks`, 'minecraft:chain'])
            .itemOutputs(`ars_nouveau:archwood_hanging_sign`)
            .circuit(4)
            .duration(100)
            .EUt(4);
        event.shaped(`2x ars_nouveau:archwood_hanging_sign`, [
            'SRS',
            'PPP',
            'PPP'
        ],
            {
                P: `ars_nouveau:archwood_planks`,
                S: 'minecraft:chain',
                R: 'gtceu:iron_ring'
            })
    }
    //Pressureplate 
    if (Item.exists(`ars_nouveau:archwood_pressure_plate`)) {
        event.recipes.gtceu.cutter(`ars_nouveau:archwood_pressure_plate`)
            .itemInputs(`ars_nouveau:archwood_slab`)
            .itemOutputs(`4x ars_nouveau:archwood_pressure_plate`)
            .duration(100)
            .EUt(4);
        event.shaped(`2x ars_nouveau:archwood_pressure_plate`, [
            '   ',
            ' S ',
            ' P '
        ],
            {
                P: `ars_nouveau:archwood_slab`,
                S: `#forge:tools/saws`
            })
    }
    //Button 
    if (Item.exists(`ars_nouveau:archwood_button`)) {
        event.recipes.gtceu.cutter(`ars_nouveau:archwood_button`)
            .itemInputs(`ars_nouveau:archwood_pressure_plate`)
            .itemOutputs(`4x ars_nouveau:archwood_button`)
            .duration(100)
            .EUt(4);
        event.shaped(`2x ars_nouveau:archwood_button`, [
            '   ',
            ' S ',
            ' P '
        ],
            {
                P: `ars_nouveau:archwood_pressure_plate`,
                S: `#forge:tools/saws`
            })
    }
    //BOAT 
    if (Item.exists(`ars_nouveau:archwood_boat`)) {
        event.recipes.gtceu.assembler(`ars_nouveau:archwood_planks`)
            .itemInputs(`5x ars_nouveau:archwood_planks`)
            .itemOutputs(`4x ars_nouveau:archwood_boat`)
            .duration(100)
            .EUt(4);
        event.shaped(`2x ars_nouveau:archwood_button`, [
            'S S',
            'S S',
            'PPP '
        ],
            {
                P: `ars_nouveau:archwood_planks`,
                S: `ars_nouveau:archwood_slab`,
                K: `forge:tools/knives`,
                W: `minecraft:tools/shovels`
            })
    }
    //CHEST-BOAT
    if (Item.exists(`ars_nouveau:archwood_chest_boat`)) {
        event.shapeless(`ars_nouveau:archwood_chest_boat`, [
            `ars_nouveau:archwood_boat`,
            `minecraft:chest`
        ])
    }
    //FENCE
    if (Item.exists(`ars_nouveau:archwood_fence`)) {
        event.recipes.gtceu.assembler(`ars_nouveau:archwood_fence`)
            .itemInputs(`ars_nouveau:archwood_planks`)
            .itemOutputs(`ars_nouveau:archwood_fence`)
            .circuit(1)
            .duration(100)
            .EUt(4);
        event.shaped(`ars_nouveau:archwood_fence`, [
            'PSP',
            'PSP',
            'PSP'
        ],
            {
                P: `ars_nouveau:archwood_planks`,
                S: `minecraft:stick`
            })
    }
    //FENCEGATE
    if (Item.exists(`ars_nouveau:archwood_fence_gate`)) {
        event.shaped(`2x ars_nouveau:archwood_fence_gate`, [
            'QWQ',
            'SPS',
            'SPS'
        ],
            {
                P: `ars_nouveau:archwood_planks`,
                S: `minecraft:stick`,
                W: `#forge:tools/screwdrivers`,
                Q: `gtceu:iron_screw`
            })
        event.shaped(`2x ars_nouveau:archwood_fence_gate`, [
            'Q Q',
            'SPS',
            'SPS'
        ],
            {
                P: `ars_nouveau:archwood_planks`,
                S: `minecraft:stick`,
                Q: `minecraft:flint`
            })
        event.recipes.gtceu.assembler(`ars_nouveau:archwood_fence_gate`)
            .itemInputs([`2x ars_nouveau:archwood_planks`, "2x minecraft:stick"])
            .itemOutputs(`ars_nouveau:archwood_fence_gate`)
            .circuit(2)
            .duration(100)
            .EUt(4);
        event.recipes.gtceu.macerator(`archwood_pulping`)
            .itemInputs(`ars_nouveau:archwood_planks`)
            .itemOutputs('gtceu:wood_dust')
            .duration(100)
            .EUt(2);
        event.remove({ output: 'framedblocks:framed_chest' })
        event.shaped('framedblocks:framed_chest', [
            'LFL',
            'FSF',
            'LFL'
        ], {
            L: '#minecraft:logs',
            F: 'framedblocks:framed_cube',
            S: 'minecraft:flint'
        })
    }

    // Farmer's Delight Signs
    if (Item.exists(`ars_nouveau:archwood_sign`)) {
        event.recipes.gtceu.assembler(`ars_nouveau:archwood_sign`)
            .itemInputs([`6x ars_nouveau:archwood_planks`, 'minecraft:stick'])
            .itemOutputs(`4x ars_nouveau:archwood_sign`)
            .circuit(3)
            .duration(100)
            .EUt(4);
        event.shaped(`2x ars_nouveau:archwood_sign`, [
                'PPP',
                'PPP',
                'FSW'
            ],
            {
                P: `ars_nouveau:archwood_planks`,
                W: `#forge:tools/saws`,
                S: 'minecraft:stick',
                F: '#forge:tools/files',
            })
    }

    //Farm's Delight Signs
    event.recipes.gtceu.assembler(`farmersdelight:hanging_canvas_sign`)
        .itemInputs(['4x #minecraft:planks', '2x farmersdelight:canvas', 'minecraft:chain'])
        .itemOutputs(`2x farmersdelight:hanging_canvas_sign`)
        .circuit(4)
        .duration(100)
        .EUt(4);
    event.shaped(`2x farmersdelight:hanging_canvas_sign`, [
            'SRS',
            'PCP',
            'PCP'
        ],
        {
            P: `#minecraft:planks`,
            S: 'minecraft:chain',
            R: 'gtceu:iron_ring',
            C: 'farmersdelight:canvas'
        });

    event.recipes.gtceu.assembler(`farmersdelight:canvas_sign`)
        .itemInputs([`4x #minecraft:planks`, '2x farmersdelight:canvas', 'minecraft:stick'])
        .itemOutputs(`4x farmersdelight:canvas_sign`)
        .circuit(3)
        .duration(100)
        .EUt(4);

    event.shaped(`2x farmersdelight:canvas_sign`, [
            'PCP',
            'PCP',
            'FSW'
        ],
        {
            P: `#minecraft:planks`,
            W: `#forge:tools/saws`,
            S: 'minecraft:stick',
            F: '#forge:tools/files',
            C: 'farmersdelight:canvas'
        });

    ['white', 'light_gray', 'gray', 'black', 'brown', 'red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'light_blue', 'blue', 'purple', 'magenta', 'pink'].forEach((color) => {
        event.shapeless(`farmersdelight:${color}_canvas_sign`,
            [`minecraft:${color}_dye`, 'farmersdelight:canvas_sign']
        );
        event.shapeless(`farmersdelight:${color}_hanging_canvas_sign`,
            [`minecraft:${color}_dye`, 'farmersdelight:hanging_canvas_sign']
        )
        event.recipes.gtceu.assembler(`farmersdelight:${color}_canvas_sign`)
            .itemInputs(['farmersdelight:canvas_sign', `minecraft:${color}_dye`])
            .itemOutputs(`farmersdelight:${color}_canvas_sign`)
            .duration(100)
            .EUt(4);
        event.recipes.gtceu.assembler(`farmersdelight:${color}_hanging_canvas_sign`)
            .itemInputs(['farmersdelight:hanging_canvas_sign', `minecraft:${color}_dye`])
            .itemOutputs(`farmersdelight:${color}_hanging_canvas_sign`)
            .duration(100)
            .EUt(4);
    });

})