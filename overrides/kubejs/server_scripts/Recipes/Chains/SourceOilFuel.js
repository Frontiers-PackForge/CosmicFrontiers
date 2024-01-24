/*
  Source Oil
  (feat. Ghostipedia Understanding 0 Chemistry)
  Mage Bloom and Ethanol both come from various Flora Nurturer Loops. Both Use Nether Sediment as their nutrient base 
  
  AUX STEP : WASTE WATER UUUUH UUUUH WHAT MACHINE AUUUUGH?????
  10000MB of Organic Waste Water => 10000MB Water + 30x Bio Chaff
  
  STEP ONE : CHEM BATH
  Water 1000MB + 4 Mage Blooms => 4 Washed Bloom Petals + 1000 Organic Waste Waster 

  STEP TWO : CHEMICAL REACTOR @ MV
  500MB of Piranha Solution  + 1500MB H2O + 4 Washed Bloom Petals => Source Leeched Solution 2000 + 25% for Bio Chaff 1x + 50% chance for Bio Chaff 1x

  
  STEP THREE : CHEMICAL DEHYDRATOR
  3000 Source Leeched Solution + ??? => 1000MB of I'll do the rest Later -Ghost This Evening 
*/




ServerEvents.recipes(event => {

  event.recipes.gtceu.chemical_reactor('gtceu:centrifuge/source_oil_spinny')
    .itemInputs('4x ars_nouveau:magebloom')
    .inputFluids('gtceu:potent_mana 1000')
    .inputFluids('water 3000')
    .outputFluids('gtceu:source_oils 4000')
    .duration(160)
    .EUt(8);
  event.recipes.gtceu.chemical_reactor('gtceu:centrifuge/source_enhanced_bio_fuel')
    .itemInputs('gtceu:tiny_sodium_hydroxide_dust')
    .inputFluids('gtceu:source_oils 6000')
    .inputFluids('gtceu:ethanol 1000')
    .outputFluids('gtceu:source_enhanced_bio_fuel 6000')
    .outputFluids('gtceu:glycerol 1000')
    .duration(600)
    .EUt(GTValues.VA[GTValues.LV]);
  event.recipes.gtceu.combustion_generator('combustion_source_fuel')
    .inputFluids('gtceu:source_enhanced_bio_fuel 1')
    .duration(15)
    .EUt(-32)
})