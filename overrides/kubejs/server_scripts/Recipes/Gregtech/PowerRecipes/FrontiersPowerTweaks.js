//A Simple "REMOVE AND HIDE" function akin to GroovyScript's Jei.yeet() function - This will tag the item for hiding from recipe viewers and remove the recipe
//This one also has a tag removal function to remove the forge:tools/knives tag from what is removed so bear that in mind if you copy/paste this around
let yeet = (itemName) => {
  ServerEvents.recipes(event => {
    event.remove({ output: itemName })
  })

}
//Removal of Large Boilers and their recipemaps - DO NOT revert these changes, as eventually they will also be stripped out and overwritten via coremod
// YOU HAVE BEEN WARNED, THIS **WILL** RESULT IN IRREVERSIBLE DAMAGE TO WORLDS - NO SUPPORT WILL BE GIVEN FOR PEOPLE WHO IGNORE THIS WARNING
yeet('gtceu:bronze_large_boiler')
yeet('gtceu:steel_large_boiler')
yeet('gtceu:titanium_large_boiler')
yeet('gtceu:tungstensteel_large_boiler')
//Disabled Until 0.6.0 - Recipes Will vanish then.
ServerEvents.recipes(event => {
  // event.remove({ id: /([^:]+):large_boiler(.*)$/ })


  event.recipes.gtceu.vorax('vorax_tier_3')
    .perTick(true)
    .inputFluids('gtceu:nickel_plasma 15')
    .inputFluids('gtceu:homeward_resin_plasma 15')
    .perTick(false)
    .duration(20)
    .EUt(-3750000, 64)

  event.remove({ id: 'gtceu:combustion_generator/naphtha' })
  event.recipes.gtceu.combustion_generator('worse_naphtha')
    .inputFluids('gtceu:naphtha 1')
    .duration(6)
    .EUt(-GTValues.V[GTValues.LV])



  //NBZ has power density cut by about 40% 
  //Still insanely strong for the volume and this is a trial run of what CEU's nerfs will look like
  event.remove({ id: 'gtceu:gas_turbine/nitrobenzene' })
  event.recipes.gtceu.combustion_generator('worse_nitrobenzene')
    .inputFluids('gtceu:nitrobenzene 1')
    .duration(25)
    .EUt(-GTValues.V[GTValues.LV])



})




