MoreJSEvents.registerPotionBrewing((event) => {
    event.removeByPotion("minecraft:awkward", "minecraft:magma_cream","minecraft:fire_resistance");
    event.addPotionBrewing("minecraft:packed_ice", "minecraft:awkward", "minecraft:fire_resistance");

});
//aquamirae:wisteria_niveis