GTCEuServerEvents.oreVeins(event => {

    event.add('kubejs:mars_naq_vein', vein => vein
        .weight(20).clusterSize(30).density(0.2)
        .layer('mars_stone')
        .heightRangeUniform(20, 45)
        .layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('naquadric_metallic_powder')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Plutonium239).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Beryllium).size(2, 3))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('naquadric_metallic_powder'))
            .density(0.2)
            .radius(4)
        )
    )
    event.add('kubejs:mars_phosphor_vein', vein => vein
        .weight(30).clusterSize(30).density(0.2)
        .layer('moon_stone')
        .heightRangeUniform(35, 50)
        .layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.TricalciumPhosphate).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Pyrochlore).size(2, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Apatite).size(1, 3))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Pyrochlore)
            .density(0.2)
            .radius(4)
        )
    )
   
})



//ad_astra:moon