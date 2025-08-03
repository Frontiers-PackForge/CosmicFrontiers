Platform.mods.kubejs.name = 'Cosmiccore'
function registerAntiblock(event, color, color_displayname) {
    event.create(`cosmiccore:antiblock_${color}`)
        .displayName(`${color_displayname} Antiblock`)
        .requiresTool()
        .soundType(SoundType.AMETHYST)
        .tagBlock('minecraft:mineable/pickaxe')
        .property(BlockProperties.LIT)
        .lightLevel(1.0)
}

StartupEvents.registry("block", event => {
    registerAntiblock(event, "black", "Black")
    registerAntiblock(event, "blue", "Blue")
    registerAntiblock(event, "brown", "Brown")
    registerAntiblock(event, "cyan", "Cyan")
    registerAntiblock(event, "green", "Green")
    registerAntiblock(event, "gray", "Gray")
    registerAntiblock(event, "lime", "Lime")
    registerAntiblock(event, "light_blue", "Light Blue")
    registerAntiblock(event, "light_gray", "Light Gray")
    registerAntiblock(event, "magenta", "Magenta")
    registerAntiblock(event, "orange", "Orange")
    registerAntiblock(event, "purple", "Purple")
    registerAntiblock(event, "red", "Red")
    registerAntiblock(event, "white", "White")
    registerAntiblock(event, "yellow", "Yellow")
    registerAntiblock(event, "pink", "Pink")


})
// StartupEvents.registry('block', event => {
//     event.create('prismatic_tungsten_coil_block', 'gtceu:coil').renderType("cutout_mipped")
//         .temperature(4500)
//         .level(4)
//         .energyDiscount(2) // 
//         .tier(5)
//         .coilMaterial(() => GTMaterials.get('prismatic_tungsten'))
//         .texture('gtceu:block/casings/coils/prismatic_tungsten_coil')
//         .hardness(5)
//         .requiresTool(true)
//         .soundType(SoundType.NETHERITE_BLOCK)
//         .tagBlock('forge:mineable/wrench')
// })