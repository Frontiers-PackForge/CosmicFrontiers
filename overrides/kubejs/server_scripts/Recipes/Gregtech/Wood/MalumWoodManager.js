ServerEvents.recipes(event => {
    //We'll consider all special blocks to use the default planks, i cbfa to deal with this more rn.
    new WoodMalum('malum', 'soulwood_planks', event).all();
    new WoodMalum('malum', 'runewood_planks', event).all();


    new WoodMalum('malum', 'runewood_panel', event)
        .slab()
        .stairs();
    new WoodMalum('malum', 'runewood_beam', event)
        .slab()
        .stairs();
    new WoodMalum('malum', 'rustic_runewood_tiles', event)
        .slab()
        .stairs();
    new WoodMalum('malum', 'runewood_tiles', event)
        .slab()
        .stairs();
    new WoodMalum('malum', 'vertical_runewood_boards', event)
        .slab()
        .stairs();
    new WoodMalum('malum', 'runewood_boards', event)
        .slab()
        .stairs();
    new WoodMalum('malum', 'vertical_rustic_runewood_planks', event)
        .slab()
        .stairs();
    new WoodMalum('malum', 'rustic_runewood_planks', event)
        .slab()
        .stairs();
    new WoodMalum('malum', 'vertical_runewood_planks', event)
        .slab()
        .stairs();
    new WoodMalum('malum', 'cut_runewood_planks', event)
        .slab()
        .stairs();


    //Need precise allocations
    new WoodMalum('malum', 'soulwood_panel', event)
        .slab()
        .stairs();
    new WoodMalum('malum', 'soulwood_beam', event)
        .slab()
        .stairs();
    new WoodMalum('malum', 'rustic_soulwood_tiles', event)
        .slab()
        .stairs();
    new WoodMalum('malum', 'soulwood_tiles', event)
        .slab()
        .stairs();
    new WoodMalum('malum', 'vertical_soulwood_boards', event)
        .slab()
        .stairs();
    new WoodMalum('malum', 'soulwood_boards', event)
        .slab()
        .stairs();
    new WoodMalum('malum', 'vertical_rustic_soulwood_planks', event)
        .slab()
        .stairs();
    new WoodMalum('malum', 'rustic_soulwood_planks', event)
        .slab()
        .stairs();
    new WoodMalum('malum', 'vertical_soulwood_planks', event)
        .slab()
        .stairs();
    new WoodMalum('malum', 'cut_soulwood_planks', event)
        .slab()
        .stairs();

    //Handle All WoodMalum/Logs into default soulwood planks
    event.remove({ output: 'malum:soulwood_planks' })
    event.shapeless(`2x malum:soulwood_planks`, [
        '#malum:soulwood_logs'
    ])
    event.recipes.gtceu.cutter(`cosmicfrontiers:malum/stupid_malum_wood_cutting`)
        .itemInputs('#malum:soulwood_logs')
        .itemOutputs([`6x malum:soulwood_planks`, '2x gtceu:wood_dust'])
        .duration(200)
        .EUt(7);
    event.shaped(`4x malum:soulwood_planks`, [
        '   ',
        ' T ',
        ' P '
    ],
        {
            T: '#forge:tools/saws',
            P: '#malum:soulwood_logs'
        })
    //Now Runewood
    event.remove({ output: 'malum:runewood_planks' })
    event.shapeless(`2x malum:runewood_planks`, [
        '#malum:runewood_logs'
    ])
    event.recipes.gtceu.cutter(`cosmicfrontiers:malum/stupid_malum_wood_cutting_2`)
        .itemInputs('#malum:runewood_logs')
        .itemOutputs([`6x malum:runewood_planks`, '2x gtceu:wood_dust'])
        .duration(200)
        .EUt(7);
    event.shaped(`4x malum:runewood_planks`, [
        '   ',
        ' T ',
        ' P '
    ],
        {
            T: '#forge:tools/saws',
            P: '#malum:runewood_logs'
        })

})




