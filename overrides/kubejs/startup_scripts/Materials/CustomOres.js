GTCEuStartupEvents.registry("gtceu:material", event => {
    //Mercury Ores
    event.create("argyodite")
        .dust().ore()
        .color(0x7a3146).iconSet("dull")
        .components("6x silver", "germanium", "6x sulfur")
        .addOreByproducts("silver", "sulfur")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create("calaverite")
        .dust().ore()
        .color(0xc1aa82).iconSet("dull")
        .components("2x gold", "2x silver", "4x tellurium")
        .addOreByproducts("gold", "silver")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create("sylvanite")
        .dust().ore()
        .color(0x2d417a).iconSet("dull")
        .components("gold", "2x tellurium")
        .addOreByproducts("chalcopyrite", "silver")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    //Venus Ores 
    event.create("bismuthinite")
        .dust().ore()
        .color(0x077547).iconSet("rough")
        .components("2x bismuth", "3x sulfur")
        .addOreByproducts("chalcopyrite", "silver")

    event.create("hadalite")
        .dust().ore()
        .color(0x300173).iconSet("dull")
        .components("2x thallium", "3x sulfur", "4x obsidian")
        .addOreByproducts("sulfur", "obsidian")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create("naumannite")
        .dust().ore()
        .color(0x5f7013).iconSet("shiny")
        .components("2x silver", "selenium")
        .addOreByproducts("sulfur", "obsidian")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )
})