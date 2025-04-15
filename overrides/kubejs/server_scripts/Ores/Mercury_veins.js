GTCEuServerEvents.oreVeins(event => {

    event.add('kubejs:mercury_uranium_vein', vein => vein
        .weight(20).clusterSize(30).density(0.3)
        .layer('mercury_stone')
        .heightRangeUniform(20, 45)
        .layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Uraninite).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Uranium238).size(2, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Uraninite).size(2, 3))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Tetrahedrite)
            .density(0.2)
            .radius(4)
        )
    )
      
})



//ad_astra:moon