// GTCEuStartupEvents.registry('gtceu:tag_prefix', event => {
//     event.create('holystone', 'ore')
//         .stateSupplier(() => Block.getBlock('aether:holystone').defaultBlockState())
//         .unificationEnabled(true)
//         .materialIconType(GTMaterialIconType.ore)
//         .generationCondition(ItemGenerationCondition.hasOreProperty)
//     event.create('frosted_holystone', 'ore')
//         .stateSupplier(() => Block.getBlock('aether_redux:frosted_holystone').defaultBlockState())
//         .unificationEnabled(true)
//         .materialIconType(GTMaterialIconType.ore)
//         .generationCondition(ItemGenerationCondition.hasOreProperty)
//     event.create('blightmoss_holystone', 'ore')
//         .stateSupplier(() => Block.getBlock('aether_redux:blightmoss_holystone').defaultBlockState())
//         .unificationEnabled(true)
//         .materialIconType(GTMaterialIconType.ore)
//         .generationCondition(ItemGenerationCondition.hasOreProperty)
//     event.create('mossy_holystone', 'ore')
//         .stateSupplier(() => Block.getBlock('aether:mossy_holystone').defaultBlockState())
//         .unificationEnabled(true)
//         .materialIconType(GTMaterialIconType.ore)
//         .generationCondition(ItemGenerationCondition.hasOreProperty)
// })

// These are used in the server_scripts Ores
// aether:holystone 'aether_redux:frosted_holystone' 'aether_redux:blightmoss_holystone' 'aether:mossy_holystone'

// GTCEuStartupEvents.registry('gtceu:tag_prefix', e => {
//         e.create('holystone', 'ore') // 
//             .stateSupplier(() => Block.getBlock('aether:holystone').defaultBlockState()) // 
//             .unificationEnabled(true)
//             .materialIconType(GTMaterialIconType.ore)
//             .generationCondition(ItemGenerationCondition.hasOreProperty)
// })


GTCEuStartupEvents.registry('gtceu:tag_prefix', event => {
    let stoneTypes = [
        'aether:holystone', 'aether_redux:frosted_holystone', 'aether_redux:blightmoss_holystone', 'aether:mossy_holystone',
        'ad_astra:moon_stone'
    ]

    stoneTypes.forEach(type => {
        event.create(type.split(':')[1], 'ore')
            .stateSupplier(() => Block.getBlock(type).defaultBlockState())
            .unificationEnabled(true)
            .materialIconType(GTMaterialIconType.ore)
            .generationCondition(ItemGenerationCondition.hasOreProperty)
    })
})