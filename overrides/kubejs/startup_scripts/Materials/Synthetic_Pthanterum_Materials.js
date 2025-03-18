//Leaving Notes in this Material Document Because I basically am spitballing this as I go along.
//Also Includes Naquahine -> Rhenium Extraction Process, the problem is do i make players sacrifice the fuel-line or not for a resource????

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('white_gold')
        .dust()
        .color(0xada9aa).secondaryColor(0xd1bd97).iconSet(GTMaterialIconSet.SHINY)
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
    event.create('condensed_naquahine')
        .liquid()
    event.create('rhenium_saturated_naquahine') // Naquahine will lose some of it's mass in trade off for literally manifesting Nqh
        .liquid()
    event.create('rhenium_rich_complex')
        .liquid()
    //For Sintering
    event.create('vaporized_rhenium')
        .gas()
    //Sintering Waste Product
    event.create('rhenium_rich_slag')
        .dust()
    //Base of all syhnthetic pthanterums
    event.create('rhenium_sintered_white_gold')
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
    event.create('synthetic_pthanterum')
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
    /*
     Nether Air Reaction Agent is for Recycling Rhenium wastes from the end of the RhPtAu Reaction Process.
     Use Alongside a much higher temperature and atmosphere than the nether to make effective
    */
    event.create('nether_air_reaction_agent')
        .dust()
        .color(0x7186bf)
    //HSLA pthanterum - A Composite mix of Low Alloy Steel and Pure Synthetic pthanterum
    event.create('high_strength_low_alloy_pthanterum')
        .dust()
        .ingot()
        .color(0x31292a).secondaryColor(0x802716).iconSet(GTMaterialIconSet.SHINY)
    //VSN is used in the creation of digital Mana-based devices with a computer interface.
    //TODO ; Somatic Mana & The Mana-Simulator TierUp Device
    event.create('vibrosomatic_sythetic_pthanterum')
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


