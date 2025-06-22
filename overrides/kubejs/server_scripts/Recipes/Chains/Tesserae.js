ServerEvents.recipes(event => {
    // event.remove({ input: 'gtceu:manasteel_dust' })
    event.recipes.gtceu.arcane_distillery('frontiers:arcane_distil_1')
        .inputFluids('blasmatech:mana 8000', 'gtceu:argon_plasma 1000')
        .chancedOutput('cosmiccore:tessaron', 100, 0)
        .chancedOutput('cosmiccore:vexiun', 100, 0)
        .duration(390)
        .EUt(GTValues.VA[GTValues.UV]);
    event.recipes.gtceu.arcane_distillery('frontiers:arcane_distil_2')
        .inputFluids('gtceu:source_oils 8000', 'gtceu:argon_plasma 1000')
        .chancedOutput('cosmiccore:ambrion', 100, 0)
        .chancedOutput('cosmiccore:ethera', 100, 0)
        .duration(390)
        .EUt(GTValues.VA[GTValues.UV]);


    event.recipes.gtceu.arcane_folding('frontiers:arcane_fold_1')
        .itemInputs(['cosmiccore:tessaron', 'cosmiccore:ambrion'])
        .itemOutputs('cosmiccore:esson', 'cosmiccore:ethera')
        .duration(80)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.arcane_folding('frontiers:arcane_fold_2')
        .itemInputs(['cosmiccore:vexiun', 'cosmiccore:ethera'])
        .itemOutputs('cosmiccore:phantnon', 'cosmiccore:ambrion')
        .duration(80)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.arcane_folding('frontiers:arcane_fold_3')
        .itemInputs(['cosmiccore:phantnon', 'cosmiccore:ethera'])
        .itemOutputs('cosmiccore:pyrith', 'cosmiccore:vexiun')
        .duration(80)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.arcane_folding('frontiers:arcane_fold_4')
        .itemInputs(['cosmiccore:esson', 'cosmiccore:ambrion'])
        .itemOutputs('cosmiccore:tenaebrum', 'cosmiccore:tessaron')
        .duration(80)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.arcane_folding('frontiers:arcane_fold_5')
        .itemInputs(['cosmiccore:tenaebrum', 'cosmiccore:pyrith'])
        .itemOutputs('cosmiccore:chronia', 'cosmiccore:crystala')
        .duration(80)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.arcane_folding('frontiers:arcane_fold_6')
        .itemInputs(['cosmiccore:pyrith', 'cosmiccore:ambrion'])
        .itemOutputs('cosmiccore:crystala', 'cosmiccore:vexiun')
        .duration(80)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.arcane_folding('frontiers:arcane_fold_7')
        .itemInputs(['cosmiccore:tenaebrum', 'cosmiccore:tessaron'])
        .itemOutputs( 'cosmiccore:ethera', 'cosmiccore:chronia')
        .duration(80)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.arcane_folding('frontiers:arcane_fold_8')
        .itemInputs(['cosmiccore:phantnon', 'cosmiccore:phantnon'])
        .itemOutputs( 'cosmiccore:nyxon', 'cosmiccore:nyxon')
        .duration(80)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.arcane_folding('frontiers:arcane_fold_9')
        .itemInputs(['cosmiccore:ethera', 'cosmiccore:esson'])
        .itemOutputs('cosmiccore:spectil', 'cosmiccore:mystrix')
        .duration(80)
        .EUt(GTValues.VA[GTValues.UHV]);
    event.recipes.gtceu.arcane_folding('frontiers:arcane_fold_10')
        .itemInputs(['cosmiccore:crystala', 'cosmiccore:phantnon'])
        .itemOutputs('cosmiccore:dynamia', 'cosmiccore:nyxon')
        .duration(80)
        .EUt(GTValues.VA[GTValues.UHV]);
    event.recipes.gtceu.arcane_folding('frontiers:arcane_fold_11')
        .itemInputs(['cosmiccore:pyrith', 'cosmiccore:mystrix'])
        .itemOutputs('cosmiccore:mystrix', 'cosmiccore:seraphon')
        .duration(80)
        .EUt(GTValues.VA[GTValues.UHV]);
    event.recipes.gtceu.arcane_folding('frontiers:arcane_fold_12')
        .itemInputs(['cosmiccore:seraphon', 'cosmiccore:chronia'])
        .itemOutputs( 'cosmiccore:echon', 'cosmiccore:pyrith')
        .duration(80)
        .EUt(GTValues.VA[GTValues.UHV]);
    event.recipes.gtceu.arcane_folding('frontiers:arcane_fold_13')
        .itemInputs(['cosmiccore:nyxon', 'cosmiccore:spectil'])
        .itemOutputs('cosmiccore:chronia', 'cosmiccore:echon')
        .duration(80)
        .EUt(GTValues.VA[GTValues.UHV]);
})