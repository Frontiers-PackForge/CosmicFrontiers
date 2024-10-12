LootJS.modifiers((event) => {
    // event.enableLogging();
});


LootJS.modifiers((event) => {
    event.addLootTypeModifier(LootType.ENTITY)
        .removeLoot("minecraft:bow")
        .removeLoot("minecraft:nether_star")
        .removeLoot("paraglider:heart_container")
        .removeLoot('nether_remastered:seal_piece_1')
        .removeLoot('nether_remastered:seal_piece_2')
        .removeLoot('nether_remastered:seal_piece_3')
        .removeLoot('nether_remastered:seal_piece_4')
        .removeLoot('nether_remastered:seal_crystal')
        .replaceLoot("minecraft:gold_ingot", LootEntry.of('gtceu:ash_dust').limitCount([1, 6]))
        .replaceLoot("minecraft:gold_nugget", LootEntry.of('gtceu:tiny_ash_dust').limitCount([1, 6]))
        .replaceLoot("minecraft:iron_ingot", LootEntry.of('gtceu:tiny_wrought_iron_dust').limitCount([1, 4]))
        .replaceLoot("minecraft:coal", LootEntry.of('gtceu:tiny_coal_dust').limitCount([1, 4]))
});
LootJS.modifiers((event) => {
    event.addLootTypeModifier(LootType.CHEST)
        .removeLoot('gtceu:bronze_ingot')
        .removeLoot('gtceu:steel_ingot')
        .removeLoot('botania:manasteel_ingot')
});