

GTCEuServerEvents.oreVeins(event => {

event.add('kubejs:embrite', vein => vein
        .weight(40).clusterSize(60).density(0.4)
        .layer('netherrack')
        .heightRangeUniform(10, 20)
        .layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('emberite')).size(3, 5))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('emberite'))
            .density(0.2)
            .radius(4)
        )
    )
})



//ad_astra:moon