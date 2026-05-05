ServerEvents.recipes(event => {
    //Template recipe
    // event.recipes.gtceu.chemical_reactor('')
    //     .itemInputs()
    //     .inputFluids()
    //     .itemOutputs()
    //     .outputFluids()
    //     .duration(240)
    //     .EUt(GTValues.VA[GTValues.EV]);


    event.recipes.gtceu.mixer('ka_oil_creation')
        .notConsumable('cosmiccore:trinavine_dust')
        .inputFluids('gtceu:cyclohexane 4000')
        .inputFluids('gtceu:oxygen 6000')
        .outputFluids('gtceu:ka_oil 1000')
        .duration(650)
        .EUt(GTValues.VA[GTValues.LuV]);
    event.recipes.gtceu.industrial_chemvat('frontiers:adipic_acid')
        .inputFluids('gtceu:ka_oil 1000')
        .inputFluids('gtceu:nitric_acid 4000')
        .outputFluids('gtceu:adipic_acid 2000')
        .outputFluids('minecraft:water 3000')
        .outputFluids('gtceu:nitrous_oxide 1000')
        .outputFluids('gtceu:nitric_oxide 1000')
        .duration(840)
        .EUt(GTValues.VA[GTValues.LuV]);
    event.recipes.gtceu.chemical_reactor('frontiers:adiponitrile')
        .notConsumable('8x cosmiccore:neutronite_dust')
        .inputFluids('gtceu:grading_fluid_1 1000')
        .inputFluids('gtceu:butadiene 1000')
        .inputFluids('gtceu:hydrogen_cyanide 1000')
        .outputFluids('gtceu:adiponitrile 1000')
        .duration(440)
        .EUt(GTValues.VA[GTValues.IV]);
    event.recipes.gtceu.chemical_reactor('frontiers:hexamethylenediamine')
        .inputFluids('gtceu:adiponitrile 1000')
        .inputFluids('gtceu:hydrogen 8000')
        .itemOutputs('8x gtceu:hexamethylenediamine_dust')
        .duration(1100)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.industrial_chemvat('frontiers:nylon_jelly')
        .itemInputs('4x gtceu:hexamethylenediamine_dust', 'cosmiccore:tau_oil')
        .inputFluids('gtceu:source_oils 1000')
        .inputFluids('gtceu:adipic_acid 1000')
        .outputFluids('gtceu:nylon_jelly_polymer 4000')
        .duration(350)
        .EUt(GTValues.VA[GTValues.ZPM]);
    event.recipes.gtceu.polymerizer('frontiers:nylon_polymer')
        .notConsumable('gtceu:ingot_extruder_mold')
        .inputFluids('gtceu:nylon_jelly_polymer 1000')
        .inputFluids('gtceu:titanium_tetrachloride 250')
        .outputFluids('gtceu:nylon_6_6 144')
        .duration(450)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.polymerizer('frontiers:trinanylon_polymer')
        .notConsumable('gtceu:ingot_extruder_mold')
        .inputFluids('gtceu:nylon_jelly_polymer 1000')
        .inputFluids('cosmiccore:trinavine 144')
        .outputFluids('gtceu:trinanylon_6_6 144')
        .duration(890)
        .EUt(GTValues.VA[GTValues.ZPM]);

})