ServerEvents.recipes(event => {
    new Wood('biomesoplenty', 'maple', event).all();
    new Wood('biomesoplenty', 'fir', event).all();
    new Wood('biomesoplenty', 'redwood', event).all();
    new Wood('biomesoplenty', 'mahogany', event).all();
    new Wood('biomesoplenty', 'jacaranda', event).all();
    new Wood('biomesoplenty', 'palm', event).all();
    new Wood('biomesoplenty', 'willow', event).all();
    new Wood('biomesoplenty', 'dead', event).all();
    new Wood('biomesoplenty', 'magic', event).all();
    new Wood('biomesoplenty', 'umbran', event).all();
    new Wood('biomesoplenty', 'hellbark', event).all();
    new Wood('biomesoplenty', 'pine', event).all();
    new Wood('biomesoplenty', 'empyreal', event).all();
    //Undergarden
    new Wood('undergarden', 'grongle', event).all();
    new Wood('undergarden', 'wigglewood', event).all();
    new Wood('undergarden', 'smogstem', event).all();
    //Ad Astra
    new Wood('ad_astra', 'glacian', event).all();
    new Wood('ad_astra', 'strophar', event).all();
    new Wood('ad_astra', 'aeronos', event).all();
    //Aether
    new Wood('aether', 'skyroot', event).all();
    //GTCEU
    new Wood('gtceu', 'rubber', event).all();
    //BWG
    new Wood('biomeswevegone', 'aspen', event).all();
    new Wood('biomeswevegone', 'baobab', event).all();
    new Wood('biomeswevegone', 'blue_enchanted', event).all();
    new Wood('biomeswevegone', 'cika', event).all();
    new Wood('biomeswevegone', 'cypress', event).all();
    new Wood('biomeswevegone', 'ebony', event).all();
    new Wood('biomeswevegone', 'fir', event).all();
    new Wood('biomeswevegone', 'florus', event).all();
    new Wood('biomeswevegone', 'green_enchanted', event).all();
    new Wood('biomeswevegone', 'holly', event).all();
    new Wood('biomeswevegone', 'ironwood', event).all();
    new Wood('biomeswevegone', 'jacaranda', event).all();
    new Wood('biomeswevegone', 'mahogany', event).all();
    new Wood('biomeswevegone', 'maple', event).all();
    new Wood('biomeswevegone', 'palm', event).all();
    new Wood('biomeswevegone', 'pine', event).all();
    new Wood('biomeswevegone', 'rainbow_eucalyptus', event).all();
    new Wood('biomeswevegone', 'redwood', event).all();
    new Wood('biomeswevegone', 'sakura', event).all();
    new Wood('biomeswevegone', 'skyris', event).all();
    new Wood('biomeswevegone', 'white_mangrove', event).all();
    new Wood('biomeswevegone', 'willow', event).all();
    new Wood('biomeswevegone', 'witch_hazel', event).all();
    new Wood('biomeswevegone', 'zelkova', event).all();
    //Botania is a neat mod by neat by neat by neat neat neat vazki neat botania
    new Wood('botania', 'livingwood', event).all();
    //Arch. Pallet
    new Wood('architects_palette', 'warped', event).all();
    //Int Dynamics
    new Wood('integrateddynamics', 'menril', event)
        .planks()
        .slab()
        .stairs()
        .fences()
        .signs()
        .pressurePlate()
        .button()
        .boats();

        //Manual Recipes (For Edgecases) 

        //Menril Trapdoors... Do not exist?
        event.remove({id : 'integrateddynamics:crafting/menril_door'})
        event.shaped(`2x integrateddynamics:menril_door`, [
            'PTD',
            'PRS',
            'PPW'
        ],
            {
                P: `integrateddynamics:menril_planks`,
                T: `integrateddynamics:menril_slab`,
                W: `#forge:tools/saws`,
                S: 'gtceu:iron_screw',
                R: 'gtceu:iron_ring',
                D: '#forge:tools/screwdrivers',
            })
        event.recipes.gtceu.assembler(`cosmicfrontiers:integrateddynamics/menril_door`)
            .itemInputs([`5x integrateddynamics:menril_planks`])
            .itemOutputs(`3x integrateddynamics:menril_door`)
            .inputFluids('gtceu:iron 16')
            .circuit(3)
            .duration(100)
            .EUt(4);
        //Oh boy, malum.. might just need to make a dedicated one for Malum
})




function Wood(modID, wood, event) {
    this.modID = modID;
    this.woodType = wood;
    this.event = event;
    return this;
}

