let voltages=['lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv', 'uhv', 'uev', 'uiv', 'uxv', 'opv'];
let gt_material=['wood', 'bronze', 'steel', 'aluminium', 'stainless_steel', 'gold', 'titanium', 'tungsten_steel'];
let chest_material=['dirt', 'copper', 'iron', 'gold', 'diamond', 'crystal', 'obsidian'];

ServerEvents.tags("item", event => {
    //Add more item for item p2p
    event.add("ae2:p2p_attunements/item_p2p_tunnel", [
        '/expatternprovider:.*(?:storage_bus)/',                                                                        //storage bus from EAE
        '/expatternprovider:.*(?:export_bus)/',                                                                         //export bus from EAE
        '/expatternprovider:.*(?:import_bus)/',                                                                         //import bus from EAE
        chest_material.map(material => 'ironchest:'+material+'_chest'),                                                 //iron chests
        chest_material.map(material => 'ironchest:trapped_'+material+'_chest'),
        '/expatternprovider:(?:ex_|over.*_)interface(?:_part)?/',                                                       //interface from EAE
        '/gtceu:(?!long).*(?:small)_item_pipe/',                                                                        //small item pipe from GT
        '/gtceu:(?!long).*(?:small).+_item_pipe/',
        '/gtceu:(?!long).*(?:normal)_item_pipe/',                                                                       //normal item pipe from GT
        '/gtceu:(?!long).*(?:normal).+_item_pipe/',
        '/gtceu:(?!long).*(?:large)_item_pipe/',                                                                        //large item pipe from GT
        '/gtceu:(?!long).*(?:large).+_item_pipe/',
        '/gtceu:(?!long).*(?:huge)_item_pipe/',                                                                         //huge item pipe from GT
        '/gtceu:(?!long).*(?:huge).+_item_pipe/',
        gt_material.map(material => 'gtceu:'+material+'_crate'),                                                        //crates from GT
        voltages.map(voltage => 'gtceu:'+voltage+'_super_chest'),                                                       //super chest from GT
        voltages.map(voltage => 'gtceu:'+voltage+'_quantum_chest')                                                      //quantum chest from GT
    ]);

    //Add more item for fluid p2p
    event.add("ae2:p2p_attunements/fluid_p2p_tunnel", [
        'gtceu:fluid_cell', 'gtceu:universal_fluid_cell',                                                               //fluid cell & universal fluid cell from GT
        gt_material.map(material => 'gtceu:'+material+'_fluid_cell'),                                                   //metal fluid cell from GT
        '/(?:gtceu|cosmiccore):(?!long).*(?:tiny)_fluid_pipe/',                                                         //tiny fluid pipe from GT & CC
        '/(?:gtceu|cosmiccore):(?!long).*(?:small)_fluid_pipe/',                                                        //small fluid pipe from GT & CC
        '/(?:gtceu|cosmiccore):(?!long).*(?:normal)_fluid_pipe/',                                                       //normal fluid pipe from GT & CC
        '/(?:gtceu|cosmiccore):(?!long).*(?:large)_fluid_pipe/',                                                        //large fluid pipe from GT & CC
        '/(?:gtceu|cosmiccore):(?!long).*(?:huge)_fluid_pipe/',                                                         //huge fluid pipe from GT & CC
        '/(?:gtceu|cosmiccore):(?!long).*(?:quadruple)_fluid_pipe/',                                                    //quadruple fluid pipe from GT & CC
        '/(?:gtceu|cosmiccore):(?!long).*(?:nonuple)_fluid_pipe/',                                                      //nonuple fluid pipe from GT & CC
        gt_material.map(material => 'gtceu:'+material+'_drum'),                                                         //drums from GT
        voltages.map(voltage => 'gtceu:'+voltage+'_super_tank'),                                                        //super tank from GT
        voltages.map(voltage => 'gtceu:'+voltage+'_quantum_tank')                                                       //quantum tank from GT
    ]);

    //Add more item for pattern p2p
    event.add("mae2:p2p_attunements/pattern_p2p_tunnel", [
        '/expatternprovider:ex.*provider(?:_part)?/'                                                                    //ex pattern provier from EAE
    ]);
});

    //Add Ember augment support for the CosmicCore chestplate
    event.add("embers:augmentables/tools_armors", ['/cosmiccore:.*chestplate/']);
    event.add("embers:augmentables", ['/cosmiccore:.*chestplate/']);
    event.add("embers:augmentables/armors", ['/cosmiccore:.*chestplate/']);
    event.add("embers:augmentables/armors/chestplates", ['/cosmiccore:.*chestplate/']);
})

