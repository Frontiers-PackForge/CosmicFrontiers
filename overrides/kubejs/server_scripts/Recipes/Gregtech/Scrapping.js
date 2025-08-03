ServerEvents.recipes(event => {
    event.recipes.gtceu.arc_furnace('scrap_virtue_coil')
        .itemInputs('cosmiccore:resonant_virtue_meld_coil_block')
        .inputFluids('gtceu:oxygen 8000')
        .itemOutputs(['12x cosmiccore:resonant_virtue_meld_ingot', '8x gtceu:iridium_ingot', '8x botania:elementium_ingot', '8x cosmiccore:prismatic_tungstensteel_ingot'])
        .duration(4800)
        .EUt(GTValues.VA[GTValues.IV]);
})