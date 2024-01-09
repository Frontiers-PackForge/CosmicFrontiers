GTCEuServerEvents.oreVeins(event => {
    event.modify("gtceu:redstone_vein", vein => {
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Redstone).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Chromite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Cinnabar).size(1, 1))
            )
        )

    })
    event.modify("gtceu:redstone_vein_ow", vein => {
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Redstone).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Chromite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Cinnabar).size(1, 1))
            )
        )

    })
})