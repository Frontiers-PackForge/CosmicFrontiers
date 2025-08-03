ServerEvents.recipes(event => {
    //Vanilla
    new WoodMinecraft('oak', event).all();
    new WoodMinecraft('birch', event).all();
    new WoodMinecraft('dark_oak', event).all();
    new WoodMinecraft('acacia', event).all();
    new WoodMinecraft('jungle', event).all();
    new WoodMinecraft('spruce', event).all();
    new WoodMinecraft('cherry', event).all();
    new WoodMinecraft('mangrove', event).all();
    new WoodMinecraft('bamboo', event).all();
    new WoodMinecraft('crimson', event).all();
    new WoodMinecraft('warped', event).all();
})




function WoodMinecraft(wood, event) {
    this.woodType = wood;
    this.event = event;
    return this;
}

WoodMinecraft.prototype = {

    planks: function () {
        const {  woodType, event } = this
        //Log -> Plank
        if (Item.exists(`minecraft:${woodType}_log`)) {
            event.remove({ output: `minecraft:${woodType}_planks` })
            event.recipes.gtceu.cutter(`cosmicfrontiers:minecraft/${woodType}_cutting`)
                .itemInputs(`minecraft:${woodType}_log`)
                .itemOutputs([`6x minecraft:${woodType}_planks`, '2x gtceu:wood_dust'])
                .duration(200)
                .EUt(7);
            event.shaped(`4x minecraft:${woodType}_planks`, [
                '   ',
                ' T ',
                ' P '
            ],
                {
                    T: '#forge:tools/saws',
                    P: `minecraft:${woodType}_log`
                })
            event.shaped(`2x minecraft:${woodType}_planks`, [
                '   ',
                '   ',
                ' P '
            ],
                {
                    P: `minecraft:${woodType}_log`
                })
        }
        //Stripped Log -> Plank
        if (Item.exists(`minecraft:stripped_${woodType}_log`)) {
            event.recipes.gtceu.cutter(`cosmicfrontiers:minecraft/stripped_${woodType}_cutting`)
                .itemInputs(`minecraft:stripped_${woodType}_log`)
                .itemOutputs([`6x minecraft:${woodType}_planks`, '2x gtceu:wood_dust'])
                .duration(200)
                .EUt(7);
            event.shaped(`4x minecraft:${woodType}_planks`, [
                '   ',
                ' T ',
                ' P '
            ],
                {
                    T: '#forge:tools/saws',
                    P: `minecraft:stripped_${woodType}_log`
                })
            event.shaped(`2x minecraft:${woodType}_planks`, [
                '   ',
                '   ',
                ' P '
            ],
                {
                    P: `minecraft:stripped_${woodType}_log`
                })
        }
        //WoodMinecraft -> Plank
        if (Item.exists(`minecraft:${woodType}_wood`)) {
            event.recipes.gtceu.cutter(`cosmicfrontiers:minecraft/${woodType}_wood_cutting`)
                .itemInputs(`minecraft:${woodType}_wood`)
                .itemOutputs([`6x minecraft:${woodType}_planks`, '2x gtceu:wood_dust'])
                .duration(200)
                .EUt(7);
            event.shaped(`4x minecraft:${woodType}_planks`, [
                '   ',
                ' T ',
                ' P '
            ],
                {
                    T: '#forge:tools/saws',
                    P: `minecraft:${woodType}_wood`
                })
            event.shaped(`2x minecraft:${woodType}_planks`, [
                '   ',
                '   ',
                ' P '
            ],
                {
                    P: `minecraft:${woodType}_wood`
                })
        }
        //Stripped WoodMinecraft -> plank
        if (Item.exists(`minecraft:stripped_${woodType}_wood`)) {
            event.recipes.gtceu.cutter(`cosmicfrontiers:minecraft/stripped_${woodType}_wood_cutting`)
                .itemInputs(`minecraft:stripped_${woodType}_wood`)
                .itemOutputs([`6x minecraft:${woodType}_planks`, '2x gtceu:wood_dust'])
                .duration(200)
                .EUt(7);
            event.shaped(`4x minecraft:${woodType}_planks`, [
                '   ',
                ' T ',
                ' P '
            ],
                {
                    T: '#forge:tools/saws',
                    P: `minecraft:stripped_${woodType}_wood`
                })
            event.shaped(`2x minecraft:${woodType}_planks`, [
                '   ',
                '   ',
                ' P '
            ],
                {
                    P: `minecraft:stripped_${woodType}_wood`
                })
        }
        return this;
    },
    stairs: function () {
        const {  woodType, event } = this
        if (Item.exists(`minecraft:${woodType}_stairs`)) {
            event.remove({ output: `minecraft:${woodType}_stairs` })
            event.shaped(`4x minecraft:${woodType}_stairs`, [
                'W  ',
                'WW ',
                'WWW'
            ],
                {
                    W: `minecraft:${woodType}_planks`
                })
            event.recipes.gtceu.assembler(`cosmicfrontiers:minecraft/${woodType}_stairs`)
                .itemInputs(`6x minecraft:${woodType}_planks`)
                .itemOutputs(`4x minecraft:${woodType}_stairs`)
                .circuit(7)
                .duration(100)
                .EUt(4);
        }
        return this;
    },
    slab: function () {
        const {  woodType, event } = this
        if (Item.exists(`minecraft:${woodType}_slab`)) {
            event.remove({ output: `minecraft:${woodType}_slab` })
            event.shaped(`2x minecraft:${woodType}_slab`, [
                '   ',
                '   ',
                'TP '
            ],
                {
                    T: '#forge:tools/saws',
                    P: `minecraft:${woodType}_planks`
                })
            event.recipes.gtceu.cutter(`cosmicfrontiers:minecraft/${woodType}_slab_cutting`)
                .itemInputs(`minecraft:${woodType}_planks`)
                .itemOutputs(`2x minecraft:${woodType}_slab`)
                .duration(100)
                .EUt(4);
        }
        return this;
    },
    door: function () {
        const {  woodType, event } = this
        if (Item.exists(`minecraft:${woodType}_door`)) {
            event.remove({ output: `minecraft:${woodType}_door` })
            event.shaped(`2x minecraft:${woodType}_door`, [
                'PTD',
                'PRS',
                'PPW'
            ],
                {
                    P: `minecraft:${woodType}_planks`,
                    T: `minecraft:${woodType}_trapdoor`,
                    W: `#forge:tools/saws`,
                    S: 'gtceu:iron_screw',
                    R: 'gtceu:iron_ring',
                    D: '#forge:tools/screwdrivers',
                })
            event.recipes.gtceu.assembler(`cosmicfrontiers:minecraft/${woodType}_door`)
                .itemInputs([`5x minecraft:${woodType}_planks`])
                .itemOutputs(`3x minecraft:${woodType}_door`)
                .inputFluids('gtceu:iron 16')
                .circuit(3)
                .duration(100)
                .EUt(4);
        }
        return this;
    },
    trapdoor: function () {
        const {  woodType, event } = this
        if (Item.exists(`minecraft:${woodType}_trapdoor`)) {
            event.remove({ output: `minecraft:${woodType}_trapdoor` })
            event.shaped(`2x minecraft:${woodType}_trapdoor`, [
                '   ',
                'PPP',
                'PPP'
            ],
                {
                    P: `minecraft:${woodType}_slab`
                })
            event.recipes.gtceu.assembler(`cosmicfrontiers:minecraft/${woodType}_trapdoor`)
                .itemInputs(`3x minecraft:${woodType}_slab`)
                .itemOutputs(`3x minecraft:${woodType}_trapdoor`)
                .circuit(6)
                .duration(100)
                .EUt(4);
        }
        return this;
    },
    signs: function () {
        const {  woodType, event } = this
        if (Item.exists(`minecraft:${woodType}_sign`)) {
            event.remove({ output: `minecraft:${woodType}_sign` })
            event.recipes.gtceu.assembler(`cosmicfrontiers:minecraft/${woodType}_sign`)
                .itemInputs([`6x minecraft:${woodType}_planks`, 'minecraft:stick'])
                .itemOutputs(`4x minecraft:${woodType}_sign`)
                .circuit(3)
                .duration(100)
                .EUt(4);
            event.shaped(`2x minecraft:${woodType}_sign`, [
                'PPP',
                'PPP',
                'FSW'
            ],
                {
                    P: `minecraft:${woodType}_planks`,
                    W: `#forge:tools/saws`,
                    S: 'minecraft:stick',
                    F: '#forge:tools/files',
                })
        }
        //hanging
        if (Item.exists(`minecraft:${woodType}_hanging_sign`)) {
            event.remove({ output: `minecraft:${woodType}_hanging_sign` })
            event.recipes.gtceu.assembler(`cosmicfrontiers:minecraft/${woodType}_hanging_sign`)
                .itemInputs([`6x minecraft:${woodType}_planks`, 'minecraft:chain'])
                .itemOutputs(`minecraft:${woodType}_hanging_sign`)
                .circuit(4)
                .duration(100)
                .EUt(4);
            event.shaped(`2x minecraft:${woodType}_hanging_sign`, [
                'SRS',
                'PPP',
                'PPP'
            ],
                {
                    P: `minecraft:${woodType}_planks`,
                    S: 'minecraft:chain',
                    R: 'gtceu:iron_ring'
                })
        }
        return this;
    },
    fences: function () {
        const {  woodType, event } = this
        //Fence
        if (Item.exists(`minecraft:${woodType}_fence`)) {
            event.remove({ output: `minecraft:${woodType}_fence` })
            event.recipes.gtceu.assembler(`cosmicfrontiers:minecraft/${woodType}_fence`)
                .itemInputs(`minecraft:${woodType}_planks`)
                .itemOutputs(`minecraft:${woodType}_fence`)
                .circuit(1)
                .duration(100)
                .EUt(4);
            event.shaped(`minecraft:${woodType}_fence`, [
                'PSP',
                'PSP',
                'PSP'
            ],
                {
                    P: `minecraft:${woodType}_planks`,
                    S: `minecraft:stick`
                })
        }
        //Fence Gate
        if (Item.exists(`minecraft:${woodType}_fence_gate`)) {
            event.remove({ output: `minecraft:${woodType}_fence_gate` })
            event.shaped(`2x minecraft:${woodType}_fence_gate`, [
                'QWQ',
                'SPS',
                'SPS'
            ],
                {
                    P: `minecraft:${woodType}_planks`,
                    S: `minecraft:stick`,
                    W: `#forge:tools/screwdrivers`,
                    Q: `gtceu:iron_screw`
                })
            event.shaped(`2x minecraft:${woodType}_fence_gate`, [
                'Q Q',
                'SPS',
                'SPS'
            ],
                {
                    P: `minecraft:${woodType}_planks`,
                    S: `minecraft:stick`,
                    Q: `minecraft:flint`
                })
            event.recipes.gtceu.assembler(`cosmicfrontiers:minecraft/${woodType}_fence_gate`)
                .itemInputs([`2x minecraft:${woodType}_planks`, "2x minecraft:stick"])
                .itemOutputs(`minecraft:${woodType}_fence_gate`)
                .circuit(2)
                .duration(100)
                .EUt(4);
        }
        return this;
    },
    pressurePlate: function () {
        const {  woodType, event } = this
        if (Item.exists(`minecraft:${woodType}_pressure_plate`)) {
            event.remove({ output: `minecraft:${woodType}_pressure_plate` })
            event.recipes.gtceu.cutter(`cosmicfrontiers:minecraft/${woodType}_pressure_plate`)
                .itemInputs(`minecraft:${woodType}_slab`)
                .itemOutputs(`4x minecraft:${woodType}_pressure_plate`)
                .duration(100)
                .EUt(4);
            event.shaped(`2x minecraft:${woodType}_pressure_plate`, [
                '   ',
                ' S ',
                ' P '
            ],
                {
                    P: `minecraft:${woodType}_slab`,
                    S: `#forge:tools/saws`
                })
        }
        return this;
    },
    button: function () {
        const {  woodType, event } = this
        if (Item.exists(`minecraft:${woodType}_button`)) {
            event.remove({ output: `minecraft:${woodType}_button` })
            event.recipes.gtceu.cutter(`cosmicfrontiers:minecraft/${woodType}_button`)
                .itemInputs(`minecraft:${woodType}_pressure_plate`)
                .itemOutputs(`4x minecraft:${woodType}_button`)
                .duration(100)
                .EUt(4);
            event.shaped(`2x minecraft:${woodType}_button`, [
                '   ',
                ' S ',
                ' P '
            ],
                {
                    P: `minecraft:${woodType}_pressure_plate`,
                    S: `#forge:tools/saws`
                })
        }
        return this;
    },
    boats: function () {
        const {  woodType, event } = this
        //BOAT 
        if (Item.exists(`minecraft:${woodType}_boat`)) {
            event.remove({ output: `minecraft:${woodType}_boat` })
            event.recipes.gtceu.assembler(`cosmicfrontiers:minecraft/${woodType}_planks`)
                .itemInputs(`5x minecraft:${woodType}_planks`)
                .circuit(15)
                .itemOutputs(`4x minecraft:${woodType}_boat`)
                .duration(100)
                .EUt(4);
            event.shaped(`minecraft:${woodType}_boat`, [
                'SWS',
                'SKS',
                'PPP'
            ],
                {
                    P: `minecraft:${woodType}_planks`,
                    S: `minecraft:${woodType}_slab`,
                    K: `#forge:tools/knives`,
                    W: '#forge:tools/shovels'
                })
        }
        //CHEST-BOAT
        if (Item.exists(`minecraft:${woodType}_chest_boat`)) {
            event.remove({ output: `minecraft:${woodType}_chest_boat` })
            event.shapeless(`minecraft:${woodType}_chest_boat`, [
                `minecraft:${woodType}_boat`,
                `minecraft:chest`
            ])
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
    }
}






