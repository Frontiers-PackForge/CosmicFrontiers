ServerEvents.recipes(event => {
    let TreesOW = [
        'minecraft:oak',
        'minecraft:spruce',
        'minecraft:birch',
        'minecraft:jungle',
        'minecraft:acacia',
        'minecraft:dark_oak',
        'minecraft:cherry',
        'gtceu:rubber',
        'biomesoplenty:fir',
        'biomesoplenty:redwood',
        'biomesoplenty:mahogany',
        'biomesoplenty:jacaranda',
        'biomesoplenty:palm',
        'biomesoplenty:willow',
        'biomesoplenty:dead',
        'biomesoplenty:magic',
        'biomesoplenty:umbran',
        'integrateddynamics:menril',
        'occultism:otherworld',
        'architects_palette:twisted',
   ]

   TreesOW.forEach(tree => {
    event.recipes.gtceu.arboreal_growth_facility(`${tree}_nether_sediment`)
        .notConsumable(`1x ${tree}_sapling`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:nether_sediment_sludge 100', 'gtceu:air 100'])
        .itemOutputs(`2x ${tree}_log`, '4x minecraft:stick')
        .chancedOutput(`${tree}_sapling`, 500, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])
    event.recipes.gtceu.arboreal_growth_facility(`${tree}_aether_sediment`)
        .notConsumable(`1x ${tree}_sapling`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:aether_augmented_sediment 100', 'gtceu:air 100'])
        .itemOutputs(`4x ${tree}_log`, '6x minecraft:stick')
        .chancedOutput(`${tree}_sapling`, 1000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV])      
   })

    event.recipes.gtceu.arboreal_growth_facility(`mangrove_nether_sediment`)
        .notConsumable(`1x minecraft:mangrove_propagule`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:nether_sediment_sludge 100', 'gtceu:air 100'])
        .itemOutputs(`2x minecraft:mangrove_log`, '2x minecraft:mangrove_roots', '4x minecraft:stick')
        .chancedOutput(`minecraft:mangrove_propagule`, 500, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])
    event.recipes.gtceu.arboreal_growth_facility(`mangrove_aether_sediment`)
        .notConsumable(`1x minecraft:mangrove_propagule`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:aether_augmented_sediment 100', 'gtceu:air 100'])
        .itemOutputs(`4x minecraft:mangrove_log`, '4x minecraft:mangrove_roots', '6x minecraft:stick')
        .chancedOutput(`minecraft:mangrove_propagule`, 1000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV])   

   let TreesFruit = [
    'croptopia:almond',
    'croptopia:apple',
    'croptopia:apricot',
    'croptopia:avocado',
    'croptopia:banana',
    'croptopia:cashew',
    'croptopia:cherry',
    'croptopia:coconut',
    'croptopia:date',
    'croptopia:dragonfruit',
    'croptopia:fig',
    'croptopia:grapefruit',
    'croptopia:kumquat',
    'croptopia:lemon',
    'croptopia:lime',
    'croptopia:mango',
    'croptopia:nectarine',
    'croptopia:nutmeg',
    'croptopia:orange',
    'croptopia:peach',
    'croptopia:pear',
    'croptopia:pecan',
    'croptopia:persimmon',
    'croptopia:plum',
    'croptopia:star_fruit',
    'croptopia:walnut',
    'croptopia:cinnamon'
   ]

   let TreesArs = [
    'ars_nouveau:green_archwood',
    'ars_nouveau:vexing_archwood',
    'ars_nouveau:blazing_archwood',
    'ars_nouveau:cascading_archwood',
   ]

   let FungiNE = [
    'minecraft:warped',
    'minecraft:crimson'
   ]
   //'biomesoplenty:hellbark_sapling'

   let TreesAE = [
    'deep_aether:roseroot_sapling',
    'deep_aether:blue_roseroot_sapling',
    'deep_aether:yagroot_sapling',
    'deep_aether:cruderoot_sapling',
    'deep_aether:conberry_sapling',
    'deep_aether:sunroot_sapling',
    'aether:skyroot_sapling',
    'aether:golden_oak_sapling',
    'aether_redux:blightwillow_sapling',
    'aether_redux:blighted_skyroot_sapling',
    'aether_redux:glacia_sapling',
    'aether_redux:purple_glacia_sapling',
    'aether_redux:gilded_oak_sapling',
    'aether_redux:crystal_sapling',
    'aether_redux:fieldsproot_sapling',
   ]
   //'aether_redux:zanberry_bush_stem'
})