ServerEvents.recipes(event => {

    //Big Nuking of Recipes Section
    //Wooden Parts, Planks/Wood/Logs will need special treatment - that or i'm just too stupid with regex to figure it out quite yet. ~G
    //IDEALLY We'd like to regex by recipe ID here, might need to unskill issue my JS skills for that though... OR JUST UNDERSTAND THIS BETTER WAAAAH

    //remove Trapdoors/Doors
    event.remove({ id: /^(?!gtceu:)([^:]+):(.*)door$/ })
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

    //DANGEROUS : WOOD PLANK REMOVALS - BY RECIPE - if something is broken attempt to check it against this matcher first
    event.remove({ id: /^(?!gtceu:)([^:]+):(.*)_planks$/ })
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
        //Phantasm
        'pream', //index 24
        //architect pallets
        'twisted', //index 25

    ]

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
            modID = 'phantasm'
        } else if (index === 25) {
            modID = 'architects_palette'
        }

        event.recipes.gtceu.cutter(`${modID}:${woodType}_cutting`)
            .itemInputs(`${modID}:${woodType}_log`)
            .itemOutputs([`6x ${modID}:${woodType}_planks`, '2x gtceu:wood_dust'])
            .duration(200)
            .EUt(7);
        event.recipes.gtceu.cutter(`${modID}:stripped_${woodType}_cutting`)
            .itemInputs(`${modID}:stripped_${woodType}_log`)
            .itemOutputs([`6x ${modID}:${woodType}_planks`, '2x gtceu:wood_dust'])
            .duration(200)
            .EUt(7);
        //Log -> Plank
        event.shaped(`4x ${modID}:${woodType}_planks`, [
            '   ',
            ' T ',
            ' P '
        ],
            {
                T: '#forge:tools/saws',
                P: `${modID}:${woodType}_log`
            })
        event.shaped(`2x ${modID}:${woodType}_planks`, [
            '   ',
            '   ',
            ' P '
        ],
            {
                P: `${modID}:${woodType}_log`
            })
        //Stripped log -> planks
        event.shaped(`4x ${modID}:${woodType}_planks`, [
            '   ',
            ' T ',
            ' P '
        ],
            {
                T: '#forge:tools/saws',
                P: `${modID}:stripped_${woodType}_log`
            })
        event.shaped(`2x ${modID}:${woodType}_planks`, [
            '   ',
            '   ',
            ' P '
        ],
            {
                P: `${modID}:stripped_${woodType}_log`
            })
        //Wood -> Planks
        event.shaped(`4x ${modID}:${woodType}_planks`, [
            '   ',
            ' T ',
            ' P '
        ],
            {
                T: '#forge:tools/saws',
                P: `${modID}:${woodType}_wood`
            })
        event.shaped(`2x ${modID}:${woodType}_planks`, [
            '   ',
            '   ',
            ' P '
        ],
            {
                P: `${modID}:${woodType}_wood`
            })
        //Stripped Wood -> Planks
        event.shaped(`4x ${modID}:${woodType}_planks`, [
            '   ',
            ' T ',
            ' P '
        ],
            {
                T: '#forge:tools/saws',
                P: `${modID}:stripped_${woodType}_wood`
            })
        event.shaped(`2x ${modID}:${woodType}_planks`, [
            '   ',
            '   ',
            ' P '
        ],
            {
                P: `${modID}:stripped_${woodType}_wood`
            })
        //Door
        if (Item.exists(`${modID}:${woodType}_door`)) {
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
                .circuit(3)
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



        // event.recipes.create.cutting(`6x ${modID}:undead_planks`, `${modID}:undead_stripped_log`).processingTime(50)
    })
})