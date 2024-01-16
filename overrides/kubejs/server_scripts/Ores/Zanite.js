GTCEuServerEvents.oreVeins(event => {
    event.add('kubejs:zanite', vein => {
        vein.layer('aether_islands')
        vein.weight(9999)
        vein.clusterSize(69)
        vein.density(1)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(16, 128)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('zanite')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Gold).size(1, 1))
                .layer(l => l.weight(1).block(() => Block.getBlock('minecraft:oak_log')).size(1, 1))
                .layer(l => l.weight(1).state(() => Block.getBlock('minecraft:oak_planks').defaultBlockState()).size(1, 1))
            )
        )
    })
})