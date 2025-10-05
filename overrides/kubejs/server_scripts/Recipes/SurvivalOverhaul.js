
let yeet = (itemName) => {
       ServerEvents.recipes(event => {
              event.remove({ output: itemName })
       })
       ServerEvents.tags('item', event => {
              console.log('[5] - [1] - TAG-WATCHER')
              event.add('c:hidden_from_recipe_viewers', itemName)

       })
}
yeet('legendarysurvivaloverhaul:seasonal_calendar')

ServerEvents.compostableRecipes(event => {
    event.add(Item.of('legendarysurvivaloverhaul:ice_fern_seeds'), 0.3)
    event.add(Item.of('legendarysurvivaloverhaul:sun_fern_seeds'), 0.3)
    event.add(Item.of('legendarysurvivaloverhaul:ice_fern_leaf'), 0.65)
    event.add(Item.of('legendarysurvivaloverhaul:sun_fern_leaf'), 0.65)
    event.add(Item.of('legendarysurvivaloverhaul:ice_fern_gold_leaf'), 1.0)
    event.add(Item.of('legendarysurvivaloverhaul:sun_fern_gold_leaf'), 1.0)
})
ServerEvents.recipes(event => {
    //cooling coat
    event.remove({ output: 'legendarysurvivaloverhaul:cooling_coat_1' }) 
    event.shaped( 'legendarysurvivaloverhaul:cooling_coat_1', [
        'DFP',
        'FPF',
        'PFD'
    ], {
        P: 'minecraft:stick',
        D: 'gtceu:iron_plate',
        F: 'legendarysurvivaloverhaul:cold_string',
    })
    event.remove({ output: 'legendarysurvivaloverhaul:cooling_coat_2' }) 
    event.shaped( 'legendarysurvivaloverhaul:cooling_coat_2', [
        'DFP',
        'FPF',
        'PFD'
    ], {
        P: 'gtceu:soul_stained_steel_rod',
        D: 'malum:soul_stained_steel_plating',
        F: 'legendarysurvivaloverhaul:cooling_coat_1',
    })
    event.remove({ output: 'legendarysurvivaloverhaul:cooling_coat_3' }) 
    event.shaped( 'legendarysurvivaloverhaul:cooling_coat_3', [
        'DFP',
        'FPF',
        'PFD'
    ], {
        P: 'gtceu:stainless_steel_rod',
        D: 'kubejs:terraweave_cloth',
        F: 'legendarysurvivaloverhaul:cooling_coat_2',
    })
    //heating coat
    event.remove({ output: 'legendarysurvivaloverhaul:heating_coat_1' }) 
    event.shaped( 'legendarysurvivaloverhaul:heating_coat_1', [
        'DFP',
        'FPF',
        'PFD'
    ], {
        P: 'minecraft:stick',
        D: 'gtceu:iron_plate',
        F: 'legendarysurvivaloverhaul:warm_string',
    })
    event.remove({ output: 'legendarysurvivaloverhaul:heating_coat_2' }) 
    event.shaped( 'legendarysurvivaloverhaul:heating_coat_2', [
        'DFP',
        'FPF',
        'PFD'
    ], {
        P: 'gtceu:soul_stained_steel_rod',
        D: 'malum:soul_stained_steel_plating',
        F: 'legendarysurvivaloverhaul:heating_coat_1',
    })
    event.remove({ output: 'legendarysurvivaloverhaul:heating_coat_3' }) 
    event.shaped( 'legendarysurvivaloverhaul:heating_coat_3', [
        'DFP',
        'FPF',
        'PFD'
    ], {
        P: 'gtceu:stainless_steel_rod',
        D: 'kubejs:terraweave_cloth',
        F: 'legendarysurvivaloverhaul:heating_coat_2',
    })
    //thermal coat
    event.remove({ output: 'legendarysurvivaloverhaul:thermal_coat_1' }) 
    event.shaped( 'legendarysurvivaloverhaul:thermal_coat_1', [
        'AD',
        'DS'
    ], {
        A: 'legendarysurvivaloverhaul:cooling_coat_1',
        D: 'minecraft:stick',
        S: 'legendarysurvivaloverhaul:heating_coat_1',
    })
    event.remove({ output: 'legendarysurvivaloverhaul:thermal_coat_2' }) 
    event.shaped( 'legendarysurvivaloverhaul:thermal_coat_2', [
        'AD',
        'DS'
    ], {
        A: 'legendarysurvivaloverhaul:cooling_coat_2',
        D: 'gtceu:soul_stained_steel_rod',
        S: 'legendarysurvivaloverhaul:heating_coat_2',
    })
    event.remove({ output: 'legendarysurvivaloverhaul:thermal_coat_3' }) 
    event.shaped( 'legendarysurvivaloverhaul:thermal_coat_3', [
        'AD',
        'DS'
    ], {
        A: 'legendarysurvivaloverhaul:cooling_coat_3',
        D: 'gtceu:stainless_steel_rod',
        S: 'legendarysurvivaloverhaul:heating_coat_3',
    })
   //sewing table 
    event.remove({ output: 'legendarysurvivaloverhaul:sewing_table' }) 
    event.shaped( 'legendarysurvivaloverhaul:sewing_table', [
        'DAA',
        'R A',
        'SSS'
    ], {
        A: 'gtceu:iron_plate',
        D: 'gtceu:iron_rod',
        S: '#minecraft:wooden_slabs',
        R: 'minecraft:redstone_dust'
    })
    //boiler
    event.remove({ id: 'legendarysurvivaloverhaul:heater' }) 
    event.shaped( 'legendarysurvivaloverhaul:heater', [
        ' A ',
        'AFA',
        'SCS'
    ], {
        A: 'gtceu:copper_plate',
        F: 'minecraft:campfire',
        S: 'gtceu:iron_plate',
        C: 'minecraft:coal_block'
    })
    //icebox
    event.remove({ id: 'legendarysurvivaloverhaul:cooler' }) 
    event.shaped( 'legendarysurvivaloverhaul:cooler', [
        'ASA',
        'ARA',
        'EAE'
    ], {
        A: 'gtceu:treated_wood_planks',
        R: 'minecraft:redstone_torch',
        S: 'gtceu:ice_dust',
        E: 'gtceu:iron_plate',
    })
       event.recipes.gtceu.spooling_machine('cold_string')
              .itemInputs(['minecraft:string', 'legendarysurvivaloverhaul:ice_fern_leaf'])
              .itemOutputs('legendarysurvivaloverhaul:cold_string')
              .duration(40)
              .EUt(8)
       event.recipes.gtceu.spooling_machine('warm_string')
              .itemInputs(['minecraft:string', 'legendarysurvivaloverhaul:sun_fern_leaf'])
              .itemOutputs('legendarysurvivaloverhaul:warm_string')
              .duration(40)
              .EUt(8)
})