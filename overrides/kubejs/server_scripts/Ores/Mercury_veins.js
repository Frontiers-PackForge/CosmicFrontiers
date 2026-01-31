GTCEuServerEvents.oreVeins(event => {

    // Mercury Uranium Vein - Fracture (radioactive geode)
    event.add('kubejs:mercury_uranium_vein', vein => {
        vein.weight(20).clusterSize(30).density(0.3)
        vein.layer('mercury_stone')
        vein.heightRangeUniform(20, 45)
        let gen = new FractureVeinGenerator()
            .oreBlock(GTMaterials.Uraninite, 3)
            .oreBlock(GTMaterials.Uranium238, 2)
            .shellRadius(11.0)
            .shellThickness(0.1)
            .spikeCount(8)
            .spikeLength(5.5)
        vein.generator(gen)
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Tetrahedrite)
            .density(0.2)
            .radius(4))
    })
})
