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




    //Wafer Making
    event.recipes.gtceu.arcane_folding('frontiers:wafer_fold_1')
        .itemInputs(['cosmiccore:echon', 'cosmiccore:flawed_resonant_wafer'])
        .itemOutputs('cosmiccore:chronia', 'cosmiccore:null_refined_resonant_wafer')
        .duration(150)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.arcane_folding('frontiers:wafer_fold_2')
        .itemInputs(['cosmiccore:chronia', 'cosmiccore:flawed_resonant_wafer'])
        .itemOutputs('cosmiccore:echon', 'cosmiccore:refined_resonant_wafer')
        .duration(150)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.cutter("xor_pure_wafers")
        .itemInputs('cosmiccore:refined_resonant_wafer')
        .chancedItemOutputLogic($ChanceLogic.XOR)
        .chancedOutput('4x cosmiccore:alchemia_wafer', 5000, 0)
        .chancedOutput('4x cosmiccore:wafer_pragmiso', 5000, 0)
        .duration(400)
        .EUt(GTValues.VA[GTValues.UV])


    event.recipes.gtceu.aio_lithography_processor("fused_logo_wafer")
        .itemInputs(['gtceu:highly_advanced_soc', '2x cosmiccore:wafer_pragmiso', '2x cosmiccore:alchemia_wafer'])
        .chancedItemOutputLogic($ChanceLogic.XOR)
        .chancedOutput('4x cosmiccore:fused_wafer_of_logos', 9000, 0)
        .chancedOutput('2x cosmiccore:alchemia_wafer', 500, 0)
        .chancedOutput('2x cosmiccore:wafer_pragmiso', 500, 0)
        .duration(220)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.aio_lithography_processor("fused_eso_wafer")
        .itemInputs(['gtceu:highly_advanced_soc', '2x cosmiccore:thaumica_wafer', '2x cosmiccore:eterna_wafer'])
        .chancedItemOutputLogic($ChanceLogic.XOR)
        .chancedOutput('4x cosmiccore:fused_wafer_of_esoterica', 9000, 0)
        .chancedOutput('2x cosmiccore:thaumica_wafer', 500, 0)
        .chancedOutput('2x cosmiccore:eterna_wafer', 500, 0)
        .duration(220)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.cutter("xor_null_pure_wafers")
        .itemInputs('cosmiccore:null_refined_resonant_wafer')
        .chancedItemOutputLogic($ChanceLogic.XOR)
        .chancedOutput('4x cosmiccore:eterna_wafer', 5000, 0)
        .chancedOutput('4x cosmiccore:thaumica_wafer', 5000, 0)
        .duration(400)
        .EUt(GTValues.VA[GTValues.UV])
    //Folding Recipes


    //Take Primary Result -1A +1B secondary result


    //A Group
    let vexil = [
        "tessaron",
        "vexiun",
        "ambrion",
        "ethera",
        "pyrith",
        "tenaebrum",
        "crystala",
        "chronia"
    ]
    //B Group
    let luminon = [
        "echon",
        "mystrix",
        "dynamia",
        "seraphon",
        "nyxon",
        "spectil",
        "phantnon",
        "esson",
    ]


    event.recipes.gtceu.arcane_folding('frontiers:arcane_fold_1')
        .itemInputs('cosmiccore:' + vexil[0]) //1A
        .itemInputs('cosmiccore:' + luminon[0]) //1B
        .itemOutputs('cosmiccore:' + luminon[7]) //8B
        .itemOutputs('cosmiccore:' + vexil[6]) //7A
        .duration(80)
        .EUt(GTValues.VA[GTValues.UV]);
    event.recipes.gtceu.arcane_folding('frontiers:arcane_fold_2')
        .itemInputs('cosmiccore:' + vexil[1]) //2A
        .itemInputs('cosmiccore:' + luminon[0]) //1B
        .itemOutputs('cosmiccore:' + luminon[2]) //1B
        .itemOutputs('cosmiccore:' + vexil[7]) //8A
        .duration(80)
        .EUt(GTValues.VA[GTValues.UV]);
    event.recipes.gtceu.arcane_folding('frontiers:arcane_fold_3')
        .itemInputs('cosmiccore:' + vexil[2]) //3A
        .itemInputs('cosmiccore:' + luminon[0]) //1B
        .itemOutputs('cosmiccore:' + vexil[6]) //7A
        .itemOutputs('cosmiccore:' + luminon[7]) //8B
        .duration(80)
        .EUt(GTValues.VA[GTValues.UV]);


    //Second Row (2B)

    event.recipes.gtceu.arcane_folding('frontiers:arcane_fold_5')
        .itemInputs('cosmiccore:' + vexil[1]) //2A
        .itemInputs('cosmiccore:' + luminon[1]) //2B
        .itemOutputs('cosmiccore:' + luminon[6]) //7A
        .itemOutputs('cosmiccore:' + vexil[7]) //8B
        .duration(80)
        .EUt(GTValues.VA[GTValues.UV]);
    event.recipes.gtceu.arcane_folding('frontiers:arcane_fold_6')
        .itemInputs('cosmiccore:' + vexil[2]) //3A
        .itemInputs('cosmiccore:' + luminon[1]) //2B
        .itemOutputs('cosmiccore:' + luminon[1]) //2A
        .itemOutputs('cosmiccore:' + vexil[2]) //3B
        .duration(80)
        .EUt(GTValues.VA[GTValues.UV]);
    event.recipes.gtceu.arcane_folding('frontiers:arcane_fold_7')
        .itemInputs('cosmiccore:' + vexil[3]) //4A
        .itemInputs('cosmiccore:' + luminon[1]) //2B
        .itemOutputs('cosmiccore:' + luminon[5]) //6A
        .itemOutputs('cosmiccore:' + vexil[6]) //7B
        .duration(80)
        .EUt(GTValues.VA[GTValues.UV]);


    //Third Row (3B)
    event.recipes.gtceu.arcane_folding('frontiers:arcane_fold_8')
        .itemInputs('cosmiccore:' + vexil[0]) //1A
        .itemInputs('cosmiccore:' + luminon[2]) //3B
        .itemOutputs('cosmiccore:' + luminon[6]) //6B
        .itemOutputs('cosmiccore:' + vexil[4]) //5A
        .duration(80)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.arcane_folding('frontiers:arcane_fold_9')
        .itemInputs('cosmiccore:' + vexil[1]) //2A
        .itemInputs('cosmiccore:' + luminon[2]) //3B
        .itemOutputs('cosmiccore:' + luminon[6]) //2B
        .itemOutputs('cosmiccore:' + vexil[2]) //1A
        .duration(80)
        .EUt(GTValues.VA[GTValues.UV]);
    event.recipes.gtceu.arcane_folding('frontiers:arcane_fold_10')
        .itemInputs('cosmiccore:' + vexil[2]) //3A
        .itemInputs('cosmiccore:' + luminon[2]) //3B
        .itemOutputs('cosmiccore:' + luminon[6]) //6B
        .itemOutputs('cosmiccore:' + vexil[4]) //5A
        .duration(80)
        .EUt(GTValues.VA[GTValues.UV]);
    event.recipes.gtceu.arcane_folding('frontiers:arcane_fold_11')
        .itemInputs('cosmiccore:' + vexil[3]) //4A
        .itemInputs('cosmiccore:' + luminon[2]) //3B
        .itemOutputs('cosmiccore:' + luminon[6]) //3B
        .itemOutputs('cosmiccore:' + vexil[4]) //2A
        .duration(80)
        .EUt(GTValues.VA[GTValues.UV]);
    event.recipes.gtceu.arcane_folding('frontiers:arcane_fold_12')
        .itemInputs('cosmiccore:' + vexil[4]) //5A
        .itemInputs('cosmiccore:' + luminon[2]) //3B
        .itemOutputs('cosmiccore:' + vexil[4]) //5A
        .itemOutputs('cosmiccore:' + vexil[5]) //6B
        .duration(80)
        .EUt(GTValues.VA[GTValues.UV]);


    //Fourth Row (4B)
    event.recipes.gtceu.arcane_folding('frontiers:arcane_fold_13')
        .itemInputs('cosmiccore:' + vexil[0])
        .itemInputs('cosmiccore:' + luminon[3]) //4B
        .itemOutputs('cosmiccore:' + vexil[1]) //GRAY : 2B
        .itemOutputs('cosmiccore:' + vexil[0]) //RED : 1A
        .duration(80)
        .EUt(GTValues.VA[GTValues.UV]);
    event.recipes.gtceu.arcane_folding('frontiers:arcane_fold_14')
        .itemInputs('cosmiccore:' + vexil[1])
        .itemInputs('cosmiccore:' + luminon[3]) //4B
        .itemOutputs('cosmiccore:' + vexil[4]) //GRAY : 5A
        .itemOutputs('cosmiccore:' + luminon[5]) //RED : 6B
        .duration(80)
        .EUt(GTValues.VA[GTValues.UV]);
    event.recipes.gtceu.arcane_folding('frontiers:arcane_fold_15')
        .itemInputs('cosmiccore:' + vexil[2])
        .itemInputs('cosmiccore:' + luminon[3]) //4B
        .itemOutputs('cosmiccore:' + vexil[2]) //GRAY : 3A
        .itemOutputs('cosmiccore:' + luminon[3]) //RED : 4B
        .duration(80)
        .EUt(GTValues.VA[GTValues.UV]);
    event.recipes.gtceu.arcane_folding('frontiers:arcane_fold_16')
        .itemInputs('cosmiccore:' + vexil[3])
        .itemInputs('cosmiccore:' + luminon[3]) //4B
        .itemOutputs('cosmiccore:' + vexil[4]) //GRAY : 5A
        .itemOutputs('cosmiccore:' + luminon[5]) //RED : 6B
        .duration(80)
        .EUt(GTValues.VA[GTValues.UV]);
    event.recipes.gtceu.arcane_folding('frontiers:arcane_fold_17')
        .itemInputs('cosmiccore:' + vexil[4])
        .itemInputs('cosmiccore:' + luminon[3]) //4B
        .itemOutputs('cosmiccore:' + vexil[3]) //GRAY : 4A
        .itemOutputs('cosmiccore:' + luminon[4]) //RED : 5B
        .duration(80)
        .EUt(GTValues.VA[GTValues.UV]);
    event.recipes.gtceu.arcane_folding('frontiers:arcane_fold_18')
        .itemInputs('cosmiccore:' + vexil[5])
        .itemInputs('cosmiccore:' + luminon[3]) //4B
        .itemOutputs('cosmiccore:' + vexil[3]) //GRAY : 4A
        .itemOutputs('cosmiccore:' + luminon[5]) //RED : 6B
        .duration(80)
        .EUt(GTValues.VA[GTValues.UV]);
})

/*
VEXIL = A
Reference
1A - tessaron
2A - vexiun
3A - ambrion
4A - ethera
5A - pyrith
6A - tenaebrum
7A - crystala
8A - chronia


Neutral Center

LUMINON = B

1B - echon
2B - mystrix
3B - dynamia
4B - seraphon
5B - nyxon
6B - spectil
7B - phantnon
8B - esson







*/