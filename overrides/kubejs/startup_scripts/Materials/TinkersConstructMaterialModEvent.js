
GTCEuStartupEvents.registry("gtceu:material", event => {
    //harvestSpeed, attackDamage, durability, harvestLevel   for reference - don't forget to ignore it in the config if you want to modify/include traits!
    $CosmicMaterials.Neutronite.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(8, 4, 512, 3).build()) 
})
