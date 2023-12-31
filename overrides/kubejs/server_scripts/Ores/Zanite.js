GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:custom_vein", vein => {
        vein.clusterSize(40)
        vein.weight(200)
        vein.layer("aether_islands")
        vein.density(0.25)

        vein.addSpawnDimension("aether:aether")

        vein.heightRange({
            height: {
                type: "uniform",
                min_inclusive: {
                  absolute: 1
                },
                max_inclusive: {
                  absolute: 256
                }
            }
        })
        vein.discardChanceOnAirExposure(0)
        vein.generator({
            type: "gtceu:layer",
            layer_patterns: [
                [
                    {
                        targets: [
                            "zanite",
                            "zanite"
                        ],
                        min_size: 2,
                        max_size: 2,
                        weight: 3
                    },
                    {
                        targets: [
                            "zanite",
                            "zanite"
                        ],
                        min_size: 1,
                        max_size: 3,
                        weight: 1
                    }
                ]
            ]
        })
    })
})