ServerEvents.recipes(event => {
    event.recipes.gtceu.mixer('frontiers:sphalerite_slurry')
        .itemInputs('8x gtceu:sphalerite_dust')
        .inputFluids('4000x gtceu:distilled_water')
        .outputFluids('1000x gtceu:sphalerite_slurry')
        .duration(60)
        .EUt(GTValues.V[GTValues.HV], 1)

    event.recipes.gtceu.centrifuge('frontiers:pyrolitic_cadmium_sulfide_fraction')
        .inputFluids('1000x gtceu:sphalerite_slurry')
        .outputFluids(
            '1000x gtceu:pyrolitic_cadmium_sulfide_fraction',
            '1000x gtceu:pyrolitic_gallium_sulfide_fraction',
            '1000x gtceu:pyrolitic_germanium_sulfide_fraction',
            '1000x gtceu:pyrolitic_indium_sulfide_fraction'
        )
        .duration(100)
        .EUt(GTValues.V[GTValues.HV], 1)

    // (ZnS)(CdS)(H2O) + 6O -> ZnO + CdO + 2SO2 + H2O (oxidative roasting)
    event.recipes.cosmiccore.large_roaster('frontiers:chains/pyroltic/cadmium_sulfide_roasting')
        .inputFluids('1000x gtceu:pyrolitic_cadmium_sulfide_fraction', '6000x gtceu:oxygen')
        .itemOutputs('2x gtceu:zincite_dust', '2x gtceu:cadmium_oxide_dust')
        .outputFluids('2000x gtceu:sulfur_dioxide', '1000x gtceu:distilled_water')
        .duration(180)
        .EUt(GTValues.V[GTValues.HV], 2)

    // (ZnS)(Ga2S3)(H2O) + 12O -> ZnO + Ga2O3 + 4SO2 + H2O (oxidative roasting)
    event.recipes.cosmiccore.large_roaster('frontiers:chains/pyroltic/gallium_sulfide_roasting')
        .inputFluids('1000x gtceu:pyrolitic_gallium_sulfide_fraction', '12000x gtceu:oxygen')
        .itemOutputs('2x gtceu:zincite_dust', '5x gtceu:gallium_oxide_dust')
        .outputFluids('4000x gtceu:sulfur_dioxide', '1000x gtceu:distilled_water')
        .duration(280)
        .EUt(GTValues.V[GTValues.HV], 4)

    // (ZnS)(GeS2)(H2O) + 9O -> ZnO + GeO2 + 3SO2 + H2O (oxidative roasting)
    event.recipes.cosmiccore.large_roaster('frontiers:chains/pyroltic/germanium_sulfide_roasting')
        .inputFluids('1000x gtceu:pyrolitic_germanium_sulfide_fraction', '9000x gtceu:oxygen')
        .itemOutputs('2x gtceu:zincite_dust', '3x gtceu:germanium_dioxide_dust')
        .outputFluids('3000x gtceu:sulfur_dioxide', '1000x gtceu:distilled_water')
        .duration(220)
        .EUt(GTValues.V[GTValues.HV], 2)

    // (ZnS)(In2S3)(H2O) + 12O -> ZnO + In2O3 + 4SO2 + H2O (oxidative roasting)
    event.recipes.cosmiccore.large_roaster('frontiers:chains/pyroltic/indium_sulfide_roasting')
        .inputFluids('1000x gtceu:pyrolitic_indium_sulfide_fraction', '12000x gtceu:oxygen')
        .itemOutputs('2x gtceu:zincite_dust', '5x gtceu:indium_oxide_dust')
        .outputFluids('4000x gtceu:sulfur_dioxide', '1000x gtceu:distilled_water')
        .duration(280)
        .EUt(GTValues.V[GTValues.HV], 4)

    // 4ZnO + CdO + Ga2O3 + GeO2 + In2O3 -> (ZnO)4(CdO)(Ga2O3)(GeO2)(In2O3)
    event.recipes.gtceu.mixer('frontiers:sphaleritic_mixed_oxide_concentrate_dust')
        .itemInputs(
            '8x gtceu:zincite_dust',
            '2x gtceu:cadmium_oxide_dust',
            '5x gtceu:gallium_oxide_dust',
            '3x gtceu:germanium_dioxide_dust',
            '5x gtceu:indium_oxide_dust'
        )
        .itemOutputs('23x gtceu:sphaleritic_mixed_oxide_concentrate_dust')
        .duration(120)
        .EUt(GTValues.V[GTValues.HV], 1)

    // (ZnO)4(CdO)(Ga2O3)(GeO2)(In2O3) + 13H2SO4 -> (ZnSO4)4(CdSO4)(Ga2(SO4)3)(Ge(SO4)2)(In2(SO4)3)(H2O)13
    event.recipes.gtceu.large_chemical_reactor('frontiers:sphaleritic_mixed_sulfate_liquor')
        .itemInputs('23x gtceu:sphaleritic_mixed_oxide_concentrate_dust')
        .inputFluids('13000x gtceu:sulfuric_acid')
        .outputFluids('1000x gtceu:sphaleritic_mixed_sulfate_liquor')
        .duration(300)
        .EUt(GTValues.V[GTValues.HV], 2)

    // (ZnSO4)4(CdSO4)(Ga2(SO4)3)(Ge(SO4)2)(In2(SO4)3)(H2O)13 + X[H18] -> 4ZnSO4(H2O) + 9H2SO4(H2O) + X[CdGa2GeIn2]
    event.recipes.gtceu.large_chemical_reactor('frontiers:metal_loaded_nyctophyte_media')
        .itemInputs('cosmiccore:functionalized_nyctophyte_media')
        .inputFluids('1000x gtceu:sphaleritic_mixed_sulfate_liquor')
        .itemOutputs('cosmiccore:metal_loaded_nyctophyte_media')
        .outputFluids(
            '4000x gtceu:sphaleritic_zinc_sulfate_solution',
            '13500x gtceu:diluted_sulfuric_acid',
            '4500x gtceu:distilled_water'
        )
        .duration(240)
        .EUt(GTValues.V[GTValues.HV], 2)

    // ZnSO4(H2O) -> Zn + H2SO4 + O
    event.recipes.gtceu.electrolyzer('frontiers:zinc_dust')
        .inputFluids('1000x gtceu:sphaleritic_zinc_sulfate_solution')
        .itemOutputs('gtceu:zinc_dust')
        .outputFluids('1000x gtceu:sulfuric_acid', '1000x gtceu:oxygen')
        .duration(120)
        .EUt(GTValues.V[GTValues.HV], 2)

    // X[CdGa2GeIn2] + 9H2SO4(H2O) -> X[H18] + CdSO4(H2O) + Ga2(SO4)3(H2O)3 + Ge(SO4)2(H2O)2 + In2(SO4)3(H2O)3
    event.recipes.gtceu.large_chemical_reactor('frontiers:stripped_nyctophyte_media')
        .itemInputs('cosmiccore:metal_loaded_nyctophyte_media')
        .inputFluids('13500x gtceu:diluted_sulfuric_acid', '4500x gtceu:distilled_water')
        .itemOutputs('cosmiccore:stripped_nyctophyte_media')
        .outputFluids(
            '1000x gtceu:pyrolitic_cadmium_sulfate_solution',
            '1000x gtceu:pyrolitic_gallium_sulfate_solution',
            '1000x gtceu:pyrolitic_germanium_sulfate_solution',
            '1000x gtceu:pyrolitic_indium_sulfate_solution'
        )
        .duration(300)
        .EUt(GTValues.V[GTValues.HV], 2)

    // CdSO4(H2O) -> CdSO4 + H2O (fractional crystallization; water removed)
    event.recipes.cosmiccore.chemical_dehydrator('frontiers:chains/pyrolitic/cadmium_sulfate_crystallization')
        .inputFluids('1000x gtceu:pyrolitic_cadmium_sulfate_solution')
        .itemOutputs('6x gtceu:cadmium_sulfate_dust')
        .duration(100)
        .EUt(GTValues.V[GTValues.HV], 2)

    // Ga2(SO4)3(H2O)3 -> Ga2(SO4)3 + 3H2O (fractional crystallization; water removed)
    event.recipes.cosmiccore.chemical_dehydrator('frontiers:chains/pyrolitic/gallium_sulfate_crystallization')
        .inputFluids('1000x gtceu:pyrolitic_gallium_sulfate_solution')
        .itemOutputs('17x gtceu:gallium_sulfate_dust')
        .duration(160)
        .EUt(GTValues.V[GTValues.HV], 2)

    // Ge(SO4)2(H2O)2 -> Ge(SO4)2 + 2H2O (fractional crystallization; water removed)
    event.recipes.cosmiccore.chemical_dehydrator('frontiers:chains/pyrolitic/germanium_sulfate_crystallization')
        .inputFluids('1000x gtceu:pyrolitic_germanium_sulfate_solution')
        .itemOutputs('11x gtceu:germanium_sulfate_dust')
        .duration(140)
        .EUt(GTValues.V[GTValues.HV], 2)

    // In2(SO4)3(H2O)3 -> In2(SO4)3 + 3H2O (fractional crystallization; water removed)
    event.recipes.cosmiccore.chemical_dehydrator('frontiers:chains/pyrolitic/indium_sulfate_crystallization')
        .inputFluids('1000x gtceu:pyrolitic_indium_sulfate_solution')
        .itemOutputs('17x gtceu:indium_sulfate_dust')
        .duration(160)
        .EUt(GTValues.V[GTValues.HV], 2)

    // CdSO4 + 2H -> Cd + H2SO4 (hydrogen reduction)
    event.recipes.gtceu.chemical_reactor('frontiers:cadmium_dust')
        .itemInputs('6x gtceu:cadmium_sulfate_dust')
        .inputFluids('2000x gtceu:hydrogen')
        .itemOutputs('gtceu:cadmium_dust')
        .outputFluids('1000x gtceu:sulfuric_acid')
        .duration(100)
        .EUt(GTValues.V[GTValues.HV], 2)

    // Ga2(SO4)3 + 6H -> 2Ga + 3H2SO4 (hydrogen reduction)
    event.recipes.gtceu.chemical_reactor('frontiers:gallium_dust')
        .itemInputs('17x gtceu:gallium_sulfate_dust')
        .inputFluids('6000x gtceu:hydrogen')
        .itemOutputs('2x gtceu:gallium_dust')
        .outputFluids('3000x gtceu:sulfuric_acid')
        .duration(160)
        .EUt(GTValues.V[GTValues.HV], 2)

    // Ge(SO4)2 + 4H -> Ge + 2H2SO4 (hydrogen reduction)
    event.recipes.gtceu.chemical_reactor('frontiers:germanium_dust')
        .itemInputs('11x gtceu:germanium_sulfate_dust')
        .inputFluids('4000x gtceu:hydrogen')
        .itemOutputs('gtceu:germanium_dust')
        .outputFluids('2000x gtceu:sulfuric_acid')
        .duration(140)
        .EUt(GTValues.V[GTValues.HV], 2)

    // In2(SO4)3 + 6H -> 2In + 3H2SO4 (hydrogen reduction)
    event.recipes.gtceu.chemical_reactor('frontiers:indium_dust')
        .itemInputs('17x gtceu:indium_sulfate_dust')
        .inputFluids('6000x gtceu:hydrogen')
        .itemOutputs('2x gtceu:indium_dust')
        .outputFluids('3000x gtceu:sulfuric_acid')
        .duration(160)
        .EUt(GTValues.V[GTValues.HV], 2)
})
