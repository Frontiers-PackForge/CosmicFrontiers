ServerEvents.recipes(event => {
  //Waxed Leather
  event.shaped('cosmiccore:waxed_leather', [
    ' W ',
    'WLW',
    ' W '
  ], {
    W: 'minecraft:honeycomb',
    L: 'minecraft:leather'
  }
  )
  // event.remove({ mod: 'integrateddynamics' })
  //Crafting Recipes
  event.remove({ output: 'integrateddynamics:drying_basin' })
  event.remove({ type: 'integrateddynamics:mechanical_squeezer' })
  event.remove({ type: 'integrateddynamics:squeezer' })

  event.remove({id:'integrateddynamics:crafting/squeezer'})
  event.remove({id:'integrateddynamics:crafting/mechanical_squeezer'})
  event.shaped('integrateddynamics:squeezer', [
    'BSB',
    'A A',
    'TWT'
  ], {
    S: 'gtceu:steel_block',
    W: 'gtceu:double_steel_plate',
    T: 'gtceu:treated_wood_planks',
    A: 'gtceu:treated_wood_rod',
    B: 'gtceu:treated_wood_frame'
  })
  event.shaped('integrateddynamics:mechanical_squeezer', [
    'BSB',
    'A A',
    'TWT'
  ], {
    S: 'gtceu:steel_block',
    W: 'gtceu:double_steel_plate',
    T: 'gtceu:treated_wood_planks',
    A: 'ulvcovm:ulv_electric_piston',
    B: 'gtceu:treated_wood_frame'
  })

  // Custom Recipe Handler? - Reference - Otherwise just dump the recipe in questions JSON into event.custom()
  let drying = (dryingoutput, dryingInput, duration) => {
    event.custom({
      "type": "integrateddynamics:drying_basin",
      "item": dryingInput,
      "duration": duration,
      "result": { item: dryingoutput }
    })
  }
  let dryingFluid = (dryingoutput, dryingInput, inputAmount, duration) => {
    event.custom({
      "type": "integrateddynamics:drying_basin",
      "fluid": {
        "fluid": dryingInput,
        "amount": inputAmount
      },
      "duration": duration,
      "result": {
        "item": { item: dryingoutput }
      }
    })
  }
  let squeezing = (squeezingInput,squeezingOutput, fluidAmount) => {
    event.custom({
      "type": "integrateddynamics:squeezer",
      "item": squeezingInput,
      "result": {
        "fluid": {
          "fluid": squeezingOutput,
          "amount": fluidAmount
        }
      }
    })
  }
  let mech_squeeze = (squeezingInput,squeezingOutput, fluidAmount) => {
    event.custom({
      "type": "integrateddynamics:mechanical_squeezer",
      "item": squeezingInput,
      "result": {
        "fluid": {
          "fluid": squeezingOutput,
          "amount": fluidAmount
        }
      },
      "duration": 20
    })
  }




  dryingFluid('gtceu:soulresin_ingot','gtceu:soulresin', 144 ,40)    
  squeezing('cold_sweat:soul_sprout','gtceu:soulresin', 144)
  mech_squeeze('cold_sweat:soul_sprout','gtceu:soulresin', 144)
  squeezing('nethersdelight:propelpearl','gtceu:cinderwax', 144)
  mech_squeeze('nethersdelight:propelpearl','gtceu:cinderwax', 144)








})