function WoodMalum(modID, wood, event) {
    this.modID = modID;
    this.woodType = wood;
    this.event = event;
    return this;
}

WoodMalum.prototype = {

    planks: function () {
        const { modID, woodType, event } = this
        //Log -> Plank
        if (Item.exists(`${modID}:${woodType}`)) {
            event.remove({ output: `${modID}:${woodType}` })
            event.recipes.gtceu.cutter(`cosmicfrontiers:${modID}/${woodType}_cutting`)
                .itemInputs(`${modID}:${woodType}`)
                .itemOutputs([`6x ${modID}:${woodType}`, '2x gtceu:wood_dust'])
                .duration(200)
                .EUt(7);
            event.shaped(`4x ${modID}:${woodType}`, [
                '   ',
                ' T ',
                ' P '
            ],
                {
                    T: '#forge:tools/saws',
                    P: `${modID}:${woodType}`
                })
            event.shaped(`2x ${modID}:${woodType}`, [
                '   ',
                '   ',
                ' P '
            ],
                {
                    P: `${modID}:${woodType}`
                })
        }
        //Stripped Log -> Plank
        if (Item.exists(`${modID}:stripped_${woodType}`)) {
            event.recipes.gtceu.cutter(`cosmicfrontiers:${modID}/stripped_${woodType}_cutting`)
                .itemInputs(`${modID}:stripped_${woodType}`)
                .itemOutputs([`6x ${modID}:${woodType}`, '2x gtceu:wood_dust'])
                .duration(200)
                .EUt(7);
            event.shaped(`4x ${modID}:${woodType}`, [
                '   ',
                ' T ',
                ' P '
            ],
                {
                    T: '#forge:tools/saws',
                    P: `${modID}:stripped_${woodType}`
                })
            event.shaped(`2x ${modID}:${woodType}`, [
                '   ',
                '   ',
                ' P '
            ],
                {
                    P: `${modID}:stripped_${woodType}`
                })
        }
        //WoodMalum -> Plank
        if (Item.exists(`${modID}:${woodType}`)) {
            event.recipes.gtceu.cutter(`cosmicfrontiers:${modID}/${woodType}_cutting`)
                .itemInputs(`${modID}:${woodType}`)
                .itemOutputs([`6x ${modID}:${woodType}`, '2x gtceu:wood_dust'])
                .duration(200)
                .EUt(7);
            event.shaped(`4x ${modID}:${woodType}`, [
                '   ',
                ' T ',
                ' P '
            ],
                {
                    T: '#forge:tools/saws',
                    P: `${modID}:${woodType}`
                })
            event.shaped(`2x ${modID}:${woodType}`, [
                '   ',
                '   ',
                ' P '
            ],
                {
                    P: `${modID}:${woodType}`
                })
        }
        //Stripped WoodMalum -> plank
        if (Item.exists(`${modID}:stripped_${woodType}`)) {
            event.recipes.gtceu.cutter(`cosmicfrontiers:${modID}/stripped_${woodType}_cutting`)
                .itemInputs(`${modID}:stripped_${woodType}`)
                .itemOutputs([`6x ${modID}:${woodType}`, '2x gtceu:wood_dust'])
                .duration(200)
                .EUt(7);
            event.shaped(`4x ${modID}:${woodType}`, [
                '   ',
                ' T ',
                ' P '
            ],
                {
                    T: '#forge:tools/saws',
                    P: `${modID}:stripped_${woodType}`
                })
            event.shaped(`2x ${modID}:${woodType}`, [
                '   ',
                '   ',
                ' P '
            ],
                {
                    P: `${modID}:stripped_${woodType}`
                })
        }
        return this;
    },
    stairs: function () {
        const { modID, woodType, event } = this
        if (Item.exists(`${modID}:${woodType}_stairs`)) {
            event.remove({ output: `${modID}:${woodType}_stairs` })
            event.shaped(`4x ${modID}:${woodType}_stairs`, [
                'W  ',
                'WW ',
                'WWW'
            ],
                {
                    W: `${modID}:${woodType}`
                })
            event.recipes.gtceu.assembler(`cosmicfrontiers:${modID}/${woodType}_stairs`)
                .itemInputs(`6x ${modID}:${woodType}`)
                .itemOutputs(`4x ${modID}:${woodType}_stairs`)
                .circuit(7)
                .duration(100)
                .EUt(4);
        }
        return this;
    },
    slab: function () {
        const { modID, woodType, event } = this
        if (Item.exists(`${modID}:${woodType}_slab`)) {
            event.remove({ output: `${modID}:${woodType}_slab` })
            event.shaped(`2x ${modID}:${woodType}_slab`, [
                '   ',
                '   ',
                'TP '
            ],
                {
                    T: '#forge:tools/saws',
                    P: `${modID}:${woodType}`
                })
            event.recipes.gtceu.cutter(`cosmicfrontiers:${modID}/${woodType}_slab_cutting`)
                .itemInputs(`${modID}:${woodType}`)
                .itemOutputs(`2x ${modID}:${woodType}_slab`)
                .duration(100)
                .EUt(4);
        }
        return this;
    },
    door: function () {
        const { modID, woodType, event } = this
        if (Item.exists(`${modID}:${woodType}_door`)) {
            event.remove({ output: `${modID}:${woodType}_door` })
            event.shaped(`2x ${modID}:${woodType}_door`, [
                'PTD',
                'PRS',
                'PPW'
            ],
                {
                    P: `${modID}:${woodType}`,
                    T: `${modID}:${woodType}_trapdoor`,
                    W: `#forge:tools/saws`,
                    S: 'gtceu:iron_screw',
                    R: 'gtceu:iron_ring',
                    D: '#forge:tools/screwdrivers',
                })
            event.recipes.gtceu.assembler(`cosmicfrontiers:${modID}/${woodType}_door`)
                .itemInputs([`5x ${modID}:${woodType}`])
                .itemOutputs(`3x ${modID}:${woodType}_door`)
                .inputFluids('gtceu:iron 16')
                .circuit(3)
                .duration(100)
                .EUt(4);
        }
        return this;
    },
    trapdoor: function () {
        const { modID, woodType, event } = this
        if (Item.exists(`${modID}:${woodType}_trapdoor`)) {
            event.remove({ output: `${modID}:${woodType}_trapdoor` })
            event.shaped(`2x ${modID}:${woodType}_trapdoor`, [
                '   ',
                'PPP',
                'PPP'
            ],
                {
                    P: `${modID}:${woodType}_slab`
                })
            event.recipes.gtceu.assembler(`cosmicfrontiers:${modID}/${woodType}_trapdoor`)
                .itemInputs(`3x ${modID}:${woodType}_slab`)
                .itemOutputs(`3x ${modID}:${woodType}_trapdoor`)
                .circuit(6)
                .duration(100)
                .EUt(4);
        }
        return this;
    },
    signs: function () {
        const { modID, woodType, event } = this
        if (Item.exists(`${modID}:${woodType}_sign`)) {
            event.remove({ output: `${modID}:${woodType}_sign` })
            event.recipes.gtceu.assembler(`cosmicfrontiers:${modID}/${woodType}_sign`)
                .itemInputs([`6x ${modID}:${woodType}`, 'minecraft:stick'])
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
                    P: `${modID}:${woodType}`,
                    W: `#forge:tools/saws`,
                    S: 'minecraft:stick',
                    F: '#forge:tools/files',
                })
        }
        //hanging
        if (Item.exists(`${modID}:${woodType}_hanging_sign`)) {
            event.remove({ output: `${modID}:${woodType}_hanging_sign` })
            event.recipes.gtceu.assembler(`cosmicfrontiers:${modID}/${woodType}_hanging_sign`)
                .itemInputs([`6x ${modID}:${woodType}`, 'minecraft:chain'])
                .itemOutputs(`4x ${modID}:${woodType}_hanging_sign`)
                .circuit(4)
                .duration(100)
                .EUt(4);
            event.shaped(`2x ${modID}:${woodType}_hanging_sign`, [
                'SRS',
                'PPP',
                'PPP'
            ],
                {
                    P: `${modID}:${woodType}`,
                    S: 'minecraft:chain',
                    R: 'gtceu:iron_ring'
                })
        }
        return this;
    },
    fences: function () {
        const { modID, woodType, event } = this
        //Fence
        if (Item.exists(`${modID}:${woodType}_fence`)) {
            event.remove({ output: `${modID}:${woodType}_fence` })
            event.recipes.gtceu.assembler(`cosmicfrontiers:${modID}/${woodType}_fence`)
                .itemInputs(`${modID}:${woodType}`)
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
                    P: `${modID}:${woodType}`,
                    S: `minecraft:stick`
                })
        }
        //Fence Gate
        if (Item.exists(`${modID}:${woodType}_fence_gate`)) {
            event.remove({ output: `${modID}:${woodType}_fence_gate` })
            event.shaped(`2x ${modID}:${woodType}_fence_gate`, [
                'QWQ',
                'SPS',
                'SPS'
            ],
                {
                    P: `${modID}:${woodType}`,
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
                    P: `${modID}:${woodType}`,
                    S: `minecraft:stick`,
                    Q: `minecraft:flint`
                })
            event.recipes.gtceu.assembler(`cosmicfrontiers:${modID}/${woodType}_fence_gate`)
                .itemInputs([`2x ${modID}:${woodType}`, "2x minecraft:stick"])
                .itemOutputs(`${modID}:${woodType}_fence_gate`)
                .circuit(2)
                .duration(100)
                .EUt(4);
        }
        return this;
    },
    pressurePlate: function () {
        const { modID, woodType, event } = this
        if (Item.exists(`${modID}:${woodType}_pressure_plate`)) {
            event.remove({ output: `${modID}:${woodType}_pressure_plate` })
            event.recipes.gtceu.cutter(`cosmicfrontiers:${modID}/${woodType}_pressure_plate`)
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
        return this;
    },
    button: function () {
        const { modID, woodType, event } = this
        if (Item.exists(`${modID}:${woodType}_button`)) {
            event.remove({ output: `${modID}:${woodType}_button` })
            event.recipes.gtceu.cutter(`cosmicfrontiers:${modID}/${woodType}_button`)
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
        return this;
    },
    boats: function () {
        const { modID, woodType, event } = this
        //BOAT 
        if (Item.exists(`${modID}:${woodType}_boat`)) {
            event.remove({ output: `${modID}:${woodType}_boat` })
            event.recipes.gtceu.assembler(`cosmicfrontiers:${modID}/${woodType}`)
                .itemInputs(`5x ${modID}:${woodType}`)
                .circuit(15)
                .itemOutputs(`4x ${modID}:${woodType}_boat`)
                .duration(100)
                .EUt(4);
            event.shaped(`${modID}:${woodType}_boat`, [
                'SWS',
                'SKS',
                'PPP'
            ],
                {
                    P: `${modID}:${woodType}`,
                    S: `${modID}:${woodType}_slab`,
                    K: `#forge:tools/knives`,
                    W: '#forge:tools/shovels'
                })
        }
        //CHEST-BOAT
        if (Item.exists(`${modID}:${woodType}_chest_boat`)) {
            event.remove({ output: `${modID}:${woodType}_chest_boat` })
            event.shapeless(`${modID}:${woodType}_chest_boat`, [
                `${modID}:${woodType}_boat`,
                `minecraft:chest`
            ])
        }
        return this;
    },
    all: function () {
        this.slab()
        this.stairs()
        this.door()
        this.trapdoor()
        this.fences()
        this.signs()
        this.pressurePlate()
        this.button()
        this.boats()
    }
}






