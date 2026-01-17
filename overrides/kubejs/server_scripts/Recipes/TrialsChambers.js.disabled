ServerEvents.recipes(event => {
    event.remove('trials:chiseled_tuff_bulb')
    event.remove('trials:copper_bulb')
    event.remove('trials:wind_charge')
    event.remove('trials:mace')

    event.shaped(`3x trials:copper_bulb`, [
        ' B ',
        'BRB',
        ' D '
    ], {
        B: `minecraft:copper_block`,
        D: 'projectred_core:conductive_plate',
        R: `minecraft:blaze_powder`,
    })

    event.shaped(`3x trials:chiseled_tuff_bulb`, [
        ' B ',
        'BRB',
        ' D '
    ], {
        B: `trials:polished_tuff`,
        D: 'projectred_core:conductive_plate',
        R: `minecraft:blaze_powder`,
    })

    event.recipes.gtceu.assembler(`frontiers:copper_bulb`)
        .itemInputs('3x minecraft:copper_block', 'minecraft:blaze_rod', 'projectred_core:conductive_plate')
        .itemOutputs('6x trials:copper_bulb')
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler(`frontiers:tuff_bulb`)
        .itemInputs('3x trials:polished_tuff', 'minecraft:blaze_rod', 'projectred_core:conductive_plate')
        .itemOutputs('6x trials:chiseled_tuff_bulb')
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.chemical_reactor(`frontiers:music_disc_creator`)
        .itemInputs('trials:music_disc_creator_box')
        .inputFluids('gtceu:oxygen 500')
        .itemOutputs('trials:music_disc_creator')
        .duration(220)
        .EUt(GTValues.VA[GTValues.LV]);

    event.shapeless('2x trials:wind_charge', 'trials:breeze_rod')

    event.recipes.gtceu.macerator(`frontiers:wind_charge`)
        .itemInputs('trials:breeze_rod')
        .itemOutputs('4x trials:wind_charge')
        .duration(88)
        .EUt(2);

    event.recipes.gtceu.compressor(`frontiers:breeze_rod`)
        .itemInputs('4x trials:wind_charge')
        .itemOutputs('trials:breeze_rod')
        .duration(200)
        .EUt(2);

    event.recipes.gtceu.dawn_forge('frontiers:mace')
        .itemInputs('trials:heavy_core', '2x trials:breeze_rod', '16x malum:aerial_spirit', '4x gtceu:obsidian_plate', 'embers:ancient_motive_core')
        .itemOutputs('trials:mace')
        .emberInput(500)
        .duration(1000)
        .EUt(GTValues.VA[GTValues.LV]);
})