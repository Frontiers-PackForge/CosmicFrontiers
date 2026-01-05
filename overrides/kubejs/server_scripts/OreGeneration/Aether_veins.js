ServerEvents.registry('gtceu:ore_vein', event => {

    event.create('kubejs:zanite')
        .dimensions(['aether:the_aether'])
        .layer('aether_islands')
        .weight(60)
        .clusterSize(50)
        .density(0.55)
        .discardChanceOnAirExposure(1)
        .heightRangeUniform(16, 128)
        .layeredVeinGenerator(generator => {
            generator.withLayerPattern(pattern => {
                pattern.layer(l => l.weight(3).mat(GTMaterials.get('gtceu:zanite')).size(2, 4))
                pattern.layer(l => l.weight(2).mat(GTMaterials.Barite).size(1, 3))
                pattern.layer(l => l.weight(3).mat(GTMaterials.Trona).size(1, 3))
            })
        })
        .surfaceIndicatorGenerator(indicator => {
            indicator.surfaceRock(GTMaterials.get('gtceu:zanite'))
            indicator.density(0.2)
            indicator.radius(4)
        })
})
