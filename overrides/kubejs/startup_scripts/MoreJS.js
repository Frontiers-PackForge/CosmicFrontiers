MoreJSEvents.registerPotionBrewing((event) => {
    event.removeByPotion("minecraft:awkward", "minecraft:magma_cream","minecraft:fire_resistance");
    event.addPotionBrewing("aquamirae:wisteria_niveis", "minecraft:awkward", "minecraft:fire_resistance");

});
