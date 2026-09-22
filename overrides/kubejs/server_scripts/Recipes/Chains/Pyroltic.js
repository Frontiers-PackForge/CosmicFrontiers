ServerEvents.recipes(event => {
    event.recipes.gtceu.mixer('frontiers:sphalerite_slurry')
        .itemInputs('8x gtceu:sphalerite_dust')
        .inputFluids('4000x gtceu:distilled_water')
        .outputFluids('1000x gtceu:sphalerite_slurry')
        .duration(60)
        .EUt(GTValues.V[GTValues.HV], 1)

    // 4ZnS + CdS + Ga2S3 + GeS2 + In2S3 + 4H2O + 39O + 4H2SO4 + X[H18] -> 4ZnSO4(H2O) + 13SO2 + 13H2O + X[CdGa2GeIn2]
    event.recipes.gtceu.large_chemical_reactor('frontiers:metal_loaded_nyctophyte_media')
        .itemInputs('cosmiccore:functionalized_nyctophyte_media')
        .inputFluids('1000x gtceu:sphalerite_slurry', '39000x gtceu:oxygen', '4000x gtceu:sulfuric_acid')
        .itemOutputs('cosmiccore:metal_loaded_nyctophyte_media')
        .outputFluids('4000x gtceu:sphaleritic_zinc_sulfate_solution', '13000x gtceu:sulfur_dioxide', '13000x gtceu:distilled_water')
        .duration(1080)
        .EUt(GTValues.V[GTValues.HV], 4)

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
