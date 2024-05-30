ServerEvents.recipes((event) => {

    event.recipes.gtceu.centrifuge('cloggurm_mix_spinny')
        .inputFluids('gtceu:undergarden_virulent_cloggrum_mixture 10000')
        .outputFluids('gtceu:xenotime_slag 2000')
        .outputFluids('gtceu:monasite_slag 2000')
        .outputFluids('gtceu:hydrofluoric_acid 6000')
        .duration(600)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.chemical_dehydrator('monasite_concentration')
        .inputFluids('gtceu:monasite_slag 1000')
        .outputFluids('gtceu:monasite_concentrate 1000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.chemical_dehydrator('xenotime_concentration')
        .inputFluids('gtceu:xenotime_slag 1000')
        .outputFluids('gtceu:xenotime_concentrate 1000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.centrifuge('mona_spinny')
        .inputFluids('gtceu:monasite_concentrate 1000')
        .outputFluids('gtceu:lre_slag 700')
        .outputFluids('gtceu:mre_slag 300')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.centrifuge('xeno_spinny')
        .inputFluids('gtceu:xenotime_concentrate 1000')
        .outputFluids('gtceu:hre_slag 700')
        .outputFluids('gtceu:mre_slag 300')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV]);
    })