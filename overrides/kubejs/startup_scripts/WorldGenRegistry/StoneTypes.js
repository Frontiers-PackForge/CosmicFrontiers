StartupEvents.registry('gtceu:tag_prefix', e => {
    function asId(s) {
        s = String(s)
        let i = s.indexOf(':')
        return i >= 0 ? { namespace: s.substring(0, i), path: s.substring(i + 1) }
            : { namespace: 'minecraft', path: s }
    }

    function createStoneTypeOre(type, properties) {
        if (properties === undefined) properties = {}

        const id = asId(type)

        if (properties.baseModel === undefined)
            properties.baseModel = id.namespace + ":block/" + id.path

        if (properties.material === undefined)
            properties.material = null

        if (properties.blockState === undefined)
            properties.blockState = () => Block.getBlock(type).defaultBlockState()

        e.create(id.path, 'ore')
            .stateSupplier(properties.blockState)
            .baseModelLocation(properties.baseModel)
            .materialSupplier(properties.material)
            .unificationEnabled(true)
            .materialIconType(GTMaterialIconType.ore)
            .miningToolTag("minecraft:mineable/pickaxe")
            .generationCondition(ItemGenerationCondition.hasOreProperty)
    }

    // Sane Ores because apparently ore blocks need to be made esoteric in half of these mods.

    //Undergarden
    createStoneTypeOre('undergarden:depthrock')
    createStoneTypeOre('undergarden:shiverstone')
    createStoneTypeOre('undergarden:sediment')
    createStoneTypeOre('minecraft:soul_soil')


    createStoneTypeOre('cosmiccore:firmament_saprolite')
    createStoneTypeOre('cosmiccore:astral_regolith')

    // Create stones
    createStoneTypeOre('create:asurine', { baseModel: 'create:block/asurine_natural_0' })
    createStoneTypeOre('create:crimsite', { baseModel: 'create:block/crimsite_natural_0' })
    createStoneTypeOre('create:limestone')
    createStoneTypeOre('create:ochrum', { baseModel: 'create:block/ochrum_natural_0' })
    createStoneTypeOre('create:scoria')
    createStoneTypeOre('create:scorchia')
    createStoneTypeOre('create:veridium', { baseModel: 'create:block/veridium_natural_0' })
})
