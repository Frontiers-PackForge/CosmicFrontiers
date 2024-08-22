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
    event.modify("gtceu:copper_tin_vein", vein => {
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Chalcopyrite, 5)
            .oreBlock(GTMaterials.Zeolite, 2)
            .oreBlock(GTMaterials.Cassiterite, 2)
            .rareBlock(GTMaterials.Cinnabar, 1)
            .rareBlockChance(0.05)
            .veininessThreshold(0.01)
            .maxRichnessThreshold(0.375)
            .minRichness(0.8)
            .maxRichness(1.0)
            .edgeRoundoffBegin(3)
            .maxEdgeRoundoff(0.1))

    })
})