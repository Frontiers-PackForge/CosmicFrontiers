ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('arboreal_growth_facility')
        .itemInputs(['gtceu:hv_machine_hull', '4x #gtceu:circuits/hv', '2x gtceu:hv_robot_arm', 'gtceu:hv_electric_pump', 'minecraft:redstone_lamp', '2x gtceu:terrasteel_screw'])
        .inputFluids('gtceu:aether_augmented_sediment 1250')
        .itemOutputs('gtceu:arboreal_growth_facility')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV])

    let TreesOW = [
        'minecraft:oak',
        'minecraft:spruce',
        'minecraft:birch',
        'minecraft:jungle',
        'minecraft:acacia',
        'minecraft:dark_oak',
        'minecraft:cherry',
        'biomesoplenty:fir',
        'biomesoplenty:redwood',
        'biomesoplenty:mahogany',
        'biomesoplenty:jacaranda',
        'biomesoplenty:palm',
        'biomesoplenty:willow',
        'biomesoplenty:dead',
        'biomesoplenty:magic',
        'biomesoplenty:umbran',
        'biomesoplenty:hellbark',
        'occultism:otherworld',
        'architects_palette:twisted',
   ]

   TreesOW.forEach(tree => {
    event.recipes.gtceu.arboreal_growth_facility(`${tree}_nether_sediment`)
        .notConsumable(`1x ${tree}_sapling`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:nether_sediment_sludge 100', 'gtceu:air 100'])
        .itemOutputs(`3x ${tree}_log`, '4x minecraft:stick')
        .chancedOutput(`${tree}_sapling`, 500, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])
    event.recipes.gtceu.arboreal_growth_facility(`${tree}_aether_sediment`)
        .notConsumable(`1x ${tree}_sapling`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:aether_augmented_sediment 100', 'gtceu:air 100'])
        .itemOutputs(`8x ${tree}_log`, '6x minecraft:stick')
        .chancedOutput(`${tree}_sapling`, 1000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV])
   })

    event.recipes.gtceu.arboreal_growth_facility(`mangrove_nether_sediment`)
        .notConsumable(`1x minecraft:mangrove_propagule`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:nether_sediment_sludge 100', 'gtceu:air 100'])
        .itemOutputs(`3x minecraft:mangrove_log`, '3x minecraft:mangrove_roots', '4x minecraft:stick')
        .chancedOutput(`minecraft:mangrove_propagule`, 500, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])
    event.recipes.gtceu.arboreal_growth_facility(`mangrove_aether_sediment`)
        .notConsumable(`1x minecraft:mangrove_propagule`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:aether_augmented_sediment 100', 'gtceu:air 100'])
        .itemOutputs(`8x minecraft:mangrove_log`, '8x minecraft:mangrove_roots', '6x minecraft:stick')
        .chancedOutput(`minecraft:mangrove_propagule`, 1000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV])
        
    event.recipes.gtceu.arboreal_growth_facility(`rubber_nether_sediment`)
        .notConsumable(`1x gtceu:rubber_sapling`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:nether_sediment_sludge 100', 'gtceu:air 100'])
        .itemOutputs(`4x gtceu:rubber_log`, '4x gtceu:sticky_resin', '4x minecraft:stick')
        .chancedOutput(`1x gtceu:rubber_sapling`, 500, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])
    event.recipes.gtceu.arboreal_growth_facility(`rubber_aether_sediment`)
        .notConsumable(`1x gtceu:rubber_sapling`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:aether_augmented_sediment 100', 'gtceu:air 100'])
        .itemOutputs(`8x gtceu:rubber_log`, '8x gtceu:sticky_resin', '6x minecraft:stick')
        .chancedOutput(`1x gtceu:rubber_sapling`, 1000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.arboreal_growth_facility(`menril_nether_sediment`)
        .notConsumable(`1x integrateddynamics:menril_sapling`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:nether_sediment_sludge 100', 'gtceu:air 100'])
        .itemOutputs(`3x integrateddynamics:menril_log`, '3x integrateddynamics:menril_berries', '4x minecraft:stick')
        .chancedOutput(`1x integrateddynamics:menril_sapling`, 500, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])
    event.recipes.gtceu.arboreal_growth_facility(`menril_aether_sediment`)
        .notConsumable(`1x integrateddynamics:menril_sapling`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:aether_augmented_sediment 100', 'gtceu:air 100'])
        .itemOutputs(`8x integrateddynamics:menril_log`, '8x integrateddynamics:menril_berries', '6x minecraft:stick')
        .chancedOutput(`1x integrateddynamics:menril_sapling`, 1000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV])


   let TreesFruit = [
    'croptopia:almond',
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
    'croptopia:starfruit',
    'croptopia:walnut',
    'croptopia:cinnamon'
   ]

   TreesFruit.forEach(tree => {
    event.recipes.gtceu.arboreal_growth_facility(`${tree}_nether_sediment`)
        .notConsumable(`1x ${tree}_sapling`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:nether_sediment_sludge 100', 'gtceu:air 100'])
        .itemOutputs('3x minecraft:oak_log', `3x ${tree}`, '4x minecraft:stick')
        .chancedOutput(`${tree}_sapling`, 500, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])
    event.recipes.gtceu.arboreal_growth_facility(`${tree}_aether_sediment`)
        .notConsumable(`1x ${tree}_sapling`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:aether_augmented_sediment 100', 'gtceu:air 100'])
        .itemOutputs('8x minecraft:oak_log', `8x ${tree}`, '6x minecraft:stick')
        .chancedOutput(`${tree}_sapling`, 1000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV])   
   })

   event.recipes.gtceu.arboreal_growth_facility(`apple_nether_sediment`)
        .notConsumable(`1x croptopia:apple_sapling`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:nether_sediment_sludge 100', 'gtceu:air 100'])
        .itemOutputs('3x minecraft:oak_log', '3x minecraft:apple', '6x minecraft:stick')
        .chancedOutput(`1x croptopia:apple_sapling`, 500, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])
    event.recipes.gtceu.arboreal_growth_facility(`apple_aether_sediment`)
        .notConsumable(`1x croptopia:apple_sapling`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:aether_augmented_sediment 100', 'gtceu:air 100'])
        .itemOutputs('8x minecraft:oak_log', '8x minecraft:apple', '6x minecraft:stick')
        .chancedOutput(`1x croptopia:apple_sapling`, 1000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV])


   let TreesArs = [
    'ars_nouveau:green_archwood',
    'ars_nouveau:purple_archwood',
    'ars_nouveau:red_archwood',
    'ars_nouveau:blue_archwood',
   ]
   let FruitsArs = [
    'ars_nouveau:mendosteen_pod',
    'ars_nouveau:bastion_pod',
    'ars_nouveau:bombegranate_pod',
    'ars_nouveau:frostaya_pod',
   ]

   TreesArs.forEach((tree,index) => {
    let fruit = FruitsArs[index]
    event.recipes.gtceu.arboreal_growth_facility(`${tree}_nether_sediment`)
        .notConsumable(`1x ${tree}_sapling`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:nether_sediment_sludge 100', 'gtceu:air 100', 'gtceu:source_oils 50'])
        .itemOutputs(`3x ${tree}_log`, `3x ${fruit}`, '4x minecraft:stick')
        .chancedOutput(`${tree}_sapling`, 500, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])
    event.recipes.gtceu.arboreal_growth_facility(`${tree}_aether_sediment`)
        .notConsumable(`1x ${tree}_sapling`)
        .notConsumable(`1x minecraft:dirt`)
        .inputFluids(['gtceu:aether_augmented_sediment 100', 'gtceu:air 100', 'gtceu:source_oils 50'])
        .itemOutputs(`8x ${tree}_log`, `8x ${fruit}`, '6x minecraft:stick')
        .chancedOutput(`${tree}_sapling`, 1000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV])
   })

   let FungiNE = [
    'minecraft:warped',
    'minecraft:crimson'
   ]

   FungiNE.forEach(tree => {
    event.recipes.gtceu.arboreal_growth_facility(`${tree}_nether_sediment`)
        .notConsumable(`1x ${tree}_fungus`)
        .notConsumable(`1x ${tree}_nylium`)
        .inputFluids(['gtceu:nether_sediment_sludge 200', 'gtceu:nether_air 100'])
        .itemOutputs(`3x ${tree}_stem`,'3x minecraft:shroomlight')
        .chancedOutput(`${tree}_fungus`, 500, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])
    event.recipes.gtceu.arboreal_growth_facility(`${tree}_aether_sediment`)
        .notConsumable(`1x ${tree}_fungus`)
        .notConsumable(`1x ${tree}_nylium`)
        .inputFluids(['gtceu:aether_augmented_sediment 100', 'gtceu:nether_air 100'])
        .itemOutputs(`8x ${tree}_stem`, '8x minecraft:shroomlight')
        .chancedOutput(`${tree}_fungus`, 1000, 0)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV])
   })

   let TreesAE = [
    'aether:golden_oak',
    'deep_aether:roseroot',
    'deep_aether:yagroot',
    'deep_aether:cruderoot',
    'deep_aether:conberry',
    'deep_aether:sunroot',
    'aether:skyroot',
    'aether_redux:blightwillow',
    'aether_redux:glacia',
    'aether_redux:crystal',
    'aether_redux:fieldsproot',
   ]

   TreesAE.forEach(tree => {
    if (tree == 'aether:golden_oak') {
        event.recipes.gtceu.arboreal_growth_facility(`${tree}_aether_sediment`)
            .notConsumable(`1x ${tree}_sapling`)
            .notConsumable('1x aether:enchanted_aether_grass_block')
            .inputFluids(['gtceu:aether_augmented_sediment 200', 'gtceu:aether_air 100'])
            .itemOutputs(`3x ${tree}_log`, '3x aether:golden_amber', '4x minecraft:stick')
            .chancedOutput(`${tree}_sapling`, 1000, 0)
            .duration(100)
            .EUt(GTValues.VA[GTValues.MV])
    } else {
        event.recipes.gtceu.arboreal_growth_facility(`${tree}_aether_sediment`)
            .notConsumable(`1x ${tree}_sapling`)
            .notConsumable('1x aether:aether_dirt')
            .inputFluids(['gtceu:aether_augmented_sediment 200', 'gtceu:aether_air 100'])
            .itemOutputs(`3x ${tree}_log`, '4x minecraft:stick')
            .chancedOutput(`${tree}_sapling`, 1000, 0)
            .duration(100)
            .EUt(GTValues.VA[GTValues.MV])
    }
   })
})