ServerEvents.recipes(event => {

    event.remove({ id: 'gtceu:distillery/silica_slag_distillation_to_nether_star_distillate_slurry' })
    event.remove({ id: 'gtceu:distillery/silica_slag_distillation_to_pyroflux' })
    event.remove({ id: 'gtceu:distillery/silica_slag_distillation_to_deeply_withered_nether_slag' })

    event.recipes.gtceu.arc_furnace('enriching_silica_slag')
        .itemInputs('64x gtceu:silicon_dioxide_dust')
        .inputFluids('gtceu:deeply_withered_nether_slag 16000')
        .outputFluids('gtceu:silica_enriched_nether_slag 8000')
        .dimension('minecraft:the_nether')
        .duration(400)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.distillation_tower('silica_slag_distillation')
        .inputFluids('gtceu:silica_enriched_nether_slag 4000')
        .outputFluids('gtceu:nether_star_distillate_slurry 1000')
        .outputFluids('gtceu:deeply_withered_nether_slag 2000')
        .outputFluids('gtceu:pyroflux 1000')
        .dimension('minecraft:the_nether')
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV]);
    event.recipes.gtceu.chemical_dehydrator('slurry_drying')
        .itemInputs('gtceu:molybdenum_dust')
        .inputFluids('gtceu:nether_star_distillate_slurry 1000')
        .itemOutputs('4x gtceu:dull_nether_star_dust')
        .dimension('minecraft:the_nether')
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.electric_blast_furnace('star_boule')
        .itemInputs(['16x gtceu:dull_nether_star_dust', '8x gtceu:silicon_block'])
        .inputFluids('cosmiccore:prisma 4000')
        .itemOutputs('kubejs:chromatically_doped_nether_star_boule')
        .blastFurnaceTemp(4500)
        .dimension('minecraft:the_nether')
        .duration(900)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.forge_hammer('shatter_the_boule')
        .itemInputs('kubejs:chromatically_doped_nether_star_boule')
        .itemOutputs(['2x minecraft:nether_star'/*, 'gtceu:nether_star_dust', '2x gtceu:dull_nether_star_dust'*/])//remove comment when you find a way to have multiple outputs
        .dimension('minecraft:the_nether')
        .duration(150)
        .EUt(GTValues.VA[GTValues.EV]);


})