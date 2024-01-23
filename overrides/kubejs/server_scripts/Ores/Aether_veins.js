GTCEuServerEvents.oreVeins(event => {
    event.add('kubejs:zanite', vein => {
        vein.layer('aether_islands')
        vein.weight(30)
        vein.clusterSize(30)
        vein.density(0.35)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(16, 128)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('zanite')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Barite).size(1, 3))
                .layer(l => l.weight(3).mat(GTMaterials.Trona).size(1, 3))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('zanite'))
            .density(0.2)
            .radius(4)
        )
    })
    event.add('kubejs:ambrosium', vein => {
        vein.layer('aether_islands')
        vein.weight(30)
        vein.clusterSize(30)
        vein.density(0.35)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(16, 128)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('ambrosium')).size(2, 4))
                .layer(l => l.weight(3).mat(GTMaterials.Trona).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Sphalerite).size(1, 2))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('ambrosium'))
            .density(0.2)
            .radius(4)
        )
    })
    event.add('kubejs:tetrahedrite_vein_aether', vein => {
        vein.layer('aether_islands')
        vein.weight(40)
        vein.clusterSize(20)
        vein.density(0.45)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(16, 128)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Tetrahedrite).size(2, 4))
                .layer(l => l.weight(3).mat(GTMaterials.Copper).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Stibnite).size(1, 2))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Tetrahedrite)
            .density(0.2)
            .radius(4)
        )
    })

    event.add('kubejs:bauxite_vein_aether', vein => {
        vein.layer('aether_islands')
        vein.weight(55)
        vein.clusterSize(25)
        vein.density(0.45)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(16, 128)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Bauxite).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.get('alumina')).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Sphalerite).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Realgar).size(1, 2))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Bauxite)
            .density(0.2)
            .radius(4)
        )
    })
})
// .layer(l => l.weight(3).mat(GTMaterials.get('ambrosium')).size(2, 4))
// .layer(l => l.weight(2).mat(GTMaterials.Quartzite).size(2, 4))