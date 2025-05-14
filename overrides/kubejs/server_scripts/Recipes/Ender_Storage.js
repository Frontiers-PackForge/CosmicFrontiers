ServerEvents.recipes( event =>{
    event.remove({ output: 'endertanks:ender_tank' })
    event.recipes.gtceu.assembler('endertank')
    .itemInputs(['2x #gtceu:circuits/hv', '4x gtceu:obsidian_plate', '1x gtceu:lv_super_tank', '1x gtceu:ender_pearl_plate'])
    .inputFluids('gtceu:blaze 2304')
    .itemOutputs('endertanks:ender_tank')
    .duration(140)
    .EUt(GTValues.VA[GTValues.MV])

    //links to an ender tank from the mod
    event.remove({ output: 'endertanks:ender_bucket' })
    event.recipes.gtceu.assembler('enderbucket')
    .itemInputs(['2x #gtceu:circuits/mv', '4x gtceu:obsidian_plate', 'gtceu:aluminium_drum', '1x gtceu:ender_pearl_plate'])
    .inputFluids('gtceu:blaze 1152')
    .itemOutputs('endertanks:ender_bucket')
    .duration(140)
    .EUt(GTValues.VA[GTValues.MV])

    event.remove({ output: 'enderchests:ender_chest' })
    event.recipes.gtceu.assembler('enderchest')
    .itemInputs(['2x #gtceu:circuits/hv', '4x gtceu:obsidian_plate', '1x gtceu:lv_super_chest', '1x gtceu:ender_pearl_plate'])
    .inputFluids('gtceu:blaze 2304')
    .itemOutputs('enderchests:ender_chest')
    .duration(140)
    .EUt(GTValues.VA[GTValues.MV])
 
    //lets you access the vanilla enderchest remotely
    event.remove({ output: 'enderchests:ender_pouch' }) 
    event.recipes.gtceu.assembler('enderpouch')
    .itemInputs(['2x #gtceu:circuits/mv', '4x cosmiccore:waxed_leather', 'minecraft:ender_chest', '1x gtceu:ender_pearl_plate'])
    .inputFluids('gtceu:blaze 1152')
    .itemOutputs('enderchests:ender_pouch')
    .duration(140)
    .EUt(GTValues.VA[GTValues.MV])

    //links to an ender chest from the mod
    event.remove({ output: 'enderchests:ender_bag' })
    event.recipes.gtceu.assembler('enderbag')
    .itemInputs(['2x #gtceu:circuits/mv', '4x gtceu:obsidian_plate', 'gtceu:aluminium_crate', '1x gtceu:ender_pearl_plate'])
    .inputFluids('gtceu:blaze 1152')
    .itemOutputs('enderchests:ender_bag')
    .duration(140)
    .EUt(GTValues.VA[GTValues.MV])
})