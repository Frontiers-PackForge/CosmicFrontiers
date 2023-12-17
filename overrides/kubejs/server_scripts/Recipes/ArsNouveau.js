ServerEvents.recipes(event => {
	event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:sand",
            "minecraft:sand",
            "minecraft:sand",
            "minecraft:sand",
        ], // input items
	    "minecraft:gunpowder", // reagent
	    "minecraft:tnt", // output
	    1000, // source cost
	    // true // keep nbt of reagent, think like a smithing recipe
	);
})