GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    event.create('aether_islands')
        .targets('aether:holystone','aether_redux:frosted_holystone','aether_redux:blightmoss_holystone','aether:mossy_holystone','aether:icestone','aether_redux:vitrium')
        .dimensions('aether:the_aether') 
})
//,'aether_redux:frosted_holystone','aether_redux:blightmoss_holystone','aether:mossy_holystone'