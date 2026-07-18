ServerEvents.recipes(event => {

    event.recipes.gtceu.assembler()
        .itemInputs('4x gtceu:steel_rod', '2x gtceu:tempered_iesnium_bolt', 'gtceu:small_steel_gear')
        .itemOutputs('4x cosmiccore:lv_modular_frameworks')
        .inputFluids('250x gtceu:concrete')
        .EUt(GTValues.VA[GTValues.HV], 1)
        .duration(350)

    event.recipes.gtceu.assembler()
        .itemInputs('4x gtceu:steel_plate', '2x gtceu:tempered_iesnium_foil', 'cosmiccore:overloaded_pearls')
        .itemOutputs('5x cosmiccore:lv_cogwork_magicapacitor')
        .inputFluids('250x gtceu:dark_steel')
        .EUt(GTValues.VA[GTValues.HV], 1)
        .duration(250)

    event.recipes.gtceu.forming_press()
        .itemInputs('gtceu:treated_wood_dust', 'gtceu:rubber_ingot', 'gtceu:lead_bolt')
        .itemOutputs('3x cosmiccore:lv_cladding')
        .EUt(GTValues.VA[GTValues.HV], 1)
        .duration(200)



})