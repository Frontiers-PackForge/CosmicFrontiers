//A Simple "REMOVE AND HIDE" function akin to GroovyScript's Jei.yeet() function - This will tag the item for hiding from recipe viewers and remove the recipe
let yeet = (itemName) => {
    ServerEvents.recipes(event => {
        event.remove({ output: itemName })
    })
    ServerEvents.tags('item', event => {
        event.add('forge:viewers/hidden_from_recipe', itemName)
        event.add('c:hidden_from_recipe_viewers', itemName)

    })
}

ServerEvents.tags('item', event => {
})

//   yeet('gtceu:tiny_psi_superconductor_alpha_dust')
//   yeet('gtceu:small_psi_superconductor_alpha_dust')
//   yeet('gtceu:psi_superconductor_alpha_dust')
//   yeet('gtceu:tiny_psi_superconductor_beta_dust')
//   yeet('gtceu:small_psi_superconductor_beta_dust')
//   yeet('gtceu:psi_superconductor_beta_dust')
//   yeet('gtceu:tiny_neodymium_praseodymium_dust')
//   yeet('gtceu:small_neodymium_praseodymium_dust')
//   yeet('gtceu:neodymium_praseodymium_dust')
//   yeet('gtceu:tiny_magnetic_neodymium_praseodymium_dust')
//   yeet('gtceu:small_magnetic_neodymium_praseodymium_dust')
//   yeet('gtceu:magnetic_neodymium_praseodymium_dust')

ServerEvents.recipes(event => {
    event.remove({ id: 'gtceu:electric_blast_furnace/blast_naquadah' })
    event.remove({ id: 'gtceu:electric_blast_furnace/blast_naquadah_gas' })
    event.remove({ id: 'gtceu:electric_blast_furnace/blast_enriched_naquadah' })
    event.remove({ id: 'gtceu:electric_blast_furnace/enriched_naquadah_sulfate_separation' })
    event.remove({ id: 'gtceu:electric_blast_furnace/blast_enriched_naquadah_gas' })
    event.remove({ id: 'gtceu:electric_blast_furnace/blast_naquadria' })
    event.remove({ id: 'gtceu:electric_blast_furnace/blast_naquadria_gas' })
    event.remove({ id: 'gtceu:electric_blast_furnace/naquadria_sulfate_separation' })
    event.remove({ id: 'gtceu:vacuum_freezer/cool_hot_naquadah_ingot' })
    event.remove({ id: 'gtceu:vacuum_freezer/cool_hot_enriched_naquadah_ingot' })
    event.remove({ id: 'gtceu:vacuum_freezer/cool_hot_naquadah_ingot' })

    event.recipes.gtceu.electrolyzer('indium_trifluoride_elec')
        .itemInputs('4x gtceu:indium_trifluoride_dust')
        .itemOutputs('gtceu:indium_dust')
        .outputFluids('gtceu:fluorine 3000')
        .duration(20)
        .EUt(GTValues.VA[GTValues.LV]);
    event.recipes.gtceu.electrolyzer('potassium_fluoride_elec')
        .itemInputs('2x gtceu:potassium_fluoride_dust')
        .itemOutputs('gtceu:potassium_dust')
        .outputFluids('gtceu:fluorine 1000')
        .duration(20)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.chemical_reactor('peroxymonosulfate_synth')
        .itemInputs('2x gtceu:potassium_dust')
        .inputFluids('gtceu:hydrogen_peroxide 3000')
        .inputFluids('gtceu:sulfuric_acid 2000')
        .itemOutputs('16x gtceu:potassium_peroxymonosulfate_dust')
        .outputFluids('minecraft:water 4000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.large_chemical_reactor('nq_metallic_to_solution')
        .itemInputs('2x gtceu:naquadric_metallic_powder_dust')
        .inputFluids('gtceu:aqua_regia 4000')
        .outputFluids('gtceu:naquadric_solution 2000')
        .outputFluids('gtceu:diluted_nitric_acid 2000')
        .outputFluids('gtceu:hydrochloric_acid 2000')
        .outputFluids('gtceu:chlorine 2000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.large_chemical_reactor('nq_solution_to_fluoronaquadric')
        .inputFluids('gtceu:fluoroantimonic_acid 1000')
        .inputFluids('gtceu:naquadric_solution 1000')
        .itemOutputs('4x gtceu:antimony_trifluoride_dust')
        .outputFluids('gtceu:fluoronaquadric_acid 1000')
        .outputFluids('gtceu:nitrogen_dioxide 1000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu.electrolyzer('fluoronaquadric_to_difluoride')
        .inputFluids('gtceu:fluoronaquadric_acid 1000')
        .outputFluids('gtceu:hydrofluoric_acid 2000')
        .outputFluids('gtceu:naquadah_difluoride 1000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.electric_blast_furnace('naquadah_difluoride_to_naquadah_concentrate')
        .itemInputs('2x gtceu:indium_dust')
        .inputFluids('gtceu:naquadah_difluoride 3000')
        .itemOutputs('8x gtceu:indium_trifluoride_dust')
        .itemOutputs('3x gtceu:naquadah_concentrate_dust')
        .duration(100)
        .blastFurnaceTemp(4500)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.large_chemical_reactor('naquadah_concentrate_to_naquadah_sulfate')
        .itemInputs('8x gtceu:potassium_peroxymonosulfate_dust')
        .itemInputs('gtceu:naquadah_concentrate_dust')
        .inputFluids('gtceu:hydrofluoric_acid 1000')
        .itemOutputs('2x gtceu:potassium_fluoride_dust')
        .outputFluids('minecraft:water 1000')
        .outputFluids('gtceu:naquadah_sulfate 1000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu.large_chemical_reactor('naquadah_sulfate_naquadah_dust')
        .inputFluids('gtceu:hydrogen 2000')
        .inputFluids('gtceu:naquadah_sulfate 1000')
        .itemOutputs('gtceu:naquadah_dust')
        .outputFluids('minecraft:water 1000')
        .outputFluids('gtceu:sulfuric_acid 1000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.LuV]);

    //diluted nitric acid to nitric acid
    event.recipes.gtceu.distillery('nitric_acid_concentration1')
        .inputFluids('gtceu:diluted_nitric_acid 80')
        .outputFluids('gtceu:nitric_acid 40')
        .circuit(1)
        .duration(24)
        .EUt(GTValues.VA[GTValues.LV]);
    event.recipes.gtceu.distillery('nitric_acid_concentration2')
        .inputFluids('gtceu:diluted_nitric_acid 80')
        .outputFluids('minecraft:water 40')
        .circuit(2)
        .duration(48)
        .EUt(GTValues.VA[GTValues.LV]);
    //dist tower
    event.recipes.gtceu.distillation_tower('nitric_acid_concentration1')
        .inputFluids('gtceu:diluted_nitric_acid 2000')
        .outputFluids('gtceu:nitric_acid 1000')
        .outputFluids('minecraft:water 1000')
        .duration(600)
        .EUt(GTValues.VA[GTValues.MV]);
})