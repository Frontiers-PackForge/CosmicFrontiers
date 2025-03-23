GTCEuServerEvents.oreVeins(event => {

    event.add('kubejs:mars_naq_vein', vein => vein
        .weight(20).clusterSize(30).density(0.3)
        .layer('mars_stone')
        .heightRangeUniform(20, 45)
        .layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('naquadric_metallic_powder')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Plutonium239).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Uranium238).size(2, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Uraninite).size(2, 3))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('naquadric_metallic_powder'))
            .density(0.2)
            .radius(4)
        )
    )
    event.add('kubejs:pure_ilmenite', vein => vein
        .weight(20).clusterSize(45).density(0.15)
        .layer('mars_stone')
        .heightRangeUniform(20, 45)
        .layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Rutile).size(1, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Ilmenite).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Bauxite).size(1, 3))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Rutile)
            .density(0.2)
            .radius(4)
        )
    )
    event.add('kubejs:rich_electrotine', vein => vein
        .weight(35).clusterSize(25).density(0.6)
        .layer('mars_stone')
        .heightRangeUniform(30, 65)
        .layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Electrotine).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Electrotine).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Cobaltite).size(2, 3))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Electrotine)
            .density(0.2)
            .radius(4)
        )
    )

    event.add('kubejs:tetrahedrite_vein_mars', vein => {
        vein.layer('moon_stone')
        vein.weight(40)
        vein.clusterSize(60)
        vein.density(0.35)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(16, 60)
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
   
})



//ad_astra:moon