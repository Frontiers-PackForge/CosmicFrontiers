

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
        .weight(30).clusterSize(35).density(0.2)
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
    event.add('kubejs:end_pitchblend', vein => vein
        .weight(50).clusterSize(60).density(1.5)
        .layer('endstone')
        .heightRangeUniform(15, 80)
        .veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Pitchblende, 4) 
            .oreBlock(GTMaterials.Pitchblende, 4) 
            .oreBlock(GTMaterials.Cobaltite, 2) 
            .rareBlock(GTMaterials.Uraninite, 2)
            .rareBlockChance(0.45)
            .veininessThreshold(0.1)
            .maxRichnessThreshold(0.7)
            .minRichness(0.7)
            .maxRichness(0.85)
            .edgeRoundoffBegin(5) 
            .maxEdgeRoundoff(0.2)
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Lithium)
            .density(0.2)
            .radius(4)
        )
    )
})



//ad_astra:moon