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

    event.create("vamerite")
        .dust().ore()
        .color(0xc1aa82).iconSet("dull")
        .components("2x naquadria_sulfate", "gold", "silver")
        .addOreByproducts("gold", "silver")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )



    event.create("nebrudite")
        .dust().ore()
        .color(0x6B3FE6).secondaryColor(0x2A174D).iconSet("shiny")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )


    event.create("phyllosite")
        .dust().ore()
        .color(0x88E27C).secondaryColor(0x3F7A33).iconSet("diamond")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create("plasmoriene")
        .dust().ore()
        .color(0xF7AEFC).secondaryColor(0x813FA1).iconSet("metallic")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create("gravitine")
        .dust().ore()
        .color(0x7AA0FF).secondaryColor(0x2E406D).iconSet("dull")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create("kynasium")
        .dust().ore()
        .color(0x5F9B60).secondaryColor(0x304A33).iconSet("metallic")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create("flumuexien")
        .dust().ore()
        .color(0x4EE6E3).secondaryColor(0x177B78).iconSet("diamond")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create("tritenel")
        .dust().ore()
        .color(0xE4E8F7).secondaryColor(0x9FA8D1).iconSet("dull")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create("ignaphelite")
        .dust().ore()
        .color(0xFF8430).secondaryColor(0xA43B00).iconSet("metallic")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create("solventime")
        .dust().ore()
        .color(0x68C28A).secondaryColor(0x2B5E46).iconSet("fine")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create("alcarioum")
        .dust().ore()
        .color(0xF2CA5B).secondaryColor(0xB17A26).iconSet("diamond")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create("orasmium")
        .dust().ore()
        .color(0xE0D7F9).secondaryColor(0xA799E6).iconSet("metallic")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )
    event.create("chromiatum")
        .dust().ore()
        .color(0x9AD4FF).secondaryColor(0x356D9C).iconSet("fine")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create("eversalts")
        .dust().ore()
        .color(0xE9FAFF).secondaryColor(0x97B6C0).iconSet("dull")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create("xeomutithe")
        .dust().ore()
        .color(0xB76CF2).secondaryColor(0x452076).iconSet("metallic")
        .flags(
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )
})