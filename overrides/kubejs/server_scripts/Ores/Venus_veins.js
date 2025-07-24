GTCEuServerEvents.oreVeins(event => {
    
    event.add('kubejs:venus_bismuth_vein', vein => vein
        .weight(20).clusterSize(30).density(0.3)
        .layer('venus_stone')
        .heightRangeUniform(20, 45)
        .layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.get('bismuthinite')).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.CassiteriteSand).size(2, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Cinnabar).size(2, 3))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Tetrahedrite)
            .density(0.2)
            .radius(4)
        )
    )

    event.add('kubejs:venus_hadalite_vein', vein => vein
        .weight(15).clusterSize(40).density(0.45)
        .layer('venus_stone')
        .heightRangeUniform(10, 30)
        .layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.get('wolframite')).size(3, 5))
                .layer(l => l.weight(1).mat(GTMaterials.get('hadalite')).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.get('scheelite')).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.get('calcite')).size(2, 3))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('hadalite'))
            .density(0.2)
            .radius(4)
        )
    )

    event.add('kubejs:purest_luminite', vein => vein
        .weight(15).clusterSize(40).density(0.45)
        .layer('venus_stone')
        .heightRangeUniform(10, 30)
        .layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.get('luminite')).size(3, 5))
                .layer(l => l.weight(1).mat(GTMaterials.get('desh')).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.get('basaltic_mineral_sand')).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.get('apatite')).size(2, 4))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('apatite'))
            .density(0.2)
            .radius(4)
        )
    )

    event.add('kubejs:naumannite', vein => vein
        .weight(15).clusterSize(40).density(0.45)
        .layer('venus_stone')
        .heightRangeUniform(10, 30)
        .layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.get('naumannite')).size(3, 5))
                .layer(l => l.weight(1).mat(GTMaterials.get('wulfenite')).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.get('lepidolite')).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.get('spodumene')).size(2, 4))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('naumannite'))
            .density(0.2)
            .radius(4)
        )
    )  

})

/* 

Bismuth Ore - Comes from tin bearing ores atm, but we can make it a vein and grant it a better yield with an ore.

Thallium Ore - From Hadalite, deeply buried and a rather tough material, prisma or vitrius may act as a good solvent

Selenium Ore - Maybe keep it a bit more simplistic, or a byproduct of the other ores and cut back on the new ore-types





*/