ServerEvents.recipes(event => {
    ['lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv'].forEach(tier => {
        event.shaped(`cosmiccore:${tier}_biolab`, [
            'ABA',
            'CDC',
            'EFE'
        ], {
            A: `#gtceu:circuits/${tier}`,
            B: `gtceu:${tier}_sensor`,
            C: 'minecraft:glass',
            D: `gtceu:${tier}_machine_hull`,
            E: `gtceu:${tier}_electric_pump`,
            F: `gtceu:${tier}_emitter`
        })
    })

    event.recipes.cosmiccore.sculk_biochamber('frontiers:chains/kuvite/meshgrown_flesh_framework')
        .itemInputs('malum:imitation_flesh')
        .chancedInput('cosmiccore:fiber_mesh_ingot_frame', 500)
        .inputFluids('250x cosmiccore:biomeld_nutrient')
        .itemOutputs('cosmiccore:meshgrown_flesh_framework')
        .biopowerInput(8)
        .bloomwyrmChargeInput(50)
        .maxCampusParallel(16)
        .EUt(GTValues.V[GTValues.MV], 1)
        .duration(1200)

    event.recipes.cosmiccore.bio_lab('frontiers:chains/kuvite/blooming_kuvine_culture')
        .itemInputs(['cosmiccore:meshgrown_flesh_framework','4x cosmiccore:bloomwyrm_algae'])
        .itemOutputs('cosmiccore:blooming_kuvine_culture')
        .EUt(GTValues.V[GTValues.MV], 1)
        .duration(400)

    event.recipes.cosmiccore.sculk_biochamber('frontiers:chains/kuvite/kuvite_ingot')
        .itemInputs(['cosmiccore:blooming_kuvine_culture','malum:living_flesh','cosmiccore:nostium_ingot','gtceu:magnetic_steel_rod'])
        .inputFluids('1000x neovitae:essentia_vitae_source')
        .itemOutputs(['cosmiccore:kuvite_ingot','gtceu:steel_rod'])
        .biopowerInput(32)
        .bloomwyrmChargeInput(100)
        .maxCampusParallel(16)
        .EUt(GTValues.V[GTValues.MV], 1)
        .duration(1200)

    event.recipes.cosmiccore.arcane_crucible('frontiers:chains/kuvite/galvanized_ethersteel')
        .itemInputs(['4x cosmiccore:kuvite_ingot','2x gtceu:terrasteel_ingot','6x gtceu:zano_aluminate_dust'])
        .itemOutputs(['8x cosmiccore:galvanized_ethersteel_ingot','5x gtceu:alumina_dust','2x gtceu:electrum_ingot'])
        .input('cosmiccore:ember', 4000)
        .EUt(GTValues.V[GTValues.MV], 8)
        .duration(600)
})
