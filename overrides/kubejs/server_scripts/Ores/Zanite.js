GTCEuServerEvents.oreVeins(event => {
    event.add('kubejs:zanite', vein => {
        vein.layer('aether_islands')
        vein.weight(1)
        vein.clusterSize(69)
        vein.density(1)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(16, 128)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                // .layer(l => l.weight(3).mat(GTMaterials.get('zanite')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Gold).size(1, 3))
                .layer(l => l.weight(1).block(() => Block.getBlock('minecraft:oak_log')).size(1, 1))
                .layer(l => l.weight(1).state(() => Block.getBlock('minecraft:oak_planks').defaultBlockState()).size(1, 1))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Silver)
            .density(0.2)
            .radius(4)
        )
    })
    event.add('help:ilmenite_vein', vein => vein
    .weight(15).clusterSize(25).density(0.2)
    .layer('aether_islands')
    .heightRangeUniform(10, 70)
    .layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
            .layer(l => l.weight(3).mat(GTMaterials.Ilmenite).size(1, 2))
            .layer(l => l.weight(3).mat(GTMaterials.Olivine).size(1, 3))
            .layer(l => l.weight(2).mat(GTMaterials.Quartzite).size(2, 4))
            .layer(l => l.weight(1).block(() => Block.getBlock('minecraft:glowstone')).size(1, 1))
        )
    )
    .surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.Ilmenite)
        .density(0.5)
        .radius(3)
    )
)
})