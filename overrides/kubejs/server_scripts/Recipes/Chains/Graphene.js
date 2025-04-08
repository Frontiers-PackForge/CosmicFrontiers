ServerEvents.recipes(event => {
    //Undergarden Smog
    event.remove({ id: 'gtceu:mixer/graphene'})
    event.recipes.gtceu.chemical_reactor('graphite_oxide_creation')
        .itemInputs('gtceu:graphite_dust')
        .inputFluids('gtceu:nitration_mixture 2000')
        .notConsumable('gtceu:sodium_hydroxide_dust')
        .itemOutputs('gtceu:graphene_oxide_dust')
        .outputFluids('gtceu:sulfuric_acid 1000')
        .outputFluids('gtceu:nitric_acid 1000')
        .duration(400)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.IV]);
    event.recipes.gtceu.chemical_reactor('graphene_creation')
        .itemInputs('gtceu:graphene_oxide_dust')
        .itemOutputs('gtceu:graphene_dust')
        .inputFluids('gtceu:argon 100')
        .inputFluids('gtceu:hydrazine 250')
        .duration(250)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.IV]);
    event.recipes.gtceu.chemical_reactor('graphene_creation_skip')
        .itemInputs('gtceu:graphite_dust')
        .inputFluids('gtceu:nitration_mixture 2000')
        .notConsumable('cosmiccore:fusion_grade_magnet')
        .itemOutputs('gtceu:graphene_dust')
        .outputFluids('gtceu:sulfuric_acid 1000')
        .outputFluids('gtceu:nitric_acid 1000')
        .duration(200)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.ZPM]);

})