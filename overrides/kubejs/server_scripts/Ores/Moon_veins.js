GTCEuServerEvents.oreVeins(event => {

    event.add('kubejs:desh_vein', vein => vein
        .weight(20).clusterSize(30).density(0.2)
        .layer('moon_stone')
        .heightRangeUniform(30, 60)
        .layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('uraninite')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.get('desh')).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.get('luminite')).size(2, 3))
                .layer(l => l.weight(1).mat(GTMaterials.get('calcite')).size(1, 3))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('luminite'))
            .density(0.2)
            .radius(4)
        )
    )
    event.add('kubejs:lunar_rutile', vein => vein
        .weight(30).clusterSize(30).density(0.2)
        .layer('moon_stone')
        .heightRangeUniform(35, 50)
        .layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Bauxite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Ilmenite).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Hematite).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Bauxite).size(2, 3))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Bauxite)
            .density(0.2)
            .radius(4)
        )
    )
    event.add('kubejs:lunar_maganese', vein => vein
        .weight(30).clusterSize(30).density(0.2)
        .layer('moon_stone')
        .heightRangeUniform(20, 30)
        .layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Grossular).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Pyrolusite).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Tantalite).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.get('luminite')).size(1, 1))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Tantalite)
            .density(0.2)
            .radius(4)
        )
    )
    event.add('kubejs:pure_luminite', vein => vein
        .weight(15).clusterSize(25).density(0.2)
        .layer('moon_stone')
        .heightRangeUniform(20, 30)
        .layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(6).mat(GTMaterials.get('luminite')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.get('desh')).size(1, 2))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('luminite'))
            .density(0.2)
            .radius(4)
        )
    )
})
// GTCEuServerEvents.bedrockOreVeins(event => {
//     event.add("kubejs:deep_luminite",  vein => {
//       vein.weight(2000).size(2).yield(5,10).material(GTMaterials.get('luminite'),10).dimensions("ad_astra:moon");
//     })
//     event.add("kubejs:deep_illmenite",  vein => {
//         vein.weight(40).size(2).yield(5,10).material(GTMaterials.Ilmenite,10).dimensions("ad_astra:moon");
//       })
//   })


//ad_astra:moon