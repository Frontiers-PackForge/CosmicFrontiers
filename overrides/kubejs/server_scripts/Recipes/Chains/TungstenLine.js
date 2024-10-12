ServerEvents.recipes(event => {
    //Decomp Removal For Tungstate Materials
    // event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_cooperite' })
    // event.remove({ id: 'gtceu:chemical_bath/bathe_nickel_crushed_ore_to_purified_ore' })
    // event.remove({ id: 'gtceu:centrifuge/pgs_separation' })
    // event.remove({ id: 'gtceu:electrolyzer/bauxite_electrolysis' })
    event.remove({ id: 'gtceu:mixer/indium_concentrate' })
    event.remove({ id: 'gtceu:electrolyzer/tungstic_acid_electrolysis' })
    event.remove({ id: 'gtceu:chemical_bath/tungstic_acid_from_tungstate' })
    event.remove({ id: 'gtceu:chemical_bath/tungstic_acid_from_scheelite' })
    event.recipes.gtceu.mixer('indium_concentrate_2_0')
        .inputFluids('gtceu:sulfuric_acid 4000')
        .itemInputs('gtceu:sphalerite_dust')
        .itemInputs('gtceu:galena_dust')
        .outputFluids('gtceu:indium_concentrate 1000')
        .duration(60)
        .EUt(GTValues.VA[GTValues.HV]);
    //Ammonium AeroCloud Sol. -> Ammonium Hydroxide 
    event.recipes.gtceu.distillery('ammonium_hydroxide_from_aerocloud_sol')
        .inputFluids('gtceu:ammonia_rich_aerocloud_solution 2000')
        .outputFluids('gtceu:ammonium_hydroxide 1000')
        .circuit(1)
        .duration(30)
        .EUt(GTValues.VA[GTValues.MV]);
    //Ammonia + Water -> Ammonium Hydroxide 
    event.recipes.gtceu.mixer('ammonium_hydroxide_from_actual_ammonia')
        .inputFluids('gtceu:ammonia 1000')
        .inputFluids('minecraft:water 1000')
        .outputFluids('gtceu:ammonium_hydroxide 1000')
        .circuit(1)
        .duration(80)
        .EUt(GTValues.VA[GTValues.MV]);
    //Wolframite
    // 12 Wolframite (s) + 12 Sodium Hydroxide (s) + 2 Water (l) -> 2 Impure Sodium Tungstate Solution (l) + 5 Iron Hydroxide (s) + 5 Manganese Hydroxide (s)
    event.recipes.gtceu.autoclave('wolframite_to_impure_naw')
        .itemInputs('12x gtceu:wolframite_dust')
        .itemInputs('12x gtceu:sodium_hydroxide_dust')
        .inputFluids('minecraft:water 2000')
        .outputFluids('gtceu:impure_sodium_tungstate_solution 2000')
        .itemOutputs('5x gtceu:iron_hydroxide_dust')
        .itemOutputs('5x gtceu:manganese_hydroxide_dust')
        .duration(300)
        .EUt(GTValues.VA[GTValues.EV]);
    //Scheelite
    // 6 Scheelite (s) + 6 Sodium Carbonate (s) + Water (l) -> Impure Sodium Tungstate Solution (l) + 5 Calcite (s)
    event.recipes.gtceu.autoclave('scheelite_to_impure_naw')
        .itemInputs('6x gtceu:scheelite_dust')
        .itemInputs('6x gtceu:soda_ash_dust')
        .inputFluids('minecraft:water 1000')
        .outputFluids('gtceu:impure_sodium_tungstate_solution 1000')
        .itemOutputs('5x gtceu:calcite_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV]);
    //Tunstate
    // 7 Tungstate (s) + 6 Sodium Hydroxide (s) + Water (l) -> Impure Sodium Tungstate Solution (l) + 6 Lithium Hydroxide (s)
    event.recipes.gtceu.autoclave('tunstate_to_impure_naw')
        .itemInputs('7x gtceu:tungstate_dust')
        .itemInputs('6x gtceu:sodium_hydroxide_dust')
        .inputFluids('minecraft:water 1000')
        .outputFluids('gtceu:impure_sodium_tungstate_solution 1000')
        .itemOutputs('6x gtceu:calcite_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV]);
    // Sodium Tungstate Solution 
    // Impure Sodium Tungstate Solution (l) + 12 Sodium Sulfide (s) + 4 Water (l) -> Sodium Tungstate Solution (l) + 7 Sodium Molybdenum Sulfide (s) + 24 Sodium Hydroxide (s)
    event.recipes.gtceu.large_chemical_reactor('impure_w_sol_to_w_sol')
        .inputFluids('gtceu:impure_sodium_tungstate_solution 1000')
        .itemInputs('12x gtceu:sodium_sulfide_dust')
        .inputFluids('minecraft:water 1000')
        .outputFluids('gtceu:sodium_tungstate_solution 1000')
        .itemOutputs('7x gtceu:sodium_molybdenum_sulfide_dust')
        .itemOutputs('24x gtceu:sodium_hydroxide_dust')
        .duration(100)
        .EUt(GTValues.VA[GTValues.EV]);

    // Trioctylammonium Isopolytungstate
    // 6 Sodium Tungstate Solution (l) + 5 Trioctylamine (l) + 9 Water (l) -> Trioctylammonium Isopolytungstate (l) + 36 Sodium Hydroxide (s)
    event.recipes.gtceu.large_chemical_reactor('trioctylammonium_isopolytungstate')
        .inputFluids('gtceu:sodium_tungstate_solution 6000')
        .inputFluids('gtceu:trioctylamine 5000')
        .inputFluids('minecraft:water 9000')
        .outputFluids('gtceu:trioctylammonium_isopolytungstate 1000')
        .itemOutputs('36x gtceu:sodium_hydroxide_dust')
        .duration(900)
        .EUt(GTValues.VA[GTValues.HV]);
    //APT
    // 2 Trioctylammonium Isopolytungstate (l) + 10 Ammonium Hydroxide (l) -> 4 Ammonium Paratungstate (APT) (s) + 10 Trioctylamine (l) + 6 Water (l)
    event.recipes.gtceu.large_chemical_reactor('apt_synth')
        .inputFluids('gtceu:trioctylammonium_isopolytungstate 2000')
        .inputFluids('gtceu:ammonium_hydroxide 10000')
        .itemOutputs('4x gtceu:ammonium_paratungstate_dust')
        .outputFluids('gtceu:trioctylamine 10000')
        .outputFluids('minecraft:water 6000')
        .duration(550)
        .EUt(GTValues.VA[GTValues.EV]);
    //Tungstic Acid
    // APT (s) + 0.25 Water (l) -> 21 Tungstic Acid (s) + 2.5 Ammonia (g)
    event.recipes.gtceu.electric_blast_furnace('tungstic_acid')
        .itemInputs('gtceu:ammonium_paratungstate_dust')
        .inputFluids('minecraft:water 250')
        .itemOutputs('21x gtceu:tungstic_acid_dust')
        .blastFurnaceTemp(3600)
        .duration(250)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.chemical_dehydrator('tungstic_trioxide')
        .itemInputs('7x gtceu:tungstic_acid_dust')
        .itemOutputs('4x gtceu:tungsten_trioxide_dust')
        .duration(250)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.electric_blast_furnace('tungstic_dust_ebf')
        .itemInputs('4x gtceu:tungsten_trioxide_dust')
        .inputFluids('gtceu:hydrogen 6000')
        .itemOutputs('gtceu:tungsten_dust')
        .outputFluids('gtceu:steam 3000')
        .blastFurnaceTemp(3700)
        .duration(250)
        .EUt(GTValues.VA[GTValues.EV]);
    // Moly Stuff

    event.recipes.gtceu.chemical_reactor('moly_sulfide_to_trisulfide')
        .itemInputs('7x gtceu:sodium_molybdenum_sulfide_dust')
        .inputFluids('gtceu:sulfuric_acid 1000')
        .itemOutputs('4x gtceu:molybdenum_trisulfide_dust')
        .itemOutputs('7x gtceu:sodium_sulfate_dust')
        .outputFluids('gtceu:hydrogen_sulfide 1000')
        .duration(60)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu.electrolyzer('molybdenum_trisulfide_dust_decomp')
        .itemInputs('4x gtceu:molybdenum_trisulfide_dust')
        .itemOutputs('gtceu:molybdenum_dust')
        .itemOutputs('3x gtceu:sulfur_dust')
        .duration(80)
        .EUt(GTValues.VA[GTValues.MV]);

    //What the Fuck is a Trioctylamine

    event.recipes.gtceu.chemical_reactor('synth_triethylaluminium')
        .itemInputs('2x gtceu:aluminium_dust')
        .inputFluids('gtceu:hydrogen 6000')
        .inputFluids('gtceu:ethylene 6000')
        .outputFluids('gtceu:triethylaluminium 1000')
        .duration(140)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.large_chemical_reactor('synth_trioctylaluminium')
        .inputFluids('gtceu:triethylaluminium 1000')
        .inputFluids('gtceu:ethylene 18000')
        .outputFluids('gtceu:trioctylaluminium 1000')
        .duration(60)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.chemical_reactor('synth_octanol')
        .inputFluids('gtceu:trioctylaluminium 2000')
        .inputFluids('gtceu:oxygen 6000')
        .inputFluids('minecraft:water 3000')
        .outputFluids('gtceu:one_dash_octanol 6000')
        .itemOutputs('2x gtceu:aluminium_hydroxide_dust')
        .duration(60)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.chemical_reactor('synth_trioctylamine')
        .inputFluids('gtceu:one_dash_octanol 3000')
        .inputFluids('gtceu:ammonia 1000')
        .notConsumable('32x gtceu:nickel_dust')
        .outputFluids('gtceu:trioctylamine 1000')
        .outputFluids('minecraft:water 3000')
        .duration(60)
        .EUt(GTValues.VA[GTValues.EV]);

})