Wood.prototype = {

    planks: function () {
        const { modID, woodType, event } = this
        //Log -> Plank
        if (Item.exists(`${modID}:${woodType}_log`)) {
            event.remove({ output: `${modID}:${woodType}_planks` })
            event.recipes.gtceu.cutter(`cosmicfrontiers:${modID}/${woodType}_cutting`)
                .itemInputs(`${modID}:${woodType}_log`)
                .itemOutputs([`6x ${modID}:${woodType}_planks`, '2x gtceu:wood_dust'])
                .duration(200)
                .EUt(7);
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
        }
        //Stripped Log -> Plank
        if (Item.exists(`${modID}:stripped_${woodType}_log`)) {
            event.recipes.gtceu.cutter(`cosmicfrontiers:${modID}/stripped_${woodType}_cutting`)
                .itemInputs(`${modID}:stripped_${woodType}_log`)
                .itemOutputs([`6x ${modID}:${woodType}_planks`, '2x gtceu:wood_dust'])
                .duration(200)
                .EUt(7);
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
        }
        //Wood -> Plank
        if (Item.exists(`${modID}:${woodType}_wood`)) {
            event.recipes.gtceu.cutter(`cosmicfrontiers:${modID}/${woodType}_wood_cutting`)
                .itemInputs(`${modID}:${woodType}_wood`)
                .itemOutputs([`6x ${modID}:${woodType}_planks`, '2x gtceu:wood_dust'])
                .duration(200)
                .EUt(7);
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
        }
        //Stripped Wood -> plank
        if (Item.exists(`${modID}:stripped_${woodType}_wood`)) {
            event.recipes.gtceu.cutter(`cosmicfrontiers:${modID}/stripped_${woodType}_wood_cutting`)
                .itemInputs(`${modID}:stripped_${woodType}_wood`)
                .itemOutputs([`6x ${modID}:${woodType}_planks`, '2x gtceu:wood_dust'])
                .duration(200)
                .EUt(7);
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
                    W: `${modID}:${woodType}_planks`
                })
            event.recipes.gtceu.assembler(`cosmicfrontiers:${modID}/${woodType}_stairs`)
                .itemInputs(`6x ${modID}:${woodType}_planks`)
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
                    P: `${modID}:${woodType}_planks`
                })
            event.recipes.gtceu.cutter(`cosmicfrontiers:${modID}/${woodType}_slab_cutting`)
                .itemInputs(`${modID}:${woodType}_planks`)
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
                    P: `${modID}:${woodType}_planks`,
                    T: `${modID}:${woodType}_trapdoor`,
                    W: `#forge:tools/saws`,
                    S: 'gtceu:iron_screw',
                    R: 'gtceu:iron_ring',
                    D: '#forge:tools/screwdrivers',
                })
            event.recipes.gtceu.assembler(`cosmicfrontiers:${modID}/${woodType}_door`)
                .itemInputs([`5x ${modID}:${woodType}_planks`])
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
        //hanging
        if (Item.exists(`${modID}:${woodType}_hanging_sign`)) {
            event.remove({ output: `${modID}:${woodType}_hanging_sign` })
            event.recipes.gtceu.assembler(`cosmicfrontiers:${modID}/${woodType}_hanging_sign`)
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
        return this;
    },
    fences: function () {
        const { modID, woodType, event } = this
        //Fence
        if (Item.exists(`${modID}:${woodType}_fence`)) {
            event.remove({ output: `${modID}:${woodType}_fence` })
            event.recipes.gtceu.assembler(`cosmicfrontiers:${modID}/${woodType}_fence`)
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
        //Fence Gate
        if (Item.exists(`${modID}:${woodType}_fence_gate`)) {
            event.remove({ output: `${modID}:${woodType}_fence_gate` })
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
            event.recipes.gtceu.assembler(`cosmicfrontiers:${modID}/${woodType}_fence_gate`)
                .itemInputs([`2x ${modID}:${woodType}_planks`, "2x minecraft:stick"])
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
            event.recipes.gtceu.assembler(`cosmicfrontiers:${modID}/${woodType}_planks`)
                .itemInputs(`5x ${modID}:${woodType}_planks`)
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
                    P: `${modID}:${woodType}_planks`,
                    S: `${modID}:${woodType}_slab`,
                    K: `#forge:tools/knives`,
                    W: `#forge:tools/shovels`
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
    bookshelf: function () {
        const { modID, woodType, event } = this
        //BOOKSHELF 
        if (Item.exists(`${modID}:${woodType}_bookshelf`)) {
            event.remove({ output: `${modID}:${woodType}_bookshelf` })
            event.recipes.gtceu.assembler(`cosmicfrontiers:${modID}/${woodType}_bookshelf`)
                .itemInputs(`6x ${modID}:${woodType}_slab`)
                .itemInputs(`3x minecraft:book`)
                .circuit(16)
                .itemOutputs(`4x ${modID}:${woodType}_bookshelf`)
                .duration(100)
                .EUt(4);
            event.shaped(`${modID}:${woodType}_bookshelf`, [
                'WWW',
                'BBB',
                'WWW'
            ],
                {
                    W: `${modID}:${woodType}_planks`,
                    B: `minecraft:book`
                })
        }
        return this;
    },
    craftingTable: function () {
        const { modID, woodType, event } = this
        //CRAFTING TABL 
        if (Item.exists(`${modID}:${woodType}_crafting_table`)) {
            event.remove({ output: `${modID}:${woodType}_crafting_table` })
            event.recipes.gtceu.assembler(`cosmicfrontiers:${modID}/${woodType}_crafting_table`)
                .itemInputs(`4x ${modID}:${woodType}_planks`)
                .circuit(18)
                .itemOutputs(`4x ${modID}:${woodType}_crafting_table`)
                .duration(100)
                .EUt(4);
            event.shaped(`${modID}:${woodType}_crafting_table`, [
                'FF ',
                'WW ',
                '   '
            ],
                {
                    W: `${modID}:${woodType}_planks`,
                    F: `minecraft:flint`
                })
        }
        return this;
    },
    all: function () {
        this.planks()
        this.slab()
        this.stairs()
        this.door()
        this.trapdoor()
        this.fences()
        this.signs()
        this.pressurePlate()
        this.button()
        this.boats()
        this.bookshelf()
        this.craftingTable()
    }
}






