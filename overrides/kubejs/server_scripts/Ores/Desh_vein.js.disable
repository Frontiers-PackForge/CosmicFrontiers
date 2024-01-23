GTCEuServerEvents.oreVeins(event => {

    event.add('kubejs:desh_vein', vein => vein
        .weight(30).clusterSize(30).density(0.2)
        .layer('aether_islands')
        .heightRangeUniform(30, 60)
        .layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).block(() => Block.getBlock('ad_astra:moon_ice_shard_ore')).size(2, 4))
                .layer(l => l.weight(2).block(() => Block.getBlock('ad_astra:moon_desh_ore')).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Silver).size(1, 3))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Silver)
            .density(0.2)
            .radius(4)
        )
    )
})

//ad_astra:moon