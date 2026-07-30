ServerEvents.tags('item', event => {
    const strip = function (tag) {
        for (let i = 1; i < arguments.length; i++) event.remove(tag, arguments[i])
        for (let i = 1; i < arguments.length; i++) event.add('c:hidden_from_recipe_viewers', arguments[i])
    }

    strip('c:plates',
        'create:iron_sheet', 'create:copper_sheet', 'create:brass_sheet', 'create:golden_sheet',
        'create:sturdy_sheet',
        'createdeco:zinc_sheet', 'createdeco:andesite_sheet', 'createdeco:industrial_iron_sheet',
        'createmetallurgy:obdurium_sheet', 'createmetallurgy:tungsten_sheet', '#c:plates/dwarven_mithril')
    strip('c:dusts',
        'createmetallurgy:copper_dust', 'createmetallurgy:gold_dust', 'createmetallurgy:iron_dust',
        'createmetallurgy:tungsten_dust', 'createmetallurgy:zinc_dust',
        'ae2:certus_quartz_dust', 'ae2:ender_dust',
        '#c:dusts/netherite_scrap', '#c:dusts/end_stone')

    strip('c:ingots/brass', 'create:brass_ingot')
    strip('c:nuggets/brass', 'create:brass_nugget')


    strip('c:plates/iron', 'create:iron_sheet', 'embers:iron_plate')
    strip('c:plates/copper', 'create:copper_sheet', 'embers:copper_plate')
    strip('c:plates/brass', 'create:brass_sheet')
    strip('c:plates/gold', 'create:golden_sheet')
    strip('c:plates/zinc', 'createdeco:zinc_sheet')
    strip('c:plates/tungsten', 'createmetallurgy:tungsten_sheet')
    strip('c:plates/lead', 'embers:lead_plate')
    strip('c:plates/silver', 'embers:silver_plate')

    strip('c:dusts/iron', 'occultism:iron_dust', 'enderio:powdered_iron', 'neovitae:iron_dust')
    strip('c:dusts/gold', 'occultism:gold_dust', 'enderio:powdered_gold', 'neovitae:gold_dust')
    strip('c:dusts/copper', 'occultism:copper_dust', 'enderio:powdered_copper', 'neovitae:copper_dust')
    strip('c:dusts/tungsten', 'createmetallurgy:tungsten_dust')
    strip('c:dusts/zinc', 'createmetallurgy:zinc_dust')
    strip('c:dusts/tin', 'enderio:powdered_tin')
    strip('c:dusts/silver', 'occultism:silver_dust')
    strip('c:dusts/lapis', 'occultism:lapis_dust', 'enderio:powdered_lapis_lazuli')
    strip('c:dusts/obsidian', 'occultism:obsidian_dust', 'enderio:powdered_obsidian', 'create:powdered_obsidian')
    strip('c:dusts/coal', 'enderio:powdered_coal', 'neovitae:coal_dust')
    strip('c:dusts/ender_pearl', 'enderio:powdered_ender_pearl', 'ae2:ender_dust')
    strip('c:dusts/certus_quartz', 'ae2:certus_quartz_dust')
    strip('c:dusts/amethyst', 'occultism:amethyst_dust')
    strip('c:dusts/emerald', 'occultism:emerald_dust')
    strip('c:dusts/calcite', 'occultism:crushed_calcite')
    strip('c:dusts/blackstone', 'occultism:crushed_blackstone')
    strip('c:dusts/netherite', 'occultism:netherite_dust')
    strip('c:dusts/sulfur', 'neovitae:sulfur')
    strip('c:dusts/saltpeter', 'neovitae:saltpeter', 'eternal_starlight:saltpeter_powder')
    strip('c:dusts/salt', 'expandeddelight:salt')
    strip('c:dusts/ash', 'embers:ash')

    strip('c:ingots/silver', 'embers:silver_ingot', 'occultism:silver_ingot')
    strip('c:ingots/zinc', 'create:zinc_ingot')
    strip('c:ingots/lead', 'embers:lead_ingot')
    strip('c:ingots/titanium_alloy', 'rocketnautics:titanium_alloy')
    strip('c:nuggets/titanium', 'rocketnautics:titanium_nugget')
    strip('c:nuggets/titanium_alloy', 'rocketnautics:titanium_alloy_nugget')
    strip('c:plates/titanium', 'rocketnautics:titanium_sheet')
    strip('c:plates/titanium_alloy', 'rocketnautics:titanium_alloy_sheet')
    strip('c:raw_materials/titanium', 'rocketnautics:raw_titanium')
    strip('c:storage_blocks/raw_titanium', 'rocketnautics:raw_titanium_block')
    strip('c:storage_blocks/titanium', 'rocketnautics:titanium_block')
    strip('c:storage_blocks/titanium_alloy', 'rocketnautics:titanium_alloy_block')
    strip('create:crushed_raw_materials', 'rocketnautics:crushed_raw_titanium')
})

ServerEvents.tags('item', event => {
    GTRegistries.MATERIALS.forEach(mat => {
        event.add('farmersdelight:tools/knives', [`gtceu:${mat.name}_knife`])
        event.add('occultism:tools/knife', [`gtceu:${mat.name}_knife`])
    })
})
ServerEvents.tags('block', event => {
    event.add('minecraft:logs', 'malum:runewood_log')
    event.add('minecraft:logs', 'malum:exposed_runewood_log')
})