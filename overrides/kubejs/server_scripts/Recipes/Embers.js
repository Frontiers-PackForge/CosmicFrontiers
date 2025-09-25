//A Simple "REMOVE AND HIDE" function akin to GroovyScript's Jei.yeet() function - This will tag the item for hiding from recipe viewers and remove the recipe
//This one also has a tag removal function to remove the forge:tools/hammers tag from what is removed so bear that in mind if you copy/paste this around
let yeet = (itemName) => {
  ServerEvents.recipes(event => {
    event.remove({ output: itemName })
  })
  ServerEvents.tags('item', event => {
    event.remove('forge:tools/hammers', itemName)
    event.add('c:hidden_from_recipe_viewers', itemName)
  })
}

// yeet('embers:tinker_hammer');
yeet('embers:grandhammer');
ServerEvents.recipes(event => {

  // console.log('[EMBERS.JS] - Sealing Successful')
  // event.remove({ mod: 'embers' })
})
ServerEvents.tags('item', event => {

  //Other Modded Plate Removals From the Forge Tag - Remember to Hide in EMI if needed below
  event.remove('forge:plates/iron', 'embers:iron_plate')
  event.remove('forge:plates/copper', 'embers:copper_plate')
  event.remove('forge:plates/lead', 'embers:lead_plate')
  event.remove('forge:plates/silver', 'embers:silver_plate')
  //Hiding the Above Removals from EMI
  event.add('c:hidden_from_recipe_viewers', 'embers:iron_plate')
  event.add('c:hidden_from_recipe_viewers', 'embers:copper_plate')
  event.add('c:hidden_from_recipe_viewers', 'embers:lead_plate')
  event.add('c:hidden_from_recipe_viewers', 'embers:silver_plate')
  event.remove('forge:tools/hammers', 'embers:tinker_hammer')

})
ServerEvents.recipes(event => {

  event.remove({ output: 'embers:iron_plate' })
  event.remove({ output: 'embers:copper_plate' })
  event.remove({ output: 'embers:lead_plate' })
  event.remove({ output: 'embers:silver_plate' })


  event.recipes.gtceu.dawn_forge('frontiers:dawn_eldritch_eye')
    .notConsumable('embers:iron_aspectus')
    .notConsumable('embers:copper_aspectus')
    .notConsumable('2x embers:lead_aspectus')
    .itemInputs(['embers:archaic_circuit', '2x embers:archaic_brick', '2x minecraft:coal'])
    .itemOutputs('embers:eldritch_insignia')
    .emberInput(2000)
    .duration(150)
    .EUt(GTValues.VA[GTValues.LV]);

  event.recipes.gtceu.dawn_forge('frontiers:dawn_lv_core')
    .notConsumable('embers:iron_aspectus')
    .notConsumable('embers:copper_aspectus')
    .itemInputs(['embers:ember_shard', 'gtceu:runed_steel_foil', 'gtceu:dawnstone_plate', 'gtceu:runed_steel_foil', 'gtceu:dawnstone_plate'])
    .itemOutputs('cosmiccore:lv_wildfire_core')
    .emberInput(750)
    .duration(60)
    .EUt(GTValues.VA[GTValues.LV], 4);

  event.recipes.gtceu.dawn_forge('frontiers:dawn_mv_core')
    .notConsumable('embers:iron_aspectus')
    .notConsumable('embers:copper_aspectus')
    .itemInputs(['embers:ember_crystal', 'gtceu:soul_stained_steel_foil', 'gtceu:aluminium_plate', 'gtceu:soul_stained_steel_foil', 'gtceu:aluminium_plate'])
    .itemOutputs('cosmiccore:mv_wildfire_core')
    .emberInput(750)
    .duration(120)
    .EUt(GTValues.VA[GTValues.LV], 4);


  event.remove({ id: 'embers:dawnstone_plate_hammering' })
  event.remove({ id: 'embers:mixing/molten_dawnstone' })
  event.custom(
    {
      "type": "embers:mixing",
      "inputs": [
        {
          "amount": 2,
          "tag": "forge:copper"
        },
        {
          "amount": 8,
          "tag": "forge:gold"
        }
      ],
      "output": {
        "amount": 10,
        "tag": "forge:molten_dawnstone"
      }
    })

})