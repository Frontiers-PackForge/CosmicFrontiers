GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('nether_brick_dust')
        .dust() 
        .color(0x511515)
        event.create('zanite')
        .ingot()
        .ore()
        .color(0xa521fc).iconSet(GTMaterialIconSet.DIAMOND)

})