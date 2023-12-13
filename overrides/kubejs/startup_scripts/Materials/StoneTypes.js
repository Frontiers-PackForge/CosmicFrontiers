GTCEuStartupEvents.registry('gtceu:tag_prefix', event => {
    event.create('holystone', 'ore')
              .stateSupplier(() => Block.getBlock('aether:holystone').defaultBlockState())
              .unificationEnabled(true)
              .materialIconType(GTMaterialIconType.ore)
              .generationCondition(ItemGenerationCondition.hasOreProperty)
  })

  // These are used in the server_scripts Ores