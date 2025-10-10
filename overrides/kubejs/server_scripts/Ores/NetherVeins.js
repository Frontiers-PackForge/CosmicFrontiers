

GTCEuServerEvents.oreVeins(event => {

    event.add('kubejs:emberite_two', vein => vein
        .weight(40)
        .clusterSize(60)
        .density(0.2)
        .layer('netherrack')
        .heightRangeUniform(35, 50)
        .layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('emberite')).size(2, 4))
                .layer(l => l.weight(3).mat(GTMaterials.get('emberite')).size(1, 2))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('emberite'))
            .density(0.2)
            .radius(4)
        )
    )


    event.add('kubejs:nickel_vein_nether', vein => {
        vein.layer('netherrack')
        vein.weight(40)
        vein.clusterSize(60)
        vein.density(0.3)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(30, 70)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Garnierite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Nickel).size(1, 1))
                .layer(l => l.weight(2).mat(GTMaterials.Cobaltite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Pentlandite).size(1, 1))
            )
        )
            .surfaceIndicatorGenerator(indicator => indicator
                .surfaceRock(GTMaterials.Garnierite)
                .density(0.2)
                .radius(4)
            )
    })

})



//ad_astra:moon