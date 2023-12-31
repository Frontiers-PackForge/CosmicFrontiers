GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('nether_brick_dust')
        .dust() 
        .color(0x511515)
        event.create('zanite')
        .gem()
        .ore()
        .color(0xa521fc).iconSet(GTMaterialIconSet.DIAMOND)
//nether materials, no ore veins yet
    event.create('cincinnasite')
    .ingot()
    .ore()
    .color(0xeebb63).iconSet(GTMaterialIconSet.SHINY)
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD)
    

    event.create('nether_ruby')
    .gem()
    .ore()
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD)
    .color(0x9f0b21).iconSet(GTMaterialIconSet.RUBY)

})
