GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('flora_nurturer', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + " Flora Nurturer")
                .recipeType('flora_nurturer')
                .workableTieredHullRenderer('gtceu:block/machines/flora_nurturer')
        )
    event.create('nether_catalyzer', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + " Nether Catalyzer")
                .recipeType('nether_catalyzer')
                .workableTieredHullRenderer('gtceu:block/machines/nether_catalyzer')
        )
    event.create('laminator', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + " Laminator")
                .recipeType('laminator')
                .workableTieredHullRenderer('gtceu:block/machines/flora_nurturer')
        )
    event.create('aio_lithography_processor', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + " AIO Lithography Processor")
                .recipeType('aio_lithography_processor')
                .workableTieredHullRenderer('gtceu:block/machines/flora_nurturer')
        )
    event.create('mana_fluidizer', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + " Mana Fluidizer")
                .recipeType('mana_fluidizer')
                .workableTieredHullRenderer('gtceu:block/machines/mana_fluidizer')
        )
    event.create('spooling_machine', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + " Spooling Machine")
                .recipeType('spooling_machine')
                .workableTieredHullRenderer('gtceu:block/machines/spooling_machine')
        )
    event.create('chemical_dehydrator', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + " Flora Nurturer")
                .recipeType('chemical_dehydrator')
                .workableTieredHullRenderer('gtceu:block/machines/flora_nurturer')
        )
    event.create('meteor_recipe_dummy', 'simple')
        .tiers(GTValues.MAX)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + " Flora Nurturer")
                .recipeType('fake_meteor_ritual')
                .workableTieredHullRenderer('gtceu:block/machines/fake_meteor')
        )
    event.create('culinary_assembler', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + " Flora Nurturer")
                .recipeType('culinary_assembler')
                .workableTieredHullRenderer('gtceu:block/machines/flora_nurturer')
        )
    event.create('juicer', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + " Flora Nurturer")
                .recipeType('juicer')
                .workableTieredHullRenderer('gtceu:block/machines/spooling_machine')
        )
    event.create('fryer', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + " Flora Nurturer")
                .recipeType('fryer')
                .workableTieredHullRenderer('gtceu:block/machines/fryer')
        )
    event.create('slicer', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + " Flora Nurturer")
                .recipeType('slicer')
                .workableTieredHullRenderer('gtceu:block/machines/cutter')
        )

})
