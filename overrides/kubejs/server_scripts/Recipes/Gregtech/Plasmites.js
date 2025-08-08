  
  
  ServerEvents.recipes(event => {

  event.recipes.gtceu.plasmite_forge('frontiers:copper_forging')
    .itemInputs(['cosmiccore:saturated_sculk_hemocytoblast', 'malum:aqueous_spirit', 'malum:aerial_spirit'])
    .inputFluids('gtceu:copper 2304')
    .itemOutputs('gtceu:copper_plasmites')
    .duration(90)
    .EUt(GTValues.VA[GTValues.ZPM]);

  event.recipes.gtceu.plasmite_forge('frontiers:europium_forging')
    .itemInputs(['cosmiccore:saturated_sculk_hemocytoblast', 'malum:aqueous_spirit', 'malum:infernal_spirit'])
    .inputFluids('gtceu:europium 2304','gtceu:ghost_matter_plasma 3200')
    .itemOutputs('gtceu:europium_plasmites')
    .duration(90)
    .EUt(GTValues.VA[GTValues.ZPM]);

  event.recipes.gtceu.plasmite_forge('frontiers:graphene_forging')
    .itemInputs(['gtceu:activated_carbon_dust', '4x gtceu:graphene_dust', '16x gtceu:carbon_fibers'])
    .inputFluids('gtceu:carbon 2304','gtceu:ghost_matter_plasma 3200')
    .itemOutputs('gtceu:graphene_plasmites')
    .duration(290)
    .EUt(GTValues.VA[GTValues.ZPM]);



  })
  
  

