
ServerEvents.recipes(event => {


    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_chromite' })
    event.remove({ id: 'gtceu:centrifuge/ruby_slurry_centrifuging' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_ruby' })

    //Kapton Stuff
    event.recipes.gtceu.chemical_reactor('frontiers:ortho_xylene')
        .inputFluids('gtceu:methanol 1000')
        .inputFluids('gtceu:toluene 1000')
        .outputFluids('gtceu:ortho_xylene 1000')
        .outputFluids('minecraft:water 1000')
        .duration(800)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.chemical_reactor('frontiers:durene')
        .inputFluids('gtceu:chloromethane 2000')
        .inputFluids('gtceu:ortho_xylene 1000')
        .itemOutputs('24x gtceu:durene_dust')
        .outputFluids('gtceu:hydrochloric_acid 2000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu.chemical_reactor('frontiers:pyromellitic_dianhydride')
        .itemInputs('24x gtceu:durene_dust')
        .inputFluids('gtceu:oxygen 12000')
        .itemOutputs('18x gtceu:pyromellitic_dianhydride_dust')
        .outputFluids('minecraft:water 6000')
        .duration(150)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu.large_chemical_reactor('frontiers:aniline')
        .notConsumable('gtceu:zinc_dust')
        .inputFluids('gtceu:nitrobenzene 1000')
        .inputFluids('gtceu:hydrogen 6000')
        .outputFluids('gtceu:aniline 1000')
        .outputFluids('minecraft:water 2000')
        .duration(110)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.chemical_reactor('frontiers:oxydianiline')
        .notConsumable('gtceu:tin_dust')
        .inputFluids('gtceu:phenol 1000')
        .inputFluids('gtceu:aniline 2000')
        .notConsumableFluid('gtceu:hydrochloric_acid 1000')
        .outputFluids('gtceu:oxydianiline 1000')
        .outputFluids('gtceu:methane 2000')
        .duration(430)
        .EUt(GTValues.VA[GTValues.IV]);
    event.recipes.gtceu.large_chemical_reactor('frontiers:poly_amic_acid')
        .itemInputs('18x gtceu:pyromellitic_dianhydride_dust')
        .inputFluids('gtceu:oxydianiline 1000')
        .outputFluids('gtceu:poly_amic_acid 1152')
        .duration(300)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.chemical_dehydrator('frontiers:4_4_oxydianiline_pyromellitimide')
        .inputFluids('gtceu:poly_amic_acid 144')
        .outputFluids('gtceu:4_4_oxydianiline_pyromellitimide 144')
        .duration(220)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu.pyrolyse_oven('frontiers:hexafluoropropylene')
        .notConsumable('gtceu:black_steel_rod')
        .inputFluids('gtceu:tetrafluoroethylene 3000')
        .outputFluids('gtceu:hexafluoropropylene 2000')
        .duration(480)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.mixer('frontiers:fluorinated_ethylene_propylene')
        .inputFluids('gtceu:tetrafluoroethylene 1000')
        .inputFluids('gtceu:hexafluoropropylene 1000')
        .outputFluids('gtceu:fluorinated_ethylene_propylene 1000')
        .duration(140)
        .EUt(GTValues.VA[GTValues.EV]);
    event.remove({ id: 'gtceu:chemical_reactor/fiber_board' })
    event.remove({ id: 'gtceu:large_chemical_reactor/fiber_board' })
    event.remove({ id: 'gtceu:vomahine_industrial_chemvat/fiber_board' })
    event.recipes.gtceu.aio_lithography_processor('frontiers:new_circuit_board')
        .itemInputs('1x gtceu:4_4_oxydianiline_pyromellitimide_plate')
        .itemInputs('gtceu:carbon_fibers')
        .inputFluids('gtceu:fluorinated_ethylene_propylene 144')
        .itemOutputs('4x gtceu:fiber_reinforced_circuit_board')
        .duration(660)
        .EUt(GTValues.VA[GTValues.HV]);








})