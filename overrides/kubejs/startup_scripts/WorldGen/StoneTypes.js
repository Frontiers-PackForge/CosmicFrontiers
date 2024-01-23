let UtilsJS = Java.loadClass("dev.latvian.mods.kubejs.util.UtilsJS")

GTCEuStartupEvents.registry('gtceu:tag_prefix', e => {
    function createStoneTypeOre(type, properties) {
        if (properties === undefined)
            properties = {}

        if (properties.baseModel === undefined)
            properties.baseModel = type.namespace + ":block/" + type.path

        if (properties.material === undefined)
            properties.material = null

        if (properties.blockState === undefined)
            properties.blockState = (() => Block.getBlock(type).defaultBlockState())

        e.create(type.path, 'ore')
            .stateSupplier(properties.blockState)
            .baseModelLocation(properties.baseModel)
            .materialSupplier(properties.material)
            .unificationEnabled(true)
            .materialIconType(GTMaterialIconType.ore)
            .miningToolTag("mineable/pickaxe")
            .generationCondition(ItemGenerationCondition.hasOreProperty)
    }

    createStoneTypeOre('blue_skies:lunar_stone')
    createStoneTypeOre('blue_skies:umber')
    createStoneTypeOre('blue_skies:turquoise_stone')
    createStoneTypeOre('blue_skies:taratite')

    createStoneTypeOre('undergarden:depthrock')
    createStoneTypeOre('undergarden:shiverstone')
    createStoneTypeOre('undergarden:sediment')
    // createStoneTypeOre('aether_redux:vitrium')

    createStoneTypeOre('aether:holystone', { blockState: () => UtilsJS.parseBlockState("aether:holystone[double_drops=true]")})
    createStoneTypeOre('aether_redux:frosted_holystone', { blockState: () => UtilsJS.parseBlockState("aether_redux:frosted_holystone[double_drops=true]")})
    createStoneTypeOre('aether_redux:blightmoss_holystone', { blockState: () => UtilsJS.parseBlockState("aether_redux:blightmoss_holystone[double_drops=true]")})
    createStoneTypeOre('aether:mossy_holystone', { blockState: () => UtilsJS.parseBlockState("aether:mossy_holystone[double_drops=true]")})
    createStoneTypeOre('aether_redux:vitrium', { blockState: () => UtilsJS.parseBlockState("aether_redux:vitrium[double_drops=true]")})
    createStoneTypeOre('aether:icestone')

    createStoneTypeOre('ad_astra:moon_stone')
    createStoneTypeOre('ad_astra:mars_stone')
    createStoneTypeOre('ad_astra:venus_stone')
    createStoneTypeOre('ad_astra:mercury_stone')
    createStoneTypeOre('ad_astra:glacio_stone')

    createStoneTypeOre('create:asurine', { baseModel: 'create:block/asurine_natural_0' })
    createStoneTypeOre('create:crimsite', { baseModel: 'create:block/crimsite_natural_0' })
    createStoneTypeOre('create:limestone')
    createStoneTypeOre('create:ochrum', { baseModel: 'create:block/ochrum_natural_0' })
    createStoneTypeOre('create:scoria')
    createStoneTypeOre('create:scorchia')
    createStoneTypeOre('create:veridium', { baseModel: 'create:block/veridium_natural_0' })
})