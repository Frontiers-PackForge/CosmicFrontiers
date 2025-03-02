ServerEvents.recipes(event => {
    //PolyStyrene
    event.recipes.gtceu.chemical_reactor('polystyrene_fluid')
        .inputFluids('gtceu:titanium_tetrachloride 100')
        .inputFluids('gtceu:oxygen 7500')
        .inputFluids('gtceu:styrene 2160')
        .outputFluids('gtceu:polystyrene 4320')
        .circuit(1)
        .duration(800)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.chemical_reactor('polystyrene_sulfonate')
        .inputFluids('gtceu:sulfur_trioxide 1000')
        .inputFluids('gtceu:polystyrene 144')
        .outputFluids('gtceu:polystyrene_sulfonate 144')
        .duration(160)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.vacuum_freezer('sulfur_dichloride')
        .itemInputs('gtceu:sulfur_dust')
        .inputFluids('gtceu:chlorine 2000')
        .outputFluids('gtceu:sulfur_dichloride 1000')
        .duration(80)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.large_chemical_reactor('ethylene_oxide')
        .itemInputs('gtceu:silver_dust')
        .inputFluids('gtceu:ethylene 7000')
        .outputFluids('gtceu:ethylene_oxide 6000')
        .outputFluids('gtceu:carbon_dioxide 2000')
        .outputFluids('minecraft:water 2000')
        .duration(300)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.chemical_reactor('ethylene_glycol')
        .inputFluids('gtceu:carbon_dioxide 100')
        .inputFluids('gtceu:distilled_water 1000')
        .inputFluids('gtceu:ethylene_oxide 1000')
        .outputFluids('gtceu:ethylene_glycol 1000')
        .duration(600)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu.chemical_reactor('butanediol')
        .inputFluids('minecraft:water 1000')
        .inputFluids('gtceu:hypochlorous_acid 1000')
        .inputFluids('gtceu:butene 1000')
        .outputFluids('gtceu:butanediol 1000')
        .outputFluids('gtceu:hydrochloric_acid 1000')
        .duration(60)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.electrolyzer('diacetyl')
        .inputFluids('gtceu:butanediol 1000')
        .outputFluids('gtceu:diacetyl 1000')
        .outputFluids('gtceu:hydrogen 1000')
        .duration(60)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.chemical_reactor('three_four_ethylenedioxythiophene')
        .inputFluids('gtceu:sulfur_dichloride 1000')
        .inputFluids('gtceu:ethylene_glycol 1000')
        .inputFluids('gtceu:diacetyl 1000')
        .outputFluids('gtceu:three_four_ethylenedioxythiophene 1000')
        .outputFluids('gtceu:hydrochloric_acid 1000')
        .duration(60)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.mixer('pedot_pss')
        .inputFluids('gtceu:polystyrene_sulfonate 144')
        .inputFluids('gtceu:three_four_ethylenedioxythiophene 1000')
        .outputFluids('gtceu:pedot_pss 1296')
        .duration(300)
        .EUt(GTValues.VA[GTValues.LuV]);

})