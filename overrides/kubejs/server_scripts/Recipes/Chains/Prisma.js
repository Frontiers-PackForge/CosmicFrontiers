ServerEvents.recipes(event => {
    // event.remove({ output: Fluid.of(itemName) })
    event.recipes.gtceu.essence_reactor(`prisma_acid`)
        .itemInputs(['bloodmagic:reagentwater', 'bloodmagic:reagentlava'])
        .inputFluids('gtceu:hydrofluoric_acid 8000')
        .inputFluids('gtceu:sulfuric_acid 8000')
        .outputFluids('gtceu:astraline_corrosion_agent 16000')
        .duration(400)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.mixer(`prisma_solution`)
        .itemInputs('8x minecraft:prismarine_shard')
        .inputFluids('gtceu:astraline_corrosion_agent 1000')
        .outputFluids('gtceu:astraline_prismatic_solution 2000')
        .duration(360)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.distillation_tower(`prisma_fluid`)
        .itemInputs('8x minecraft:prismarine_shard')
        .inputFluids('gtceu:astraline_prismatic_solution 2000')
        .outputFluids('gtceu:prisma 1000')
        .outputFluids('gtceu:astraline_corrosion_agent 1000')
        .duration(240)
        .EUt(GTValues.VA[GTValues.EV]);



})