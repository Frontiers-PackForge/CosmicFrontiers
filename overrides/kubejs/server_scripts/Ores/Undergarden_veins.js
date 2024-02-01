GTCEuServerEvents.oreVeins(event => {
    event.add('kubejs:cooperite_vein', vein => {
        vein.layer('undergarden')
        vein.weight(30)
        vein.clusterSize(30)
        vein.density(0.35)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(5, 40)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Cooperite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Barite).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Bornite).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Tantalite).size(1, 3))               
            )
        )
    })
    
})
// .layer(l => l.weight(3).mat(GTMaterials.get('ambrosium')).size(2, 4))
// .layer(l => l.weight(2).mat(GTMaterials.Quartzite).size(2, 4))