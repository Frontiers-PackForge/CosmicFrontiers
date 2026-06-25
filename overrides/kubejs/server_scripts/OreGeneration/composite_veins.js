GTCEuServerEvents.oreVeins(event => {
    CosmicOreVeins.beginRebuild()
    event.modifyAll((id, vein) => CosmicOreVeins.capture(id, vein))
    CosmicOreVeins.capturedBundles().forEach(bundle => {
        event.add('cosmiccore:' + bundle, dest => CosmicOreVeins.applyCaptured(dest, bundle))
    })
    event.removeAll((id, vein) => CosmicOreVeins.shouldRemove(id))
})
