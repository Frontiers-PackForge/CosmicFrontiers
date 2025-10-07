ServerEvents.recipes(event => {


    //Unfortunately I don't think we can do better than this - we might want to expand the EMI mixin to handle the NBT of these better! ! !



    event.recipes.gtceu.bio_lab('frontiers:abrasive_gene')
        .itemInputs('cosmiccore:sculk_myofibroblast', '4x gendustry:labware')
        .inputFluids('gtceu:cas_9 2500')
        .itemOutputs(Item.of('gendustry:gene_sample', '{allele:"cosmiccore:bee_abrasive",chromosome:"forestry:bee_species",speciesType:"forestry:bee_species"}'))
        .duration(40)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.bio_lab('frontiers:pale_king_gene')
        .itemInputs('cosmiccore:sculk_myofibroblast', '16x gendustry:labware', 'gtceu:neutronium_buzz_saw_blade', 'botania:rune_pride')
        .inputFluids('gtceu:cas_9 16000', 'gtceu:sterilized_growth_medium 16000')
        .itemOutputs(Item.of('gendustry:gene_sample', '{allele:"cosmiccore:bee_pale",chromosome:"forestry:bee_species",speciesType:"forestry:bee_species"}'))
        .duration(40)
        .EUt(GTValues.VA[GTValues.ZPM]);


})