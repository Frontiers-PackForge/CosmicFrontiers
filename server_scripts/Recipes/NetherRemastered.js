ServerEvents.recipes(event => {
    event.recipes.gtceu.compressor('gtceu:nether_crystal_compressor') 
    .itemInputs(Item.of('waystones:warp_stone', '{Damage:0}'))
    .itemOutputs('nether_remastered:seal_crystal')
    .duration(800)
    .EUt(8);       
    event.recipes.gtceu.extractor('gtceu:shard_fragment_1') 
    .itemInputs('minecraft:echo_shard')
    .itemOutputs('nether_remastered:seal_piece_1')
    .duration(800)
    .EUt(8);  
    event.recipes.gtceu.extractor('gtceu:shard_fragment_2') 
    .itemInputs('minecraft:nautilus_shell')
    .itemOutputs('nether_remastered:seal_piece_2')
    .duration(800)
    .EUt(8);  
    event.recipes.gtceu.extractor('gtceu:shard_fragment_3') 
    .itemInputs('minecraft:decorated_pot_sherds')
    .itemOutputs('nether_remastered:seal_piece_3')
    .duration(800)
    .EUt(8);  
    event.recipes.gtceu.extractor('gtceu:shard_fragment_4') 
    .itemInputs('minecraft:heart_of_the_sea')
    .itemOutputs('nether_remastered:seal_piece_4')
    .duration(800)
    .EUt(8);
})