

GTCEuServerEvents.oreVeins(event => {

    // event.add('kubejs:end_moly', vein => vein
    //     .weight(30).clusterSize(30).density(0.2)
    //     .layer('endstone')
    //     .heightRangeUniform(30, 60)
    //     .layeredVeinGenerator(generator => generator
    //         .buildLayerPattern(pattern => pattern
    //             .layer(l => l.weight(3).mat(GTMaterials.get('Wulfenite')).size(2, 4))
    //             .layer(l => l.weight(2).mat(GTMaterials.get('Molybdenite')).size(1, 1))
    //             .layer(l => l.weight(1).mat(GTMaterials.get('Molybdenum')).size(1, 1))
    //             .layer(l => l.weight(1).mat(GTMaterials.get('Powellite')).size(1, 1))
    //         )
    //     )
    //     .surfaceIndicatorGenerator(indicator => indicator
    //         .surfaceRock(GTMaterials.get('Wulfenite'))
    //         .density(0.2)
    //         .radius(4)
    //     )
    // )




    event.add('kubejs:end_tungsten', vein => vein
        .weight(30).clusterSize(66).density(0.2)
        .layer('endstone')
        .heightRangeUniform(15, 80)
        .layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('wolframite')).size(3, 4))
                .layer(l => l.weight(2).mat(GTMaterials.get('scheelite')).size(2, 3))
                .layer(l => l.weight(1).mat(GTMaterials.get('tungstate')).size(3, 3))
                .layer(l => l.weight(1).mat(GTMaterials.get('lithium')).size(2, 3))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Lithium)
            .density(0.2)
            .radius(4)
        )
    )
})



//ad_astra:moon