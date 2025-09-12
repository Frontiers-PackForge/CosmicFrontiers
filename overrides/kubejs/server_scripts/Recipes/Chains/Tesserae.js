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

  event.recipes.gtceu.aio_lithography_processor("fused_logo_wafer")
    .itemInputs(['gtceu:highly_advanced_soc', '2x cosmiccore:wafer_pragmiso', '2x cosmiccore:alchemia_wafer'])
    .chancedItemOutputLogic($ChanceLogic.XOR)
    .chancedOutput('4x cosmiccore:fused_wafer_of_logos', 9000, 0)
    .chancedOutput('2x cosmiccore:alchemia_wafer', 500, 0)
    .chancedOutput('2x cosmiccore:wafer_pragmiso', 500, 0)
    .duration(220)
    .EUt(GTValues.VA[GTValues.UV])



  event.recipes.gtceu.aio_lithography_processor("pragmiso")
    .itemInputs()
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


  event.recipes.gtceu.cutter("wafer1_to_chip1")
    .itemInputs('cosmiccore:refined_resonant_wafer')
    .itemOutputs('4x cosmiccore:refined_harmonics_wafer')
    .duration(220)
    .EUt(GTValues.VA[GTValues.UV])
    
  event.recipes.gtceu.cutter("wafer2_to_chip2")
    .itemInputs('cosmiccore:nullified_harmonics_wafer')
    .itemOutputs('4x cosmiccore:null_refined_resonant_wafer')
    .duration(220)
    .EUt(GTValues.VA[GTValues.UV])

})
//Folding Recipes I didn't want to do this in the same event because god wtf is this i hate it i understand it
//but god sure doesn't want me to unleash this on the world there is a higher power out there begging me
//literally pleading for me to not let this exist this is horrible this is awful
//the double for loop is a sin but at least it isn't the like 8 deep nested for loop inside of blockPattern.java
//that thing actually is the most hellish thing i've ever had to deal with and if i have to be reminded
//of it's awful existence you have to as well for reading this i no longer have mercy for you why are you here.
// This was 4 hours of head smashing and asking llms and friends how math and javascript worked, you forced my hand.
ServerEvents.recipes(function (event) {
  var vexilItems = [
    "tessaron", "vexiun", "ambrion", "ethera",
    "pyrith", "tenaebrum", "crystala", "chronia"
  ];
  var luminonItems = [
    "echon", "mystrix", "dynamia", "seraphon",
    "nyxon", "spectil", "phantnon", "esson"
  ];
  var allSixteenItems = vexilItems.concat(luminonItems);

  var starterItems = ["tessaron", "vexiun", "ambrion", "ethera"];
  var isStarterItem = { tessaron: true, vexiun: true, ambrion: true, ethera: true };

  var nonStarterItems = [];
  for (var i = 0; i < allSixteenItems.length; i++) {
    var itemName = allSixteenItems[i];
    if (!isStarterItem[itemName]) nonStarterItems.push(itemName);
  }

  var recipeDurationTicks = 80;
  var recipeEnergyEUt = GTValues.VA[GTValues.UV];

  function createRecipeId(inputOne, inputTwo, suffix) {
    return "frontiers:arcane_fold_" + inputOne + "__" + inputTwo + (suffix || "");
  }

  var usedRecipeIds = {};
  var seenInputPairs = {};

  function makeInputKey(inputOne, inputTwo) {
    return inputOne + "|" + inputTwo;
  }

  function addArcaneFoldingRecipe(inputOne, inputTwo, outputOne, outputTwo, suffix) {
    if (inputOne === inputTwo) return;
    if (outputOne === outputTwo) return;
    if (outputOne === inputOne || outputOne === inputTwo) return;
    if (outputTwo === inputOne || outputTwo === inputTwo) return;

    var inputKey = makeInputKey(inputOne, inputTwo);
    if (seenInputPairs[inputKey]) return;
    seenInputPairs[inputKey] = true;

    var recipeId = createRecipeId(inputOne, inputTwo, suffix);
    if (usedRecipeIds[recipeId]) return;
    usedRecipeIds[recipeId] = true;

    event.recipes.gtceu.arcane_folding(recipeId)
      .itemInputs("cosmiccore:" + inputOne)
      .itemInputs("cosmiccore:" + inputTwo)
      .itemOutputs("cosmiccore:" + outputOne)
      .itemOutputs("cosmiccore:" + outputTwo)
      .duration(recipeDurationTicks)
      .EUt(recipeEnergyEUt);
  }

  function pickValidItemFromRing(itemRing, startIndex, forbiddenItems) {
    var length = itemRing.length;
    for (var step = 0; step < length; step++) {
      var index = (startIndex + step) % length;
      var candidate = itemRing[index];
      if (!forbiddenItems[candidate]) return { value: candidate, index: index };
    }
    return { value: itemRing[startIndex % length], index: startIndex % length };
  }

  var permutationRingSixteen = new Array(16);
  for (var a = 0; a < 16; a++) permutationRingSixteen[a] = allSixteenItems[(11 * a + 7) % 16];

  var permutationRingTwelve = new Array(12);
  for (var b = 0; b < 12; b++) permutationRingTwelve[b] = nonStarterItems[(5 * b + 3) % 12];

  for (var iStarter = 0; iStarter < 4; iStarter++) {
    for (var jStarter = 0; jStarter < 4; jStarter++) {
      if (iStarter === jStarter) continue;

      var starterOne = starterItems[iStarter];
      var starterTwo = starterItems[jStarter];

      var indexSixteen = (iStarter * 9 + jStarter * 11 + 3) % 16;

      var forbiddenOutputsPhaseOne = {};
      forbiddenOutputsPhaseOne[starterOne] = true;
      forbiddenOutputsPhaseOne[starterTwo] = true;
      var firstOutputPhaseOne = pickValidItemFromRing(permutationRingSixteen, indexSixteen, forbiddenOutputsPhaseOne);

      var forbiddenOutputsSecondPhaseOne = {};
      forbiddenOutputsSecondPhaseOne[starterOne] = true;
      forbiddenOutputsSecondPhaseOne[starterTwo] = true;
      forbiddenOutputsSecondPhaseOne[firstOutputPhaseOne.value] = true;
      var secondOutputPhaseOne = pickValidItemFromRing(permutationRingSixteen, firstOutputPhaseOne.index + 1, forbiddenOutputsSecondPhaseOne);

      addArcaneFoldingRecipe(starterOne, starterTwo, firstOutputPhaseOne.value, secondOutputPhaseOne.value, "_seed16");
    }
  }

  for (var iStarterOther = 0; iStarterOther < 4; iStarterOther++) {
    var starterItem = starterItems[iStarterOther];
    for (var jOther = 0; jOther < nonStarterItems.length; jOther++) {
      var nonStarterItem = nonStarterItems[jOther];

      var indexTwelve = (iStarterOther * 7 + jOther * 5 + 4) % 12;
      var forbiddenOutputsPhaseTwo = {};
      forbiddenOutputsPhaseTwo[starterItem] = true;
      forbiddenOutputsPhaseTwo[nonStarterItem] = true;
      var firstOutputPhaseTwo = pickValidItemFromRing(permutationRingTwelve, indexTwelve, forbiddenOutputsPhaseTwo);

      var indexSixteenB = (iStarterOther * 11 + jOther * 9 + 1) % 16;
      var forbiddenOutputsSecondPhaseTwo = {};
      forbiddenOutputsSecondPhaseTwo[starterItem] = true;
      forbiddenOutputsSecondPhaseTwo[nonStarterItem] = true;
      forbiddenOutputsSecondPhaseTwo[firstOutputPhaseTwo.value] = true;
      var secondOutputPhaseTwo = pickValidItemFromRing(permutationRingSixteen, indexSixteenB, forbiddenOutputsSecondPhaseTwo);

      addArcaneFoldingRecipe(starterItem, nonStarterItem, firstOutputPhaseTwo.value, secondOutputPhaseTwo.value, "_starter_other");
    }
  }

  for (var iOther = 0; iOther < nonStarterItems.length; iOther++) {
    for (var jOtherB = iOther + 1; jOtherB < nonStarterItems.length; jOtherB++) {
      var otherItemOne = nonStarterItems[iOther];
      var otherItemTwo = nonStarterItems[jOtherB];

      var indexTwelvePair = (iOther * 3 + jOtherB * 8 + 6) % 12;

      var forbiddenOutputsPhaseThree = {};
      forbiddenOutputsPhaseThree[otherItemOne] = true;
      forbiddenOutputsPhaseThree[otherItemTwo] = true;
      var firstOutputPhaseThree = pickValidItemFromRing(permutationRingTwelve, indexTwelvePair, forbiddenOutputsPhaseThree);

      var forbiddenOutputsSecondPhaseThree = {};
      forbiddenOutputsSecondPhaseThree[otherItemOne] = true;
      forbiddenOutputsSecondPhaseThree[otherItemTwo] = true;
      forbiddenOutputsSecondPhaseThree[firstOutputPhaseThree.value] = true;
      var secondOutputPhaseThree = pickValidItemFromRing(permutationRingTwelve, firstOutputPhaseThree.index + 1, forbiddenOutputsSecondPhaseThree);

      addArcaneFoldingRecipe(otherItemOne, otherItemTwo, firstOutputPhaseThree.value, secondOutputPhaseThree.value, "_perm12");
    }
  }
});



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