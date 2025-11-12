ServerEvents.tags("item", event =>{
    //Add Ember augment support for the CosmicCore chestplate
    event.add("embers:augmentables/tools_armors", [
        '/cosmiccore:.*chestplate/'
    ]);
    event.add("embers:augmentables", [
        '/cosmiccore:.*chestplate/'
    ]);
    event.add("embers:augmentables/armors", [
        '/cosmiccore:.*chestplate/'
    ]);
    event.add("embers:augmentables/armors/chestplates", [
        '/cosmiccore:.*chestplate/'
    ]);
})