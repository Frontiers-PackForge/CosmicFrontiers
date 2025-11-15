ServerEvents.recipes(event => {
    function filter_glyphs(glyph, item, xp) {
        event.remove(`toomanyglyphs:${glyph}`)
        event.recipes.ars_nouveau.glyph(
            `toomanyglyphs:${glyph}`,
            [
                "gtceu:item_filter",
                item
            ],
            xp
        )
    }
    
    filter_glyphs("glyph_filter_animal", "#forge:foods/meat", 27)
    filter_glyphs("glyph_filter_is_baby","malum:sacred_spirit", 55)
    filter_glyphs("glyph_filter_monster", "malum:wicked_spirit", 55)
    filter_glyphs("glyph_filter_living", "botania:livingwood_twig", 27)
    filter_glyphs("glyph_filter_entity", "gtceu:steel_nugget", 27)
    filter_glyphs("glyph_filter_block", "#forge:cobblestone", 27)
    filter_glyphs("glyph_filter_player", "occultism:spirit_attuned_gem", 27)

    // LOOK AT THIS WHILE REVIEWING!! if this is okay to be gated at LV, change this to a flawless emerald
    filter_glyphs("glyph_filter_item", "minecraft:emerald", 27)
    
    // black wool acts as a filter invert here
    event.remove("toomanyglyphs:glyph_filter_is_mature")
    event.recipes.ars_nouveau.glyph(
        "toomanyglyphs:glyph_filter_is_mature",
        [
            "gtceu:item_filter",
            "malum:sacred_spirit",
            "minecraft:black_wool",
        ],
        55
    )

    event.remove("toomanyglyphs:glyph_filter_living_not_monster")
    event.recipes.ars_nouveau.glyph(
        "toomanyglyphs:glyph_filter_living_not_monster",
        [
            "gtceu:item_filter",
            "malum:wicked_spirit",
            "minecraft:black_wool",
        ],
        55
    )

    event.remove("toomanyglyphs:glyph_filter_living_not_player")
    event.recipes.ars_nouveau.glyph(
        "toomanyglyphs:glyph_filter_living_not_player",
        [
            "gtceu:item_filter",
            "occultism:spirit_attuned_gem",
            "minecraft:black_wool",
        ],
        55
    )
    
    event.remove("ars_nouveau:glyph_aoe")
    event.recipes.ars_nouveau.glyph(
        "ars_nouveau:glyph_aoe",
        [
            "gtceu:lv_field_generator"
        ],
        55
    )

    event.remove("ars_nouveau:glyph_amplify")
    event.recipes.ars_nouveau.glyph(
        "ars_nouveau:glyph_amplify",
        [
            "gtceu:lv_field_generator"
        ],
        27
    )

    event.remove("ars_nouveau:glyph_amplify_two")
    event.recipes.ars_nouveau.glyph(
        "ars_nouveau:glyph_amplify_two",
        [
            "gtceu:mv_field_generator"
        ],
        55
    )

    event.remove("ars_nouveau:glyph_amplify_three")
    event.recipes.ars_nouveau.glyph(
        "ars_nouveau:glyph_amplify_three",
        [
            "gtceu:hv_field_generator"
        ],
        55
    )

    event.remove("ars_nouveau:glyph_pickup")
    event.recipes.ars_nouveau.glyph(
        "ars_nouveau:glyph_pickup",
        [
            "gtceu:tin_rotor",
            "gtceu:lv_electric_motor"
        ],
        27
    )

    event.remove("ars_nouveau:glyph_interact")
    event.recipes.ars_nouveau.glyph(
        "ars_nouveau:glyph_interact",
        [
            "ars_nouveau:manipulation_essence",
            "gtceu:lv_robot_arm"
        ],
        27
    )

    event.remove("ars_nouveau:glyph_crush")
    event.recipes.ars_nouveau.glyph(
        "ars_nouveau:glyph_crush",
        [
            "ars_nouveau:earth_essence",
            "gtceu:diamond_grinding_head"
        ],
        27
    )
})
