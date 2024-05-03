//Removing Byproducts from particular ore steps
ServerEvents.recipes(event => {
    //Decomp Removal Sheldonite/Cooperite
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_cooperite' })
    event.remove({ id: 'gtceu:chemical_bath/bathe_nickel_crushed_ore_to_purified_ore' })
    event.remove({ id: 'gtceu:centrifuge/pgs_separation' })
    event.remove({ id: 'gtceu:electrolyzer/bauxite_electrolysis' })
    event.recipes.gtceu.chemical_bath('gtceu:chemical_bath/bathe_nickel_crushed_ore_to_purified_ore')
        .itemInputs('gtceu:crushed_nickel_ore')
        .inputFluids('gtceu:mercury 100')
        .itemOutputs('gtceu:purified_nickel_ore')
        .chancedOutput(Item.of('gtceu:platinum_group_sludge_dust', 1), 5000, 500)
        .chancedOutput(Item.of('gtceu:stone_dust', 1), 4000, 0)
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV]);
    event.remove({ id: 'gtceu:macerator/macerate_nickel_refined_ore_to_dust' })
    event.recipes.gtceu.macerator('gtceu:macerator/macerate_nickel_refined_ore_to_dust')
        .itemInputs('gtceu:refined_nickel_ore')
        .itemOutputs('gtceu:nickel_dust')
        .chancedOutput(Item.of('gtceu:platinum_group_sludge_dust', 1), 1500, 500)
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.chemical_reactor('hydrogen_peroxide_craft')
        .inputFluids('gtceu:methane 1000')
        .inputFluids('gtceu:oxygen 6000')
        .outputFluids('gtceu:hydrogen_peroxide 2000')
        .outputFluids('gtceu:carbon_dioxide 1000')
        .duration(160)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.chemical_reactor('hydrazine_craft')
        .inputFluids('gtceu:hydrogen_peroxide 1000')
        .inputFluids('gtceu:ammonia 6000')
        .outputFluids('gtceu:hydrazine 1000')
        .outputFluids('gtceu:water 2000')
        .duration(320)
        .EUt(GTValues.VA[GTValues.MV]);
    //Bad Plat Recipe
    event.recipes.gtceu.electric_blast_furnace('bad_plat')
        .itemInputs('6x gtceu:cooperite_dust')
        .itemOutputs('4x gtceu:platinum_nugget')
        .duration(600)
        .blastFurnaceTemp(2700)
        .EUt(GTValues.VA[GTValues.HV]);
    //Roasted Cooperite
    event.recipes.gtceu.electric_blast_furnace('cooperite_roasting')
        .itemInputs('4x gtceu:cooperite_dust')
        .inputFluids('gtceu:oxygen 16000')
        .itemOutputs('5x gtceu:roasted_cooperite_dust')
        .outputFluids('gtceu:sulfur_dioxide 8000')
        .duration(1200)
        .blastFurnaceTemp(2700)
        .EUt(GTValues.VA[GTValues.MV]);
    //Nickel Depleted Cooperite    
    event.recipes.gtceu.chemical_bath('cooperite_nickel_removal')
        .itemInputs('5x gtceu:roasted_cooperite_dust')
        .inputFluids('gtceu:carbon_monoxide 4000')
        .itemOutputs('4x gtceu:nickel_depleted_cooperite_dust')
        .outputFluids('gtceu:nickel_carbonyl 1000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV]);
    //Nickel Carbonyl to Nickel dust and CO
    event.recipes.gtceu.chemical_dehydrator('carbonyl_dehydrating')
        .inputFluids('gtceu:nickel_carbonyl 1000')
        .itemOutputs('gtceu:nickel_dust')
        .outputFluids('gtceu:carbon_monoxide 4000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV]);
    //Cooperite Solution
    event.recipes.gtceu.large_chemical_reactor('cooperite_solution_craft')
        .itemInputs('4x gtceu:nickel_depleted_cooperite_dust')
        .inputFluids('gtceu:hydrochloric_acid 11000')
        .inputFluids('gtceu:nitric_acid 7000')
        .outputFluids('gtceu:cooperite_solution 9000')
        .outputFluids('gtceu:nitrogen_dioxide 7000')
        .duration(400)
        .EUt(240);
    //Platinate
    event.recipes.gtceu.large_chemical_reactor('ammonium_hexachloroplatinate_dust_craft')
        .itemInputs('15x gtceu:ammonium_chloride_dust')
        .inputFluids('gtceu:cooperite_solution 9000')
        .itemOutputs('15x gtceu:ammonium_hexachloroplatinate_dust')
        .outputFluids('gtceu:plat_depleted_cooperite_solution 7500')
        .outputFluids('gtceu:hydrochloric_acid 3000')
        .duration(300)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.large_chemical_reactor('platinum_dust_craft')
        .itemInputs('10x gtceu:ammonium_hexachloroplatinate_dust')
        .inputFluids('gtceu:hydrogen 4000')
        .itemOutputs('gtceu:platinum_dust')
        .outputFluids('gtceu:ammonia 2000')
        .outputFluids('gtceu:hydrochloric_acid 6000')
        .duration(152)
        .EUt(GTValues.VA[GTValues.MV]);
    //Palladate and PGS
    event.recipes.gtceu.chemical_dehydrator('ammonium_hexachloropalladate_dust_craft')
        .itemInputs('5x gtceu:ammonium_chloride_dust')
        .inputFluids('gtceu:plat_depleted_cooperite_solution 7500')
        .itemOutputs('5x gtceu:ammonium_hexachloropalladate_dust')
        .itemOutputs('gtceu:platinum_group_sludge_dust')
        .outputFluids('gtceu:hydrochloric_acid 1500')
        .outputFluids('gtceu:hydrogen 1000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.large_chemical_reactor('tetraammine_palladium_chloride_dust_craft')
        .itemInputs('10x gtceu:ammonium_hexachloropalladate_dust')
        .inputFluids('gtceu:ammonia 6000')
        .itemOutputs('10x gtceu:tetraammine_palladium_chloride_dust')
        .itemOutputs('10x gtceu:ammonium_chloride_dust')
        .duration(152)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.large_chemical_reactor('palladium_dust_craft')
        .itemInputs('10x gtceu:tetraammine_palladium_chloride_dust')
        .inputFluids('gtceu:hydrazine 500')
        .itemOutputs('gtceu:palladium_dust')
        .itemOutputs('10x gtceu:ammonium_chloride_dust')
        .outputFluids('gtceu:nitrogen 1000')
        .duration(152)
        .EUt(GTValues.VA[GTValues.MV]);









})