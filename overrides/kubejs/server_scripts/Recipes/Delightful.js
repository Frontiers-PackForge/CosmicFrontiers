//A Simple "REMOVE AND HIDE" function akin to GroovyScript's Jei.yeet() function - This will tag the item for hiding from recipe viewers and remove the recipe
//This one also has a tag removal function to remove the forge:tools/knives tag from what is removed so bear that in mind if you copy/paste this around
let yeet = (itemName) => {
    ServerEvents.recipes(event => { 
        event.remove({ output: itemName })
      })
    ServerEvents.tags('item', event => {
        event.add('forge:viewers/hidden_from_recipe', itemName)
        event.remove('forge:tools/knives', itemName)
        event.remove('forge:tools/scavenging', itemName)
    })
}
yeet('farmersdelight:flint_knife');
yeet('farmersdelight:iron_knife');
yeet('farmersdelight:golden_knife');
yeet('farmersdelight:diamond_knife');
yeet('farmersdelight:netherite_knife');
yeet('delightful:gravitite_knife');
yeet('delightful:forgotten_knife');
yeet('delightful:stratus_knife');
yeet('delightful:terra_knife');
yeet('delightful:draco_arcanus_knife');
yeet('delightful:elementium_knife');
yeet('delightful:manasteel_knife');
yeet('delightful:zanite_knife');
yeet('delightful:skyroot_knife');
yeet('delightful:veridium_knife');
yeet('delightful:infused_veridium_knife');
yeet('delightful:skyjade_knife');
yeet('delightful:zinc_knife');
yeet('delightful:nickel_knife');
yeet('delightful:crystalline_knife');
yeet('delightful:cloggrum_knife');
yeet('delightful:froststeel_knife');
yeet('delightful:utherium_knife');
yeet('delightful:bronze_knife');
yeet('delightful:electrum_knife');
yeet('delightful:invar_knife');
yeet('delightful:lead_knife');
yeet('delightful:brass_knife');
yeet('delightful:silver_knife');
yeet('delightful:steel_knife');
yeet('delightful:tin_knife');
yeet('delightful:holystone_knife');
yeet('ends_delight:dragon_tooth_knife');
yeet('ends_delight:end_stone_knife');
yeet('ends_delight:purpur_knife');
yeet('ends_delight:dragon_egg_shell_knife');
yeet('delightful:sinisite_knife');
yeet('delightful:thyrium_knife');
yeet('delightful:onyx_knife');
yeet('delightful:adamantium_knife');
yeet('delightful:mythril_knife');
yeet('delightful:constantan_knife');
yeet('delightful:black_opal_knife');
yeet('delightful:copper_knife');
yeet('delightful:emerald_knife');
yeet('occultism:butcher_knife');
yeet('delightful:alf_knife');
yeet('delightful:necronium_knife');
yeet('delightful:gilded_netherite_knife');
yeet('delightful:rose_gold_knife');
yeet('delightful:soul_steel_knife');
yeet('delightful:stellium_knife');
yeet('delightful:kiwano_knife');
yeet('delightful:leaf_knife');
yeet('delightful:blazing_knife');
yeet('delightful:gilded_quartz_knife');
yeet('delightful:experience_knife');
yeet('delightful:warden_knife');
yeet('delightful:pendorite_knife');
yeet('delightful:living_knife');
yeet('delightful:steeleaf_knife');
yeet('delightful:knightmetal_knife');
yeet('delightful:ironwood_knife');
yeet('delightful:large_amethyst_knife');
yeet('delightful:netherite_opal_knife');
yeet('delightful:obsidian_infused_enderite_knife');
yeet('delightful:refined_obsidian_knife');
yeet('delightful:refined_glowstone_knife');
yeet('delightful:allthemodium_knife');
yeet('delightful:enderite_knife');
yeet('delightful:osmium_knife');
yeet('delightful:fiery_knife');
yeet('delightful:amethyst_knife');
yeet('delightful:lapis_lazuli_knife');
yeet('delightful:bone_knife');