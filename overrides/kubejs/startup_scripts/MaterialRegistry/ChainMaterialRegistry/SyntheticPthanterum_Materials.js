//Leaving Notes in this Material Document Because I basically am spitballing this as I go along.
//Also Includes Naquahine -> Rhenium Extraction Process, the problem is do i make players sacrifice the fuel-line or not for a resource????

StartupEvents.registry('gtceu:material', event => {
    event.create('gtceu:white_gold')
        .dust()
        .color(0xada9aa).secondaryColor(0xd1bd97).iconSet(GTMaterialIconSet.METALLIC)
        .blastTemp(3800)
        .flags(
            GTMaterialFlags.FORCE_GENERATE_BLOCK,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_RING,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_ROTOR,
            GTMaterialFlags.GENERATE_ROUND,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.IS_MAGNETIC
        )

    event.create('gtceu:rhenium_saturated_naquahine') // Naquahine will lose some of it's mass in trade off for literally manifesting Nqh
        .liquid()
        .color(0xbd3b17)
    event.create('gtceu:rhenium_rich_complex')
        .liquid()
        .color(0xc4735c)
    //For Sintering
    event.create('gtceu:vaporized_rhenium')
        .gas()
        .color(0xeddbc0)
    //Sintering Waste Product
    event.create('gtceu:rhenium_rich_slag')
        .dust()
        .color(0xebbe7c)
    //Base of all syhnthetic pthanterums
    event.create('gtceu:rhenium_sintered_white_gold')
        .ingot()
        .color(0xccb893)
    /*
    pthanterum is most likely a Gold-Platinum Composite based on Sandia Labs Research
    As a result to emulate the smoked coloring of Original pthanterum, we will subject the metal to
    A high temperature abrasion process to create a blackened surface
    */
    /*Proper pthanterum, A Composite Gold/Platinum Allow Reinforced with Rhenium for Stability
     Notable Usages of Synthetic pthanterum is cheap and resistant coatings to many machinable parts
     Must COAT materials with rhenium sintered white gold then 'sift' them with virtue essence to make parts "tempered"*/
    event.create('gtceu:synthetic_pthanterum')
        .dust()
        .ingot()
        .liquid()
        .color(0x6e3f4e).secondaryColor(0x5a5455).iconSet(GTMaterialIconSet.ROUGH)
        .blastTemp(5400)
        .flags(
            GTMaterialFlags.FORCE_GENERATE_BLOCK,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_RING,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_ROTOR,
            GTMaterialFlags.GENERATE_ROUND,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.IS_MAGNETIC
        )
    event.create('gtceu:nether_air_reaction_agent')
        .dust()
        .color(0x7186bf)
    //HSLA pthanterum - A Composite mix of Low Alloy Steel and Pure Synthetic pthanterum
    event.create('gtceu:high_strength_low_alloy_pthanterum')
        .dust()
        .ingot()
        .color(0x31292a).secondaryColor(0x802716).iconSet(GTMaterialIconSet.METALLIC)
    //VSN is used in the creation of digital Mana-based devices with a computer interface.
    //TODO ; Somatic Mana & The Mana-Simulator TierUp Device
    event.create('gtceu:vibrosomatic_sythetic_pthanterum')
        .gas()
        .dust()
        .color(0x31292a).secondaryColor(0x5a5455).iconSet(GTMaterialIconSet.DULL)
        .blastTemp(5400)
        .flags(
            GTMaterialFlags.FORCE_GENERATE_BLOCK,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_RING,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_ROTOR,
            GTMaterialFlags.GENERATE_ROUND,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.IS_MAGNETIC
        )

})


